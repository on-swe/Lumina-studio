import { useState } from "react";

const CTA = function () {
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
    <section className="my-8">
      <div className="container mx-auto max-w-7xl">
        <div className="rounded-xl overflow-hidden relative">
          <div className="bg-gradient-to-r from-[#7e22ce]/90 to-[#7e22ce]/80 text-white p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4 animate-pulse">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/90">
                  Join hundreds of companies who have accelerated their growth
                  with our innovative solutions and strategic expertise.
                </p>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-[#7e22ce] px-8 py-3 rounded-full font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
