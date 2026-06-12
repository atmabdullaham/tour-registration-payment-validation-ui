import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaUser,
  FaSchool,
  FaGraduationCap,
  FaIdCard,
  FaTshirt,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";

const MyRegistration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const axiosPublic = useAxiosPublic();

  const handleSearch = async (e) => {
    e.preventDefault();

    // Validate phone number format (11 digits, starts with 01)
    const phoneRegex = /^01[0-9]{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast.error("অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন");
      return;
    }

    try {
      setLoading(true);
      setRegistrationData(null);

      const response = await axiosPublic.get(`/registration/phone/${phoneNumber}`);
      if (response.data?.success && response.data?.data) {
        setRegistrationData(response.data.data);
        toast.success("রেজিস্ট্রেশন পাওয়া গেছে!");
      } else {
        toast.error("কোনো রেজিস্ট্রেশন পাওয়া যায়নি");
      }
    } catch (err) {
      console.error(err);
      const errMsg = err.response?.data?.message || "সার্চ করার সময় কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "accepted":
        return {
          icon: <FaCheckCircle className="text-emerald-500 text-2xl" />,
          bgColor: "bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800",
          badgeColor: "bg-emerald-500 text-white",
          title: "কনফার্মড (Confirmed)",
          desc: "অভিনন্দন! আপনার পেমেন্ট যাচাই করা হয়েছে এবং রেজিস্ট্রেশন নিশ্চিত করা হয়েছে।"
        };
      case "rejected":
        return {
          icon: <FaTimesCircle className="text-rose-500 text-2xl" />,
          bgColor: "bg-rose-50 border-l-4 border-rose-500 text-rose-800",
          badgeColor: "bg-rose-500 text-white",
          title: "বাতিল (Rejected)",
          desc: "দুঃখিত! আপনার দেওয়া পেমেন্ট তথ্যে কোনো অমিল রয়েছে। অনুগ্রহ করে হেল্পলাইনে যোগাযোগ করুন।"
        };
      case "pending":
      default:
        return {
          icon: <FaClock className="text-amber-500 text-2xl" />,
          bgColor: "bg-amber-50 border-l-4 border-amber-500 text-amber-800",
          badgeColor: "bg-amber-500 text-white",
          title: "পেন্ডিং (Pending)",
          desc: "আপনার পেমেন্ট বর্তমানে যাচাই করা হচ্ছে। ম্যানুয়াল রিভিউ শেষ হলে স্ট্যাটাস নিশ্চিত করা হবে।"
        };
    }
  };

  const statusInfo = registrationData ? getStatusBadge(registrationData.registration_status) : null;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Top Announcement Banner */}


        {/* Search Bar Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
            আপনার রেজিস্ট্রেশন স্ট্যাটাস সার্চ করুন
          </h3>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <FaPhoneAlt className="text-sm" />
              </span>
              <input
                type="text"
                placeholder="রেজিস্টার্ড মোবাইল নম্বর দিন (উদা: 018XXXXXXXX)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input input-bordered w-full pl-10 h-12 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-800"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn h-12 px-8 font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(135deg, #173083 0%, #0b1a4a 100%)`,
              }}
            >
              {loading ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                  খোঁজা হচ্ছে...
                </>
              ) : (
                <>
                  <FaSearch className="mr-2" />
                  সার্চ করুন
                </>
              )}
            </button>
          </form>
        </div>

        {/* Result Card */}
        {registrationData && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md transition duration-300">
            {/* Card Header with Status */}
            <div className={`p-6 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${statusInfo.bgColor}`}>
              <div className="flex items-center gap-3">
                {statusInfo.icon}
                <div>
                  <h4 className="font-bold text-lg text-slate-800">
                    রেজিস্ট্রেশন স্ট্যাটাস:
                  </h4>
                  <span className={`inline-block px-3 py-1 mt-1 rounded-full text-xs font-bold ${statusInfo.badgeColor}`}>
                    {statusInfo.title}
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 max-w-sm">
                {statusInfo.desc}
              </p>
            </div>

            {/* Registration Details Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              <h4 className="text-md font-bold text-slate-400 uppercase tracking-wider border-b pb-2">
                আবেদনকারীর তথ্য
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaUser className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">নাম (English)</p>
                      <p className="text-sm font-bold text-slate-800">{registrationData.name_en}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaGraduationCap className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">গ্রুপ</p>
                      <p className="text-sm font-bold text-slate-800 capitalize">{registrationData.group}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaIdCard className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">SSC রোল ও রেজি নম্বর</p>
                      <p className="text-sm font-bold text-slate-800">
                        রোল: {registrationData.ssc_exam_roll} | রেজি: {registrationData.ssc_regi_number}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaSchool className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">শিক্ষা প্রতিষ্ঠান</p>
                      <p className="text-sm font-bold text-slate-800">{registrationData.institution_name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaTshirt className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">টি-শার্ট সাইজ</p>
                      <p className="text-sm font-bold text-slate-800 uppercase">{registrationData.tshirt_size}</p>
                    </div>
                  </div>
                </div>

                {/* Payment & Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaMoneyBillWave className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Bkash/Nagad ট্রানজেকশন আইডি</p>
                      <p className="text-sm font-mono font-bold text-blue-600">{registrationData.transaction_Id}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">ফি পাঠানোর নম্বর</p>
                      <p className="text-sm font-mono font-bold text-slate-800">{registrationData.sendmoney_number}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">যোগাযোগের নম্বর (ফোন ও হোয়াটসঅ্যাপ)</p>
                      <p className="text-sm font-bold text-slate-800">
                        মোবাইল: {registrationData.phone_number} {registrationData.whatsapp_number && `| WhatsApp: ${registrationData.whatsapp_number}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">বর্তমান ঠিকানা</p>
                      <p className="text-sm font-medium text-slate-700">
                        {registrationData.present_area ? `${registrationData.present_area}, ${registrationData.present_thana}, ${registrationData.present_zilla}` : "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">স্থায়ী ঠিকানা</p>
                      <p className="text-sm font-medium text-slate-700">
                        {registrationData.permanent_area ? `${registrationData.permanent_area}, ${registrationData.permanent_thana}, ${registrationData.permanent_zilla}` : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MyRegistration;
