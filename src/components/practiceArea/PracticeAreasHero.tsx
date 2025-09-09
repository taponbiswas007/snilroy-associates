import { useEffect, useState } from "react";

// ✅ Move static arrays outside the component
const practiceAreas = [
  "Corporate Law",
  "Criminal Defense",
  "Family Law",
  "Real Estate Law",
  "Intellectual Property",
  "Civil Litigation",
];

const stats = [
  { number: "500+", label: "Cases Handled" },
  { number: "98%", label: "Success Rate" },
  { number: "8+", label: "Practice Areas" },
  { number: "12+", label: "Years Experience" },
];

const PracticeAreasHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPractice, setCurrentPractice] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate practice areas
    const interval = setInterval(() => {
      setCurrentPractice((prev) => (prev + 1) % practiceAreas.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // ✅ safe to keep empty now

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-900/10 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div
          className={`flex flex-col items-center justify-center text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Elegant badge */}
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              LEGAL EXPERTISE
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 max-w-4xl">
            <span className="text-white">Our Legal</span>
            <span className="block mt-3">
              <span className="text-amber-400 font-serif italic">
                Practice Areas
              </span>
            </span>
          </h1>

          {/* Animated practice area text */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <div className="text-2xl md:text-3xl text-blue-200 font-light transition-all duration-500">
              {practiceAreas[currentPractice]}
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-200 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal solutions across multiple practice areas,
            delivered with expertise, integrity, and personalized attention to
            your unique needs.
          </p>

          {/* Decorative separator */}
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-12"></div>

          {/* Practice Area Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 transition-all duration-300 group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-8 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>

      {/* Floating practice area dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {practiceAreas.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentPractice === index ? "bg-amber-400 w-6" : "bg-amber-400/30"
            }`}
          />
        ))}
      </div>

      {/* Legal icons decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent flex justify-center items-end">
        <div className="flex space-x-8 mb-4">
          {["⚖️", "📝", "🏢", "👨‍👩‍👧‍👦", "🏠", "🔍"].map((icon, index) => (
            <div
              key={index}
              className="text-2xl opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Quick practice area badges */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
          <h3 className="text-white font-semibold mb-4 text-center">
            Practice Areas
          </h3>
          <div className="space-y-3">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className={`flex items-center p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                  currentPractice === index
                    ? "bg-amber-500/10 border border-amber-500/30"
                    : "bg-gray-700/30 hover:bg-amber-500/5"
                }`}
                onClick={() => setCurrentPractice(index)}
              >
                <div
                  className={`w-2 h-2 rounded-full mr-3 ${
                    currentPractice === index
                      ? "bg-amber-400"
                      : "bg-amber-400/30"
                  }`}
                ></div>
                <span
                  className={`text-sm transition-colors duration-300 ${
                    currentPractice === index
                      ? "text-amber-400"
                      : "text-blue-200"
                  }`}
                >
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasHero;
