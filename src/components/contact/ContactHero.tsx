import { useEffect, useState } from "react";
import ContactForm from "../ContactForm";

const welcomeMessages = [
  "Let's discuss your legal needs",
  "Get expert legal advice today",
  "Your solution starts with a conversation",
  "We're here to help you succeed",
];
const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate welcome messages
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone Consultation",
      description: "Speak directly with our legal experts",
      action: "+88 01740 106009",
    },
    {
      icon: "✉️",
      title: "Email Us",
      description: "Send us your questions and documents",
      action: "advocatesnilroy@gmail.com",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant support during business hours",
      action: "Start Chat",
    },
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
          className={`flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Elegant badge */}
            <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-amber-400 text-sm font-light tracking-wider">
                GET IN TOUCH
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              <span className="text-white">{`Let's`}</span>
              <span className="block mt-3">
                <span className="text-amber-400 font-serif italic">
                  Connect
                </span>
              </span>
            </h1>

            {/* Animated welcome message */}
            <div className="h-16 mb-8 flex items-center justify-start">
              <div className="text-2xl md:text-3xl text-blue-200 font-light transition-all duration-500">
                {welcomeMessages[currentMessage]}
              </div>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-200 font-light mb-12 leading-relaxed">
              Ready to discuss your legal matters? Our team is here to provide
              expert guidance and personalized solutions for your unique
              situation.
            </p>

            {/* Decorative separator */}
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-12"></div>

            {/* Quick Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center p-4 bg-gray-800/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">
                      {method.title}
                    </h3>
                    <p className="text-blue-200 text-sm">
                      {method.description}
                    </p>
                  </div>
                  <div className="text-amber-400 font-semibold text-sm">
                    {method.action}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="lg:w-1/2">
            <ContactForm />
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

      {/* Floating message dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {welcomeMessages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentMessage === index ? "bg-amber-400 w-6" : "bg-amber-400/30"
            }`}
          />
        ))}
      </div>

      {/* Contact decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent flex justify-center items-end">
        <div className="flex space-x-6 mb-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-4 h-4 bg-amber-500/20 rounded-full border border-amber-500/30 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
