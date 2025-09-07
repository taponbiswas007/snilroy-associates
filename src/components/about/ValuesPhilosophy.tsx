import { useState, useEffect } from "react";

const ValuesPhilosophy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty with every client.",
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
      color: "from-amber-500 to-amber-300",
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest quality in legal representation, continuously improving our skills and knowledge.",
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
      color: "from-blue-500 to-blue-300",
    },
    {
      title: "Client Focus",
      description:
        "Our clients are at the heart of everything we do. We provide personalized attention and tailored solutions.",
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
      color: "from-amber-500 to-amber-300",
    },
    {
      title: "Innovation",
      description:
        "We embrace modern legal approaches and technology to provide efficient and effective solutions.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      ),
      color: "from-blue-500 to-blue-300",
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
              OUR PHILOSOPHY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 max-w-3xl mx-auto">
            The Principles That{" "}
            <span className="text-amber-400 font-serif italic">
              Guide Our Practice
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            At S Nil Roy & Associates, our approach to law is built on a
            foundation of core values that define who we are and how we serve
            our clients.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Values Navigation */}
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group ${
                    activeValue === index
                      ? "bg-gradient-to-r from-amber-500/10 to-blue-600/10 border-amber-500/30 shadow-lg shadow-amber-500/10"
                      : "bg-gray-800/50 border-gray-700 hover:border-amber-500/20"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${value.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{value.icon}</div>
                    </div>
                    <h3
                      className={`text-xl font-semibold transition-colors duration-300 ${
                        activeValue === index
                          ? "text-amber-400"
                          : "text-white group-hover:text-amber-300"
                      }`}
                    >
                      {value.title}
                    </h3>
                  </div>
                  {activeValue === index && (
                    <p className="text-blue-200 mt-4 leading-relaxed">
                      {value.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Philosophy Content */}
          <div className="lg:w-3/5">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-amber-500/20 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8">
                  Our{" "}
                  <span className="text-amber-400 font-serif italic">
                    Philosophy
                  </span>{" "}
                  of Practice
                </h3>

                <div className="space-y-6">
                  <p className="text-lg text-blue-200 leading-relaxed">
                    {` We believe that exceptional legal service goes beyond
                    technical expertise. It requires a deep understanding of our
                    clients' needs, a commitment to their success, and the
                    wisdom to navigate complex legal challenges with clarity and
                    purpose.`}
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our philosophy is rooted in the principle that every client
                    deserves not just representation, but a true partnership. We
                    take the time to understand your unique situation, goals,
                    and concerns, ensuring that our legal strategies are
                    tailored specifically to your needs.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Through continuous learning, innovation, and an unwavering
                    commitment to ethical practice, we strive to set new
                    standards in legal excellence while maintaining the personal
                    touch that has defined our firm since its founding.
                  </p>
                </div>

                {/* Highlighted quote */}
                <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <div className="flex items-start">
                    <div className="text-amber-400 mr-4 text-2xl">{`"`}</div>
                    <div>
                      <p className="text-white font-serif italic text-lg">
                        True legal excellence is measured not just by cases won,
                        but by trust earned and lives positively impacted
                        through dedicated representation.
                      </p>
                      <div className="w-16 h-0.5 bg-amber-400 my-4"></div>
                      <p className="text-amber-400">Adv. Sree Nilmadhob Roy</p>
                    </div>
                    <div className="text-amber-400 ml-4 text-2xl">{`"`}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  100%
                </div>
                <p className="text-blue-200">Ethical Compliance</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  24/7
                </div>
                <p className="text-blue-200">Client Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesPhilosophy;
