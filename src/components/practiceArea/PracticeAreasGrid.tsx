import { useState, useEffect } from "react";

const PracticeAreasGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeArea, setActiveArea] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const practiceAreas = [
    {
      id: 1,
      title: "Corporate Law",
      icon: "🏢",
      description:
        "Comprehensive legal services for businesses including formation, compliance, contracts, and transactions.",
      services: [
        "Business Formation & Structuring",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Contract Drafting & Review",
        "Regulatory Compliance",
        "Commercial Transactions",
      ],
      stats: { cases: "120+", success: "95%", experience: "20+ Years" },
      category: "business",
      team: ["Adv. Sree Nilmadhab Roy", "Adv. Priya Sharma"],
    },
    {
      id: 2,
      title: "Criminal Defense",
      icon: "⚖️",
      description:
        "Aggressive defense representation for individuals facing criminal charges at all levels.",
      services: [
        "Bail & Arrest Matters",
        "Trial Representation",
        "Appeals & Revisions",
        "White Collar Crimes",
        "Drug Offenses Defense",
        "Cyber Crime Defense",
      ],
      stats: { cases: "85+", success: "92%", experience: "9+ Years" },
      category: "litigation",
      team: ["Adv. Arjun Mehta"],
    },
    {
      id: 3,
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      description:
        "Compassionate legal guidance for family matters with focus on amicable resolutions.",
      services: [
        "Divorce & Separation",
        "Child Custody & Support",
        "Domestic Violence Cases",
        "Adoption & Guardianship",
        "Property Settlement",
        "Mediation Services",
      ],
      stats: { cases: "150+", success: "97%", experience: "7+ Years" },
      category: "civil",
      team: ["Adv. Neha Kapoor"],
    },
    {
      id: 4,
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
      stats: { cases: "200+", success: "96%", experience: "10+ Years" },
      category: "property",
      team: ["Adv. Rajesh Kumar"],
    },
    {
      id: 5,
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
      stats: { cases: "75+", success: "94%", experience: "6+ Years" },
      category: "business",
      team: ["Adv. Ananya Patel"],
    },
    {
      id: 6,
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
      stats: { cases: "180+", success: "93%", experience: "15+ Years" },
      category: "litigation",
      team: ["Adv. Sree Nilmadhab Roy", "Adv. Arjun Mehta"],
    },
  ];

  const categories = [
    { id: "all", label: "All Practices" },
    { id: "business", label: "Business Law" },
    { id: "litigation", label: "Litigation" },
    { id: "civil", label: "Civil Matters" },
    { id: "property", label: "Property Law" },
  ];

  const filteredAreas =
    filter === "all"
      ? practiceAreas
      : practiceAreas.filter((area) => area.category === filter);

  return (
    <section className="py-24 bg-black px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-amber-500/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              LEGAL SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Our{" "}
            <span className="text-amber-400 font-serif italic">
              Practice Areas
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal solutions across multiple practice areas,
            delivered with expertise and personalized attention.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                filter === category.id
                  ? "bg-amber-500 border-amber-500 text-gray-900 font-semibold"
                  : "bg-gray-800/50 border-amber-500/30 text-blue-200 hover:bg-amber-500/10 hover:border-amber-500/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredAreas.map((area, index) => (
            <div
              key={area.id}
              className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border transition-all duration-500 transform hover:scale-105 cursor-pointer group ${
                activeArea === index
                  ? "border-amber-500/50 shadow-lg shadow-amber-500/20"
                  : "border-gray-700 hover:border-amber-500/30"
              }`}
              onClick={() => setActiveArea(index)}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`text-3xl mr-4 transition-all duration-300 ${
                    activeArea === index ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {area.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-amber-400 font-bold text-lg">
                    {area.stats.cases}
                  </div>
                  <div className="text-blue-300 text-xs">Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-400 font-bold text-lg">
                    {area.stats.success}
                  </div>
                  <div className="text-blue-300 text-xs">Success</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-400 font-bold text-lg">
                    {area.stats.experience}
                  </div>
                  <div className="text-blue-300 text-xs">Experience</div>
                </div>
              </div>

              {/* Services Preview */}
              <div className="mb-6">
                <h4 className="text-white text-sm font-medium mb-3">
                  Key Services
                </h4>
                <div className="space-y-2">
                  {area.services.slice(0, 3).map((service, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      <span className="text-blue-200 text-sm">{service}</span>
                    </div>
                  ))}
                  {area.services.length > 3 && (
                    <div className="text-amber-400 text-sm font-medium">
                      +{area.services.length - 3} more services
                    </div>
                  )}
                </div>
              </div>

              {/* Team */}
              <div className="border-t border-amber-500/20 pt-4">
                <h4 className="text-white text-sm font-medium mb-2">
                  Expert Team
                </h4>
                <div className="flex flex-wrap gap-2">
                  {area.team.map((member, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-900/20 text-blue-300 text-xs rounded border border-blue-700/30"
                    >
                      {member.split(" ")[1]}
                    </span>
                  ))}
                </div>
              </div>

              {/* View More */}
              {activeArea !== index && (
                <div className="text-center mt-4">
                  <button className="text-amber-400 text-sm hover:text-amber-300 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-blue-200 text-sm">Cases Handled</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <div className="text-blue-200 text-sm">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              60+
            </div>
            <div className="text-blue-200 text-sm">
              Years Combined Experience
            </div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-blue-200 text-sm">Client Support</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-blue-600/10 rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-light text-white mb-4">
              Ready to <span className="text-amber-400">Get Started?</span>
            </h3>
            <p className="text-blue-200 mb-6 max-w-xl mx-auto">
              Schedule a consultation with our expert legal team to discuss your
              specific needs and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
                Free Consultation
              </button>
              <button className="border border-amber-500/30 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasGrid;
