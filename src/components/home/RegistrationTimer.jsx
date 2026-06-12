import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const toBanglaNumber = (number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaDigits[digit])
    .join("");
};

const RegistrationTimer = () => {
  const [enrollmentEnd] = useState(new Date("2026-06-18T11:59:59"));
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = enrollmentEnd - currentTime;

  let timeLeft;
  if (diff <= 0) {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  } else {
    timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const banglaLabels = ["দিন", "ঘণ্টা", "মিনিট", "সেকেন্ড"];

  // Gifts & Treats ডেটা অ্যারে
  const gifts = [
    "Premium T-shirt",
    "Evening snacks + Grand Dinner",
    "Free Rides",
    "Cultural Evening",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-brand-light/30">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch md:w-10/12 mx-auto py-4 md:py-12 h-full gap-4 md:gap-8">
        {/* Poster Info Section */}
        <div className="w-full h-full flex flex-col justify-center pb-4 md:pb-0 px-1 md:px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-brand-primary">
            <h3 className="text-brand-secondary text-lg font-bold tracking-widest uppercase mb-1">
              The Next Chapter
            </h3>
            <h1 className="text-3xl md:text-5xl font-black text-brand-primary mb-6">
              Beyond SSC'26
            </h1>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-brand-accent/10 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Venue:</h4>
                  <p className="text-gray-600">
                    Foy's Lake Concord Amusement World
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-brand-secondary/10 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-brand-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Date & Time:</h4>
                  <p className="text-gray-600">
                    24th JUNE 2026, Reporting Time: 2.30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* নতুন যুক্ত করা Gifts & Treats সেকশন */}
            <div className="mb-6 bg-slate-50 border border-slate-100 rounded-xl p-4">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span>🎁</span> Gifts & Treats
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {gifts.map((gift, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-emerald-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{gift}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-primary text-white p-4 rounded-xl flex justify-between items-center mb-6">
              <div>
                <span className="block text-sm opacity-80">Reg. Fee</span>
                <span className="text-2xl font-bold">500 BDT</span>
              </div>
              <div className="text-right">
                <span className="block text-sm opacity-80">Eligibility</span>
                <span className="font-medium text-sm">
                  Male Students
                  <br />
                  (Chattogram Metro Only)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="flex flex-col items-center justify-center gap-6 w-full h-full px-4">
          <div className="text-center w-full">
            <h2 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">
              রেজিস্ট্রেশনের সময় বাকি
            </h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full mb-8"></div>
          </div>

          {/* Timer */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 w-full justify-center">
            {["days", "hours", "minutes", "seconds"].map((key, index) => {
              const value = timeLeft[key];
              return (
                <div key={key} className="flex flex-col items-center">
                  <div className="bg-white shadow-lg shadow-brand-secondary/20 border border-brand-secondary/10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl mb-3">
                    <span className="text-brand-primary font-black text-2xl sm:text-3xl md:text-4xl">
                      {toBanglaNumber(String(value).padStart(2, "0"))}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-600">
                    {banglaLabels[index]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Enrollment Dates */}
          <div className="text-gray-600 space-y-2 mt-6 bg-white py-3 px-6 rounded-lg shadow-sm border border-gray-100 w-full text-center">
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-brand-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                ডেডলাইন:{" "}
                <strong className="text-brand-accent text-lg">
                  ১৮ জুন ২০ ২৬
                </strong>
              </span>
            </div>
          </div>

          {/* Button */}
          <Link to={"/registration"} className="mt-4 w-full sm:w-auto">
            <button className="w-full bg-brand-accent hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-brand-accent/30 transition-all transform hover:-translate-y-1">
              রেজিস্ট্রেশন করুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTimer;
