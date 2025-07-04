import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  BarChart2,
  Cloud,
  Server,
  Database,
  Cpu,
  Lock,
  Zap,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const ServicesShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      content:
        "Tailored solutions designed to streamline your business operations through full-cycle development from concept to deployment.",
      icon: <Code className="w-5 h-5" />,
      category: "Development",
      accent: "bg-purple-100 text-purple-600",
    },
    {
      id: 2,
      title: "Web Application Development",
      content:
        "Modern, responsive web apps built with React, Angular, and Node.js with intuitive interfaces and robust backend systems.",
      icon: <Globe className="w-5 h-5" />,
      category: "Development",
      accent: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      title: "Mobile App Development",
      content:
        "Native and cross-platform iOS/Android apps with exceptional UX, from concept to App Store deployment.",
      icon: <Smartphone className="w-5 h-5" />,
      category: "Development",
      accent: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      title: "UI/UX Design",
      content:
        "Human-centered design services including user research, wireframing, and prototyping for beautiful, functional interfaces.",
      icon: <Palette className="w-5 h-5" />,
      category: "Design",
      accent: "bg-pink-100 text-pink-600",
    },
    {
      id: 5,
      title: "Digital Marketing",
      content:
        "Comprehensive strategies including SEO, PPC, and social media to increase visibility and generate qualified leads.",
      icon: <Megaphone className="w-5 h-5" />,
      category: "Marketing",
      accent: "bg-blue-100 text-blue-600",
    },
    {
      id: 6,
      title: "Data Analytics",
      content:
        "Turn data into actionable insights with dashboards and predictive analytics for data-driven decisions.",
      icon: <BarChart2 className="w-5 h-5" />,
      category: "Business",
      accent: "bg-emerald-100 text-emerald-600",
    },
    {
      id: 7,
      title: "Cloud Solutions",
      content:
        "End-to-end cloud services including migration and management on AWS, Azure, and Google Cloud.",
      icon: <Cloud className="w-5 h-5" />,
      category: "Infrastructure",
      accent: "bg-amber-100 text-amber-600",
    },
    {
      id: 8,
      title: "DevOps Services",
      content:
        "CI/CD pipelines, containerization, and infrastructure as code to accelerate delivery while maintaining quality.",
      icon: <Server className="w-5 h-5" />,
      category: "Infrastructure",
      accent: "bg-amber-100 text-amber-600",
    },
    {
      id: 9,
      title: "ERP Solutions",
      content:
        "Integrated business management systems for finance, HR, supply chain, and customer relations.",
      icon: <Layers className="w-5 h-5" />,
      category: "Business",
      accent: "bg-emerald-100 text-emerald-600",
    },
    {
      id: 10,
      title: "Cybersecurity",
      content:
        "Comprehensive security solutions including risk assessment, penetration testing, and compliance management.",
      icon: <Lock className="w-5 h-5" />,
      category: "Infrastructure",
      accent: "bg-amber-100 text-amber-600",
    },
    {
      id: 11,
      title: "AI Integration",
      content:
        "Implement machine learning and AI solutions to automate processes and gain competitive insights.",
      icon: <Cpu className="w-5 h-5" />,
      category: "Development",
      accent: "bg-purple-100 text-purple-600",
    },
    {
      id: 12,
      title: "IT Consulting",
      content:
        "Strategic technology advisory services to align IT infrastructure with business objectives.",
      icon: <Zap className="w-5 h-5" />,
      category: "Business",
      accent: "bg-emerald-100 text-emerald-600",
    },
  ];

  const categories = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Business",
    "Infrastructure",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
    hover: { y: -5 },
  };

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:20px_20px] sm:bg-[length:30px_30px] lg:bg-[length:40px_40px] opacity-10" />

      {/* Gradient overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-gray-50/80" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-purple-600">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We deliver cutting-edge technology solutions tailored to your
            business needs.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-white rounded-xl shadow-sm overflow-hidden  hover:shadow-md transition-all duration-300 flex flex-col w-[300px] h-[400px] border-[1px] border-[#7e22ce] border-[solid]"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${service.accent}`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.content}</p>
                </div>

                {/* Footer */}
                <div className=" flex justify-between items-center mt-4">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${service.accent}`}
                  >
                    {service.category}
                  </span>
                  <motion.div
                    animate={{
                      x: hoveredCard === service.id ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 500 }}
                  ></motion.div>
                </div>
              </div>

              {/* Hover accent */}
              {hoveredCard === service.id && (
                <motion.div
                  className="absolute inset-0 border-2 border-purple-500 pointer-events-none rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layoutId="hoverBorder"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center mx-auto">
            Explore All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
