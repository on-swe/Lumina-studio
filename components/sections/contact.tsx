"use client";
import React, { useState } from "react";
import { ArrowUpRight, Menu, Send } from "lucide-react";
import SocialMediaIcons from "@/components/imported-components/social-media";
import { Allura } from "next/font/google";
import ContactInfo from "@/components/imported-components/contact-info";
import Image from "next/image";
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    sessionType: "",
    sessionDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ 
          firstName: "", 
          lastName: "", 
          email: "", 
          sessionType: "", 
          sessionDetails: "" 
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#14132d] flex items-center justify-center overflow-x-hidden px-4 py-8 sm:py-16"
    >
      <div className=" max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex mb-6">
            <span className="text-[#7e22ce] font-medium mb-2 bg-[#7e22ce]/10 px-4 py-1 rounded-full animate-pulse border border-solid border-[#7e22ce] px-8 py-2">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-start">
            Let's Capture Something
            <br />
            <span className={`${allura.className} text-[#7e22ce]`}>
              {" "}
              Beautiful{" "}
            </span>
            Together
          </h1>
          <p className="text-lg text-[#ffffffc2] leading-relaxed text-left max-w-[50rem]">
            Ready to create stunning visual memories? We're here to turn your vision
            into reality with professional photography and creative storytelling.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Grid Layout */}
          <div className="grid grid-rows-[2fr_1.5fr] gap-4 h-full">
            {/* Top Row - Large Aerial View Card */}
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
              {/* Simulated aerial view background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt={`Lumina Studio`}
                  width={100}
                  height={100}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Bottom Row - Left Contact Card and Right Two Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative bg-gray-900 rounded-2xl p-6 flex flex-col justify-between overflow-hidden min-h-[200px]">
                {/* Background Video */}
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

                <div
                  className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"
                  style={{ zIndex: 2 }}
                ></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-start justify-between">
                    <h3 className="text-white text-xl font-semibold">
                      Contact us
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-white rotate-90" />
                  </div>
                  <div className="flex justify-end mt-auto">
                    <Menu className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              {/* Right - Two stacked cards */}
              <div className="grid grid-rows-[1fr_4fr] gap-4">
                {/* Home Card */}
                <div className="bg-gray-900 rounded-2xl flex items-center justify-between gap-[0.25rem] h-fit">
                  <SocialMediaIcons />
                </div>

                {/* Tech Stack Card */}
                <div className="bg-white rounded-2xl p-4 grid relative">
                  <svg
                    viewBox="0 0 800 500"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full opacity-15"
                  >
                    <path
                      d="M0,100 Q200,20 400,100 T800,100"
                      stroke="#7e22ce"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.8"
                    ></path>
                    <path
                      d="M0,130 Q200,50 400,130 T800,130"
                      stroke="#7e22ce"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.6"
                    ></path>
                    <path
                      d="M0,160 Q200,80 400,160 T800,160"
                      stroke="#7e22ce"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.4"
                    ></path>
                    <path
                      d="M0,190 Q200,110 400,190 T800,190"
                      stroke="#7e22ce"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.3"
                    ></path>
                    <path
                      d="M0,220 Q200,140 400,220 T800,220"
                      stroke="#7e22ce"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.2"
                    ></path>
                    <path
                      d="M0,250 Q200,170 400,250 T800,250"
                      stroke="#7e22ce"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.2"
                    ></path>
                    <path
                      d="M0,280 Q200,200 400,280 T800,280"
                      stroke="#7e22ce"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.1"
                    ></path>
                    <path
                      d="M800,320 Q600,240 400,320 T0,320"
                      stroke="#7e22ce"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.6"
                    ></path>
                    <path
                      d="M800,350 Q600,270 400,350 T0,350"
                      stroke="#7e22ce"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.4"
                    ></path>
                    <path
                      d="M800,380 Q600,300 400,380 T0,380"
                      stroke="#7e22ce"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.3"
                    ></path>
                  </svg>
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
          {/* Right side - contact form */}
          <div className="bg-white py-8 px-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-fit">
            <div className="mb-8 text-start">
              <h3 className="text-4xl font-bold mb-2">Book Your Session</h3>
              <p className="text-gray-600">
                Tell us about your vision and we'll capture it beautifully
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#7e22ce] transition-colors">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#7e22ce] focus:ring-4 focus:ring-[#7e22ce]/10 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#7e22ce] transition-colors">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#7e22ce] focus:ring-4 focus:ring-[#7e22ce]/10 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#7e22ce] transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#7e22ce] focus:ring-4 focus:ring-[#7e22ce]/10 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#7e22ce] transition-colors">
                  Session Type
                </label>
                <select 
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#7e22ce] focus:ring-4 focus:ring-[#7e22ce]/10 transition-all duration-300"
                >
                  <option value="">Select a session type</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Family">Family</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#7e22ce] transition-colors">
                  Session Details
                </label>
                <textarea
                  name="sessionDetails"
                  value={formData.sessionDetails}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#7e22ce] focus:ring-4 focus:ring-[#7e22ce]/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your session goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
                  Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#7e22ce] to-purple-800 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;