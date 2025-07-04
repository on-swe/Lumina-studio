import React, { useState, useEffect } from "react";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const OurValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e:any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring transparent communication and shared success.",
      color: "from-purple-500 to-purple-600",
      accent: "bg-purple-500",
      glow: "shadow-purple-500/30",
      lightGlow: "shadow-purple-200/60",
      delay: 0,
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, delivering solutions that exceed expectations.",
      color: "from-purple-500 to-purple-600",
      accent: "bg-purple-500",
      glow: "shadow-purple-500/30",
      lightGlow: "shadow-purple-200/60",
      delay: 200,
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
      color: "from-purple-500 to-purple-600",
      accent: "bg-purple-500",
      glow: "shadow-purple-500/30",
      lightGlow: "shadow-purple-200/60",
      delay: 400,
    },
    {
      icon: Award,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards and build trust through honest, reliable service.",
      color: "from-purple-500 to-purple-600",
      accent: "bg-purple-500",
      glow: "shadow-purple-500/30",
      lightGlow: "shadow-purple-200/60",
      delay: 600,
    },
  ];
  const lgColsClass =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
    }[values.length] ?? "lg:grid-cols-4";
  return (
    <section className="relative about-section  mx-auto px-4 py-16 overflow-x-hidden" id="values">
      {/* Dynamic background - desktop only */}
      {!isMobile && (
        <>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.08), transparent 60%)`,
            }}
          ></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-green-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </>
      )}

      {/* Floating geometric shapes - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 border border-gray-300/40 rotate-45 animate-float-${
                i % 3
              }`}
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + i * 6}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${5 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className=" max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex mb-6">
            <span className="text-[#7e22ce] font-medium mb-2 bg-[#7e22ce]/10 px-4 py-1 rounded-full animate-pulse border border-solid border-[#7e22ce] px-8 py-2">
              Our Values
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-start">
            The Values That Power Our Mission
            <br />
            and Inspire Every Partnership
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed text-left max-w-[50rem]">
            Our work is rooted in principles that go beyond just business.
            Whether we're collaborating with clients, innovating solutions, or
            delivering results, our values ensure every step is driven by
            purpose, integrity, and excellence.
          </p>
        </div>


        <div
          className={`grid grid-cols-1 ${
            values.length > 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"
          }
              ${lgColsClass}
              gap-6 md:gap-8 transition-all duration-[1500ms]
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="relative group perspective-1000"
              style={{
                animationDelay: `${value.delay}ms`,
                transform: isVisible
                  ? "translateZ(0)"
                  : "translateZ(-100px) rotateX(45deg)",
                transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${value.delay}ms`,
              }}
              onMouseEnter={() => !isMobile && setActiveCard(index)}
              onMouseLeave={() => !isMobile && setActiveCard(null)}
              onClick={() =>
                isMobile && setActiveCard(activeCard === index ? null : index)
              }
            >
              {/* Card Container */}
              <div
                className={`relative h-64 sm:h-72 md:h-80 preserve-3d ${
                  !isMobile && "group-hover:rotateY-12"
                } transition-all duration-700`}
              >
                {/* Main Card Face */}
                <div
                  className={`absolute inset-0 bg-white/80 backdrop-blur-sm md:backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/60 ${
                    activeCard === index
                      ? `shadow-lg md:shadow-2xl ${value.lightGlow}`
                      : "shadow-md md:shadow-xl shadow-gray-200/50"
                  } transition-all duration-700 backface-hidden overflow-hidden ${
                    !isMobile &&
                    "group-hover:border-white/80 group-hover:bg-white/90"
                  }`}
                >
                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${
                      value.color
                    } p-px opacity-0 ${
                      (activeCard === index || isMobile) && "opacity-100"
                    } transition-all duration-700`}
                  >
                    <div className="w-full h-full bg-white/90 backdrop-blur-sm md:backdrop-blur-xl rounded-2xl md:rounded-3xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon Section */}
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${
                          value.color
                        } rounded-xl md:rounded-2xl flex items-center justify-center ${
                          activeCard === index || isMobile
                            ? "scale-110 rotate-6"
                            : ""
                        } transition-all duration-500 shadow-lg ${value.glow}`}
                      >
                        <value.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                      </div>

                      {/* Index number */}
                      <div
                        className={`text-4xl md:text-6xl font-black text-gray-900/10 ${
                          (activeCard === index || isMobile) &&
                          "text-gray-900/20"
                        } transition-all duration-500`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 ${
                        (activeCard === index || isMobile) &&
                        "text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700"
                      } transition-all duration-500`}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm md:text-base text-gray-600 leading-relaxed ${
                        (activeCard === index || isMobile) && "text-gray-700"
                      } transition-all duration-500 flex-grow`}
                    >
                      {value.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-4 md:mt-6 flex items-center gap-2">
                      <div
                        className={`w-6 md:w-8 h-px ${
                          value.accent
                        } opacity-60 ${
                          (activeCard === index || isMobile) &&
                          "opacity-100 w-12 md:w-16"
                        } transition-all duration-700`}
                      ></div>
                      <div
                        className={`w-1.5 h-1.5 md:w-2 md:h-2 ${
                          value.accent
                        } rounded-full opacity-60 ${
                          (activeCard === index || isMobile) &&
                          "opacity-100 scale-125 md:scale-150"
                        } transition-all duration-700`}
                      ></div>
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${
                      value.color
                    } opacity-0 ${
                      (activeCard === index || isMobile) && "opacity-5"
                    } transition-all duration-700`}
                  ></div>

                  {/* Hover particles - desktop only */}
                  {!isMobile && activeCard === index && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 ${value.accent} rounded-full animate-ping opacity-60`}
                          style={{
                            left: `${25 + i * 12}%`,
                            top: `${25 + i * 10}%`,
                            animationDelay: `${i * 150}ms`,
                            animationDuration: "2s",
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>

              {/* Light reflection effect - desktop only */}
              {!isMobile && (
                <div className="absolute top-full left-0 right-0 h-12 md:h-16 bg-gradient-to-b from-white/30 to-transparent rounded-b-3xl transform rotateX-180 opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm rounded-full border border-white/40">
            {/* <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium text-gray-700">Excellence in Motion</span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full animate-pulse delay-300"></div> */}
            <div className="inline-flex items-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-300"></div>
              <span className="mx-4 text-purple-500 text-sm font-medium">
                Guiding Excellence
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-300"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-12 {
          transform: rotateY(12deg);
        }
        .rotateX-180 {
          transform: rotateX(180deg);
        }

        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-15px) rotate(225deg);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg) scale(1);
          }
          50% {
            transform: translateY(-12px) rotate(225deg) scale(1.1);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-18px) rotate(225deg);
          }
        }
        .animate-float-0 {
          animation: float-0 5s ease-in-out infinite;
        }
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 7s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: none;
          }
        }
      `}</style>
    </section>
  );
};

export default OurValues;
