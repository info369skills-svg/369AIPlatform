"use client";

import { motion } from "framer-motion";
import { HardHat, Ruler, PaintRoller, Hammer, CheckCircle } from "lucide-react";

export default function ConstructionServices() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Premium Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/construction-hero.png" 
            alt="Care Services Construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/20 backdrop-blur-sm text-sm font-bold mb-6 uppercase tracking-widest text-white">
            Care Services Construction
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
            <span className="text-white">
              Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 drop-shadow-md font-medium">
            Turning blueprints into breathtaking realities.
          </p>
        </div>
      </section>

      {/* Featured Project: Bhara Kahu */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm border border-primary/10 mb-6">
                Current Landmark Project
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                Barakahu Construction <br />
                <span className="text-primary">Project 2026 Islamabad</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A masterpiece in the making. Our team is currently executing a high-end residential development in Barakahu, Islamabad. This project showcases our commitment to structural integrity and premium design.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Foundation & Plinth", status: "Completed", icon: <CheckCircle className="text-primary" size={20} /> },
                  { title: "Brickwork & Partitioning", status: "In Progress", icon: <Hammer className="text-primary" size={20} /> },
                  { title: "Slab Shuttering", status: "Active Phase", icon: <Ruler className="text-primary" size={20} /> },
                  { title: "Quality Benchmarking", status: "A+ Standard", icon: <HardHat className="text-primary" size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                    {item.icon}
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-xs text-primary font-bold uppercase">{item.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl -z-10" />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                <img src="/images/projects/bhara-kahu.png" alt="Bhara Kahu Project Site" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Details */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-8">Our Construction Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We approach every construction and remodeling project as a unique architectural dialogue. By mixing advanced building materials with timeless craftsmanship, we deliver spaces that are structurally sound and aesthetically unparalleled.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Design & Planning", desc: "Collaborative blueprints and 3D renderings.", icon: <Ruler className="text-primary" /> },
                { title: "Structural Build", desc: "Solid foundations and expert structural framing.", icon: <Hammer className="text-primary" /> },
                { title: "Luxury Finishing", desc: "Premium materials, custom woodwork, and painting.", icon: <PaintRoller className="text-primary" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
              alt="Architecture" 
              className="rounded-3xl shadow-xl w-full h-[300px] object-cover"
            />
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80" 
              alt="Interior Finish" 
              className="rounded-3xl shadow-xl w-full h-[300px] object-cover translate-y-12"
            />
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white border border-gray-100 p-12 rounded-[3rem] shadow-2xl shadow-primary/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(1,65,28,0.02),transparent)]" />
            <HardHat size={48} className="mx-auto text-primary mb-6 relative z-10" />
            <h2 className="text-3xl font-black text-gray-900 mb-4 relative z-10">Start Your Dream Project Today</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
              Schedule a comprehensive consultation with our project managers. We will review your space, discuss your vision, and provide a detailed roadmap.
            </p>
            <a 
              href="https://wa.me/923206600448?text=Hello,%20I%20am%20interested%20in%20your%20Construction%20and%20Renovation%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-[#15803d] hover:-translate-y-1 transition-all relative z-10"
            >
              Consult via WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
