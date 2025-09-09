import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

const ConsultationCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-black px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-amber-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 transform translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row gap-12 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schedule Your{" "}
              <span className="text-amber-400">Free Consultation</span>
            </h2>

            <p className="text-blue-200 mb-6 leading-relaxed">
              Take the first step toward resolving your legal matters. Our team
              at S Nil Roy & Associates is ready to provide expert guidance
              tailored to your specific situation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    30-Minute Free Consultation
                  </h3>
                  <p className="text-gray-400">
                    Discuss your case with no obligation
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Confidential Assessment
                  </h3>
                  <p className="text-gray-400">
                    Your information is always kept private
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Expert Legal Team
                  </h3>
                  <p className="text-gray-400">Experience you can trust</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Directly
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-amber-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span className="text-blue-200">+88 01740 106009</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-amber-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="text-blue-200">
                    advocatesnilroy@gmail.com
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-amber-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="text-blue-200 leading-relaxed">
                    23.23/1, Court House Street, <br />
                    Underground Room No. 3 <br />
                    Dhaka Metropolitan BAR Association <br />
                    Dhaka-1100, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
