import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, Pause, Play } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface PhotographyData {
  id: number;
  title: string;
  category: string;
  photographer: string;
  image: string;
  status: string;
  description: string;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// TiltedCard component for the photography cards with subtle movement and glitch prevention
const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springValues = {
    damping: 30,
    stiffness: 60,
    mass: 1,
  };

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  // Clamp function to prevent extreme values
  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  function handleMouse(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!ref.current || !isHovered) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Calculate normalized values (-1 to 1)
    const normalizedX = offsetX / (rect.width / 2);
    const normalizedY = offsetY / (rect.height / 2);

    // Apply constraints with increased movement for better visibility
    const rotationX = clamp(normalizedY * -6, -6, 6); // Max 6 degrees
    const rotationY = clamp(normalizedX * 6, -6, 6); // Max 6 degrees

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      rotateX.set(rotationX);
      rotateY.set(rotationY);
    });
  }

  function handleMouseEnter() {
    setIsHovered(true);
    scale.set(1.03); // Slightly more noticeable scale
  }

  function handleMouseLeave() {
    setIsHovered(false);
    // Smooth return to original position
    requestAnimationFrame(() => {
      scale.set(1);
      rotateX.set(0);
      rotateY.set(0);
    });
  }

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`transform-gpu will-change-transform ${className}`}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden", // Prevent glitches
          WebkitBackfaceVisibility: "hidden",
          ...style,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 16,
    minutes: 47,
    seconds: 49,
  });
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Sample photography data
  const photographs: PhotographyData[] = [
    {
      id: 1,
      title: "Urban Elegance",
      category: "Portrait",
      photographer: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      status: "Featured",
      description:
        "A stunning portrait series capturing the essence of modern urban life through elegant composition and natural lighting.",
      timeLeft: { days: 3, hours: 16, minutes: 47, seconds: 49 },
    },
    {
      id: 2,
      title: "Wedding Dreams",
      category: "Wedding",
      photographer: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      status: "Featured",
      description:
        "Capturing the magic of love and commitment through intimate moments and breathtaking ceremony photography.",
      timeLeft: { days: 2, hours: 12, minutes: 30, seconds: 15 },
    },
    {
      id: 3,
      title: "Commercial Vision",
      category: "Commercial",
      photographer: "Emma Thompson",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      status: "Featured",
      description:
        "Professional product photography that elevates brand storytelling through creative composition and lighting mastery.",
      timeLeft: { days: 4, hours: 8, minutes: 22, seconds: 41 },
    },
    {
      id: 4,
      title: "Event Highlights",
      category: "Event",
      photographer: "David Kim",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      status: "Featured",
      description:
        "Dynamic event coverage that captures the energy and excitement of special occasions and corporate gatherings.",
      timeLeft: { days: 1, hours: 18, minutes: 45, seconds: 33 },
    },
    {
      id: 5,
      title: "Aerial Perspectives",
      category: "Drone",
      photographer: "Lisa Wang",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      status: "Featured",
      description:
        "Breathtaking aerial photography that offers unique perspectives on landscapes, architecture, and special events.",
      timeLeft: { days: 5, hours: 14, minutes: 28, seconds: 17 },
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isAnimating) {
      autoPlayRef.current = setTimeout(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAutoPlay, isAnimating]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const changeSlide = (newIndex: number) => {
    if (isAnimating || newIndex === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(newIndex);

    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % photographs.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + photographs.length) % photographs.length;
    changeSlide(newIndex);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Helper function to get photography gradient
  const getPhotographyGradient = (index: number) => {
    const gradients = [
      "#f3f4f6 0%, #fbbf24 50%, #ef4444 100%",
      "#e5e7eb 0%, #8b5cf6 50%, #06b6d4 100%",
      "#fef3c7 0%, #f59e0b 50%, #dc2626 100%",
      "#ddd6fe 0%, #7c3aed 50%, #1e40af 100%",
      "#ecfdf5 0%, #10b981 50%, #059669 100%",
    ];
    return gradients[index % gradients.length];
  };

  const currentPhotograph = photographs[currentSlide];

  return (
    <section
      className="max-w-full overflow-hidden mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-[#14132d] overflow-x-hidden"
      id="projects"
    >
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slideOutToRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .slide-enter {
          animation: slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-exit {
          animation: slideOutToLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .fade-enter {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scale-enter {
          animation: scaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .countdown-pulse {
          animation: pulse 2s infinite;
        }

        .progress-bar {
          background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
          height: 3px;
          border-radius: 2px;
          animation: progress 4s linear infinite;
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes rotateIn {
          from {
            transform: rotate(-180deg) scale(0);
            opacity: 0;
          }
          to {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale3d(0.3, 0.3, 0.3);
            opacity: 0;
          }
          20% {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          40% {
            transform: scale3d(0.9, 0.9, 0.9);
          }
          60% {
            transform: scale3d(1.03, 1.03, 1.03);
          }
          80% {
            transform: scale3d(0.97, 0.97, 0.97);
          }
          100% {
            transform: scale3d(1, 1, 1);
            opacity: 1;
          }
        }

        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }

        .shimmer-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .glow-effect {
          animation: glow 2s ease-in-out infinite alternate;
        }

        .slide-up {
          animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-down {
          animation: slideDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .rotate-in {
          animation: rotateIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gradient-text {
          background: #7e22ce;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .button-ripple {
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
        }

        .button-ripple::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .button-ripple:active::before {
          width: 300px;
          height: 300px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto mb-10">
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto max-[1300px]:px-4 max-[500px]:px-0">
          <div className="flex mb-6">
            <span className="text-[#7e22ce] font-medium mb-2 bg-[#7e22ce]/10 px-4 py-1 rounded-full animate-pulse border border-solid border-[#7e22ce] px-8 py-2">
              Our Photographies
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-start">
            Capturing Moments with Artistic Vision
            <br />
            Crafted with Passion and Precision{" "}
          </h1>
          <p className="text-lg text-[#ffffffc2] leading-relaxed text-left max-w-[50rem]">
            Every photograph we create is a reflection of our commitment to
            artistic excellence, technical mastery, and storytelling. From portraits to
            events, our images are tailored to capture authentic moments
            and create lasting memories across all occasions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        {/* Mobile Navigation Buttons - Top */}
        <div className="flex lg:hidden justify-between w-full px-4 mb-4">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="flex flex-col items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="transform group-hover:scale-110 transition-transform duration-300 mb-1">
              <ChevronLeft className="w-6 h-6 text-[#7e22ce]" />
            </div>
            <span className="text-xs text-[#7e22ce] font-medium text-center">
              PREVIOUS
            </span>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="flex flex-col items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="transform group-hover:scale-110 transition-transform duration-300 mb-1">
              <ChevronRight className="w-6 h-6 text-[#7e22ce]" />
            </div>
            <span className="text-xs text-[#7e22ce] font-medium text-center">
              NEXT
            </span>
          </button>
        </div>

        {/* Desktop Navigation Button - Left */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="hidden lg:flex items-center justify-center w-24 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed px-6 h-fit min-w-[10rem]"
        >
          <div className="transform group-hover:scale-110 transition-transform duration-300 mb-2">
            <ChevronLeft className="w-8 h-8 text-[#7e22ce]" />
          </div>
          <span className="text-xs text-[#7e22ce] font-medium text-center px-2 leading-tight text-nowrap">
            PREVIOUS PHOTO
          </span>
        </button>

        {/* Artwork Display */}
        <div className="flex-1 p-2 sm:p-4 lg:p-8 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 relative justify-center items-center lg:items-end">
            {/* Artwork Image with Subtle Tilt Effect */}
            <div className="flex-shrink-0 relative order-2 lg:order-1">
              <TiltedCard className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[25rem] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[35rem] bg-gray-100 rounded-2xl overflow-hidden relative shadow-2xl">
                <div
                  className={`w-full h-full transition-all duration-800 shimmer-effect ${
                    isAnimating ? "scale-enter" : ""
                  }`}
                >
                  <img
                    src={currentPhotograph.image}
                    alt={currentPhotograph.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white font-medium text-base sm:text-lg">
                      {currentPhotograph.title}
                    </div>
                    <div className="text-white text-opacity-80 text-sm">
                      {currentPhotograph.category}
                    </div>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black bg-opacity-80 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold slide-up">
                  {currentPhotograph.status}
                </div>
              </TiltedCard>
            </div>

            {/* Artwork Details */}
            <div className="flex items-center lg:items-end flex-1 min-h-0 w-full lg:max-w-[30rem] order-1 lg:order-2">
              <div
                key={currentSlide}
                className={`${
                  isAnimating ? "fade-enter" : ""
                } space-y-4 sm:space-y-6 text-center lg:text-left w-full`}
              >
                <div className="space-y-2">
                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight gradient-text slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {currentPhotograph.title}
                  </h2>
                </div>

                <p
                  className="text-white leading-relaxed text-sm sm:text-base slide-up mt-2 px-4 sm:px-0"
                  style={{ animationDelay: "0.4s" }}
                >
                  {currentPhotograph.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Next Button - Right */}
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="hidden lg:flex items-center justify-center w-24 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed px-6 h-fit min-w-[10rem]"
        >
          <span className="text-xs text-[#7e22ce] font-medium text-center px-2 leading-tight mb-2 text-nowrap">
            NEXT PHOTO
          </span>
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            <ChevronRight className="w-8 h-8 text-[#7e22ce]" />
          </div>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 py-4 sm:py-6 px-4">
        <div className="flex gap-2 sm:gap-3">
          {photographs.map((photograph, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              disabled={isAnimating}
              className={`relative transition-all duration-300 disabled:cursor-not-allowed group ${
                index === currentSlide
                  ? "w-8 sm:w-10 lg:w-12 h-2.5 sm:h-3 bg-[#7e22ce] rounded-full shadow-lg"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 rounded-full hover:bg-[#7e22ce] hover:scale-125 card-hover"
              }`}
              title={`${photograph.title} - ${photograph.category}`}
            ></button>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
          <span className="font-medium">
            {currentSlide + 1} / {photographs.length}
          </span>
          <div className="w-px h-3 sm:h-4 bg-gray-300"></div>
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white hover:bg-gray-50 rounded-full transition-all duration-300 text-xs sm:text-sm shadow-md hover:shadow-lg border border-gray-200 button-ripple"
          >
            <div
              className={`transition-transform duration-300 ${
                isAutoPlay ? "rotate-in" : "bounce-in"
              }`}
            >
              {isAutoPlay ? (
                <Pause className="w-3 sm:w-4 h-3 sm:h-4" />
              ) : (
                <Play className="w-3 sm:w-4 h-3 sm:h-4" />
              )}
            </div>
            <span className="font-medium hidden sm:inline">
              {isAutoPlay ? "Pause" : "Play"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
