import { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    setIsVisible(true);
    
    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 500);
    
    return () => clearTimeout(textTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-600 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slower"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className={`flex flex-col md:flex-row items-center justify-between transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white">S Nil Roy &</span>
              <span className="block text-amber-400 mt-2">Associates</span>
            </h1>
            
            <div className={`mb-8 transition-opacity duration-1000 delay-300 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-xl md:text-2xl text-blue-300 font-light mb-4">
                Adv. Sree Nilmadhob Roy
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                LLB (Hon's), LLM
              </p>
              <p className="text-gray-400 max-w-md mx-auto md:mx-0">
                Providing expert legal counsel and representation since 2015. 
                Your trusted partner for navigating complex legal challenges.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-opacity duration-1000 delay-500 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
                Schedule Consultation
              </button>
              <button className="border border-blue-400 hover:border-amber-400 text-blue-300 hover:text-amber-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Practice Areas
              </button>
            </div>
          </div>
          
          {/* Image/Placeholder */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-blue-900 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">SNR</span>
                {/* Replace with actual image when available */}
                { <Image 
                  src="/owner.webp" 
                  alt="Adv. Sree Nilmadhob Roy" 
                  layout="fill"
                  objectFit="cover"
                /> }
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;