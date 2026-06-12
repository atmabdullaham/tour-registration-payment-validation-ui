import { Image, ImageKitProvider } from "@imagekit/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RegistrationTable = ({ status }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [searchTransactionId, setSearchTransactionId] = useState("");
  const [searchSendmoneyNumber, setSearchSendmoneyNumber] = useState("");
  const [appliedTransactionId, setAppliedTransactionId] = useState("");
  const [appliedSendmoneyNumber, setAppliedSendmoneyNumber] = useState("");
  const [isUpdating, setIsUpdating] = useState(null);
  const [isDeleting, setIsDeleting] = useState(null);

  const {
    data: registrations,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "admin",
      "registrations",
      status,
      appliedTransactionId,
      appliedSendmoneyNumber,
      user?.email,
    ],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (appliedTransactionId)
        params.append("transaction_id", appliedTransactionId);
      if (appliedSendmoneyNumber)
        params.append("sendmoney_number", appliedSendmoneyNumber);

      const res = await axiosSecure.get(
        `/admin/registrations/${status}?${params}`,
      );
      return res.data?.data || [];
    },
    enabled: !!user?.email,
  });

  const handleSearch = () => {
    setAppliedTransactionId(searchTransactionId);
    setAppliedSendmoneyNumber(searchSendmoneyNumber);
  };

  const handleStatusChange = async (registrationId, newStatus) => {
    try {
      setIsUpdating(registrationId);
      await axiosSecure.patch(`/admin/registrations/${registrationId}/status`, {
        status: newStatus,
      });

      toast.success(`Status updated to ${newStatus}`);
      queryClient.invalidateQueries({
        queryKey: ["admin", "registrations"],
      });
      queryClient.invalidateQueries({
        queryKey: ["admin", "statistics"],
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error updating status");
    } finally {
      setIsUpdating(null);
    }
  };

  const handleDelete = async (registrationId) => {
    if (!window.confirm("Are you sure you want to delete this registration?"))
      return;

    try {
      setIsDeleting(registrationId);
      await axiosSecure.delete(`/admin/registrations/${registrationId}`);

      toast.success("Registration deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["admin", "registrations"],
      });
      queryClient.invalidateQueries({
        queryKey: ["admin", "statistics"],
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error deleting registration");
    } finally {
      setIsDeleting(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>Error loading registrations: {error.message}</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search by Transaction ID
          </label>
          <input
            type="text"
            placeholder="Enter Transaction ID"
            value={searchTransactionId}
            onChange={(e) => setSearchTransactionId(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search by Send Money Number
          </label>
          <input
            type="text"
            placeholder="Enter Send Money Number"
            value={searchSendmoneyNumber}
            onChange={(e) => setSearchSendmoneyNumber(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="flex gap-2">
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
        <button
          onClick={() => {
            setSearchTransactionId("");
            setSearchSendmoneyNumber("");
            setAppliedTransactionId("");
            setAppliedSendmoneyNumber("");
          }}
          className="btn btn-outline"
        >
          Clear
        </button>
      </div>

      {/* Result Count */}
      <p className="text-sm text-gray-600">
        Found{" "}
        <span className="font-semibold">{registrations?.length || 0}</span>{" "}
        registration(s)
      </p>

      {/* Table */}
      {registrations && registrations.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left">Name / Institution</th>
                <th className="text-left">SSC Roll & Reg</th>
                <th className="text-left">Group</th>
                <th className="text-center">T-Shirt</th>
                <th className="text-left">Payment Details</th>
                <th className="text-left">Contact Info</th>
                <th className="text-left">Address (Present / Permanent)</th>
                <th className="text-center">Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg) => (
                <tr key={reg._id} className="hover:bg-gray-50">
                  <td>
                    <div className="font-semibold text-gray-900">
                      {reg.name_en || reg.name_bn || "N/A"}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {reg.institution_name || "N/A"}
                    </div>
                  </td>
                  <td>
                    <div className="text-sm font-medium text-gray-800">
                      Roll: <span className="font-mono text-xs">{reg.ssc_exam_roll || "N/A"}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Reg: <span className="font-mono">{reg.ssc_regi_number || "N/A"}</span>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-sm badge-outline capitalize">
                      {reg.group || "N/A"}
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="font-bold uppercase text-gray-700">
                      {reg.tshirt_size || "N/A"}
                    </span>
                  </td>
                  <td>
                    <div className="text-xs space-y-1">
                      <div>
                        TxID: <span className="font-mono font-semibold text-blue-600">{reg.transaction_Id}</span>
                      </div>
                      <div>
                        From: <span className="font-mono text-gray-600">{reg.sendmoney_number}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-xs space-y-1">
                      <div>
                        Phone: <span className="font-mono">{reg.phone_number}</span>
                      </div>
                      <div>
                        WA: <span className="font-mono">{reg.whatsapp_number || "N/A"}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-xs space-y-1 max-w-[200px] whitespace-normal">
                      <div>
                        <span className="font-semibold text-gray-500">Pres: </span>
                        {reg.present_area ? `${reg.present_area}, ${reg.present_thana}, ${reg.present_zilla}` : "N/A"}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-500">Perm: </span>
                        {reg.permanent_area ? `${reg.permanent_area}, ${reg.permanent_thana}, ${reg.permanent_zilla}` : "N/A"}
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="badge badge-lg"
                      data-theme={getStatusTheme(status)}
                    >
                      {status}
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="flex gap-2 justify-center flex-wrap">
                      {status === "pending" && (
                        <>
                          <button
                            onClick={() =>
                              handleStatusChange(reg._id, "accepted")
                            }
                            disabled={isUpdating === reg._id}
                            className="btn btn-xs btn-success"
                            title="Accept"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() =>
                              handleStatusChange(reg._id, "rejected")
                            }
                            disabled={isUpdating === reg._id}
                            className="btn btn-xs btn-error"
                            title="Reject"
                          >
                            ✗
                          </button>
                        </>
                      )}

                      {(status === "accepted" || status === "rejected") && (
                        <button
                          onClick={() => handleStatusChange(reg._id, "pending")}
                          disabled={isUpdating === reg._id}
                          className="btn btn-xs btn-warning"
                          title="Revert to Pending"
                        >
                          ↶
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(reg._id)}
                        disabled={isDeleting === reg._id}
                        className="btn btn-xs btn-outline btn-error ml-2"
                        title="Delete"
                      >
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No registrations found</p>
        </div>
      )}
    </div>
  );
};

const getStatusTheme = (status) => {
  switch (status) {
    case "pending":
      return "warning";
    case "accepted":
      return "success";
    case "rejected":
      return "error";
    default:
      return "neutral";
  }
};

export default RegistrationTable;
