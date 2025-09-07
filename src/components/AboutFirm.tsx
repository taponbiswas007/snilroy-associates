import Image from "next/image";
import { useState, useEffect } from "react";

const AboutFirm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "500+", label: "Cases Handled" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Client Support" },
  ];

  return (
    <section className="py-16 bg-black px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-900 rounded-full mix-blend-soft-light filter blur-xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20 transform translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image/Placeholder */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
                    <span className="text-3xl text-white font-bold">SNR</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    S Nil Roy & Associates
                  </h3>
                  <p className="text-blue-300">Established 2015</p>
                </div>
                {/* Replace with actual image when available */}
                <Image
                  src="/owner.webp"
                  alt="S Nil Roy & Associates Law Firm"
                  layout="fill"
                  objectFit="fill"
                />
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-gray-900 py-3 px-6 rounded-lg shadow-lg">
              <span className="font-bold">Trusted Legal Partners</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-amber-400">Our Firm</span>
            </h2>

            <p className="text-blue-200 mb-6 leading-relaxed">
              {`S Nil Roy & Associates was established in 2015 with a commitment
              to providing exceptional legal services with integrity, expertise,
              and personalized attention to each client's unique needs.`}
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              {`Led by Adv. Sree Nilmadhob Roy, LLB (Hon's), LLM, our firm brings
              together extensive legal knowledge and practical experience to
              deliver effective solutions for our clients' most complex legal
              challenges. We believe in building long-term relationships based
              on trust and successful outcomes.`}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-800 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700"
                >
                  <p className="text-3xl font-bold text-amber-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-amber-500 p-2 rounded-lg mr-4">
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
                    <h4 className="text-white font-medium">Integrity</h4>
                    <p className="text-gray-400 text-sm">
                      Uncompromising ethical standards in all we do
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 p-2 rounded-lg mr-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Excellence</h4>
                    <p className="text-gray-400 text-sm">
                      Commitment to the highest quality legal representation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;
