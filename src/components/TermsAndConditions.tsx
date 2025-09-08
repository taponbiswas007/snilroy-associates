import { useState, useEffect } from "react";

const TermsAndConditions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "services", title: "Legal Services" },
    { id: "client-responsibilities", title: "Client Responsibilities" },
    { id: "fees-payments", title: "Fees & Payments" },
    { id: "confidentiality", title: "Confidentiality" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "limitation-liability", title: "Limitation of Liability" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes-terms", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              LEGAL DOCUMENT
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Terms &{" "}
            <span className="text-amber-400 font-serif italic">Conditions</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-amber-500/20">
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-300 text-sm ${
                        activeSection === section.id
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "text-blue-200 hover:text-amber-300 hover:bg-amber-500/5"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Download Button */}
              <div className="mt-6 text-center">
                <button className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 py-3 px-4 rounded-lg transition-all duration-300 border border-amber-500/20 hover:border-amber-500/30">
                  Download PDF Version
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-amber-500/20">
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  1. Introduction
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    Welcome to S Nil Roy & Associates. These Terms and
                    Conditions govern your use of our legal services and our
                    website. By engaging our services or using our website, you
                    agree to be bound by these terms.
                  </p>
                  <p>
                    S Nil Roy & Associates ("we," "us," or "our") is a law firm
                    providing legal services in various practice areas. Our
                    principal office is located at 123 Legal Avenue, Kolkata,
                    West Bengal.
                  </p>
                  <p>
                    These terms constitute a legal agreement between you and S
                    Nil Roy & Associates. Please read them carefully before
                    using our services.
                  </p>
                </div>
              </section>

              {/* Legal Services */}
              <section id="services" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  2. Legal Services
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    We provide legal services in various practice areas
                    including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Corporate Law and Business Advisory</li>
                    <li>Criminal Defense and Litigation</li>
                    <li>Family Law and Domestic Matters</li>
                    <li>Real Estate and Property Law</li>
                    <li>Intellectual Property Protection</li>
                    <li>Civil Litigation and Dispute Resolution</li>
                  </ul>
                  <p>
                    All legal services are provided by qualified advocates
                    practicing in India. The specific scope of services will be
                    detailed in a separate engagement letter for each matter.
                  </p>
                </div>
              </section>

              {/* Client Responsibilities */}
              <section id="client-responsibilities" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  3. Client Responsibilities
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>As our client, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Provide complete and accurate information relevant to your
                      legal matter
                    </li>
                    <li>
                      Respond promptly to our requests for information or
                      documentation
                    </li>
                    <li>
                      Make timely payments as agreed in our fee arrangement
                    </li>
                    <li>
                      Follow our legal advice and keep us informed of any
                      developments
                    </li>
                    <li>
                      Maintain the confidentiality of any legal strategies
                      discussed
                    </li>
                  </ul>
                </div>
              </section>

              {/* Fees & Payments */}
              <section id="fees-payments" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  4. Fees & Payments
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    Our fees are based on the complexity of the matter, time
                    required, and other relevant factors. We offer various fee
                    arrangements:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Hourly Rates:</strong> Based on time spent on your
                      matter
                    </li>
                    <li>
                      <strong>Fixed Fees:</strong> Agreed upon for specific
                      services
                    </li>
                    <li>
                      <strong>Retainer Agreements:</strong> For ongoing legal
                      services
                    </li>
                    <li>
                      <strong>Contingency Fees:</strong> Where permitted by law
                    </li>
                  </ul>
                  <p>
                    All fees are exclusive of taxes, court fees, and other
                    third-party expenses. Payment terms will be specified in our
                    engagement letter.
                  </p>
                </div>
              </section>

              {/* Confidentiality */}
              <section id="confidentiality" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  5. Confidentiality
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    We maintain strict confidentiality regarding all client
                    information in accordance with the Advocates Act, 1961 and
                    professional conduct rules. However, confidentiality may be
                    limited by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your authorization to disclose information</li>
                    <li>Legal requirements or court orders</li>
                    <li>Prevention of imminent harm or illegal activities</li>
                    <li>Fee collection proceedings</li>
                  </ul>
                </div>
              </section>

              {/* Additional sections would continue here */}

              {/* Contact Information */}
              <section id="contact">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  10. Contact Information
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    For questions about these Terms and Conditions, please
                    contact us:
                  </p>
                  <div className="bg-gray-800/30 rounded-lg p-6 border border-amber-500/10">
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
                            strokeWidth="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <span>+88 01740 106009</span>
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
                            strokeWidth="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span>advocatesnilroy@gmail.com</span>
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
                            strokeWidth="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
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
              </section>

              {/* Acceptance */}
              <div className="mt-16 pt-8 border-t border-amber-500/20">
                <p className="text-blue-200 text-sm text-center">
                  By using our services, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
