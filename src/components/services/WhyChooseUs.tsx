import { useState, useEffect } from "react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: "Expert Legal Team",
      description:
        "Our team comprises highly qualified lawyers with specialized expertise across multiple practice areas.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      stats: "12+ Years Average Experience",
      highlights: [
        "Specialized Expertise",
        "Continuous Training",
        "Industry Recognition",
      ],
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize your needs and goals, ensuring personalized attention and tailored legal strategies.",
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      ),
      stats: "98% Client Satisfaction Rate",
      highlights: [
        "Personalized Service",
        "Regular Updates",
        "Dedicated Support",
      ],
    },
    {
      title: "Proven Track Record",
      description:
        "With hundreds of successful cases, we have demonstrated consistent excellence in legal representation.",
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
      stats: "500+ Cases Successfully Handled",
      highlights: [
        "High Success Rate",
        "Complex Case Experience",
        "Positive Outcomes",
      ],
    },
    {
      title: "Transparent Communication",
      description:
        "We believe in clear, honest communication about your case progress, fees, and expected outcomes.",
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          ></path>
        </svg>
      ),
      stats: "24/7 Client Support",
      highlights: ["Clear Updates", "No Hidden Fees", "Accessible Team"],
    },
  ];

  const advantages = [
    {
      icon: "⚡",
      title: "Quick Response Time",
      description:
        "We respond to all client inquiries within 2 hours during business days",
    },
    {
      icon: "🔒",
      title: "Complete Confidentiality",
      description:
        "Your information is protected by strict attorney-client privilege protocols",
    },
    {
      icon: "💼",
      title: "Modern Technology",
      description:
        "We use cutting-edge legal technology for efficient case management",
    },
    {
      icon: "🌍",
      title: "Wide Network",
      description:
        "Access to extensive legal networks and expert resources nationwide",
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
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            The{" "}
            <span className="text-amber-400 font-serif italic">
              S Nil Roy Advantage
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Discover why discerning clients choose us for their legal needs and
            how we deliver exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Main Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-8 rounded-2xl border cursor-pointer transition-all duration-500 group ${
                  activeFeature === index
                    ? "bg-gradient-to-r from-amber-500/10 to-blue-600/10 border-amber-500/30 shadow-lg shadow-amber-500/10"
                    : "bg-gray-800/50 border-gray-700 hover:border-amber-500/20"
                }`}
              >
                <div className="flex items-start mb-6">
                  <div
                    className={`p-4 rounded-xl mr-6 transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-amber-500 text-white"
                        : "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                        activeFeature === index
                          ? "text-amber-400"
                          : "text-white group-hover:text-amber-300"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="text-amber-400 font-semibold text-sm">
                      {feature.stats}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {feature.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="text-center p-3 bg-gray-800/30 rounded-lg border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
                    >
                      <span className="text-white text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Advantages & Testimonial */}
          <div className="space-y-12">
            {/* Advantages Grid */}
            <div>
              <h3 className="text-2xl font-light text-white mb-8">
                Additional <span className="text-amber-400">Advantages</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    <div className="text-2xl mb-3">{advantage.icon}</div>
                    <h4 className="text-white font-semibold mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-blue-200 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-amber-500/20">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mr-4 border border-amber-500/20">
                  <span className="text-amber-400 font-bold">RM</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Rajesh Mehta</h4>
                  <p className="text-blue-300 text-sm">Business Owner</p>
                  <div className="flex mt-2">
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
              <p className="text-blue-200 italic leading-relaxed">
                {`"S Nil Roy & Associates provided exceptional legal guidance
                during our company's merger. Their expertise and personalized
                approach made the complex process seamless. Truly outstanding
                service!"`}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-amber-500/10">
                <div className="text-2xl font-bold text-amber-400 mb-1">8+</div>
                <div className="text-blue-200 text-xs">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-amber-500/10">
                <div className="text-2xl font-bold text-amber-400 mb-1">
                  500+
                </div>
                <div className="text-blue-200 text-xs">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-amber-500/10">
                <div className="text-2xl font-bold text-amber-400 mb-1">
                  98%
                </div>
                <div className="text-blue-200 text-xs">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 pt-12 border-t border-amber-500/20">
          <h3 className="text-2xl font-light text-white mb-8">
            Ready to{" "}
            <span className="text-amber-400">Experience the Difference?</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
              Schedule Consultation
            </button>
            <button className="border border-amber-500/30 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
