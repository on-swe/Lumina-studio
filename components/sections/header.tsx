import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Header = function () {
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
    <header className="w-full fixed top-0 z-[50000] backdrop-blur-md">
      <div className="max-w-[90rem] mx-auto">
        <div className="mx-auto px-3 sm:px-4 lg:px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-[#7e22ce] mr-2 font-pacifico cursor-pointer"
            >
              <Image
                src={`/logo/no-bg-violet.png`}
                alt={`Raqeem - رَقيم`}
                width={256}
                height={48}
                className="object-cover h-[48px] w-[256px]"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-800 hover:text-[#7e22ce] font-extrabold transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-[#7e22ce] font-extrabold transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="text-gray-800 hover:text-[#7e22ce] font-extrabold transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              Values
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-800 hover:text-[#7e22ce] font-extrabold transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("drive-success")}
              className="text-gray-800 hover:text-[#7e22ce] font-extrabold transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              Drive Success
            </button>
            <button
              onClick={() => scrollToSection("how-work")}
              className="text-gray-800 hover:text-[#7e22ce] font-extrabold transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              How Work
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-800 hover:text-[#7e22ce] font-extrabold transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("blogs")}
              className="text-gray-800 hover:text-[#7e22ce] font-extrabold transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              Blogs
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#7e22ce] text-white px-4 xl:px-8 py-2 xl:py-3 rounded-full font-medium hover:bg-purple-800 transition duration-300 whitespace-nowrap text-sm xl:text-base"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 hover:text-[#7e22ce] transition-colors flex-shrink-0 p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-3 sm:px-4 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-800 hover:text-[#7e22ce] font-medium transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-800 hover:text-[#7e22ce] font-medium transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="block w-full text-left text-gray-800 hover:text-[#7e22ce] font-medium transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
            >
              Values
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-800 hover:text-[#7e22ce] font-medium transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("drive-success")}
              className="block w-full text-left text-gray-800 hover:text-[#7e22ce] font-medium transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
            >
              Drive Success
            </button>
            <button
              onClick={() => scrollToSection("how-work")}
              className="block w-full text-left text-gray-800 hover:text-[#7e22ce] font-medium transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
            >
              How Work
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-gray-800 hover:text-[#7e22ce] font-medium transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("blogs")}
              className="block w-full text-left text-gray-800 hover:text-[#7e22ce] font-medium transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
            >
              Blogs
            </button>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#7e22ce] text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;