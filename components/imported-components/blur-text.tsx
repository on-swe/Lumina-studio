"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

interface AnimationKeyframes {
  [key: string]: (string | number)[];
}

interface AnimationSnapshot {
  filter?: string;
  opacity?: number;
  y?: number;
  [key: string]: string | number | undefined;
}

const buildKeyframes = (
  from: AnimationSnapshot,
  steps: AnimationSnapshot[]
): AnimationKeyframes => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: AnimationKeyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [
      from[k] ?? (typeof from[k] === "number" ? 0 : ""),
      ...steps.map((s) => s[k] ?? (typeof from[k] === "number" ? 0 : "")),
    ];
  });
  return keyframes;
};

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "characters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationSnapshot;
  animationTo?: AnimationSnapshot[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    (): AnimationSnapshot =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    (): AnimationSnapshot[] => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  // Filter out undefined values from fromSnapshot and animateKeyframes
  const cleanSnapshot = (snap: AnimationSnapshot) => {
    const cleaned: { [key: string]: string | number } = {};
    Object.keys(snap).forEach((k) => {
      const v = snap[k];
      cleaned[k] = v ?? (typeof v === "number" ? 0 : "");
    });
    return cleaned;
  };
  const cleanKeyframes = (kf: AnimationKeyframes) => {
    const cleaned: { [key: string]: (string | number)[] } = {};
    Object.keys(kf).forEach((k) => {
      cleaned[k] = kf[k].map((v) => v ?? (typeof v === "number" ? 0 : ""));
    });
    return cleaned;
  };

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap" }}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={cleanSnapshot(fromSnapshot)}
            animate={
              inView
                ? cleanKeyframes(animateKeyframes)
                : cleanSnapshot(fromSnapshot)
            }
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </span>
  );
};

const AnimatedHeroText: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-[85px] max-[768px]:text-[4.75rem] font-bold text-gray-900 mb-6 leading-none text-center max-[405px]:text-[2.75rem]">
        <BlurText text="Capturing Moments" delay={100} className="block mb-2" />
        <span
          className={`${allura.className} flex flex-col md:flex-row items-center justify-center font-serif text-[#7e22ce] italic`}
        >
          <BlurText text="Creating Memories" delay={150} className="mr-4 " />
          <motion.img
            src="hero-sm.jpg"
            alt="bg-img"
            width={256}
            height={64}
            className="object-cover h-[64px] rounded-[32px] w-full"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </span>
      </h1>
    </div>
  );
};

export default AnimatedHeroText;
export { BlurText };
