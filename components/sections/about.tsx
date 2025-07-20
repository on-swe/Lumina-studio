import React from "react";
import Head from "next/head";
import { Allura } from "next/font/google";
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Lumina Studio - About Us</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section
        className="about-section  mx-auto px-4 py-16 bg-[#14132d] overflow-x-hidden"
        id="about"
      >
        {/* Animated Background Orbs */}
        <div className="bg-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        {/* Geometric Elements */}
        <div className="geometric-elements">
          <div className="geo-shape geo-1"></div>
          <div className="geo-shape geo-2"></div>
          <div className="geo-shape geo-3"></div>
        </div>

        <div className=" max-w-7xl mx-auto md:px-0">
          {/* Premium Section Header */}
          <div className="flex mb-6">
            <span className="text-[#7e22ce] font-medium mb-2 bg-[#7e22ce]/10 px-4 py-1 rounded-full animate-pulse border-[1px] border-[solid] border-[#7e22ce] px-8 py-2">
              About Us
            </span>
          </div>

          {/* Hero Grid */}
          <div className="hero-grid">
            {/* Left Content */}

            <div className="hero-content">
              <h1
                className={`text-6xl font-bold text-white mb-8 leading-[0.85]`}
              >
                Meet <span className={`text-[#7e22ce]`}> Lumina Studio</span>
                <br />
                <span className={`${allura.className} text-4xl`}>
                  (Your Creative Partners in Visual Storytelling)
                </span>
              </h1>

              <p className="hero-description text-[#ffffffc2] text-start">
                We&apos;re more than just photographers — we&apos;re passionate
                storytellers, visual artists, and your brand&apos;s creative ally.
                With a blend of artistic vision and technical expertise, we
                capture moments and create compelling visual narratives that
                bring your stories to life.
              </p>

              <p className="hero-sub text-[#ffffffc2]">
                Our mission is to transform ordinary moments into extraordinary
                visual experiences, creating timeless memories through the art
                of photography and videography.
              </p>
            </div>

            {/* Right Image Showcase */}
            <div className="image-showcase">
              <div className="main-image-container">
                <div className="main-image">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Creative photography team"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>

              <div className="floating-elements">
                <div className="floating-star">✦</div>
                <div className="floating-badge first-floating-badge min-w-[191px]">
                  Artistic Vision
                </div>
                <div className="floating-badge second-floating-badge  min-w-[191px]">
                  Creative Excellence
                </div>
                <div className="floating-badge  min-w-[191px]">
                  Visual Storytelling
                </div>
              </div>
            </div>
          </div>

          {/* Premium Stats Container */}
          <div className="stats-container">
            <div className="stats-panel relative">
              <svg
                className="absolute inset-0 w-full h-full opacity-15"
                viewBox="0 0 800 500"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 Q200,20 400,100 T800,100"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M0,130 Q200,50 400,130 T800,130"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M0,160 Q200,80 400,160 T800,160"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M0,190 Q200,110 400,190 T800,190"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
                <path
                  d="M0,220 Q200,140 400,220 T800,220"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.2"
                />
                <path
                  d="M0,250 Q200,170 400,250 T800,250"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.2"
                />
                <path
                  d="M0,280 Q200,200 400,280 T800,280"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.1"
                />

                <path
                  d="M800,320 Q600,240 400,320 T0,320"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M800,350 Q600,270 400,350 T0,350"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M800,380 Q600,300 400,380 T0,380"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
              </svg>
              <div className="stats-bg">
                <div className="wave-pattern"></div>
              </div>

              <div className="stats-grid">
                {/* Left - Premium Statistics */}
                <div className="stats-content">
                  <div className="main-stat">
                    <div className="stat-number">
                      <div className="text-8xl font-bold mb-4">500+</div>
                    </div>
                    <div className="stat-description">
                      Happy clients and projects completed
                    </div>
                  </div>

                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-icon"></div>
                      <span className="feature-text">Artistic Vision</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon"></div>
                      <span className="feature-text">Creative Excellence</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon"></div>
                      <span className="feature-text">
                        Visual Storytelling
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right - Services */}
                <div className="services-section">
                  <h3 className="services-title">Our Expertise</h3>
                  <div className="services-grid">
                    <div className="service-card">Portrait Photography</div>
                    <div className="service-card">Event Coverage</div>
                    <div className="service-card">Commercial Shoots</div>
                    <div className="service-card">Wedding Videography</div>
                    <div className="service-card">Product Photography</div>
                    <div className="service-card">Drone Photography</div>
                  </div>
                </div>
              </div>

              {/* Floating Masterpiece */}
              <div className="floating-masterpiece">
                <div className="masterpiece-frame">
                  <div className="masterpiece-image">
                    <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Creative photography workspace" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: "Inter", sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            overflow-x: hidden;
          }

          .about-section {
            position: relative;
            min-height: 100vh;
            // background: radial-gradient(
            //     circle at 20% 80%,
            //     rgba(126, 34, 206, 0.08) 0%,
            //     transparent 50%
            //   ),
            //   radial-gradient(
            //     circle at 80% 20%,
            //     rgba(245, 158, 11, 0.06) 0%,
            //     transparent 50%
            //   ),
            //   radial-gradient(
            //     circle at 40% 40%,
            //     rgba(126, 34, 206, 0.04) 0%,
            //     transparent 50%
            //   ),
            //   linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
            overflow: hidden;
          }

          /* Animated Background Elements */
          .bg-orbs {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 1;
          }

          .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            animation: float-orb 20s ease-in-out infinite;
          }

          .orb-1 {
            width: 300px;
            height: 300px;
            background: linear-gradient(
              45deg,
              rgba(126, 34, 206, 0.1),
              rgba(245, 158, 11, 0.05)
            );
            top: -10%;
            left: -10%;
            animation-delay: 0s;
          }

          .orb-2 {
            width: 200px;
            height: 200px;
            background: linear-gradient(
              45deg,
              rgba(245, 158, 11, 0.08),
              rgba(126, 34, 206, 0.04)
            );
            top: 60%;
            right: -5%;
            animation-delay: -7s;
          }

          .orb-3 {
            width: 150px;
            height: 150px;
            background: linear-gradient(
              45deg,
              rgba(126, 34, 206, 0.06),
              rgba(245, 158, 11, 0.03)
            );
            bottom: 20%;
            left: 15%;
            animation-delay: -14s;
          }

          @keyframes float-orb {
            0%,
            100% {
              transform: translate(0, 0) rotate(0deg) scale(1);
            }
            25% {
              transform: translate(30px, -50px) rotate(90deg) scale(1.1);
            }
            50% {
              transform: translate(-20px, -100px) rotate(180deg) scale(0.9);
            }
            75% {
              transform: translate(-50px, -30px) rotate(270deg) scale(1.05);
            }
          }

          /* Geometric Decorations */
          .geometric-elements {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 2;
          }

          .geo-shape {
            position: absolute;
            opacity: 0.15;
          }

          .geo-1 {
            width: 80px;
            height: 80px;
            border: 2px solid #7e22ce;
            border-radius: 50%;
            top: 15%;
            left: 10%;
            animation: pulse-scale 4s ease-in-out infinite;
          }

          .geo-2 {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #f59e0b, transparent);
            top: 70%;
            right: 15%;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            animation: rotate-slow 15s linear infinite;
          }

          .geo-3 {
            width: 40px;
            height: 40px;
            border: 2px solid #f59e0b;
            top: 40%;
            right: 30%;
            transform: rotate(45deg);
            animation: float 6s ease-in-out infinite;
          }

          @keyframes pulse-scale {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.15;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.25;
            }
          }

          @keyframes rotate-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(45deg);
            }
            50% {
              transform: translateY(-20px) rotate(45deg);
            }
          }

          /* Section Header with Magnetic Effect */
          .section-header {
            text-align: center;
            margin-bottom: 120px;
            position: relative;
          }

          .section-badge {
            display: inline-flex;
            align-items: center;
            padding: 12px 32px;
            border-radius: 50px;
            background: linear-gradient(
              135deg,
              rgba(126, 34, 206, 0.1),
              rgba(245, 158, 11, 0.05)
            );
            border: 1px solid rgba(126, 34, 206, 0.2);
            color: #7e22ce;
            font-weight: 600;
            font-size: 12px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .section-badge::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(126, 34, 206, 0.1),
              transparent
            );
            transition: left 0.6s;
          }

          .section-badge:hover::before {
            left: 100%;
          }

          .section-badge:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(126, 34, 206, 0.2);
          }

          /* Main Hero Grid */
          .hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 80px;
            align-items: center;
          }

          @media (max-width: 1024px) {
            .hero-grid {
              grid-template-columns: 1fr;
              gap: 60px;
              text-align: center;
            }
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          .hero-title {
            font-family: "Playfair Display", serif;
            font-size: 4.5rem;
            font-weight: 300;
            line-height: 1.1;
            color: #1a1a1a;
            position: relative;
          }

          .brand-name {
            background: linear-gradient(
              135deg,
              #7e22ce 0%,
              #a855f7 50%,
              #f59e0b 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            position: relative;
            display: inline-block;
          }

          .brand-name::after {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(135deg, #7e22ce, #f59e0b);
            border-radius: 2px;
            transform: scaleX(0);
            transform-origin: left;
            animation: expand-line 2s ease-out 1s forwards;
          }

          @keyframes expand-line {
            to {
              transform: scaleX(1);
            }
          }

          .arabic-text {
            font-size: 2.2rem;
            color: #7e22ce;
            font-weight: 400;
            opacity: 0.8;
            font-family: "Playfair Display", serif;
          }

          .hero-description {
            font-size: 1.2rem;
            // color: #4b5563;
            font-weight: 400;
            line-height: 1.8;
            position: relative;
            padding-left: 32px;
          }

          .hero-description::before {
            content: "";
            position: absolute;
            left: 0;
            top: 8px;
            width: 4px;
            height: 40px;
            background: #7e22ce;
            border-radius: 2px;
          }

          .hero-sub {
            font-size: 1rem;
            // color: #6b7280;
            line-height: 1.7;
            font-style: italic;
          }

          /* Sophisticated Image Container */
          .image-showcase {
            position: relative;
            perspective: 1000px;
          }

          .main-image-container {
            position: relative;
            transform-style: preserve-3d;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .main-image-container:hover {
            transform: rotateY(-5deg) rotateX(5deg) translateZ(20px);
          }

          .main-image {
            border-radius: 30px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
              0 40px 80px rgba(126, 34, 206, 0.1);
          }

          .main-image img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            transition: transform 0.6s ease;
          }

          .main-image:hover img {
            transform: scale(1.05);
          }

          .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(126, 34, 206, 0.1) 0%,
              transparent 50%,
              rgba(245, 158, 11, 0.05) 100%
            );
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .main-image:hover .image-overlay {
            opacity: 1;
          }

          /* Floating Elements */
          .floating-elements {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }

          .floating-star {
            position: absolute;
            top: -20px;
            right: -20px;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #a173c9b5, #7e22ce);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
            animation: float-star 8s ease-in-out infinite;
          }

          @keyframes float-star {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(180deg);
            }
          }

          .floating-badge {
            position: absolute;
            bottom: -15px;
            left: -4rem;
            background: #7e22ce1a;
            backdrop-filter: blur(10px);
            padding: 12px 20px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid #7e22ce;
            font-size: 14px;
            font-weight: 600;
            color: #7e22ce;
          }
          .floating-badge.first-floating-badge {
            bottom: 6rem;
          }
          .floating-badge.second-floating-badge {
            bottom: 2.5rem;
          }
          /* Premium Stats Section */
          .stats-container {
            position: relative;
            margin-top: 80px;
          }

          .stats-panel {
            background: linear-gradient(
              135deg,
              #7e22ce 0%,
              #8b5cf6 50%,
              #7e22ce 100%
            );
            border-radius: 40px;
            padding: 80px 60px;
            color: white;
            position: relative;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(126, 34, 206, 0.2),
              0 50px 100px rgba(126, 34, 206, 0.1);
          }

          /* Animated Background Pattern */
          .stats-bg {
            position: absolute;
            inset: 0;
            opacity: 0.1;
          }

          .wave-pattern {
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(
                circle at 25% 25%,
                rgba(255, 255, 255, 0.3) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 75% 75%,
                rgba(255, 255, 255, 0.2) 0%,
                transparent 50%
              );
            animation: wave-move 20s ease-in-out infinite;
          }

          @keyframes wave-move {
            0%,
            100% {
              transform: translate(-25%, -25%) rotate(0deg);
            }
            50% {
              transform: translate(-35%, -35%) rotate(180deg);
            }
          }

          .stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            position: relative;
            z-index: 10;
          }
          @media(max-width: 1024px){
            .floating-badge {
              left: -1rem;
            }
          }

          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 50px;
            }
          }

          .stats-content {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          .main-stat {
            position: relative;
          }

          .stat-number {
            font-family: "Playfair Display", serif;
            font-size: 7rem;
            font-weight: 300;
            line-height: 1;
            background: linear-gradient(135deg, #ffffff, #e5e7eb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .stat-percent {
            font-size: 3.5rem;
            vertical-align: top;
          }

          .stat-description {
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 300;
            margin-top: 16px;
          }

          .features-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 16px;
            opacity: 0;
            transform: translateX(-20px);
            animation: slide-in 0.6s ease forwards;
          }

          .feature-item:nth-child(1) {
            animation-delay: 0.2s;
          }
          .feature-item:nth-child(2) {
            animation-delay: 0.4s;
          }
          .feature-item:nth-child(3) {
            animation-delay: 0.6s;
          }

          @keyframes slide-in {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .feature-icon {
            width: 12px;
            height: 12px;
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
          }

          .feature-text {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.1rem;
            font-weight: 400;
          }

          .services-title {
            font-family: "Playfair Display", serif;
            font-size: 1.8rem;
            font-weight: 400;
            margin-bottom: 30px;
            color: rgba(255, 255, 255, 0.9);
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }

          .service-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 24px 20px;
            text-align: center;
            font-size: 15px;
            font-weight: 500;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }

          .service-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: left 0.6s;
          }

          .service-card:hover::before {
            left: 100%;
          }

          .service-card:hover {
            transform: translateY(-8px) scale(1.02);
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          /* Floating Masterpiece Image */
          .floating-masterpiece {
            position: absolute;
            bottom: -60px;
            right: -40px;
            z-index: 15;
            transform: rotate(-5deg);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .floating-masterpiece:hover {
            transform: rotate(0deg) scale(1.05);
          }

          .masterpiece-frame {
            background: white;
            border-radius: 25px;
            padding: 12px;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15),
              0 50px 100px rgba(126, 34, 206, 0.1);
          }

          .masterpiece-image {
            width: 350px;
            height: 220px;
            border-radius: 15px;
            overflow: hidden;
          }

          .masterpiece-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
          }

          .floating-masterpiece:hover .masterpiece-image img {
            transform: scale(1.1);
          }

          @media (max-width: 1024px) {
            .floating-masterpiece {
              display: none;
            }
          }

          /* Responsive Adjustments */
          @media (max-width: 768px) {
            .hero-title {
              font-size: 3rem;
            }

            .arabic-text {
              font-size: 1.8rem;
            }

            .stats-panel {
              padding: 50px 30px;
            }

            .stat-number {
              font-size: 4rem;
            }

            .stat-percent {
              font-size: 2.5rem;
            }

            .container {
              padding: 60px 20px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutUs;
