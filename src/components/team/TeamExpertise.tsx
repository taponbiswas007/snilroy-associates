import { useState, useEffect } from "react";

const TeamExpertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSpecialization, setActiveSpecialization] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const specializations = [
    {
      category: "Corporate Law",
      icon: "🏢",
      description:
        "Comprehensive legal services for businesses including formation, compliance, contracts, and transactions.",
      teamMembers: ["Adv. Sree Nilmadhab Roy", "Adv. Priya Sharma"],
      stats: { cases: "120+", success: "95%", experience: "20+ Years" },
      services: [
        "Business Formation & Structuring",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Contract Drafting & Review",
        "Regulatory Compliance",
        "Commercial Transactions",
      ],
    },
    {
      category: "Criminal Defense",
      icon: "⚖️",
      description:
        "Aggressive defense representation for individuals facing criminal charges at all levels.",
      teamMembers: ["Adv. Arjun Mehta"],
      stats: { cases: "85+", success: "92%", experience: "9+ Years" },
      services: [
        "Bail & Arrest Matters",
        "Trial Representation",
        "Appeals & Revisions",
        "White Collar Crimes",
        "Drug Offenses Defense",
        "Cyber Crime Defense",
      ],
    },
    {
      category: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      description:
        "Compassionate legal guidance for family matters with focus on amicable resolutions.",
      teamMembers: ["Adv. Neha Kapoor"],
      stats: { cases: "150+", success: "97%", experience: "7+ Years" },
      services: [
        "Divorce & Separation",
        "Child Custody & Support",
        "Domestic Violence Cases",
        "Adoption & Guardianship",
        "Property Settlement",
        "Mediation Services",
      ],
    },
    {
      category: "Real Estate Law",
      icon: "🏠",
      description:
        "Expert handling of property transactions, disputes, and real estate investments.",
      teamMembers: ["Adv. Rajesh Kumar"],
      stats: { cases: "200+", success: "96%", experience: "10+ Years" },
      services: [
        "Property Transactions",
        "Title Verification",
        "Leasing Agreements",
        "Property Disputes",
        "Real Estate Litigation",
        "Land Acquisition",
      ],
    },
    {
      category: "Intellectual Property",
      icon: "📝",
      description:
        "Protection and enforcement of intellectual property rights for creators and businesses.",
      teamMembers: ["Adv. Ananya Patel"],
      stats: { cases: "75+", success: "94%", experience: "6+ Years" },
      services: [
        "Trademark Registration",
        "Copyright Protection",
        "Patent Filing",
        "IP Litigation",
        "Brand Protection",
        "Licensing Agreements",
      ],
    },
    {
      category: "Civil Litigation",
      icon: "🔍",
      description:
        "Representation in civil disputes and litigation matters across various domains.",
      teamMembers: ["Adv. Sree Nilmadhab Roy", "Adv. Arjun Mehta"],
      stats: { cases: "180+", success: "93%", experience: "15+ Years" },
      services: [
        "Contract Disputes",
        "Property Conflicts",
        "Debt Recovery",
        "Consumer Protection",
        "Tort Claims",
        "Arbitration",
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
              EXPERTISE & SPECIALIZATIONS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Our{" "}
            <span className="text-amber-400 font-serif italic">
              Legal Expertise
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive legal specializations our team offers and
            how we can address your specific legal needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Specializations Navigation */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              {specializations.map((specialization, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSpecialization(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group ${
                    activeSpecialization === index
                      ? "bg-gradient-to-r from-amber-500/10 to-blue-600/10 border-amber-500/30 shadow-lg shadow-amber-500/10"
                      : "bg-gray-800/50 border-gray-700 hover:border-amber-500/20"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`text-2xl mr-4 transition-all duration-300 ${
                        activeSpecialization === index
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      {specialization.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          activeSpecialization === index
                            ? "text-amber-400"
                            : "text-white group-hover:text-amber-300"
                        }`}
                      >
                        {specialization.category}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-amber-400 text-sm font-medium">
                      {specialization.stats.cases} Cases
                    </span>
                    <span className="text-blue-300 text-sm">
                      {specialization.stats.success} Success
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {specialization.teamMembers.map((member, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-900/20 text-blue-300 text-xs rounded border border-blue-700/30"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Specialization Details */}
          <div className="lg:w-3/5">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-amber-500/20 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                      {specializations[activeSpecialization].category}
                    </h3>
                    <div className="text-4xl">
                      {specializations[activeSpecialization].icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 text-xl font-bold mb-1">
                      {specializations[activeSpecialization].stats.success}
                    </div>
                    <div className="text-blue-300 text-sm">Success Rate</div>
                  </div>
                </div>

                <p className="text-lg text-blue-200 leading-relaxed mb-8">
                  {specializations[activeSpecialization].description}
                </p>

                {/* Services Grid */}
                <div className="mb-12">
                  <h4 className="text-white font-semibold mb-6 text-lg border-b border-amber-500/30 pb-2">
                    Services Offered
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specializations[activeSpecialization].services.map(
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

                {/* Team Members */}
                <div className="mb-12">
                  <h4 className="text-white font-semibold mb-6 text-lg border-b border-amber-500/30 pb-2">
                    Our Experts in This Field
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specializations[activeSpecialization].teamMembers.map(
                      (member, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-4">
                            <span className="text-amber-400 font-bold text-sm">
                              {member
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <h5 className="text-white font-medium text-sm">
                              {member}
                            </h5>
                            <p className="text-blue-300 text-xs">Specialist</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                  <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
                    <div className="text-2xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {specializations[activeSpecialization].stats.cases}
                    </div>
                    <div className="text-blue-200 text-sm">Cases Handled</div>
                  </div>
                  <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
                    <div className="text-2xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {specializations[activeSpecialization].stats.experience}
                    </div>
                    <div className="text-blue-200 text-sm">
                      Collective Experience
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
                    <div className="text-2xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {specializations[activeSpecialization].stats.success}
                    </div>
                    <div className="text-blue-200 text-sm">Success Rate</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 inline-flex items-center">
                    Consult Our Experts
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

export default TeamExpertise;
