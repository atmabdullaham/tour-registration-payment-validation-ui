import { Link } from "react-router-dom";

const EventDetails = () => {
  const eventInfo = {
    title: "THE NEXT CHAPTER",
    subtitle: "Beyond SSC'26",
    bannerUrl: "https://ik.imagekit.io/atm/next_chapter_2026.jpg",
    venue: "Foy's Lake Concord Amusement World",
    date: "24th June 2026",
    reportingTime: "2:30 PM",
    regFee: "500 BDT",
    deadline: "18 June 2026",
    eligibility: "Male Students (Chattogram Metro Area Only)",
    giftsAndTreats: [
      "Premium T-shirt",
      "Evening snacks + Grand Dinner",
      "Free Rides",
      "Cultural Evening",
    ],
    organizer: "Bangladesh Islami Chhatrashibir",
    branch: "Chattogram City North",
  };

  return (
    <div className="min-h-screen bg-slate-50 py-4 px-1 md:px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl  overflow-hidden border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* বাম পাশ: ইমেজ/ব্যানার সেকশন */}
          <div className="lg:col-span-5 bg-slate-900 relative min-h-[400px] lg:min-h-full">
            <img
              src={eventInfo.bannerUrl}
              alt={`${eventInfo.title} Poster`}
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            {/* মোবাইল ভিউতে ইমেজের ওপর হালকা ওভারলে ইফেক্ট */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent lg:hidden" />
          </div>

          {/* ডান পাশ: ইভেন্ট ডিটেইলস কন্টেন্ট */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            {/* হেডার ও অর্গানাইজেশন */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {eventInfo.branch}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {eventInfo.title}
              </h1>
              <p className="text-xl font-medium text-rose-600 mt-1 italic">
                {eventInfo.subtitle}
              </p>

              <hr className="my-6 border-slate-100" />

              {/* মূল তথ্যাবলী (গ্রিড লেআউট) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* ভেন্যু */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Venue
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">
                      {eventInfo.venue}
                    </p>
                  </div>
                </div>

                {/* তারিখ ও সময় */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Date & Time
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">
                      {eventInfo.date}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Reporting: {eventInfo.reportingTime}
                    </p>
                  </div>
                </div>

                {/* রেজিস্ট্রেশন ফি */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5zm16.5 0h.008v.008h-.008V20.25zm0-4.5h.008v.008h-.008V15.75zm0-4.5h.008v.008h-.008V11.25zm0-4.5h.008v.008h-.008V6.75z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Registration Fee
                    </h4>
                    <p className="text-base font-bold text-emerald-600 mt-0.5">
                      {eventInfo.regFee}
                    </p>
                    <p className="text-xs text-rose-500 font-semibold">
                      Deadline: {eventInfo.deadline}
                    </p>
                  </div>
                </div>

                {/* এলিজিবিলিটি */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-lg mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Eligibility
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">
                      {eventInfo.eligibility}
                    </p>
                  </div>
                </div>
              </div>

              {/* হাইলাইটেড: Gift & Treats সেকশন */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-5 sm:p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="p-1.5 bg-amber-500 text-white rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.5v16.5m-7.5-7.5h15M12 4.5a3 3 0 1 1 3 3h-3m0-3a3 3 0 1 0-3 3h3"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-bold text-amber-900 tracking-tight">
                    Gifts & Treats Included
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {eventInfo.giftsAndTreats.map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-amber-600 flex-shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1  0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.74-5.24Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-amber-950">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* অ্যাকশন বাটন এবং ফুটার অর্গানাইজেশন */}
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Organized By
                </p>
                <p className="text-sm font-bold text-blue-900">
                  {eventInfo.organizer}
                </p>
              </div>

              <Link
                to="/registration"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-700/20 hover:from-blue-800 hover:to-blue-900 transition-all transform active:scale-98 flex items-center justify-center gap-2 tracking-wide"
              >
                <span>Register Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
