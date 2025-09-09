"use client";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  category: string;
  rating: number;
  text: string;
  case_name: string;
  duration: string;
  outcome: string;
  avatar: string;
}

const TestimonialsGrid = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/testimonials");
        if (!res.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Define categories based on available testimonials
  const categories = [
    { id: "all", label: "All Testimonials", count: testimonials.length },
    {
      id: "corporate",
      label: "Corporate Law",
      count: testimonials.filter((t) => t.category === "corporate").length,
    },
    {
      id: "property",
      label: "Real Estate",
      count: testimonials.filter((t) => t.category === "property").length,
    },
    {
      id: "ip",
      label: "Intellectual Property",
      count: testimonials.filter((t) => t.category === "ip").length,
    },
    {
      id: "family",
      label: "Family Law",
      count: testimonials.filter((t) => t.category === "family").length,
    },
    {
      id: "criminal",
      label: "Criminal Defense",
      count: testimonials.filter((t) => t.category === "criminal").length,
    },
  ];

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  // Define category icons with type safety
  const categoryIcons: Record<string, string> = {
    corporate: "🏢",
    property: "🏠",
    ip: "📝",
    family: "👨‍👩‍👧‍👦",
    criminal: "⚖️",
  };

  // Safe icon access function
  const getCategoryIcon = (category: string): string => {
    return categoryIcons[category] || "⚖️"; // Default icon
  };

  if (loading) {
    return (
      <section className="py-24 bg-black px-4 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
              <span className="text-amber-400 text-sm font-light tracking-wider">
                LOADING
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Loading{" "}
              <span className="text-amber-400 font-serif italic">
                Testimonials
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-black px-4 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-8">
              <span className="text-red-400 text-sm font-light tracking-wider">
                ERROR
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Unable to{" "}
              <span className="text-red-400 font-serif italic">
                Load Testimonials
              </span>
            </h2>
            <p className="text-blue-200 text-lg mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-24 bg-black px-4 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
              <span className="text-amber-400 text-sm font-light tracking-wider">
                NO TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              No{" "}
              <span className="text-amber-400 font-serif italic">
                Testimonials Yet
              </span>
            </h2>
            <p className="text-blue-200 text-lg mb-6">
              Be the first to share your experience!
            </p>
            <a
              href="/rating"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-amber-500/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              CLIENT SUCCESS STORIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Client{" "}
            <span className="text-amber-400 font-serif italic">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            {`Read what our clients have to say about their experiences with our
            legal services and how we've helped them achieve successful
            outcomes.`}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-amber-500 border-amber-500 text-gray-900 font-semibold"
                  : "bg-gray-800/50 border-amber-500/30 text-blue-200 hover:bg-amber-500/10 hover:border-amber-500/50"
              }`}
            >
              <span>{category.label}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? "bg-gray-900/30 text-white"
                    : "bg-amber-500/10 text-amber-400"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border transition-all duration-500 transform hover:scale-105 cursor-pointer group ${
                selectedTestimonial === index
                  ? "border-amber-500/50 shadow-lg shadow-amber-500/20"
                  : "border-gray-700 hover:border-amber-500/30"
              }`}
              onClick={() => setSelectedTestimonial(index)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                      selectedTestimonial === index
                        ? "bg-amber-500 text-white"
                        : "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20"
                    }`}
                  >
                    <span className="font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-amber-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-2xl">
                  {getCategoryIcon(testimonial.category)}
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-blue-200 text-sm mb-6 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {`"${testimonial.text}"`}
              </p>

              {/* Case Details */}
              {testimonial.case_name && (
                <div className="border-t border-amber-500/20 pt-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-amber-400">
                      {testimonial.case_name}
                    </span>
                    {testimonial.duration && (
                      <span className="text-blue-300">
                        {testimonial.duration}
                      </span>
                    )}
                  </div>
                  {testimonial.outcome && (
                    <p className="text-green-400 text-xs mt-2">
                      {testimonial.outcome}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              {testimonials.length}+
            </div>
            <div className="text-blue-200 text-sm">Satisfied Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              {Math.round(
                testimonials.reduce((acc, t) => acc + t.rating, 0) /
                  testimonials.length
              )}
              /5
            </div>
            <div className="text-blue-200 text-sm">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              {new Set(testimonials.map((t) => t.category)).size}
            </div>
            <div className="text-blue-200 text-sm">Practice Areas</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              24h
            </div>
            <div className="text-blue-200 text-sm">Avg Response Time</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-blue-600/10 rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-light text-white mb-4">
              Ready to <span className="text-amber-400">Share Your Story?</span>
            </h3>
            <p className="text-blue-200 mb-6 max-w-xl mx-auto">
              Join our growing list of satisfied clients. Share your experience
              and help others discover the quality of our legal services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/rating"
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 inline-block text-center"
              >
                Share Your Testimonial
              </a>
              <a
                href="/contact"
                className="border border-amber-500/30 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
