import { useState, useEffect } from "react";

const FoundersStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const milestones = [
    {
      year: "2010",
      title: "LLB (Honours)",
      description: "Graduated with honors in Law",
    },
    {
      year: "2014",
      title: "LLM Completed",
      description: "Master of Laws degree earned",
    },
    {
      year: "2015",
      title: "Firm Established",
      description: "Founded S Nil Roy & Associates",
    },
    {
      year: "2023",
      title: "500+ Cases",
      description: "Successfully handled cases",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row gap-16 items-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image/Portrait Section */}
          <div className="lg:w-2/5">
            <div className="relative group">
              {/* Main portrait container */}
              <div className="relative z-10 h-96 w-full bg-gradient-to-br from-amber-400/20 to-blue-600/20 rounded-2xl overflow-hidden border border-amber-500/30">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                      <img
                        src="/owner.webp"
                        alt="Adv. Sree Nilmadhob Roy Portrait"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-serif text-white italic mb-2">
                      Adv. Sree Nilmadhob Roy
                    </h3>
                    <p className="text-blue-300">LLB (Hon's), LLM</p>
                    <div className="w-16 h-0.5 bg-amber-400 mx-auto my-4"></div>
                    <p className="text-amber-400 text-sm">Founding Partner</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5">
            {/* Section Header */}
            <div className="mb-12">
              <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-amber-400 text-sm font-light tracking-wider">
                  THE FOUNDER'S JOURNEY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                The Vision Behind{" "}
                <span className="text-amber-400 font-serif italic">
                  Our Excellence
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300"></div>
            </div>

            {/* Story Content */}
            <div className="space-y-6 mb-12">
              <p className="text-xl text-blue-200 leading-relaxed">
                Adv. Sree Nilmadhob Roy established the firm in 2015 with a
                singular vision: to provide exceptional legal services that
                combine deep expertise with personalized client care.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With an LLB (Honours) and LLM degree, Adv. Roy brings both
                academic excellence and practical wisdom to every case. His
                journey in law began over a decade ago, driven by a passion for
                justice and a commitment to making the legal system accessible
                to all.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Today, that vision has grown into S Nil Roy & Associates—a firm
                known for its integrity, expertise, and unwavering dedication to
                client success. We believe that every client deserves not just
                representation, but a partnership built on trust and results.
              </p>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-800/50 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  <h4 className="text-white font-semibold mb-1">
                    {milestone.title}
                  </h4>
                  <p className="text-blue-200 text-sm">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-white font-serif italic">
                  "Justice is not just a profession, it's a passion."
                </p>
                <p className="text-amber-400 text-sm">
                  - Adv. Sree Nilmadhob Roy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersStory;
