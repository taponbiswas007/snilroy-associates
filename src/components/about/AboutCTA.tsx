import { useState, useEffect } from "react";
import ContactForm from "../ContactForm";

const AboutCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-black to-blue-900 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-600/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              GET STARTED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to{" "}
            <span className="text-amber-400 font-serif italic">
              Work With Us?
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            {`Now that you've learned about our expertise and success stories,
            let's discuss how we can help with your legal needs.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-white mb-8">
              Why <span className="text-amber-400">Choose Us</span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-500/10 p-3 rounded-lg mr-4 border border-amber-500/20">
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
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Free Initial Consultation
                  </h4>
                  <p className="text-blue-200">
                    Discuss your case with no obligation or commitment
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500/10 p-3 rounded-lg mr-4 border border-amber-500/20">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Confidential Assessment
                  </h4>
                  <p className="text-blue-200">
                    Your information is protected by attorney-client privilege
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500/10 p-3 rounded-lg mr-4 border border-amber-500/20">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Expert Legal Strategy
                  </h4>
                  <p className="text-blue-200">
                    Personalized approach based on your specific situation
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-amber-500/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">8+</div>
                <div className="text-blue-200 text-xs">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">
                  500+
                </div>
                <div className="text-blue-200 text-xs">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">
                  98%
                </div>
                <div className="text-blue-200 text-xs">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-2 border border-amber-500/20 relative overflow-hidden">
            <ContactForm />
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="text-center mt-16 pt-12 border-t border-amber-500/20">
          <h3 className="text-xl font-light text-white mb-8">
            Prefer to <span className="text-amber-400">Contact Directly?</span>
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <div className="bg-amber-500/10 p-2 rounded-lg mr-3 border border-amber-500/20">
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <span className="text-blue-200">+88 01740 106009</span>
            </div>

            <div className="flex items-center">
              <div className="bg-amber-500/10 p-2 rounded-lg mr-3 border border-amber-500/20">
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <span className="text-blue-200">advocatesnilroy@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
