import { useState, useEffect } from "react";

const TeamMembersGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMember, setActiveMember] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Adv. Sree Nilmadhob Roy",
      role: "Founding Partner",
      education: "LLB (Hon's), LLM",
      experience: "12+ Years",
      expertise: ["Corporate Law", "Civil Litigation", "Intellectual Property"],
      description:
        "Leading the firm with exceptional legal acumen and a client-first approach that has built our reputation for excellence.",
      avatar: "SNR",
      achievements: ["500+ Cases", "98% Success Rate", "15+ Awards"],
      contact: "sree.roy@snilroy.com",
    },
    {
      id: 2,
      name: "Adv. Priya Sharma",
      role: "Senior Associate",
      education: "LLB, LLM (Business Law)",
      experience: "8+ Years",
      expertise: [
        "Business Law",
        "Contracts",
        "Compliance",
        "Mergers & Acquisitions",
      ],
      description:
        "Specializes in corporate governance and business compliance with a track record of successful corporate advisories.",
      avatar: "PS",
      achievements: [
        "120+ Corporate Cases",
        "Expert in Compliance",
        "Client Satisfaction Award",
      ],
      contact: "priya.sharma@snilroy.com",
    },
    {
      id: 3,
      name: "Adv. Arjun Mehta",
      role: "Criminal Defense Specialist",
      education: "LLB, PG Diploma in Criminal Law",
      experience: "9+ Years",
      expertise: [
        "Criminal Defense",
        "Bail Matters",
        "Appeals",
        "White Collar Crimes",
      ],
      description:
        "Known for strategic defense approaches and successful outcomes in complex criminal cases.",
      avatar: "AM",
      achievements: [
        "85+ Criminal Cases",
        "High Acquittal Rate",
        "Expert Litigator",
      ],
      contact: "arjun.mehta@snilroy.com",
    },
    {
      id: 4,
      name: "Adv. Neha Kapoor",
      role: "Family Law Expert",
      education: "LLB, LLM (Family Law)",
      experience: "7+ Years",
      expertise: ["Divorce", "Child Custody", "Domestic Violence", "Mediation"],
      description:
        "Compassionate yet fierce advocate for family law matters with a focus on amicable resolutions.",
      avatar: "NK",
      achievements: [
        "150+ Family Cases",
        "Mediation Specialist",
        "Client Compassion Award",
      ],
      contact: "neha.kapoor@snilroy.com",
    },
    {
      id: 5,
      name: "Adv. Rajesh Kumar",
      role: "Real Estate Law Specialist",
      education: "LLB, PG Diploma in Real Estate Law",
      experience: "10+ Years",
      expertise: [
        "Property Transactions",
        "Title Disputes",
        "Real Estate Litigation",
        "Land Acquisition",
      ],
      description:
        "Expert in handling complex real estate transactions and property disputes with meticulous attention to detail.",
      avatar: "RK",
      achievements: [
        "200+ Property Cases",
        "Title Expert",
        "Real Estate Advisor",
      ],
      contact: "rajesh.kumar@snilroy.com",
    },
    {
      id: 6,
      name: "Adv. Ananya Patel",
      role: "Intellectual Property Lawyer",
      education: "LLB, LLM (Intellectual Property)",
      experience: "6+ Years",
      expertise: ["Trademarks", "Copyrights", "Patents", "IP Litigation"],
      description:
        "Dedicated to protecting creative works and innovations through comprehensive IP strategies.",
      avatar: "AP",
      achievements: [
        "75+ IP Cases",
        "Patent Specialist",
        "Innovation Protection Expert",
      ],
      contact: "ananya.patel@snilroy.com",
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
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              LEGAL EXPERTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Meet Our{" "}
            <span className="text-amber-400 font-serif italic">Legal Team</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Our team of experienced attorneys brings diverse expertise and a
            shared commitment to excellence in legal representation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border transition-all duration-500 transform hover:scale-105 cursor-pointer group ${
                activeMember === index
                  ? "border-amber-500/50 shadow-lg shadow-amber-500/20"
                  : "border-gray-700 hover:border-amber-500/30"
              }`}
              onClick={() =>
                setActiveMember(activeMember === index ? null : index)
              }
            >
              {/* Avatar & Basic Info */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 ${
                    activeMember === index
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                      : "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20"
                  }`}
                >
                  {member.avatar}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 text-sm">{member.role}</p>
                  <p className="text-blue-300 text-xs">{member.experience}</p>
                </div>
              </div>

              {/* Education & Quick Stats */}
              <div className="mb-6">
                <p className="text-blue-200 text-sm mb-3">{member.education}</p>
                <div className="flex flex-wrap gap-2">
                  {member.achievements.slice(0, 2).map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-500/20"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="mb-6">
                <h4 className="text-white text-sm font-medium mb-3">
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 3).map((expertise, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-900/20 text-blue-300 text-xs rounded border border-blue-700/30"
                    >
                      {expertise}
                    </span>
                  ))}
                  {member.expertise.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      +{member.expertise.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Expanded Details */}
              {activeMember === index && (
                <div className="mt-6 pt-6 border-t border-amber-500/20 animate-fadeIn">
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-amber-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="text-blue-300 text-sm">
                        {member.contact}
                      </span>
                    </div>
                    <button className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 py-2 px-4 rounded-lg transition-all duration-300 border border-amber-500/20 hover:border-amber-500/30">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              )}

              {/* View Profile Button */}
              {activeMember !== index && (
                <div className="text-center">
                  <button className="text-amber-400 text-sm hover:text-amber-300 transition-colors duration-300">
                    View Profile →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              6+
            </div>
            <div className="text-blue-200 text-sm">Legal Experts</div>
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
              15+
            </div>
            <div className="text-blue-200 text-sm">Legal Awards</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-blue-200 text-sm">Team Availability</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-blue-600/10 rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-light text-white mb-4">
              Ready to{" "}
              <span className="text-amber-400">Work with Our Team?</span>
            </h3>
            <p className="text-blue-200 mb-6 max-w-xl mx-auto">
              Schedule a consultation with one of our expert attorneys and
              discover how we can help you achieve your legal goals.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersGrid;
