const Guest = () => {
  const guests = [
    {
      id: 1,
      name: "সিবগাতুল্লাহ সিবগা",
      type: "প্রধান অতিথি",
      designations: ["সেক্রেটারি জেনারেল", "বাংলাদেশ ইসলামী ছাত্রশিবির"],
      image_url: "https://ik.imagekit.io/atm/sibga.png",
    },
    {
      id: 2,
      name: "এস এম ফরহাদ",
      type: "বিশেষ অতিথি",
      designations: [
        "জিএস, ডাকসু",
        "কেন্দ্রীয় প্রচার সম্পাদক, বাংলাদেশ ইসলামী ছাত্রশিবির",
      ],
      image_url: "https://ik.imagekit.io/atm/farhad.png",
    },
    {
      id: 3,
      name: "To Be Announced",
      type: "বিশেষ বক্তা",
      designations: ["ক্যারিয়ার স্পেশালিস্ট ও মোটিভেশনাল স্পিকার"],
      image_url: "https://ik.imagekit.io/atm/placeholder-career.png",
    },
  ];

  return (
    <section className="relative py-8 md:py-16 bg-gradient-to-b from-white via-brand-light/35 to-white text-slate-800 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#173083_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-2 md:px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-black text-brand-primary leading-tight font-bangla mb-4">
            আমন্ত্রিত অতিথিবৃন্দ
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            <span className="h-1 w-8 bg-brand-primary rounded-full"></span>
            <span className="h-2 w-2 bg-brand-secondary rounded-full"></span>
            <span className="h-1.5 w-16 bg-brand-secondary rounded-full"></span>
            <span className="h-2 w-2 bg-brand-secondary rounded-full"></span>
            <span className="h-1 w-8 bg-brand-primary rounded-full"></span>
          </div>
        </div>

        {/* Guests Layout */}
        <div className="flex flex-col items-center gap-2 md:gap-12">
          {/* Chief Guest Card - Centered, Prominent and Large */}
          {guests
            .filter((g) => g.type === "প্রধান অতিথি")
            .map((guest) => (
              <div
                key={guest.id}
                className="group relative bg-white border border-brand-primary/10 hover:border-brand-primary/20 shadow-[0_20px_50px_rgba(23,48,131,0.06)] hover:shadow-[0_30px_60px_rgba(23,48,131,0.12)] rounded-3xl p-8 md:p-10 text-center max-w-md w-full transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              >
                {/* Internal Card Background Elements */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-brand-primary/5 to-transparent rounded-tr-3xl rounded-bl-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-secondary/5 to-transparent rounded-bl-3xl rounded-tr-full pointer-events-none"></div>

                {/* Avatar Frame with custom gradient layout */}
                <div className="relative w-36 h-36 mx-auto mb-6 p-1 rounded-full bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-accent shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <img
                      src={guest.image_url}
                      alt={guest.name}
                      className="w-full h-full rounded-full object-cover shadow-inner"
                    />
                  </div>
                </div>

                {/* Prestige Badge */}
                <span className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm shadow-brand-primary/20">
                  {guest.type}
                </span>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-black mt-4 text-brand-primary font-bangla group-hover:text-brand-secondary transition-colors duration-300">
                  {guest.name}
                </h3>

                {/* Interactive Divider Line */}
                <div className="w-12 h-0.5 bg-brand-primary/20 mx-auto my-4 group-hover:w-24 transition-all duration-300"></div>

                {/* Designations */}
                <div className="space-y-2">
                  {guest.designations.map((des, index) => (
                    <p
                      key={index}
                      className="text-sm font-semibold text-slate-600 leading-relaxed font-bangla"
                    >
                      {des}
                    </p>
                  ))}
                </div>
              </div>
            ))}

          {/* Special Guest & Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 max-w-3xl w-full mt-4 justify-center">
            {guests
              .filter((g) => g.type !== "প্রধান অতিথি")
              .map((guest) => (
                <div
                  key={guest.id}
                  className="group relative bg-white border border-brand-secondary/10 hover:border-brand-secondary/20 shadow-[0_12px_30px_rgba(0,163,223,0.04)] hover:shadow-[0_20px_40px_rgba(0,163,223,0.1)] rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:scale-[1.02] overflow-hidden flex flex-col items-center justify-between"
                >
                  {/* Decorative background gradient */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-brand-secondary/5 to-transparent rounded-tl-2xl rounded-br-full pointer-events-none"></div>

                  <div className="flex flex-col items-center w-full">
                    {/* Avatar Container */}
                    <div className="relative w-28 h-28 mx-auto mb-4 p-0.5 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary shadow-sm group-hover:scale-105 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-white p-0.5">
                        {guest.name === "To Be Announced" ? (
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-light to-brand-secondary/20 flex flex-col items-center justify-center text-brand-primary relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-brand-secondary/20 group-hover:to-brand-primary/20 transition-all duration-300">
                            {/* Mystical Silhouette Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-10 h-10 text-brand-primary animate-pulse"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                              />
                            </svg>
                          </div>
                        ) : (
                          <img
                            src={guest.image_url}
                            alt={guest.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        )}
                      </div>
                    </div>

                    {/* Badge */}
                    <span className="inline-block bg-brand-secondary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full mb-3.5 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      {guest.type}
                    </span>

                    {/* Name */}
                    <h3
                      className={`font-bangla font-black transition-colors duration-300 ${
                        guest.name === "To Be Announced"
                          ? "text-slate-400 italic text-base font-sans"
                          : "text-xl text-brand-primary"
                      }`}
                    >
                      {guest.name === "To Be Announced"
                        ? "শীঘ্রই জানানো হবে"
                        : guest.name}
                    </h3>

                    {/* Decorative bar */}
                    <div className="w-8 h-0.5 bg-brand-secondary/20 mx-auto my-3 group-hover:w-16 transition-all duration-300"></div>

                    {/* Designations */}
                    <div className="space-y-1">
                      {guest.designations.map((des, index) => (
                        <p
                          key={index}
                          className="text-xs font-medium text-slate-500 font-bangla group-hover:text-slate-700 transition-colors duration-300 leading-relaxed"
                        >
                          {des}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guest;
