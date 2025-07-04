import { Allura } from "next/font/google";
import React from "react";
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});
const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Define",
      description:
        "We begin by understanding your business goals, target audience, and market position. Through discovery sessions and research, we outline a clear strategy that aligns design, development, and marketing with your vision.",
      rotation: "rotate-2",
      pinPosition: { top: "1rem", left: "3rem" },
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our creative and UX teams translate strategy into visuals — from sleek user interfaces and responsive layouts to branding assets like logos and style guides that reflect your identity across platforms.",
      rotation: "-rotate-3",
      pinPosition: { top: "1.5rem", right: "2rem" },
    },
    {
      number: "03",
      title: "Build",
      description:
        "We engineer robust, scalable solutions using modern technologies — whether it's a website, web app, or integrated platform — all optimized for performance, usability, and growth.",
      rotation: "rotate-1",
      pinPosition: { top: "1rem", left: "2.5rem" },
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We launch your product or campaign with impact — through targeted digital marketing, SEO, social media strategy, and analytics — ensuring your brand reaches the right audience and drives results.",
      rotation: "-rotate-2",
      pinPosition: { top: "1rem", right: "3rem" },
    },
  ];
  

  return (
    <section
      className="container mx-auto px-4 py-16 lg:py-24 relative overflow-hidden"
      id="how-work"
    >
      {/* Cork board background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 80% 70%, rgba(160, 82, 45, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 40% 80%, rgba(205, 133, 63, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px, 60px 60px, 80px 80px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-[8rem]">
          <div className="flex mb-6">
            <span className="text-[#7e22ce] font-medium mb-2 bg-[#7e22ce]/10 px-4 py-1 rounded-full animate-pulse border-[1px] border-[solid] border-[#7e22ce] px-8 py-2">
              How We Work
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-start">
            Let us show you how we drive
            <br />
            <span className={`${allura.className} text-[#7e22ce]`}>your Business</span> to <span className={`${allura.className} text-[#7e22ce]`}> new heights</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed text-left max-w-[50rem]">
            We combine strategic thinking with creative execution to guide your
            brand through every stage of development. From initial discovery to
            final delivery, we ensure each step adds measurable value and
            lasting impact.
          </p>
        </div>
        {/* Roadmap Board */}
        <div className="relative">
          {/* Roadmap Path */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="#7e22ce"
                    opacity="0.7"
                  />
                </marker>
              </defs>

              <path
                d="M 250 150 Q 450 100 650 200"
                stroke="#7e22ce"
                strokeWidth="3"
                strokeDasharray="15,10"
                fill="none"
                opacity="0.7"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 650 280 Q 450 350 250 320"
                stroke="#7e22ce"
                strokeWidth="3"
                strokeDasharray="15,10"
                fill="none"
                opacity="0.7"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 250 400 Q 450 350 650 450"
                stroke="#7e22ce"
                strokeWidth="3"
                strokeDasharray="15,10"
                fill="none"
                opacity="0.7"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>

          {/* Pinned Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Mobile roadmap connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-0">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-8 bg-[#7e22ce] opacity-50"></div>
                      <div className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-[#7e22ce] opacity-50"></div>
                    </div>
                  </div>
                )}

                {/* Pinned Card */}
                <div
                  className={`relative ${step.rotation} hover:rotate-0 transition-all duration-500 group-hover:scale-105 transform-gpu`}
                >
                  {/* Push Pin */}
                  <div className="absolute z-30" style={step.pinPosition}>
                    <div className="relative">
                      {/* Pin shadow */}
                      <div className="absolute top-1 left-1 w-6 h-6 bg-black/20 rounded-full blur-sm"></div>
                      {/* Pin head */}
                      <div className="relative w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg border-2 border-red-400">
                        <div className="absolute inset-1 bg-gradient-to-br from-red-300 to-red-400 rounded-full"></div>
                        <div className="absolute top-1 left-1 w-2 h-2 bg-red-100 rounded-full opacity-60"></div>
                      </div>
                      {/* Pin needle */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-gray-400 to-gray-600 shadow-sm"></div>
                    </div>
                  </div>

                  {/* Card with paper texture */}
                  <div
                    className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 group-hover:shadow-purple-100/50"
                    style={{
                      backgroundImage: `
                           linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
                           linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  >
                    {/* Paper corner fold */}
                    {/* <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-gray-100 to-gray-50 transform rotate-45 translate-x-4 -translate-y-4 border-l border-b border-gray-200"></div>
                     */}
                    {/* Step indicator badge */}
                    <div className="absolute -top-4 -left-4 z-20">
                      <div className="w-12 h-12 bg-[#7e22ce] rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        <span className="text-white font-black text-lg">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 pt-4">
                      {/* Title */}
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-[#7e22ce] transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                        {step.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i <= index ? "bg-[#7e22ce]" : "bg-gray-300"
                              }`}
                            ></div>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          Step {index + 1} of 4
                        </span>
                      </div>
                    </div>

                    {/* Subtle paper texture lines */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute left-8 right-8 h-px bg-blue-400"
                          style={{ top: `${120 + i * 24}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            {/* Connection from board */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-px h-8 bg-[#7e22ce] opacity-50"></div>
              <div className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-[#7e22ce] opacity-50 mx-auto"></div>
            </div>

            <button className="bg-[#7e22ce] hover:bg-purple-800 text-white px-12 py-4 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-4 mx-auto max-[430px]:text-nowrap max-[430px]:px-8 max-[430px]:py-4">
              <span>Start Your Journey</span>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <svg
                className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
