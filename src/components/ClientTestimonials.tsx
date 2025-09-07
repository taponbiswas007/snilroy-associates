import { useState, useEffect } from "react";

const ClientTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Mehta",
      role: "Business Owner",
      content:
        "Adv. Roy provided exceptional legal guidance during my company's merger. His expertise in corporate law saved us both time and resources. I highly recommend S Nil Roy & Associates for any business legal matters.",
      avatar: "RM",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Real Estate Investor",
      content:
        "I was facing a complex property dispute that seemed impossible to resolve. The team at S Nil Roy & Associates navigated the legal complexities with skill and determination. We achieved a favorable outcome I didn't think was possible.",
      avatar: "PS",
      rating: 5,
    },
    {
      id: 3,
      name: "Anil Kapoor",
      role: "Entrepreneur",
      content:
        "Their intellectual property protection services are outstanding. They helped me secure patents for my innovations and provided ongoing counsel as my business grew. Responsive, professional, and truly caring about their clients.",
      avatar: "AK",
      rating: 5,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-900 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-amber-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-900 rounded-full mix-blend-soft-light filter blur-xl opacity-30"></div>

      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="text-amber-400">Testimonials</span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Hear from our clients about their experiences with S Nil Roy &
            Associates
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-800 rounded-xl p-8 mb-8 border border-gray-700 transition-all duration-500 transform ${
                activeTestimonial === index
                  ? "opacity-100 translate-y-0 scale-100 border-amber-500 shadow-lg shadow-amber-500/10"
                  : "opacity-0 absolute inset-0 translate-y-8 scale-95"
              }`}
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
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

              {/* Content */}
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-amber-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-blue-200 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">250+</div>
            <div className="text-blue-200 text-sm">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">15+</div>
            <div className="text-blue-200 text-sm">Legal Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">24h</div>
            <div className="text-blue-200 text-sm">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
