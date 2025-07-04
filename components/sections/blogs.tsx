"use client";

import { Allura } from "next/font/google";
import { useState, useEffect } from "react";
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});
const BlogsSection = () => {
  // const blogPosts = [
  //   {
  //     id: 7,
  //     title: "How to Build Scalable Software",
  //     category: "Software Development",
  //     date: "April 2, 2024",
  //     author: "By TechCrunch",
  //     image: "/blogs/scalable-software.jpg",
  //     link: "https://techcrunch.com/2021/09/15/how-to-build-scalable-software/",
  //     featured: false,
  //     excerpt:
  //       "Key patterns and practices for building software that grows with your business.",
  //   },
  //   {
  //     id: 8,
  //     title: "The Lean Startup Methodology",
  //     category: "Business Strategy",
  //     date: "January 25, 2024",
  //     author: "By Eric Ries",
  //     image: "/blogs/lean-startup.jpg",
  //     link: "https://theleanstartup.com/principles",
  //     featured: true,
  //     excerpt:
  //       "How to build a successful startup by validating ideas quickly and efficiently.",
  //   },
  //   {
  //     id: 10,
  //     title: "Growth Hacking: What It Is and How to Do It",
  //     category: "Digital Marketing",
  //     date: "March 30, 2024",
  //     author: "By Neil Patel",
  //     image: "/blogs/growth-hacking.jpg",
  //     link: "https://neilpatel.com/blog/growth-hacking/",
  //     featured: false,
  //     excerpt: "Proven growth hacking techniques used by successful startups.",
  //   },
  //   {
  //     id: 12,
  //     title: "Clean Code: Best Practices for Developers",
  //     category: "Software Development",
  //     date: "February 5, 2024",
  //     author: "By Robert C. Martin",
  //     image: "/blogs/clean-code.jpg",
  //     link: "https://cleancoders.com/article/clean-code-best-practices",
  //     featured: false,
  //     excerpt: "Essential principles for writing maintainable, efficient code.",
  //   },
  //   {
  //     id: 15,
  //     title: "The Psychology of Pricing",
  //     category: "Marketing Strategy",
  //     date: "April 5, 2024",
  //     author: "By Wharton School",
  //     image: "/blogs/pricing.jpg",
  //     link: "https://knowledge.wharton.upenn.edu/article/the-psychology-of-pricing/",
  //     featured: false,
  //     excerpt:
  //       "How pricing strategies influence consumer perception and behavior.",
  //   },
  //   {
  //     id: 18,
  //     title: "Cybersecurity Fundamentals for Businesses",
  //     category: "Cybersecurity",
  //     date: "April 15, 2024",
  //     author: "By Krebs on Security",
  //     image: "/blogs/cyber-business.jpg",
  //     link: "https://krebsonsecurity.com/2024/04/cybersecurity-fundamentals-for-businesses/",
  //     featured: false,
  //     excerpt:
  //       "Essential cybersecurity practices every business should implement.",
  //   },
  //   {
  //     id: 19,
  //     title: "The Future of E-Commerce",
  //     category: "Digital Marketing",
  //     date: "January 30, 2024",
  //     author: "By Shopify",
  //     image: "/blogs/ecommerce-future.jpg",
  //     link: "https://www.shopify.com/enterprise/future-of-ecommerce",
  //     featured: true,
  //     excerpt:
  //       "Emerging trends and technologies shaping the future of online retail.",
  //   },
  // ];
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Software: Principles and Best Practices",
      category: "Software Development",
      date: "May 4, 2025",
      author: "By Mark Williams (LinkedIn)",
      image: "/blogs/scalable-software.jpg",
      link: "https://www.linkedin.com/pulse/building-scalable-software-principles-best-practices-mark-williams-faosf/",
      featured: true,
      excerpt:
        "Explore core principles and best practices to architect software systems that scale seamlessly with demand." 
    },
    {
      id: 2,
      title: "6 Software Design Best Practices for Scalable, Flexible Solutions",
      category: "Software Development",
      date: "December 3, 2024",
      author: "By Rebecca Dodd (Retool)",
      image: "/blogs/software-design-best-practices.jpg",
      link: "https://retool.com/blog/software-design-best-practices/",
      featured: false,
      excerpt:
        "Discover six design principles that make your codebase more maintainable, resilient, and scalable." 
    },
    {
      id: 3,
      title: "10 Powerful Software Scalability Strategies for Unstoppable Growth",
      category: "Software Development",
      date: "≈October 2024",
      author: "By FullScale Team",
      image: "/blogs/software-scalability-strategies.jpg",
      link: "https://fullscale.io/blog/software-scalability/",
      featured: false,
      excerpt:
        "Practical engineering strategies—from CI/CD to performance monitoring—to ensure your application scales." 
    },
    {
      id: 4,
      title: "Building a Successful Growth Marketing Framework for SaaS",
      category: "Growth Marketing",
      date: "May 22, 2025",
      author: "By Sophie Grigoryan (Userpilot)",
      image: "/blogs/saas-growth-framework.jpg",
      link: "https://userpilot.com/blog/growth-marketing-framework/",
      featured: true,
      excerpt:
        "Step-by-step guide to crafting a data-driven growth funnel using the AAARRR framework for SaaS." 
    },
    {
      id: 5,
      title: "Growth Marketing for Startups: A Comprehensive Guide",
      category: "Growth Marketing",
      date: "≈8 months ago",
      author: "By Kaya Team",
      image: "/blogs/startup-growth-marketing.jpg",
      link: "https://www.usekaya.com/blog/growth-marketing-for-startups",
      featured: false,
      excerpt:
        "Learn how iterative, data-led growth tactics optimize acquisition, retention, and revenue for startups." 
    },
    {
      id: 6,
      title: "Every Growth Marketing Framework and Formula Ever",
      category: "Growth Marketing",
      date: "≈3 years ago",
      author: "By Tuff Growth Team",
      image: "/blogs/growth-frameworks.jpg",
      link: "https://tuffgrowth.com/every-growth-marketing-framework-and-formula-ever/",
      featured: false,
      excerpt:
        "A curated overview of ten proven growth frameworks that add clarity and direction to your marketing efforts." 
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
              Blogs, Insights & Trends
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-start">
            Digital innovation and growth 
            
            <br />for{" "}
            <span className={`${allura.className} text-[#7e22ce] italic`}>
              business success
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed text-left max-w-[50rem]">
            Expert perspectives on software development, marketing strategies,
            and creating exceptional digital experiences.
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
