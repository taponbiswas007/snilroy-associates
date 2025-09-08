import { useEffect, useState, useMemo } from "react";

const ServicesHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  // Use useMemo to memoize the services array so it doesn't change on every render
  const services = useMemo(
    () => [
      "Corporate Law",
      "Criminal Defense",
      "Family Law",
      "Real Estate Law",
      "Intellectual Property",
      "Civil Litigation",
    ],
    []
  );

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate services
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]); // Now we can safely include services.length in dependencies

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
              LEGAL EXCELLENCE
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 max-w-4xl">
            <span className="text-white">Comprehensive</span>
            <span className="block mt-3">
              <span className="text-amber-400 font-serif italic">
                Legal Services
              </span>
            </span>
          </h1>

          {/* Animated service text */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <div className="text-2xl md:text-3xl text-blue-200 font-light transition-all duration-500">
              {services[currentService]}
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-200 font-light mb-12 max-w-2xl leading-relaxed">
            Expert legal solutions tailored to your specific needs, delivered
            with integrity and precision.
          </p>

          {/* Decorative separator */}
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-12"></div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                8+
              </div>
              <div className="text-blue-200 text-sm uppercase tracking-wider">
                Practice Areas
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                500+
              </div>
              <div className="text-blue-200 text-sm uppercase tracking-wider">
                Cases Resolved
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                98%
              </div>
              <div className="text-blue-200 text-sm uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>
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

      {/* Floating service dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {services.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentService === index ? "bg-amber-400 w-6" : "bg-amber-400/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesHero;
