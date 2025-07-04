import { motion } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export default function SuccessSection() {
  const ref = useRef(null);

  const features = [
    {
      title: "Strategic Technology Planning",
      description:
        "Tailored roadmaps that align your technology investments with core business goals and long-term growth.",
      highlights: ["Data-driven", "Custom roadmaps", "Future-ready"],
    },
    {
      title: "Performance-Driven Marketing",
      description:
        "Results-focused campaigns that maximize return on investment and deliver measurable impact across digital platforms.",
      highlights: ["Maximize ROI", "Cross-channel", "Measurable impact"],
    },
    {
      title: "Continuous Optimization",
      description:
        "Ongoing analysis and refinement to ensure your solutions scale and adapt with your evolving business needs.",
      highlights: ["Iterative", "Always evolving", "Performance-focused"],
    },
  ];

  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.2,
  //       staggerChildren: 0.2,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  // const item = (index) => ({
  //   hidden: { y: 40, opacity: 0 },
  //   show: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.7,
  //       ease: "easeOut",
  //       delay: index * 0.1,
  //     },
  //   },
  // });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden text-white bg-[#14132d]"
      id="drive-success"
    >
      {/* Glows - Responsive positioning */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-10 sm:-left-16 lg:-left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-900 rounded-full filter blur-[60px] sm:blur-[80px] lg:blur-[120px] opacity-20 -z-10"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 -right-10 sm:-right-16 lg:-right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-800 rounded-full filter blur-[60px] sm:blur-[80px] lg:blur-[120px] opacity-10 -z-10"
      />

      {/* Grid background - Responsive sizing */}
      {/* <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:50px_50px] sm:bg-[length:70px_70px] lg:bg-[length:100px_100px] opacity-5" />
      </div> */}

      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] items-end gap-8 ">
            {/* Left column - Headline */}
            <div className="w-full">
              <div className="flex justify-start xl:justify-start mb-4 sm:mb-6">
                <span className="text-[#7e22ce] font-medium bg-[#7e22ce]/10 rounded-full animate-pulse border border-[#7e22ce] px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm lg:text-base text-center">
                  How We Drive Your Success
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#7e22ce]">
                  Next-gen
                </span>
                <br />
                business acceleration
              </h2>

              <p className="text-lg text-[#ffffffc2] leading-relaxed text-left max-w-[50rem]">
                We architect digital ecosystems that blend emerging technologies
                with growth marketing to future-proof your business. Our
                comprehensive approach combines cutting-edge software solutions,
                data-led marketing strategies, and personalized expertise to
                accelerate business growth and drive digital transformation.
              </p>

              {/* Special automation card - Only on larger screens */}
              <div className="hidden xl:flex justify-end mt-8">
                <div className="bg-white relative z-10 p-4 lg:p-6 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-purple-300/20 transition-all duration-500 overflow-hidden w-full max-w-sm border border-[#7e22ce] min-h-[266px]">
                  <div className="flex gap-4 relative z-10">
                    <div className="flex-none w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-[#7e22ce] font-medium bg-[#7e22ce]/10 border border-[#7e22ce] animate-pulse">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-black mb-2">
                        Smart Automation
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Boost efficiency and cut costs by automating key
                        workflows using AI-driven solutions.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "AI-powered",
                          "Process efficiency",
                          "Scalable automation",
                        ].map((tag, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 text-xs font-medium text-[#7e22ce] bg-white/10 border border-purple-800/30 rounded-full hover:bg-[#7e22ce] hover:text-white transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Feature Cards */}
            <div className="w-full">
              {/* Mobile/Tablet: Vertical stack */}
              <div className="xl:hidden">
                <div className="flex flex-col gap-6 items-center">
                  {/* Smart Automation card for mobile/tablet */}
                  <div className="w-full flex justify-end">
                    {/* Video */}
                    <div className="flex-1 flex items-stretch">
                      <video
                        className="object-cover rounded-2xl h-full w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ zIndex: 1 }}
                      >
                        <source src="/drive-success.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    {/* Card */}
                    <div className="bg-white relative z-10 p-4 sm:p-6 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-purple-300/20 transition-all duration-500 overflow-hidden border border-[#7e22ce] w-full max-w-sm flex flex-col justify-between">
                      <div className="flex gap-3 sm:gap-4 relative z-10">
                        <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-[#7e22ce] font-medium bg-[#7e22ce]/10 border border-[#7e22ce] animate-pulse">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                            Smart Automation
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            Boost efficiency and cut costs by automating key
                            workflows using AI-driven solutions.
                          </p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {[
                              "AI-powered",
                              "Process efficiency",
                              "Scalable automation",
                            ].map((tag, i) => (
                              <span
                                key={i}
                                className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium text-[#7e22ce] bg-white/10 border border-purple-800/30 rounded-full hover:bg-[#7e22ce] hover:text-white transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other feature cards */}
                  {features.map((feature, index) => (
                    <div
                      className={`w-full flex ${
                        index % 2 == 0 ? "jutify-start" : "justify-end"
                      }`}
                      key={feature.title}
                    >
                      {index % 2 != 0 ? (
                        <div className="flex-1 flex items-stretch">
                          <video
                            className="object-cover rounded-2xl h-full w-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ zIndex: 1 }}
                          >
                            <source src="/drive-success.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="bg-white relative z-10 p-4 sm:p-6 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-purple-300/20 transition-all duration-500 overflow-hidden border border-[#7e22ce] w-full max-w-sm flex flex-col justify-between">
                        <div className="flex gap-3 sm:gap-4 relative z-10">
                          <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-[#7e22ce] font-medium bg-[#7e22ce]/10 border border-[#7e22ce] animate-pulse">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                              {feature.description}
                            </p>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {feature.highlights.map((tag, i) => (
                                <span
                                  key={i}
                                  className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium text-[#7e22ce] bg-white/10 border border-purple-800/30 rounded-full hover:bg-[#7e22ce] hover:text-white transition-all duration-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {index % 2 == 0 ? (
                        <div className="flex-1 flex items-stretch">
                          <video
                            className="object-cover rounded-2xl h-full w-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ zIndex: 1 }}
                          >
                            <source src="/drive-success.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden xl:grid grid-cols-2 gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="bg-white relative z-10 p-6 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-purple-300/20 transition-all duration-500 overflow-hidden border border-[#7e22ce]"
                  >
                    <div className="flex gap-4 relative z-10">
                      <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center text-[#7e22ce] font-medium bg-[#7e22ce]/10 border border-[#7e22ce] animate-pulse">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {feature.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {feature.highlights.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-block px-3 py-1 text-xs font-medium text-[#7e22ce] bg-white/10 border border-purple-800/30 rounded-full hover:bg-[#7e22ce] hover:text-white transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
