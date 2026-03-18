"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Cleaning", path: "/services/cleaning" },
  { name: "Technical", path: "/services/technical" },
  { name: "Polishing", path: "/services/polishing" },
  { name: "Construction", path: "/services/construction" },
  { name: "Interior Designing", path: "/services/interior" },
  { name: "Blogs", path: "/blogs" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 relative">
          
          {/* Logo - Centered on mobile, Left-aligned on Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 flex-shrink-0 flex items-center z-10">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Care Services Logo" className="w-28 h-28 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
            </Link>
          </div>

          {/* Desktop Menu Wrapper (Empty placeholder for flex spacing on mobile) */}
          <div className="hidden md:flex flex-1 justify-center space-x-0.5 lg:space-x-2">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "px-2 py-2 rounded-md transition-all text-xs lg:text-sm font-semibold hover:text-primary whitespace-nowrap",
                  pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-gray-800"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <a
              href="https://wa.me/923206600448"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-[#15803d] text-white px-5 py-2.5 rounded-full font-bold transition-all hover:scale-105 shadow-md shadow-primary/20"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-primary p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-2xl">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-semibold",
                    pathname === link.path
                      ? "text-primary bg-primary/5"
                      : "text-gray-900 hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/923206600448"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center bg-primary text-white px-5 py-3 rounded-full font-bold shadow-lg"
              >
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
