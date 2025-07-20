import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { BlurText } from "@/components/imported-components/blur-text";
import { useState } from "react";
import { motion } from "framer-motion";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <section
      id="home"
      className="w-full relative overflow-hidden bg-gradient-to-b from-[#7e22ce]/10 via-[#f59e0b]/5 to-transparent pt-20 min-h-[100vh] overflow-x-hidden"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto flex flex-col items-center text-center">
          <span className="text-[#7e22ce] font-medium mb-2 bg-[#7e22ce]/10 px-4 py-1 rounded-full animate-pulse border-[1px] border-[solid] border-[#7e22ce] px-8 py-2">
            Welcome to Lumina Studio
          </span>
          <h1 className="text-[85px] max-[768px]:text-[4.75rem] font-bold text-gray-900 mb-6 leading-none text-center max-[405px]:text-[2.75rem]">
            <BlurText
              text="Capturing Moments"
              delay={100}
              className="block mb-2"
            />
            <span
              className={`${allura.className} flex items-center justify-center font-serif text-[#7e22ce] italic`}
            >
              <BlurText text="Creating Memories" delay={150} className="mr-4" />
              <motion.img
                src="/hero-sm.jpg"
                alt="Lumina Studio"
                width={256}
                height={64}
                className="object-cover h-[64px] rounded-[32px]"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </h1>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
            We specialize in professional photography and videography services, 
            transforming ordinary moments into extraordinary visual stories that 
            capture the essence of your brand and special occasions.
          </p>
          <div className="flex flex-col gap-4 xs:flex-col sm:flex-row sm:items-center sm:justify-center gap-6 animate-fade-in-up animation-delay-400 w-full">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#7e22ce] text-white px-8 py-3 rounded-full font-medium hover:bg-purple-800 hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center shadow-lg shadow-[#7e22ce]/20 hover:shadow-[#7e22ce]/30"
            >
              Book Your Session
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="bg-white border-2 border-[#7e22ce] text-gray-700 hover:text-[#7e22ce] px-8 py-3 rounded-full flex items-center font-medium transition-all duration-300 whitespace-nowrap hover:scale-105 hover:border-purple-800 group h-[50px]">
              <div className="w-8 h-8 flex items-center justify-center bg-[#7e22ce]/10 rounded-full mr-2 group-hover:bg-[#7e22ce]/20">
                <Play className="w-4 h-4 text-[#7e22ce]" />
              </div>
              View Showreel
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Shapes with Better Movement */}
      <div className="absolute top-8 right-4 sm:top-20 sm:right-20 animate-float-1 opacity-15 pointer-events-none">
        <div className="w-24 h-24 sm:w-48 sm:h-48 border-4 border-[#7e22ce] rounded-full"></div>
      </div>
      <div className="absolute top-24 right-1/4 sm:top-40 sm:right-1/4 animate-float-2 opacity-15 pointer-events-none">
        <div className="w-20 h-20 sm:w-40 sm:h-40 border-4 border-[#f59e0b] rotate-45"></div>
      </div>
      <div className="absolute top-1/4 left-4 sm:top-1/3 sm:left-20 animate-float-4 opacity-15 pointer-events-none">
        <div className="w-20 h-20 sm:w-40 sm:h-40 border-4 border-[#f59e0b] rotate-12"></div>
      </div>
      <div className="absolute top-24 left-1/4 sm:top-40 sm:left-1/4 animate-float-5 opacity-15 pointer-events-none">
        <div className="w-24 h-24 sm:w-48 sm:h-48 border-4 border-[#7e22ce] rounded-full"></div>
      </div>
      <div className="absolute top-40 left-1/2 sm:top-60 sm:left-1/2 animate-float-6 opacity-15 pointer-events-none">
        <div className="w-24 h-24 sm:w-48 sm:h-48 border-4 border-[#f59e0b] rotate-45"></div>
      </div>
      {/* Rotated Image Gallery */}
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 -mt-8 sm:-mt-16 relative z-20">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {[
            {
              rotation: "-rotate-12",
              delay: "0s",
              url: "/hero-gallery/img-1.jpg",
            },
            {
              rotation: "rotate-6",
              delay: "0.2s",
              url: "/hero-gallery/img-2.jpg",
            },
            {
              rotation: "-rotate-3",
              delay: "0.4s",
              url: "/hero-gallery/img-3.jpg",
            },
            {
              rotation: "rotate-12",
              delay: "0.6s",
              url: "/hero-gallery/img-4.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative m-3 transform hover:scale-110 transition-all duration-500 ${item.rotation} hover:rotate-0 animate-slide-in-rotate `}
              style={{ animationDelay: item.delay }}
            >
              <Image
                src={item.url}
                alt={`Portfolio showcase ${i + 1}`}
                width={128}
                height={128}
                className={`object-cover shadow-lg rounded-lg  w-64 h-64 ${
                  i % 2 == 0 ? "rotate-[5deg]" : "rotate-[-5deg]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
