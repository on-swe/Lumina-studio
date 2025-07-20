"use client";

import { Allura } from "next/font/google";
import { useState, useEffect } from "react";
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});
const BlogsSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Natural Light Photography: A Complete Guide",
      category: "Photography Tips",
      date: "May 4, 2025",
      author: "By Sarah Chen (Photography Pro)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "https://www.photographypro.com/mastering-natural-light-photography/",
      featured: true,
      excerpt:
        "Learn how to harness the power of natural light to create stunning, professional-quality photographs in any setting." 
    },
    {
      id: 2,
      title: "10 Essential Camera Settings Every Photographer Should Know",
      category: "Technical Skills",
      date: "December 3, 2024",
      author: "By Michael Rodriguez (Camera World)",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80",
      link: "https://cameraworld.com/essential-camera-settings/",
      featured: false,
      excerpt:
        "Discover the fundamental camera settings that will take your photography from amateur to professional level." 
    },
    {
      id: 3,
      title: "Wedding Photography: Capturing Love Stories Beautifully",
      category: "Wedding Photography",
      date: "≈October 2024",
      author: "By Emma Thompson (Wedding Pro)",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://weddingpro.com/capturing-love-stories/",
      featured: false,
      excerpt:
        "Professional techniques for capturing the magic and emotion of wedding ceremonies and receptions." 
    },
    {
      id: 4,
      title: "The Art of Portrait Photography: From Beginner to Pro",
      category: "Portrait Photography",
      date: "May 22, 2025",
      author: "By David Kim (Portrait Master)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "https://portraitmaster.com/art-of-portrait-photography/",
      featured: true,
      excerpt:
        "Step-by-step guide to creating compelling portraits that capture personality and emotion." 
    },
    {
      id: 5,
      title: "Commercial Photography: Building Your Business Portfolio",
      category: "Commercial Photography",
      date: "≈8 months ago",
      author: "By Lisa Wang (Commercial Pro)",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://commercialpro.com/building-portfolio/",
      featured: false,
      excerpt:
        "Learn how to build a strong commercial photography portfolio that attracts high-paying clients." 
    },
    {
      id: 6,
      title: "Drone Photography: Aerial Perspectives and Techniques",
      category: "Drone Photography",
      date: "≈3 years ago",
      author: "By Alex Johnson (Drone Expert)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://droneexpert.com/aerial-photography-techniques/",
      featured: false,
      excerpt:
        "Master the art of aerial photography with professional drone techniques and composition tips." 
    },
  ];
  
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [posts, setPosts] = useState(blogPosts);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => {
        const nextIndex = (prev + 1) % posts.length;
        const newPosts = [...posts];
        newPosts.forEach((post) => (post.featured = false));
        newPosts[nextIndex].featured = true;
        setPosts(newPosts);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <section
      className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16 overflow-x-hidden"
      id="blogs"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-[4rem]">
          <div className="flex mb-6">
            <span className="text-[#7e22ce] font-medium mb-2 bg-[#7e22ce]/10 px-4 py-1 rounded-full animate-pulse border-[1px] border-[solid] border-[#7e22ce] px-8 py-2">
              Photography Tips & Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-start">
            Creative inspiration and techniques 
            
            <br />for{" "}
            <span className={`${allura.className} text-[#7e22ce] italic`}>
              visual storytelling
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed text-left max-w-[50rem]">
            Expert perspectives on photography techniques, creative inspiration,
            and capturing exceptional visual moments.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Featured Post - Large Left Side */}
          <div className="lg:pr-2 xl:pr-4">
            <a
              href={featuredPost?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]">
                <img
                  src={featuredPost?.image || "/contact/up-bg-1.jpg"}
                  alt={featuredPost?.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <span className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm w-fit">
                      {featuredPost?.category}
                    </span>
                    <span className="text-xs sm:text-sm opacity-90">
                      {featuredPost?.date}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
                    {featuredPost?.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    {featuredPost?.excerpt}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90">
                    {featuredPost?.author}
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Regular Posts - Right Side Stack */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {regularPosts.slice(0, 3).map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] h-full flex-1"
              >
                <div className="flex gap-3 sm:gap-4 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden h-full">
                    <img
                      src={post.image || "/contact/up-bg-1.jpg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-center py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 hidden sm:inline">
                        •
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg leading-tight mb-1 sm:mb-2 group-hover:text-[#7e22ce] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-1 sm:mb-2 hidden sm:block">
                      {post.excerpt}
                    </p>
                    <p className="text-xs sm:text-sm text-[#7e22ce] font-medium">
                      {post.author}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12">
          <div className="flex gap-1.5 sm:gap-2">
            {posts.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentFeatured
                    ? "bg-[#7e22ce] w-6 sm:w-8"
                    : "bg-gray-300 w-1.5 sm:w-2"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
