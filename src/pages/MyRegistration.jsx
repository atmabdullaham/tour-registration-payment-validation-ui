import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaPhoneAlt,
  FaSchool,
  FaSearch,
  FaShieldAlt,
  FaTimesCircle,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const STATUS_CONFIG = {
  accepted: {
    icon: FaCheckCircle,
    ring: "ring-emerald-400/30",
    glow: "shadow-emerald-500/20",
    gradient: "from-emerald-500 to-teal-600",
    surface: "from-emerald-50 to-teal-50/80",
    badge: "bg-emerald-500",
    text: "text-emerald-800",
    title: "কনফার্মড",
    subtitle: "Confirmed",
    desc: "অভিনন্দন! রেজিস্ট্রেশন কনফার্মড।",
    pulse: false,
  },
  rejected: {
    icon: FaTimesCircle,
    ring: "ring-rose-400/30",
    glow: "shadow-rose-500/20",
    gradient: "from-rose-500 to-red-600",
    surface: "from-rose-50 to-red-50/80",
    badge: "bg-rose-500",
    text: "text-rose-800",
    title: "বাতিল",
    subtitle: "Rejected",
    desc: "পেমেন্ট তথ্যে অমিল পাওয়া গেছে। হেল্পলাইনে যোগাযোগ করুন।",
    pulse: false,
  },
  pending: {
    icon: FaClock,
    ring: "ring-amber-400/30",
    glow: "shadow-amber-500/20",
    gradient: "from-amber-400 to-orange-500",
    surface: "from-amber-50 to-orange-50/80",
    badge: "bg-amber-500",
    text: "text-amber-900",
    title: "পেন্ডিং",
    subtitle: "Under Review",
    desc: "যাচাই চলছে। শীঘ্রই স্ট্যাটাস আপডেট হবে।",
    pulse: true,
  },
};

const maskPhone = (phone) =>
  phone.length >= 7 ? `${phone.slice(0, 3)}••••${phone.slice(-3)}` : phone;

