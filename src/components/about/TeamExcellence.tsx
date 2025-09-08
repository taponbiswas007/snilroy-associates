import { useState, useEffect } from "react";

const TeamExcellence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Adv. Sree Nilmadhab Roy",
      role: "Founding Partner",
      education: "LLB (Hon's), LLM",
      experience: "12+ Years",
      expertise: ["Corporate Law", "Civil Litigation", "Intellectual Property"],
      description:
        "Leading the firm with exceptional legal acumen and a client-first approach that has built our reputation for excellence.",
      avatar: "SNR",
    },
    {
      name: "Adv. Priya Sharma",
      role: "Senior Associate",
      education: "LLB, LLM (Business Law)",
      experience: "8+ Years",
      expertise: ["Business Law", "Contracts", "Compliance"],
      description:
        "Specializes in corporate governance and business compliance with a track record of successful corporate advisories.",
      avatar: "PS",
    },
    {
      name: "Adv. Arjun Mehta",
      role: "Criminal Defense Specialist",
      education: "LLB, PG Diploma in Criminal Law",
      experience: "9+ Years",
      expertise: ["Criminal Defense", "Bail Matters", "Appeals"],
      description:
        "Known for strategic defense approaches and successful outcomes in complex criminal cases.",
      avatar: "AM",
    },
    {
      name: "Adv. Neha Kapoor",
      role: "Family Law Expert",
      education: "LLB, LLM (Family Law)",
      experience: "7+ Years",
      expertise: ["Divorce", "Child Custody", "Domestic Violence"],
      description:
        "Compassionate yet fierce advocate for family law matters with a focus on amicable resolutions.",
      avatar: "NK",
    },
  ];

  const qualifications = [
    { number: "500+", label: "Cases Handled" },
    { number: "98%", label: "Success Rate" },
    { number: "12+", label: "Combined Experience" },
    { number: "24/7", label: "Client Support" },
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
              LEGAL EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Our{" "}
            <span className="text-amber-400 font-serif italic">Legal Team</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated legal professionals who bring expertise,
            compassion, and results to every case.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Team Members Navigation */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-6">
              {teamMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMember(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group ${
                    activeMember === index
                      ? "bg-gradient-to-r from-amber-500/10 to-blue-600/10 border-amber-500/30 shadow-lg shadow-amber-500/10"
                      : "bg-gray-800/50 border-gray-700 hover:border-amber-500/20"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                        activeMember === index
                          ? "bg-gradient-to-r from-amber-500 to-amber-300 text-white shadow-lg shadow-amber-500/30"
                          : "bg-gray-700 text-amber-400 group-hover:bg-amber-500/20"
                      }`}
                    >
                      <span className="font-bold text-lg">{member.avatar}</span>
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          activeMember === index
                            ? "text-amber-400"
                            : "text-white group-hover:text-amber-300"
                        }`}
                      >
                        {member.name}
                      </h3>
                      <p className="text-blue-200 text-sm">{member.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-amber-400 text-sm font-medium">
                      {member.experience}
                    </span>
                    <span className="text-blue-300 text-sm">
                      {member.education}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 2).map((expertise, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-500/20"
                      >
                        {expertise}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="px-3 py-1 bg-blue-600/10 text-blue-300 text-xs rounded-full border border-blue-600/20">
                        +{member.expertise.length - 2} more
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Member Details */}
          <div className="lg:w-3/5">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-amber-500/20 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                      {teamMembers[activeMember].name}
                    </h3>
                    <p className="text-amber-400 text-lg">
                      {teamMembers[activeMember].role}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 text-xl font-bold mb-1">
                      {teamMembers[activeMember].experience}
                    </div>
                    <div className="text-blue-300 text-sm">Experience</div>
                  </div>
                </div>

                <p className="text-lg text-blue-200 leading-relaxed mb-8">
                  {teamMembers[activeMember].description}
                </p>

                {/* Expertise Areas */}
                <div className="mb-12">
                  <h4 className="text-white font-semibold mb-6 text-lg border-b border-amber-500/30 pb-2">
                    Areas of Expertise
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {teamMembers[activeMember].expertise.map(
                      (expertise, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-gray-800/50 rounded-lg border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
                        >
                          <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
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
                          <span className="text-white text-sm">
                            {expertise}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Qualifications Grid */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {qualifications.map((qualification, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group"
                    >
                      <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {qualification.number}
                      </div>
                      <p className="text-blue-200 text-sm">
                        {qualification.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 inline-flex items-center">
                    Schedule Consultation
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

export default TeamExcellence;
