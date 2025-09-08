import { useState, useEffect } from "react";

const ServiceProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We begin with a comprehensive discussion to understand your legal needs, objectives, and specific situation.",
      duration: "30-60 mins",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      ),
      details: [
        "Free initial assessment",
        "Confidential discussion",
        "Preliminary legal analysis",
        "Fee structure explanation",
      ],
    },
    {
      step: 2,
      title: "Case Evaluation",
      description:
        "Our legal team conducts thorough research and analysis to develop a strategic approach to your case.",
      duration: "1-3 days",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
      details: [
        "Document review",
        "Legal research",
        "Strategy development",
        "Risk assessment",
      ],
    },
    {
      step: 3,
      title: "Action Plan",
      description:
        "We present a customized legal strategy with clear objectives, timelines, and expected outcomes.",
      duration: "2-5 days",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          ></path>
        </svg>
      ),
      details: [
        "Customized strategy",
        "Timeline establishment",
        "Milestone planning",
        "Communication protocol",
      ],
    },
    {
      step: 4,
      title: "Execution",
      description:
        "Our team implements the legal strategy with precision, keeping you informed at every stage.",
      duration: "Varies by case",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
      details: [
        "Legal documentation",
        "Court representation",
        "Negotiation",
        "Regular updates",
      ],
    },
    {
      step: 5,
      title: "Resolution",
      description:
        "We work towards achieving the best possible outcome while ensuring your rights are protected.",
      duration: "Case dependent",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
      details: [
        "Outcome achievement",
        "Documentation finalization",
        "Post-case support",
        "Client satisfaction review",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              OUR PROCESS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            How We{" "}
            <span className="text-amber-400 font-serif italic">
              Deliver Excellence
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Our structured approach ensures every client receives personalized
            attention and the highest quality legal representation.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-16 bottom-16 w-0.5 bg-amber-500/30 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                    activeStep >= index
                      ? "bg-amber-500 border-amber-500 shadow-lg shadow-amber-500/30"
                      : "bg-gray-800 border-amber-500/30"
                  }`}
                ></div>

                <div
                  className={`flex flex-col md:flex-row items-start gap-8 p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeStep === index
                      ? "bg-gradient-to-r from-amber-500/10 to-blue-600/10 border-amber-500/30 shadow-lg shadow-amber-500/10"
                      : "bg-gray-800/50 border-gray-700 hover:border-amber-500/20"
                  } ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 ${
                        activeStep >= index
                          ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                          : "bg-gray-700 text-amber-400"
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3
                        className={`text-xl font-semibold transition-colors duration-300 ${
                          activeStep === index ? "text-amber-400" : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-blue-300 text-sm bg-blue-900/30 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-blue-200 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 bg-gray-800/30 rounded-lg border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-amber-500/10 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-3 h-3 text-amber-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <span className="text-white text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                        activeStep === index
                          ? "bg-amber-500 text-white"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-amber-500/20">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-blue-200 text-sm">Client Confidentiality</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-blue-200 text-sm">Client Support</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-blue-200 text-sm">Cases Processed</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <div className="text-blue-200 text-sm">Success Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 inline-flex items-center">
            Start Your Legal Journey
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
