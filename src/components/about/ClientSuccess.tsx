import { useState, useEffect } from "react";

const ClientSuccess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const successStories = [
    {
      id: 1,
      title: "Corporate Merger Success",
      category: "Corporate Law",
      challenge:
        "Complex merger between two manufacturing companies with international operations",
      solution: "Strategic negotiation and compliance framework development",
      result: "Successful merger with 30% operational cost reduction",
      client: "Manufacturing Conglomerate",
      duration: "6 Months",
      value: "$50M",
      metrics: ["100% Compliance", "30% Cost Reduction", "0 Legal Disputes"],
    },
    {
      id: 2,
      title: "Intellectual Property Protection",
      category: "IP Law",
      challenge: "Patent infringement case involving technology startup",
      solution: "Comprehensive IP strategy and aggressive protection measures",
      result:
        "Patent upheld with licensing agreement generating ongoing revenue",
      client: "Tech Startup",
      duration: "8 Months",
      value: "$12M",
      metrics: ["Patent Upheld", "Revenue Generation", "Market Protection"],
    },
    {
      id: 3,
      title: "High-Profile Criminal Defense",
      category: "Criminal Law",
      challenge: "Complex white-collar criminal case with multiple charges",
      solution: "Detailed evidence analysis and strategic defense approach",
      result: "All major charges dropped, minimal settlement",
      client: "Business Executive",
      duration: "14 Months",
      value: "Case Dismissed",
      metrics: ["Charges Dropped", "Reputation Protected", "Minimal Impact"],
    },
    {
      id: 4,
      title: "Real Estate Dispute Resolution",
      category: "Real Estate Law",
      challenge: "Multi-party property dispute with historical claims",
      solution: "Mediation and strategic legal framework development",
      result: "Favorable settlement for all parties involved",
      client: "Property Developers",
      duration: "10 Months",
      value: "$8.5M",
      metrics: ["Dispute Resolved", "Time Saved", "Cost Effective"],
    },
  ];

  return (
    <section className="py-24 bg-black px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-amber-500/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Client{" "}
            <span className="text-amber-400 font-serif italic">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Discover how we've helped clients achieve successful outcomes in
            complex legal matters.
          </p>
        </div>

        {/* Case Studies Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setActiveCase(index)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-500 group ${
                activeCase === index
                  ? "bg-gradient-to-r from-amber-500/10 to-blue-600/10 border-amber-500/30 shadow-lg shadow-amber-500/10"
                  : "bg-gray-800/50 border-gray-700 hover:border-amber-500/20"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-sm rounded-full border border-amber-500/20">
                    {story.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-amber-400 font-bold text-lg">
                    {story.value}
                  </div>
                  <div className="text-blue-300 text-sm">{story.duration}</div>
                </div>
              </div>

              <h3
                className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  activeCase === index
                    ? "text-amber-400"
                    : "text-white group-hover:text-amber-300"
                }`}
              >
                {story.title}
              </h3>

              <p className="text-blue-200 text-sm mb-4 line-clamp-2">
                {story.challenge}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{story.client}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    activeCase === index
                      ? "bg-amber-500 border-amber-500"
                      : "border-gray-600 group-hover:border-amber-400"
                  }`}
                >
                  {activeCase === index && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Case Study Details */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-amber-500/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge & Solution */}
            <div>
              <h3 className="text-2xl font-light text-white mb-8">
                Case <span className="text-amber-400">Study</span>
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-amber-400 font-semibold mb-4 flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                    The Challenge
                  </h4>
                  <p className="text-blue-200 leading-relaxed">
                    {successStories[activeCase].challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-amber-400 font-semibold mb-4 flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                    Our Solution
                  </h4>
                  <p className="text-blue-200 leading-relaxed">
                    {successStories[activeCase].solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-amber-400 font-semibold mb-4 flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                    The Result
                  </h4>
                  <p className="text-white font-semibold text-lg mb-2">
                    {successStories[activeCase].result}
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics & Visuals */}
            <div>
              <h3 className="text-2xl font-light text-white mb-8">
                Key <span className="text-amber-400">Metrics</span>
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {successStories[activeCase].metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-amber-400"
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
                    </div>
                    <span className="text-white text-sm">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Client Testimonial */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="text-amber-400 text-2xl mr-2">"</div>
                  <p className="text-white italic leading-relaxed">
                    S Nil Roy & Associates provided exceptional guidance
                    throughout our complex case. Their expertise and dedication
                    were instrumental in achieving this successful outcome.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 text-sm">
                    — Satisfied Client
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 pt-8 border-t border-amber-500/20">
            <p className="text-blue-200 mb-6">
              Ready to achieve your own success story?
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 inline-flex items-center">
              Start Your Case Review
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
      </div>
    </section>
  );
};

export default ClientSuccess;
