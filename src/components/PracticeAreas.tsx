import { useState } from "react";

const PracticeAreas = () => {
  const [activeArea, setActiveArea] = useState(0);

  const practiceAreas = [
    {
      title: "Corporate Law",
      description:
        "Business formation, contracts, compliance, mergers & acquisitions, and corporate governance.",
      icon: "🏢",
    },
    {
      title: "Criminal Defense",
      description:
        "Representation in criminal cases, bail hearings, appeals, and legal protection for the accused.",
      icon: "⚖️",
    },
    {
      title: "Family Law",
      description:
        "Divorce, child custody, alimony, adoption, and domestic violence cases with compassionate representation.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Real Estate Law",
      description:
        "Property transactions, leasing agreements, land disputes, and real estate litigation.",
      icon: "🏠",
    },
    {
      title: "Intellectual Property",
      description:
        "Trademarks, copyrights, patents, and protection of creative works and innovations.",
      icon: "📝",
    },
    {
      title: "Civil Litigation",
      description:
        "Resolution of disputes between individuals and organizations through the court system.",
      icon: "🔍",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-amber-400">Practice Areas</span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            With expertise across multiple legal domains, we provide
            comprehensive legal solutions tailored to your specific needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg p-6 border-l-4 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group ${
                activeArea === index
                  ? "border-amber-500 shadow-lg shadow-amber-500/20"
                  : "border-blue-700 hover:border-amber-400"
              }`}
              onMouseEnter={() => setActiveArea(index)}
              onClick={() => setActiveArea(index)}
            >
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">{area.icon}</span>
                <h3
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    activeArea === index
                      ? "text-amber-400"
                      : "text-white group-hover:text-amber-300"
                  }`}
                >
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {area.description}
              </p>
              <div
                className={`mt-4 h-1 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500 ${
                  activeArea === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-blue-200 mb-6">
            Don't see your specific legal need listed? Contact us to discuss how
            we can help.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
