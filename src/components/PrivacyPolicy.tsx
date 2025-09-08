import { useState, useEffect } from "react";

const PrivacyPolicy = () => {
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
    { id: "information-collection", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Information" },
    { id: "data-sharing", title: "Data Sharing & Disclosure" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "children-privacy", title: "Children's Privacy" },
    { id: "changes", title: "Changes to Policy" },
    { id: "contact", title: "Contact Us" },
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
              PRIVACY POLICY
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Privacy{" "}
            <span className="text-amber-400 font-serif italic">Policy</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Effective Date:{" "}
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
                  Sections
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

              {/* Quick Contact */}
              <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-amber-500/10">
                <h4 className="text-white text-sm font-semibold mb-2">
                  Privacy Questions?
                </h4>
                <p className="text-blue-200 text-xs mb-3">
                  Contact our Data Protection Officer
                </p>
                <button className="w-full text-amber-400 text-xs py-2 px-3 bg-amber-500/5 rounded border border-amber-500/10 hover:bg-amber-500/10 transition-colors">
                  dpo@snilroy.com
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
                    At S Nil Roy & Associates ("we," "us," or "our"), we are
                    committed to protecting your privacy and personal
                    information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you use
                    our legal services or visit our website.
                  </p>
                  <p>
                    We comply with the Information Technology Act, 2000 and
                    other applicable data protection laws in India. By using our
                    services, you consent to the practices described in this
                    policy.
                  </p>
                  <div className="bg-amber-500/5 border-l-4 border-amber-500 p-4 rounded">
                    <p className="text-amber-200 text-sm">
                      <strong>Note:</strong> As a law firm, we are bound by
                      attorney-client privilege and additional confidentiality
                      obligations under the Advocates Act, 1961.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information Collection */}
              <section id="information-collection" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  2. Information We Collect
                </h2>
                <div className="space-y-6 text-blue-200 leading-relaxed">
                  <div>
                    <h3 className="text-white font-semibold mb-3">
                      Personal Information
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Contact information (name, email, phone, address)</li>
                      <li>
                        Identification documents (for client verification)
                      </li>
                      <li>Case-related information and documentation</li>
                      <li>Financial information for billing purposes</li>
                      <li>Professional information if applicable</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3">
                      Automatically Collected Information
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Website usage data through cookies</li>
                      <li>Pages visited and time spent on our site</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use */}
              <section id="how-we-use" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  3. How We Use Information
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>We use your information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Providing legal services and representation</li>
                    <li>Client communication and case management</li>
                    <li>Billing and payment processing</li>
                    <li>Legal compliance and regulatory requirements</li>
                    <li>Website improvement and user experience</li>
                    <li>Marketing communications (with consent)</li>
                    <li>Conflict checks and professional obligations</li>
                  </ul>
                </div>
              </section>

              {/* Data Sharing */}
              <section id="data-sharing" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  4. Data Sharing & Disclosure
                </h2>
                <div className="space-y-6 text-blue-200 leading-relaxed">
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Courts, tribunals, and regulatory authorities as required
                      by law
                    </li>
                    <li>Opposing counsel and parties in legal proceedings</li>
                    <li>Expert witnesses and consultants on your case</li>
                    <li>
                      Service providers (IT, accounting, etc.) under
                      confidentiality agreements
                    </li>
                    <li>Successor firms in case of merger or acquisition</li>
                  </ul>

                  <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-blue-200 text-sm">
                      <strong>Legal Requirement:</strong> We may disclose
                      information when required by law, court order, or to
                      protect our rights, property, or safety.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  5. Data Security
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    We implement appropriate security measures to protect your
                    personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of sensitive data</li>
                    <li>Secure access controls and authentication</li>
                    <li>Regular security assessments and updates</li>
                    <li>
                      Confidentiality agreements with employees and contractors
                    </li>
                    <li>Secure document storage and disposal procedures</li>
                  </ul>
                  <p>
                    While we strive to protect your information, no electronic
                    transmission or storage is 100% secure. We cannot guarantee
                    absolute security.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  6. Your Rights
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>
                      Request deletion of your information (subject to legal
                      requirements)
                    </li>
                    <li>Object to certain processing activities</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Request data portability where applicable</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact our Data Protection
                    Officer at dpo@snilroy.com.
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  7. Cookies & Tracking
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Enhance website functionality and user experience</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Remember your preferences and settings</li>
                    <li>Provide personalized content</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings.
                    However, disabling cookies may affect website functionality.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section id="children-privacy" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  8. Children's Privacy
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    Our services are not directed at children under 18 years of
                    age. We do not knowingly collect personal information from
                    children. If you believe we have collected information from
                    a child, please contact us immediately.
                  </p>
                </div>
              </section>

              {/* Changes */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  9. Changes to Policy
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    We may update this Privacy Policy periodically. The updated
                    version will be posted on our website with the effective
                    date. We encourage you to review this policy regularly.
                  </p>
                  <p>
                    Significant changes will be communicated to current clients
                    through appropriate channels.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact">
                <h2 className="text-2xl font-light text-amber-400 mb-6">
                  10. Contact Us
                </h2>
                <div className="space-y-4 text-blue-200 leading-relaxed">
                  <p>
                    For questions about this Privacy Policy or our data
                    practices, please contact:
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
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                          ></path>
                        </svg>
                        <span>Data Protection Officer</span>
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
                        <span>dpo@snilroy.com</span>
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
                        <span>
                          123 Legal Avenue, Kolkata, West Bengal 700001
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Acceptance */}
              <div className="mt-16 pt-8 border-t border-amber-500/20">
                <p className="text-blue-200 text-sm text-center">
                  By using our services, you acknowledge that you have read and
                  understood this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
