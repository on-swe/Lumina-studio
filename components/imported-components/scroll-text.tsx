import React, { useEffect, useState } from "react";

const RevealText = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target.getAttribute("data-trigger")
          ) {
            let index = 0;
            const interval = setInterval(() => {
              setCurrentIndex(index);
              index++;
              if (index > 11) {
                clearInterval(interval);
              }
            }, 250);
          }
        });
      },
      { threshold: 0.3 }
    );

    const triggerElement = document.querySelector("[data-trigger]");
    if (triggerElement) {
      observer.observe(triggerElement);
    }

    return () => observer.disconnect();
  }, []);

  const getTextClasses = (index: number, isMainText: boolean = false) => {
    const isVisible = currentIndex >= index;
    const baseClasses = "transition-all duration-700 ease-out";

    return `${baseClasses} ${isVisible ? "text-gray-900" : "text-gray-200"}`;
  };

  const getImageClasses = (index: number) => {
    const isVisible = currentIndex >= index;
    return `md:w-20 md:h-16 mr-6 flex items-center justify-center shadow-lg transition-all duration-700 ease-out hover:scale-200 hover:shadow-xl cursor-pointer ${
      isVisible ? "opacity-100 bg-blue-400" : "opacity-30 bg-gray-300"
    }`;
  };

  const getImageContainerClasses = (index: number, bgColor: string) => {
    const isVisible = currentIndex >= index;
    return `w-0 h-14 mr-6 shadow-lg overflow-hidden transition-all duration-700 ease-out hover:scale-110 hover:shadow-xl cursor-pointer ${
      isVisible ? `opacity-100 ${bgColor}` : "opacity-30 bg-gray-300"
    }`;
  };

  return (
    <section className="container max-w-7xl mx-auto px-0 py-12 flex justify-center items-center flex-col">
      <div className="">
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto relative" data-trigger="true">
          <div className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
            {/* Line 1 */}
            <div className="flex items-center flex-wrap mb-8 text-[5rem] tracking-[-7px] font-bold leading-tight max-[1100px]:justify-center max-[1100px]:text-center max-[630px]:text-[3rem] max-[630px]:tracking-[-2px] max-[630px]:mb-0 ">
              <span className={`mr-6 ${getTextClasses(0, true)}`}>We</span>
              <span className={`mr-6 ${getTextClasses(1)}`}>capture</span>
              <div
                className={getImageContainerClasses(
                  2,
                  "rounded-[2rem] w-[10rem] h-14 "
                )}
              >
                <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                  {currentIndex >= 5 && (
                    <img
                      src="/reveal/img-1.webp"
                      alt="Creative team collaboration"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <span className={getTextClasses(3)}>precious moments</span>
            </div>

            {/* Line 2 */}
            <div className="flex items-center flex-wrap mb-8 text-[5rem] tracking-[-7px] font-bold leading-tight  max-[1100px]:justify-center max-[1100px]:text-center max-[630px]:text-[3rem] max-[630px]:tracking-[-2px] max-[630px]:mb-0">
              <span className={`mr-6 ${getTextClasses(4)}`}>that preserve</span>
              <div
                className={getImageContainerClasses(
                  5,
                  "rounded-[2rem] w-[20rem] h-[4rem]"
                )}
              >
                <div className="w-full h-full relative overflow-hidden">
                  {currentIndex >= 5 && (
                    <img
                      src="/reveal/img-2.webp"
                      alt="Creative team collaboration"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <span className={`italic ${getTextClasses(6)}`}>memories</span>
            </div>

            {/* Line 3 */}
            <div className="flex items-center flex-wrap mb-8 text-[5rem] tracking-[-7px] font-bold leading-tight  max-[1100px]:justify-center max-[1100px]:text-center max-[630px]:text-[3rem] max-[630px]:tracking-[-2px] max-[630px]:mb-0">
              <span className={`mr-6 ${getTextClasses(7)}`}>
                and tell stories with artistry
              </span>
            </div>

            {/* Line 4 */}
            <div className="flex items-center flex-wrap text-[5rem] tracking-[-7px]  font-bold leading-tight  max-[1100px]:justify-center max-[1100px]:text-center max-[630px]:text-[3rem] max-[630px]:tracking-[-2px] max-[630px]:mb-0">
              <span className={`mr-6 ${getTextClasses(8)}`}>through our</span>
              <div
                className={getImageContainerClasses(
                  9,
                  "rounded-[2rem] w-[14rem] h-12 "
                )}
              >
                <div className="w-full h-full relative overflow-hidden">
                  {currentIndex >= 9 && (
                    // <img
                    //   src="hero-sm.jpg"
                    //   alt="Future technology concept"
                    //   className="w-full h-full object-cover"
                    // />
                    <video
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ zIndex: 1 }}
                    >
                      <source src="/contact/down-vid-2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
              <span className={getTextClasses(10)}>lens</span>
            </div>
          </div>
        </div>
      </div>
      <div className="jsx-7edb48ae9efee03c inline-flex items-center justify-center mt-8">
        <div className="jsx-7edb48ae9efee03c w-16 h-px bg-gradient-to-r from-transparent to-purple-300"></div>
        <span className="jsx-7edb48ae9efee03c mx-4 text-purple-500 text-sm font-medium">
          Artistic Vision
        </span>
        <div className="jsx-7edb48ae9efee03c w-16 h-px bg-gradient-to-l from-transparent to-purple-300"></div>
      </div>
    </section>
  );
};

export default RevealText;
