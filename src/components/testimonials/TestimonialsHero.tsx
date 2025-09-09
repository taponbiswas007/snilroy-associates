"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ Static arrays moved outside so they don't trigger eslint warnings
const testimonials = [
  {
    text: "S Nil Roy & Associates provided exceptional legal guidance during our company's merger. Their expertise saved us both time and resources.",
    author: "Tapon Sarkar",
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
    author: "Anil Roy",
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

export default function TestimonialsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); // ✅ no deps warning now

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl lg:text-5xl font-light mb-6">
            What Our{" "}
            <span className="text-yellow-400 font-semibold">Clients Say</span>
          </h2>

          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-2xl shadow-xl p-8 relative"
          >
            {/* Testimonial text */}
            <p className="text-blue-200 text-sm mt-2 line-clamp-3">
              {`"${testimonials[currentTestimonial].text}"`}
            </p>

            {/* Author */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold">
                {testimonials[currentTestimonial].author}
              </h4>
              <p className="text-sm text-gray-400">
                {testimonials[currentTestimonial].role}
              </p>
              <p className="text-sm text-yellow-400">
                {testimonials[currentTestimonial].case}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="flex-1 grid grid-cols-2 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-3xl font-bold text-yellow-400">
                {stat.number}
              </p>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
