import { useEffect, useState } from "react";

const TestimonialsHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "S Nil Roy & Associates provided exceptional legal guidance during our company's merger. Their expertise saved us both time and resources.",
      author: "Rajesh Mehta",
      role: "Business Owner",
      case: "Corporate Merger",
    },
    {
      text: "I was facing a complex property dispute that seemed impossible to resolve. The team navigated the legal complexities with skill and determination.",
      author: "Priya Sharma",
      role: "Real Estate Investor",
      case: "Property Dispute",
    },
    {
      text: "Their intellectual property protection services are outstanding. They helped me secure patents and provided ongoing counsel as my business grew.",
      author: "Anil Kapoor",
      role: "Entrepreneur",
      case: "IP Protection",
    },
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "500+", label: "Happy Clients" },
    { number: "8+", label: "Years of Trust" },
    { number: "24/7", label: "Client Support" },
  ];

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
              CLIENT TESTIMONIALS
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 max-w-4xl">
            <span className="text-white">What Our</span>
            <span className="block mt-3">
              <span className="text-amber-400 font-serif italic">
                Clients Say
              </span>
            </span>
          </h1>

          {/* Animated testimonial */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-amber-500/20 relative">
              {/* Quote icon */}
              <div className="absolute top-4 left-4 text-4xl text-amber-400 opacity-30">
                "
              </div>

              <div className="text-xl md:text-2xl text-blue-200 font-light leading-relaxed mb-6 transition-all duration-500">
                "{testimonials[currentTestimonial].text}"
              </div>

              <div className="border-t border-amber-500/20 pt-6">
                <h3 className="text-white font-semibold text-lg">
                  {testimonials[currentTestimonial].author}
                </h3>
                <p className="text-amber-400 text-sm">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-blue-300 text-xs mt-1">
                  {testimonials[currentTestimonial].case}
                </p>
              </div>

              {/* Rating stars */}
              <div className="absolute bottom-4 right-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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

      {/* Testimonial navigation dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
              currentTestimonial === index
                ? "bg-amber-400 w-6"
                : "bg-amber-400/30"
            }`}
            onClick={() => setCurrentTestimonial(index)}
          />
        ))}
      </div>

      {/* Client logos/avatars decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent flex justify-center items-end">
        <div className="flex space-x-6 mb-4">
          {["RM", "PS", "AK", "NK", "RK", "AP"].map((initials, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-400 font-semibold border border-amber-500/20 hover:bg-amber-500/20 transition-all duration-300"
            >
              {initials}
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
          <h3 className="text-white font-semibold mb-4 text-center">
            Why Clients Trust Us
          </h3>
          <div className="space-y-3">
            {[
              "✓ 12+ Years Experience",
              "✓ 98% Success Rate",
              "✓ Confidentiality Guaranteed",
              "✓ Personalized Approach",
              "✓ 24/7 Availability",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-2 rounded-lg bg-gray-700/30"
              >
                <span className="text-amber-400 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