const MyRegistration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const [searchedPhone, setSearchedPhone] = useState("");
  const axiosPublic = useAxiosPublic();

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
    setPhoneNumber(digits);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const phoneRegex = /^01[0-9]{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast.error("অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন");
      return;
    }

    try {
      setLoading(true);
      setRegistrationData(null);

      const response = await axiosPublic.get(
        `/registration/phone/${phoneNumber}`,
      );
      if (response.data?.success && response.data?.data) {
        setRegistrationData(response.data.data);
        setSearchedPhone(phoneNumber);
        toast.success("রেজিস্ট্রেশন পাওয়া গেছে!");
      } else {
        toast.error("কোনো রেজিস্ট্রেশন পাওয়া যায়নি");
      }
    } catch (err) {
      const errMsg =
        err.response?.data?.message ||
        "সার্চ করার সময় কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const statusKey =
    registrationData?.registration_status?.toLowerCase() || "pending";
  const status = STATUS_CONFIG[statusKey] || STATUS_CONFIG.pending;
  const StatusIcon = status.icon;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-brand-light/40 via-white to-slate-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-brand-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[radial-gradient(#173083_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Hero */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-sm">
            <FaShieldAlt className="text-brand-secondary" />
            Secure Status Check
          </span>
          <h1 className="mt-5 text-3xl font-black leading-tight text-brand-primary sm:text-4xl">
            আমার রেজিস্ট্রেশন
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            রেজিস্ট্রেশনের সময় ব্যবহৃত মোবাইল নম্বর দিয়ে আপনার স্ট্যাটাস, নাম ও
            প্রতিষ্ঠানের তথ্য দেখুন।
          </p>
        </div>

        {/* Search card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl shadow-brand-primary/5 backdrop-blur-sm sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-[#0b1a4a] text-white shadow-lg shadow-brand-primary/25">
              <FaPhoneAlt className="text-sm" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">নম্বর দিয়ে খুঁজুন</h2>
              <p className="text-xs text-slate-500">উদাহরণ: 018XXXXXXXX</p>
            </div>
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-brand-primary/50">
                <FaPhoneAlt />
              </span>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="01XXXXXXXXX"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="h-14 w-full rounded-2xl border-2 border-slate-100 bg-slate-50/80 pl-11 pr-4 text-lg font-bold tracking-wider text-slate-800 outline-none transition-all placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-400 focus:border-brand-secondary/50 focus:bg-white focus:ring-4 focus:ring-brand-secondary/10"
                required
              />
              {phoneNumber.length > 0 && (
                <span className="absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-400">
                  {phoneNumber.length}/11
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || phoneNumber.length !== 11}
              className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-primary to-[#0b1a4a] text-base font-bold text-white shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-primary/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  খোঁজা হচ্ছে...
                </>
              ) : (
                <>
                  <FaSearch />
                  স্ট্যাটাস দেখুন
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Steps hint */}
          {!registrationData && (
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-slate-100 pt-6 sm:gap-4">
              {[
                { step: "১", label: "নম্বর দিন" },
                { step: "২", label: "সার্চ করুন" },
                { step: "৩", label: "স্ট্যাটাস দেখুন" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl bg-brand-light/60 px-2 py-3 text-center"
                >
                  <span className="text-lg font-black text-brand-primary">
                    {item.step}
                  </span>
                  <p className="mt-0.5 text-[10px] font-semibold text-slate-600 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Result card */}
        {registrationData && (
          <div className="mt-8 transition-all duration-500 ease-out">
            {/* Status hero */}
            <div
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${status.surface} p-6 shadow-lg ${status.glow} ring-1 ${status.ring} sm:p-8`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/40 blur-2xl" />

              <div className="relative flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-6">
                <div
                  className={`relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${status.gradient} text-white shadow-lg ${status.pulse ? "animate-pulse" : ""}`}
                >
                  <StatusIcon className="text-3xl" />
                  {status.pulse && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-amber-400/30" />
                  )}
                </div>

                <div className="mt-4 flex-1 sm:mt-0">
                  <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center">
                    <span
                      className={`inline-flex items-center rounded-full ${status.badge} px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm`}
                    >
                      {status.title}
                    </span>
                    <span
                      className={`text-sm font-semibold ${status.text} opacity-70`}
                    >
                      {status.subtitle}
                    </span>
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${status.text}`}>
                    {status.desc}
                  </p>
                  {searchedPhone && (
                    <p className="mt-2 text-xs text-slate-500">
                      নম্বর:{" "}
                      <span className="font-mono font-bold text-slate-700">
                        {maskPhone(searchedPhone)}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Applicant info */}
            <div className="mt-4 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md">
              <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  সংক্ষিপ্ত তথ্য
                </h3>
              </div>

              <div className="grid gap-px bg-slate-100 sm:grid-cols-2">
                <div className="flex items-start gap-4 bg-white p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <FaUser className="text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      নাম
                    </p>
                    <p className="mt-1 truncate text-lg font-bold text-slate-900">
                      {registrationData.name_en}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
                    <FaSchool className="text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      শিক্ষা প্রতিষ্ঠান
                    </p>
                    <p className="mt-1 text-lg font-bold leading-snug text-slate-900">
                      {registrationData.institution_name}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => {
                  setRegistrationData(null);
                  setSearchedPhone("");
                }}
                className="text-sm font-semibold text-brand-primary transition-colors hover:text-brand-secondary"
              >
                ← অন্য নম্বর দিয়ে খুঁজুন
              </button>

              {statusKey === "rejected" && (
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-accent/10 px-4 py-2 text-sm font-bold text-brand-accent transition-colors hover:bg-brand-accent/20"
                >
                  হেল্পলাইনে যোগাযোগ
                  <FaArrowRight className="text-xs" />
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Empty state illustration */}
        {!registrationData && !loading && (
          <div className="mt-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-light">
              <FaSearch className="text-xl text-brand-primary/40" />
            </div>
            <p className="mt-4 text-sm text-slate-500">
              এখনো কোনো ফলাফল নেই — উপরে নম্বর দিয়ে সার্চ করুন
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRegistration;
