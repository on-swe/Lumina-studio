"use client";

import { useState, useEffect } from "react";
import BlogsSection from "@/components/sections/blogs";
import Projects from "@/components/sections/projects";
import AboutUs from "@/components/sections/about";
import OurValues from "@/components/sections/values";
import OurServices from "@/components/sections/services";
import Hero from "@/components/sections/hero";
import Contact from "@/components/sections/contact";
import RevealText from "@/components/imported-components/scroll-text";
import HowWeWork from "@/components/sections/how-work";
import SuccessSection from "@/components/sections/drive-success";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CTA from "@/components/sections/cta";

export default function LuminaStudioPortfolio() {
  const [isVisible, setIsVisible] = useState({});
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Add cursor tracking effect
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add mouse move listener
    window.addEventListener("mousemove", updateCursorPosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, select, .cursor-raqeem"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <div
        className={`cursor-dot ${isHovering ? "hover" : ""}`}
        style={
          {
            // @ts-ignore: Allow custom CSS properties
            "--x": `${cursorPosition.x - 4}px`,
            "--y": `${cursorPosition.y - 4}px`,
            transform: `translate(var(--x), var(--y)) ${
              isHovering ? "scale(1.5)" : "scale(1)"
            }`,
          } as React.CSSProperties & Record<string, any>
        }
      />
      <div
        className={`cursor-circle ${isHovering ? "hover" : ""} `}
        style={
          {
            // @ts-ignore: Allow custom CSS properties
            "--x": `${cursorPosition.x - 16}px`,
            "--y": `${cursorPosition.y - 16}px`,
            transform: `translate(var(--x), var(--y)) ${
              isHovering ? "scale(1.8)" : "scale(1)"
            }`,
          } as React.CSSProperties & Record<string, any>
        }
      />
      {/*  */}
      <Header />
      <Hero />
      <AboutUs />
      <OurValues />

      <OurServices />
      <RevealText />
      <SuccessSection />
      <HowWeWork />

      <Projects />
      <BlogsSection />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
