import React, { useState, useRef, useEffect } from "react";
import CircularGallery from "@/components/imported-components/cicular-slider";

const OurServices = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    startX.current = e.clientX;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;

    const distance = e.clientX - startX.current;
    setDragDistance(distance);

    // Apply stretch effect based on drag direction
    const container = containerRef.current;
    if (container) {
      const stretchFactor = 1 + Math.min(Math.abs(distance) / 1000, 0.1); // Max 10% stretch
      const scaleX = distance > 0 ? stretchFactor : 1 / stretchFactor;
      const scaleY = distance > 0 ? 1 / stretchFactor : stretchFactor;

      container.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
      container.style.transition = "transform 0.1s ease-out";
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    setDragDistance(0);
    document.body.style.cursor = "";

    // Reset stretch effect
    const container = containerRef.current;
    if (container) {
      container.style.transform = "scaleX(1) scaleY(1)";
      container.style.transition =
        "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)";
    }
  };

  // Set up event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section
      id="services"
      className="min-h-screen bg-[#14132d] flex items-center justify-center pt-16 overflow-x-hidden"
    >
      <div className="w-full">
        <div className="text-center max-w-7xl mx-auto max-[1300px]:px-4">
          <div className="flex mb-6">
            <span className="text-[#7e22ce] font-medium mb-2 bg-[#7e22ce]/10 px-4 py-1 rounded-full animate-pulse border border-solid border-[#7e22ce] px-8 py-2">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-start">
            Professional Photography
            <br />
            and Creative Videography Services
          </h1>
          <p className="text-lg text-[#ffffffc2] leading-relaxed text-left max-w-[50rem]">
            We offer comprehensive photography and videography services that capture 
            your most precious moments. From intimate portraits to grand events, 
            we transform ordinary scenes into extraordinary visual stories with 
            artistic vision and technical excellence.
          </p>
        </div>

        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
        {/* <CircularServiceSlider cards={cards} /> */}
      </div>
    </section>
  );
};
export default OurServices;
