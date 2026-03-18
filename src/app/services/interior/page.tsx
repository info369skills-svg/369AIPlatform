"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { PaintRoller, Layout, Palette, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";

export default function InteriorDesigning() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm border border-primary/10 mb-6">
                Premium Design Solutions
              </span>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Redefining <br />
                <span className="text-primary">Interior Spaces</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Elevate your living experience with our bespoke interior design services. We blend aesthetic brilliance with functional excellence to create spaces that reflect your unique personality.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/923206600448?text=Hello,%20I'm%20interested%20in%20Interior%20Designing%20services." 
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-[#15803d] transition-all shadow-lg shadow-primary/20">
                  Book a Consultation
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <img src="/images/services/interior-design.png" alt="Luxury Interior" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Expertise</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Space Planning"
            description="Optimize every square inch of your home with intelligent layout designs."
            icon={<Layout size={32} />}
            href="/contact"
          />
          <ServiceCard 
            title="Custom Furniture"
            description="Bespoke furniture pieces crafted to fit perfectly and look stunning."
            icon={<PaintRoller size={32} />}
            href="/contact"
          />
          <ServiceCard 
            title="Color Consultation"
            description="Expert advice on palettes that set the right mood for every room."
            icon={<Palette size={32} />}
            href="/contact"
          />
          <ServiceCard 
            title="Lighting Design"
            description="Sophisticated lighting solutions to enhance ambiance and utility."
            icon={<Lightbulb size={32} />}
            href="/contact"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&fit=crop" className="rounded-2xl" alt="Design detail" />
                <img src="https://images.unsplash.com/photo-1616486341351-70252447c574?w=600&fit=crop" className="rounded-2xl translate-y-8" alt="Design finish" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black mb-8">Why Our Designs Stand Out</h2>
              <div className="space-y-6">
                {[
                  "Conceptual 3D Visualization",
                  "Premium Material Sourcing",
                  "Turnkey Project Management",
                  "Sustainable Design Options"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="text-primary" size={24} />
                    <span className="text-lg font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
