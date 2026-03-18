"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone CTA */}
      <motion.a
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        href="tel:+923206600448"
        className="group relative flex items-center justify-center w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-gray-900/40"
        aria-label="Call Us"
      >
        <Phone size={24} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now
        </span>
      </motion.a>

      {/* WhatsApp CTA */}
      <motion.a
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        href="https://wa.me/923206600448?text=Hello%20Care%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-primary/40"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={28} className="group-hover:animate-bounce" />
        <span className="absolute right-full mr-4 bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>

    </div>
  );
}
