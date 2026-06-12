import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const DashboardStatistics = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: stats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admin", "statistics", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/statistics");
      return res.data?.data;
    },
    enabled: !!user?.email,
  });

  // Accepted-only statistics for t-shirt size, permanent union, combined stats, and member/associate
  const { data: acceptedStats, isLoading: acceptedStatsLoading } = useQuery({
    queryKey: ["admin", "statistics", "accepted", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/statistics?status=accepted");
      return res.data?.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading || acceptedStatsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>Error loading statistics: {error.message}</span>
      </div>
    );
  }

  if (!stats) return null;

  console.log("Stats data:", stats);
  console.log("Accepted stats data:", acceptedStats);

  return (
    <div className="space-y-8">
      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Registrations"
          value={stats?.statusCounts?.total ?? 0}
          bgColor="bg-blue-50"
          textColor="text-blue-600"
        />
        <StatCard
          title="Pending"
          value={stats?.statusCounts?.pending ?? 0}
          bgColor="bg-yellow-50"
          textColor="text-yellow-600"
        />
        <StatCard
          title="Accepted"
          value={stats?.statusCounts?.accepted ?? 0}
          bgColor="bg-green-50"
          textColor="text-green-600"
        />
        <StatCard
          title="Rejected"
          value={stats?.statusCounts?.rejected ?? 0}
          bgColor="bg-red-50"
          textColor="text-red-600"
        />
      </div>

      {/* Academic Group Stats */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          একাডেমিক গ্রুপ পরিসংখ্যান (Accepted)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-blue-300 text-center shadow-sm">
            <p className="text-blue-700 text-sm font-semibold mb-2">বিজ্ঞান (Science)</p>
            <p className="text-3xl font-bold text-blue-600">{acceptedStats?.science || 0}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-300 text-center shadow-sm">
            <p className="text-blue-700 text-sm font-semibold mb-2">ব্যবসায় শিক্ষা (Commerce)</p>
            <p className="text-3xl font-bold text-blue-600">{acceptedStats?.commerce || 0}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-300 text-center shadow-sm">
            <p className="text-blue-700 text-sm font-semibold mb-2">মানবিক (Arts)</p>
            <p className="text-3xl font-bold text-blue-600">{acceptedStats?.arts || 0}</p>
          </div>
        </div>
      </div>

      {/* T-Shirt Size Breakdown */}
      {acceptedStats?.tshirtSizeCounts &&
        Object.keys(acceptedStats.tshirtSizeCounts).length > 0 && (
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">
              টি-শার্ট সাইজ
              {acceptedStats.tshirtSizeTotal !== undefined ? ` (Total: ${acceptedStats.tshirtSizeTotal})` : ""}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(acceptedStats.tshirtSizeCounts).map(
                ([size, count]) => (
                  <div
                    key={size}
                    className="bg-white p-4 rounded-lg border border-indigo-300 hover:shadow-md transition text-center animate-fadeIn"
                  >
                    <p className="text-indigo-600 text-sm font-semibold mb-2 uppercase">
                      {size}
                    </p>
                    <p className="text-3xl font-bold text-indigo-900">
                      {count}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        )}
    </div>
  );
};

const StatCard = ({ title, value, bgColor, textColor }) => (
  <div
    className={`${bgColor} p-6 rounded-lg border border-gray-200 hover:shadow-lg transition`}
  >
    <p className="text-gray-600 text-sm mb-2">{title}</p>
    <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
  </div>
);



export default DashboardStatistics;
