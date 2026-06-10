import { Link } from "react-router-dom";

const ApplicationSteps = () => {
  const steps = [
    {
      id: 1,
      title: "ফি প্রদান",
      description:
        "বিকাশ/নগদ নাম্বারে ফি প্রদান করে ট্রানজেকশন আইডিটি কপি করে নিন (ফি: ৫০০ টাকা)",
      icon: "💰",
    },

    {
      id: 2,
      title: "রেজিস্ট্রেশন ফরম পূরণ",
      description:
        "রেজিস্ট্রেশন ফরমের প্রয়োজনীয় তথ্য প্রদান করে এবং সাবমিট বাটনে ক্লিক করে জমা দিন।",
      icon: "📄",
    },

    {
      id: 3,
      title: "কনফার্মেশন",
      description: "সাবমিট করার পর অটোমেটিক কনফার্মেশন পেয়ে যাবেন।",
      icon: "✅",
    },
  ];

  return (
    <section className="bg-brand-light w-full">
      <div className="w-11/12 md:w-10/12 mx-auto py-10 md:py-20 h-full text-black ">
        {/* Header */}
        <h2 className="text-2xl md:text-4xl font-black text-center mb-5 text-brand-primary leading-snug">
          মাত্র <span className="text-brand-secondary"> ৩ ধাপে রেজিস্ট্রেশন</span>{" "}
          প্রক্রিয়া
        </h2>
        <p className="text-center text-gray-700 mb-12 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
          The Next Chapter - Beyond SSC'26
        </p>

        {/* Step Cards */}
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-center items-start text-center">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center space-y-4 w-full sm:w-full md:w-72"
            >
              {/* Arrow only for larger screens */}
              {index !== steps.length - 1 && (
                <div className="absolute top-[35px] right-[-100px] transform hidden lg:block z-10">
                  <svg
                    width="130"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id={`arrowGradient${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#173083"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor="#00A3DF"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                      <marker
                        id={`arrowhead${index}`}
                        markerWidth="10"
                        markerHeight="7"
                        refX="9.5"
                        refY="3.5"
                        orient="auto"
                        markerUnits="userSpaceOnUse"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#00A3DF" />
                      </marker>
                    </defs>
                    <path
                      d="M5,15 Q55,-15 105,15"
                      fill="none"
                      stroke={`url(#arrowGradient${index})`}
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      markerEnd={`url(#arrowhead${index})`}
                    />
                  </svg>
                </div>
              )}

              {/* Icon */}
              <div className="bg-white backdrop-blur-md border border-brand-secondary/30 p-5 rounded-2xl shadow-xl shadow-brand-primary/10 w-[90px] h-[90px] flex items-center justify-center transition-transform hover:scale-110">
                <div className="text-4xl">{step.icon}</div>
              </div>

              {/* Step Number */}
              <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-2 bg-white px-3 py-1 rounded-full shadow-sm">
                ধাপ {step.id}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-brand-primary">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-snug px-2 sm:px-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex pb-12 justify-center items-center">
        <Link
          to={"/registration"}
          className="mt-2 sm:mt-4 w-full sm:w-auto text-center px-4"
        >
          <button className="bg-brand-accent hover:bg-red-700 text-white font-bold px-10 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-brand-accent/30 hover:-translate-y-1">
            রেজিস্ট্রেশন করুন
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ApplicationSteps;
