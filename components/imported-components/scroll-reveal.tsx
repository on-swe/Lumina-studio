'use client';

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style/ScrollReveal.css';

// Register the plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  animationType?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'elastic';
  staggerDelay?: number;
  animationDuration?: number;
  wordDistance?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  animationType = 'slideUp',
  staggerDelay = 0.08,
  animationDuration = 1.2,
  wordDistance = 30
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return;
    
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');
    
    // Get initial and final states based on animation type
    const getAnimationStates = (type: string) => {
      const baseState = { opacity: baseOpacity, willChange: 'transform, opacity' };
      const finalState = { opacity: 1, ease: 'back.out(1.7)' };
      
      switch (type) {
        case 'slideUp':
          return {
            from: { ...baseState, y: wordDistance, rotationX: 90 },
            to: { ...finalState, y: 0, rotationX: 0 }
          };
        case 'slideDown':
          return {
            from: { ...baseState, y: -wordDistance, rotationX: -90 },
            to: { ...finalState, y: 0, rotationX: 0 }
          };
        case 'slideLeft':
          return {
            from: { ...baseState, x: wordDistance, rotationY: 90 },
            to: { ...finalState, x: 0, rotationY: 0 }
          };
        case 'slideRight':
          return {
            from: { ...baseState, x: -wordDistance, rotationY: -90 },
            to: { ...finalState, x: 0, rotationY: 0 }
          };
        case 'scale':
          return {
            from: { ...baseState, scale: 0.3, rotation: 180 },
            to: { ...finalState, scale: 1, rotation: 0 }
          };
        case 'rotate':
          return {
            from: { ...baseState, rotation: 90, transformOrigin: '50% 50%' },
            to: { ...finalState, rotation: 0, transformOrigin: '50% 50%' }
          };
        case 'elastic':
          return {
            from: { ...baseState, scale: 0, rotation: 45 },
            to: { ...finalState, scale: 1, rotation: 0, ease: 'elastic.out(1, 0.3)' }
          };
        default: // fade
          return {
            from: baseState,
            to: finalState
          };
      }
    };

    const { from, to } = getAnimationStates(animationType);
    
    gsap.fromTo(
      wordElements,
      from,
      {
        ...to,
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: false, // Changed to false for smoother animations
          toggleActions: 'play none none reverse',
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: 'blur(0px)',
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: false,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, animationType, staggerDelay, animationDuration, wordDistance]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;