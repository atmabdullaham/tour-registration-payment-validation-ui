import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../config/theme";

const brand = {
  primary: colors.primary[500],
  primaryDark: colors.primary[700],
  primarySoft: colors.primary[50],
  accent: colors.accent[500],
};

const RegisterEnd = () => {
  const navigate = useNavigate();
  const [registrationActive, setRegistrationActive] = useState(false);

  // Check if registration is still active
  // You can update this date as needed
  const registrationDeadline = new Date("2026-06-20T23:59:59").getTime();

  useEffect(() => {
    const checkRegistrationStatus = () => {
      const now = new Date().getTime();
      setRegistrationActive(now < registrationDeadline);
    };

    checkRegistrationStatus();
    const interval = setInterval(checkRegistrationStatus, 1000);

    return () => clearInterval(interval);
  }, [registrationDeadline]);

  if (registrationActive) {
    return (
      <div
        className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
        style={{
          background: `linear-gradient(180deg, ${brand.primarySoft} 0%, #ffffff 100%)`,
        }}
      >
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              নিবন্ধন করুন
            </h1>
            <p className="text-lg text-slate-600">
              এই প্রোগ্রামে অংশগ্রহণ করতে আপনার তথ্য সংরক্ষণ করুন
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="flex-1 sm:flex-none px-8 py-3 rounded-lg font-semibold border-2 border-slate-300 text-slate-900 hover:bg-slate-100 transition-all"
            >
              ← হোমে ফিরুন
            </button>
            <button
              onClick={() => navigate("/registration")}
              className="flex-1 sm:flex-none px-8 py-3 rounded-lg font-semibold text-white transition-all"
              style={{
                background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primaryDark} 100%)`,
              }}
            >
              নিবন্ধন ফর্ম পূরণ করুন →
            </button>
          </div>

          {/* Important Notice */}
          <div className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-500 rounded">
            <p className="text-amber-900 font-semibold mb-2">
              ⚠️ গুরুত্বপূর্ণ:
            </p>
            <ul className="text-amber-800 text-sm space-y-1 list-disc list-inside">
              <li>সমস্ত তথ্য সঠিকভাবে পূরণ করুন</li>
              <li>সেন্ডমানি ট্রানজেকশন আইডি নিশ্চিত করুন</li>
              <li>ইমেল ঠিকানা যাচাই করুন - এতে গুরুত্বপূর্ণ বার্তা পাবেন</li>
              <li>ফর্ম জমা দেওয়ার পর 1-2 দিনের মধ্যে যোগাযোগ পাবেন</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Registration has ended
  return (
    <div
      className=" flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: `linear-gradient(180deg, ${brand.primarySoft} 0%, #ffffff 100%)`,
      }}
    >
      <div className="mx-auto max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 sm:p-12 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-red-50">
              <svg
                className="h-12 w-12 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            নিবন্ধন সমাপ্ত
          </h1>

          {/* Contact Section */}

          {/* Action Button */}
          <button
            onClick={() => navigate("/")}
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-white transition-all"
            style={{
              background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primaryDark} 100%)`,
            }}
          >
            ← হোমে ফিরুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterEnd;
