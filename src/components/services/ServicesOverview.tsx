import { useState, useEffect } from "react";

const ServicesOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const serviceCategories = [
    {
      title: "Corporate Law",
      icon: "🏢",
      description:
        "Comprehensive legal services for businesses of all sizes, from formation to compliance and transactions.",
      services: [
        "Business Formation & Structuring",
        "Contracts & Agreements",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Regulatory Compliance",
        "Commercial Transactions",
      ],
      stats: { cases: "120+", success: "95%" },
    },
    {
      title: "Criminal Defense",
      icon: "⚖️",
      description:
        "Aggressive defense representation for individuals facing criminal charges at all levels.",
      services: [
        "Bail & Arrest Matters",
        "Trial Representation",
        "Appeals & Revisions",
        "White Collar Crimes",
        "Drug Offenses",
        "Cyber Crime Defense",
      ],
      stats: { cases: "85+", success: "92%" },
    },
    {
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      description:
        "Compassionate legal guidance for family matters with focus on amicable resolutions.",
      services: [
        "Divorce & Separation",
        "Child Custody & Support",
        "Domestic Violence",
        "Adoption & Guardianship",
        "Property Settlement",
        "Mediation Services",
      ],
      stats: { cases: "150+", success: "97%" },
    },
    {
      title: "Real Estate Law",
      icon: "🏠",
      description:
        "Expert handling of property transactions, disputes, and real estate investments.",
      services: [
        "Property Transactions",
        "Title Verification",
        "Leasing Agreements",
        "Property Disputes",
        "Real Estate Litigation",
        "Land Acquisition",
      ],
      stats: { cases: "200+", success: "96%" },
    },
    {
      title: "Intellectual Property",
      icon: "📝",
      description:
        "Protection and enforcement of intellectual property rights for creators and businesses.",
      services: [
        "Trademark Registration",
        "Copyright Protection",
        "Patent Filing",
        "IP Litigation",
        "Brand Protection",
        "Licensing Agreements",
      ],
      stats: { cases: "75+", success: "94%" },
    },
    {
      title: "Civil Litigation",
      icon: "🔍",
      description:
        "Representation in civil disputes and litigation matters across various domains.",
      services: [
        "Contract Disputes",
        "Property Conflicts",
        "Debt Recovery",
        "Consumer Protection",
        "Tort Claims",
        "Arbitration",
      ],
      stats: { cases: "180+", success: "93%" },
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
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Comprehensive{" "}
            <span className="text-amber-400 font-serif italic">
              Legal Solutions
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            We provide expert legal services across multiple practice areas,
            tailored to meet your specific needs and achieve successful
            outcomes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Services Navigation */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group ${
                    activeCategory === index
                      ? "bg-gradient-to-r from-amber-500/10 to-blue-600/10 border-amber-500/30 shadow-lg shadow-amber-500/10"
                      : "bg-gray-800/50 border-gray-700 hover:border-amber-500/20"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`text-2xl mr-4 transition-all duration-300 ${
                        activeCategory === index
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          activeCategory === index
                            ? "text-amber-400"
                            : "text-white group-hover:text-amber-300"
                        }`}
                      >
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-blue-200 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-amber-400 text-sm font-medium">
                        {category.stats.cases} Cases
                      </span>
                      <span className="text-blue-300 text-sm">
                        {category.stats.success} Success
                      </span>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        activeCategory === index
                          ? "bg-amber-500 border-amber-500"
                          : "border-gray-600 group-hover:border-amber-400"
                      }`}
                    >
                      {activeCategory === index && (
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
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Details */}
          <div className="lg:w-3/5">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-amber-500/20 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                      {serviceCategories[activeCategory].title}
                    </h3>
                    <p className="text-amber-400 text-lg">
                      {serviceCategories[activeCategory].icon}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 text-xl font-bold mb-1">
                      {serviceCategories[activeCategory].stats.success}
                    </div>
                    <div className="text-blue-300 text-sm">Success Rate</div>
                  </div>
                </div>

                <p className="text-lg text-blue-200 leading-relaxed mb-8">
                  {serviceCategories[activeCategory].description}
                </p>

                {/* Services List */}
                <div className="mb-12">
                  <h4 className="text-white font-semibold mb-6 text-lg border-b border-amber-500/30 pb-2">
                    Services We Offer
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceCategories[activeCategory].services.map(
                      (service, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group"
                        >
                          <div className="w-8 h-8 bg-amber-500/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-amber-400"
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
                          <span className="text-white text-sm">{service}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-12">
                  <h4 className="text-white font-semibold mb-6 text-lg border-b border-amber-500/30 pb-2">
                    Why Choose Our Services
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="bg-amber-500/10 p-2 rounded-lg mr-4 border border-amber-500/20">
                        <svg
                          className="w-5 h-5 text-amber-400"
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
                      <div>
                        <h5 className="text-white font-medium mb-1">
                          Expert Guidance
                        </h5>
                        <p className="text-blue-200 text-sm">
                          Seasoned lawyers with deep expertise
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-amber-500/10 p-2 rounded-lg mr-4 border border-amber-500/20">
                        <svg
                          className="w-5 h-5 text-amber-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-1">
                          Confidentiality
                        </h5>
                        <p className="text-blue-200 text-sm">
                          Complete privacy and discretion
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 inline-flex items-center">
                    Discuss Your Case
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
