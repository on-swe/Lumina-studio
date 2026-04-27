"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = function () {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#14132d] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center max-w-[35rem]">
            <a
              href="#"
              className="text-4xl font-bold text-[#7e22ce] mr-2 font-pacifico cursor-pointer hover:text-purple-400 transition-colors"
            >
              Lumina
            </a>
            <p className="text-gray-300 mb-4">
              Capturing moments and creating memories through professional
              photography and creative videography services that tell your
              unique story.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#7e22ce] hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center max-w-[35rem]">
            <h3 className="font-semibold text-[2.75rem]">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest photography tips, behind-the-scenes content, and
              special offers for your next session.
            </p>

            {submitStatus === "success" && (
              <div className="bg-green-900/30 border border-green-500 rounded-lg p-3 mb-4 text-green-300 text-sm">
                Thanks for subscribing! Check your email for a welcome message.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 mb-4 text-red-300 text-sm">
                Failed to subscribe. Please try again.
              </div>
            )}

            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#7e22ce]/50 w-full text-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#7e22ce] text-white px-4 py-2 rounded-r-lg whitespace-nowrap hover:bg-purple-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex justify-center">
          <div className="flex flex-col justify-between items-center">
            <p className="mb-2">
              &copy; 2025 <strong className="text-[#7e22ce]">Lumina Studio</strong>. All rights reserved.
            </p>
            <p>
              Designed and Developed by{" "}
              <Link
                href="https://elrayes.vercel.app"
                className="hover:underline"
              >
                <strong>Elrayes</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
