import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shibir-logo.png";

const toBanglaNumber = (number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaDigits[digit])
    .join("");
};

const RegistrationTimer = () => {
  const [enrollmentEnd] = useState(new Date("2026-06-20T23:59:59"));
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
    "আকর্ষণীয় টি-শার্ট",
    "স্ন্যাক্স + মধ্যাহ্নভোজ",
    "ফ্রি রাইড",
    "মনোজ্ঞ সাংস্কৃতিক আয়োজন",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-brand-light/20 via-brand-light/50 to-brand-light/20 py-8 md:py-16">
      {/* Decorative background elements for premium feel */}
      <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-brand-secondary/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:w-10/12 mx-auto px-4 md:px-0 gap-8 md:gap-12 relative z-10">
        {/* Poster Info Section */}
        <div className="w-full flex flex-col justify-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_-15px_rgba(23,48,131,0.15)] border border-brand-primary/10 p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_-15px_rgba(23,48,131,0.2)] hover:border-brand-primary/20">
            {/* Top Tagline */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-brand-secondary uppercase">
                  THE NEXT CHAPTER
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-brand-primary tracking-tight">
                  Beyond SSC'26
                </h1>
              </div>

            </div>

            {/* Megaphone Warning Banner (সময় পরিবর্তন) */}
            <div className="mb-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-accent/5 via-brand-accent/10 to-transparent p-4 border border-brand-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-brand-accent text-white p-2.5 rounded-xl shadow-lg shadow-brand-accent/25 animate-bounce">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-black text-brand-accent tracking-wide leading-none">
                    সময় পরিবর্তন
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold mt-1">
                    বিশেষ নোটিশ
                  </p>
                </div>
              </div>
              <div className="bg-brand-primary text-white text-center py-2.5 px-4 rounded-xl font-black shadow-md shadow-brand-primary/20 tracking-wide text-base">
                উপস্থিতির সময়: সকাল ১০:০০ টা
              </div>
            </div>

            {/* Venue & Date Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Venue */}
              <div className="bg-brand-light/40 border border-brand-light p-4 rounded-2xl flex gap-3 transition-all duration-200 hover:bg-brand-light/75">
                <div className="bg-brand-accent/10 p-2.5 rounded-xl h-fit text-brand-accent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-extrabold uppercase">
                    স্থান
                  </span>
                  <h4 className="font-bold text-gray-800 text-sm leading-snug mt-0.5">
                    ফয়'স লেক কনকর্ড অ্যামিউজমেন্ট ওয়ার্ল্ড
                  </h4>
                </div>
              </div>

              {/* Date */}
              <div className="bg-brand-light/40 border border-brand-light p-4 rounded-2xl flex gap-3 transition-all duration-200 hover:bg-brand-light/75">
                <div className="bg-brand-primary/10 p-2.5 rounded-xl h-fit text-brand-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-extrabold uppercase">
                    তারিখ
                  </span>
                  <h4 className="font-bold text-gray-800 text-sm leading-snug mt-0.5">
                    ২৪শে জুন ২০২৬
                  </h4>
                  <span className="text-[10px] text-brand-primary font-bold mt-0.5">
                    তারিখ অপরিবর্তিত
                  </span>
                </div>
              </div>
            </div>

            {/* Gifts & Treats */}
            <div className="mb-6 bg-slate-50 border border-slate-100/80 rounded-2xl p-4 pt-5 relative">
              <div className="absolute -top-3 left-4 bg-brand-secondary text-white text-[10px] font-black px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
                তোমাদের জন্য আরো যা যা থাকছে
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                {gifts.map((gift, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-slate-700 font-bold group transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full transition-all group-hover:bg-emerald-500 group-hover:text-white">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{gift}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee & Registration Info Box */}
            <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-4 space-y-3.5">
              {/* Deadline extended notice */}
              <div className="flex items-center gap-2 bg-brand-accent/5 border border-brand-accent/15 p-2.5 rounded-xl text-brand-accent text-xs sm:text-sm font-black leading-snug shadow-sm">
                <span className="text-base animate-pulse">📅</span>
                <span>
                  রেজিস্ট্রেশনের সময় ২ দিন বৃদ্ধি করা হয়েছে
                </span>
              </div>

              {/* BDT and entry info */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-gradient-to-r from-brand-primary to-brand-primary/90 text-white p-4 rounded-xl shadow-lg shadow-brand-primary/15">
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-secondary font-black uppercase tracking-wider">
                    রেজিস্ট্রেশন ফি
                  </span>
                  <span className="text-3xl font-black text-white mt-0.5">
                    ৩৫০৳{" "}
                    <span className="text-xs font-semibold text-brand-light/80 ml-1">
                      মাত্র
                    </span>
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full bg-white/80 backdrop-blur-md border border-brand-primary/5 shadow-[0_20px_50px_-15px_rgba(23,48,131,0.1)] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center gap-8 relative overflow-hidden">
            {/* Top title */}
            <div className="text-center w-full">
              <h2 className="text-xl sm:text-2xl font-black text-brand-primary tracking-wide">
                রেজিস্ট্রেশনের সময় বাকি
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent mx-auto rounded-full mt-3"></div>
            </div>

            {/* Timer Grid */}
            <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-md justify-center">
              {["days", "hours", "minutes", "seconds"].map((key, index) => {
                const value = timeLeft[key];
                return (
                  <div key={key} className="flex flex-col items-center group">
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-light flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl mb-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_40px_rgba(0,163,223,0.15)] group-hover:border-brand-secondary/30 relative overflow-hidden">
                      {/* Ambient background glow inside cards */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-light/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-brand-primary font-black text-2xl sm:text-3xl md:text-4xl relative z-10">
                        {toBanglaNumber(String(value).padStart(2, "0"))}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-gray-500 transition-colors group-hover:text-brand-secondary">
                      {banglaLabels[index]}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Enrollment Deadline Banner */}
            <div className="text-gray-600 bg-brand-light/30 py-3 px-6 rounded-2xl border border-brand-light/50 w-full max-w-sm text-center shadow-sm">
              <div className="flex items-center justify-center gap-2.5">
                <div className="text-brand-accent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-bold text-sm text-gray-700">
                  ডেডলাইন:{" "}
                  <strong className="text-brand-accent text-lg font-black ml-0.5">
                    ২০ জুন, ২০২৬
                  </strong>
                </span>
              </div>
            </div>

            {/* Button */}
            <Link to={"/registration"} className="w-full sm:w-auto mt-2">
              <button className="w-full sm:w-auto px-12 py-4 rounded-2xl bg-gradient-to-r from-brand-accent to-[#b8000c] hover:from-[#b8000c] hover:to-brand-accent text-white font-black text-lg shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 cursor-pointer">
                রেজিস্ট্রেশন করুন
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTimer;
