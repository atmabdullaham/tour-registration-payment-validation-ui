import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ইভেন্টে অংশগ্রহণের যোগ্যতা কী?",
      answer:
        "শুধুমাত্র চট্টগ্রাম মেট্রো এলাকার SSC'26 পরীক্ষার্থী ছেলে শিক্ষার্থীরা এই ইভেন্টে অংশগ্রহণ করতে পারবে।",
      icon: (
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
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      ),
    },
    {
      question: "রেজিস্ট্রেশন ফি কত এবং কীভাবে পরিশোধ করব?",
      answer:
        "রেজিস্ট্রেশন ফি ৩৫০ টাকা। বিকাশ/নগদ নাম্বার 01859902430 এ সেন্ড মানি করে ট্রানজেকশন আইডি কপি করে রেজিস্ট্রেশন ফরমে জমা দিন।",
      icon: (
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
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v-1.5A2.25 2.25 0 0 1 6 .75h12a2.25 2.25 0 0 1 2.25 2.25v1.5m-16.5 0h16.5m-16.5 0v11.25A2.25 2.25 0 0 0 6 18h12a2.25 2.25 0 0 0 2.25-2.25V4.5"
          />
        </svg>
      ),
    },
    {
      question: "রেজিস্ট্রেশনের শেষ তারিখ কত?",
      answer:
        "রেজিস্ট্রেশনের শেষ তারিখ ২০ জুন ২০২৬। ডেডলাইনের পরে কোনো রেজিস্ট্রেশন গ্রহণ করা হবে না, তাই দ্রুত রেজিস্ট্রেশন সম্পন্ন করুন।",
      icon: (
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
      ),
    },
    {
      question: "ইভেন্টের ভেন্যু ও সময় কী?",
      answer:
        "ইভেন্টটি ২৪ জুন ২০২৬ তারিখে Foy's Lake Concord Amusement World, চট্টগ্রামে অনুষ্ঠিত হবে।",
      icon: (
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
      ),
    },
    {
      question: "ইভেন্টে কী কী সুবিধা পাওয়া যাবে?",
      answer:
        "অংশগ্রহণকারীরা পাবেন: Premium T-shirt, Evening Snacks + Grand Dinner, Free Rides এবং Cultural Evening এর সুযোগ।",
      icon: (
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
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.5v16.5m-7.5-7.5h15M12 4.5a3 3 0 1 1 3 3h-3m0-3a3 3 0 1 0-3 3h3"
          />
        </svg>
      ),
    },
    {
      question: "রেজিস্ট্রেশনের স্ট্যাটাস কীভাবে চেক করব?",
      answer:
        "রেজিস্ট্রেশন সাবমিট করার পর 'আমার রেজিস্ট্রেশন' পেজে গিয়ে আপনার রেজিস্টার্ড মোবাইল নম্বর দিয়ে সার্চ করে যেকোনো সময় বর্তমান স্ট্যাটাস জানতে পারবেন।",
      icon: (
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      ),
    },
    {
      question: "পেমেন্ট ভেরিফিকেশনে কতক্ষণ সময় লাগে?",
      answer:
        "সাধারণত ম্যানুয়াল ভেরিফিকেশনে ২৪-৪৮ ঘণ্টা সময় লাগে। ভেরিফিকেশন সম্পন্ন হলে আপনার WhatsApp নম্বরে কনফার্মেশন মেসেজ পাঠানো হবে।",
      icon: (
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
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      question: "সমস্যা হলে কোথায় যোগাযোগ করব?",
      answer:
        "যেকোনো সমস্যায় 01859902430 নম্বরে কল করুন অথবা ওয়েবসাইটের 'যোগাযোগ' পেজ থেকে মেসেজ পাঠান।",
      icon: (
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
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-white via-brand-light/20 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-brand-secondary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#173083_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="relative z-10 w-11/12 md:w-10/12 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className=" text-3xl md:text-5xl font-black text-brand-primary leading-tight mb-4">
            সাধারণ জিজ্ঞাসা
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            <span className="h-1 w-8 bg-brand-primary rounded-full"></span>
            <span className="h-2 w-2 bg-brand-secondary rounded-full"></span>
            <span className="h-1.5 w-16 bg-brand-secondary rounded-full"></span>
            <span className="h-2 w-2 bg-brand-secondary rounded-full"></span>
            <span className="h-1 w-8 bg-brand-primary rounded-full"></span>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? "border-brand-primary/20 shadow-lg shadow-brand-primary/5"
                    : "border-slate-100 shadow-sm hover:border-brand-secondary/20 hover:shadow-md hover:shadow-brand-secondary/5"
                  }`}
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center gap-3 md:gap-4 px-5 md:px-6 py-4 md:py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 p-2 md:p-2.5 rounded-xl transition-all duration-300 ${isOpen
                        ? "bg-brand-primary text-white"
                        : "bg-brand-light text-brand-primary group-hover:bg-brand-secondary/10"
                      }`}
                  >
                    {faq.icon}
                  </div>

                  {/* Question Text */}
                  <span
                    className={`flex-1 text-sm md:text-base font-bold transition-colors duration-300 ${isOpen
                        ? "text-brand-primary"
                        : "text-slate-700 group-hover:text-brand-primary"
                      }`}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle Arrow */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? "bg-brand-primary text-white rotate-180"
                        : "bg-slate-100 text-slate-400 group-hover:bg-brand-secondary/10 group-hover:text-brand-secondary"
                      }`}
                  >
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer - animated collapse */}
                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pl-14 md:pl-[72px]">
                    <div className="h-px bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-transparent mb-4"></div>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-brand-primary/5 via-brand-light to-brand-secondary/5 rounded-2xl px-6 py-5 border border-brand-primary/10">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-brand-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold text-slate-700">
                আরো প্রশ্ন আছে?
              </span>
            </div>
            <a
              href="/contact"
              className="text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors duration-200 underline decoration-brand-secondary/30 underline-offset-2 hover:decoration-brand-secondary"
            >
              আমাদের সাথে যোগাযোগ করুন →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
