"use client";

import { motion } from "framer-motion";
import { Wrench, Sparkles, Droplets, HardHat, ShieldCheck, Clock, CheckCircle, ArrowRight, PaintRoller } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "Cleaning", message: "" });

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello! My name is ${formData.name}. I need ${formData.service} services.\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const url = `https://wa.me/923206600448?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(22,101,52,0.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(22,101,52,0.05),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-64">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm border border-primary/10 shadow-sm">
                #1 Home Services in the Region
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Expert Home Maintenance, <br />
                <span className="text-primary drop-shadow-sm">
                  Delivered with Care.
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience the new standard of home living. From meticulous cleaning to premium construction, we handle everything with precision and modern expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <a href="#services" className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-[#15803d] transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2">
                  Explore Services <ArrowRight size={20} />
                </a>
                <Link href="/about" className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 rounded-xl font-bold border-2 border-gray-100 hover:border-primary/20 transition-all flex items-center justify-center">
                  Our Story
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                  <ShieldCheck className="text-primary" size={24} /> Verified Pros
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                  <Clock className="text-primary" size={24} /> 24/7 Support
                </div>
              </div>
            </motion.div>

            {/* Right Lead Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full max-w-md lg:max-w-lg"
            >
              <div className="bg-white border border-gray-100 rounded-3xl p-8 relative isolate shadow-[0_20px_50px_rgba(22,101,52,0.1)]">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl -z-10 animate-pulse" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-3xl -z-10" />
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Service</h3>
                <p className="text-gray-500 mb-6 text-sm">Fill details below and we&apos;ll reach out via WhatsApp immediately.</p>
                
                <form onSubmit={handleBookNow} className="space-y-4 relative z-10">
                  <div>
                    <input 
                      type="text" required placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 font-medium"
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" required placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 font-medium"
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <select 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700 font-medium"
                      value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <optgroup label="Cleaning Services">
                        <option value="Sofa Cleaning">Sofa Cleaning</option>
                        <option value="Carpet Cleaning">Carpet Cleaning</option>
                        <option value="Mattress Cleaning">Mattress Cleaning</option>
                      </optgroup>
                      <optgroup label="Technical Services">
                        <option value="AC Servicing & Repair">AC Servicing & Repair</option>
                        <option value="CCTV Installation">CCTV Installation</option>
                        <option value="Electrical Fixes">Electrical Fixes</option>
                        <option value="Plumbing Solutions">Plumbing Solutions</option>
                      </optgroup>
                      <optgroup label="Polishing Services">
                        <option value="Furniture Polishing">Furniture Polishing</option>
                        <option value="Marble & Stone Care">Marble & Stone Care</option>
                      </optgroup>
                      <optgroup label="Construction Services">
                        <option value="Construction & Renovation">Construction & Renovation</option>
                        <option value="Interior Designing">Interior Designing</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      placeholder="Special Instructions (optional)" rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 resize-none font-medium"
                      value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    type="submit" 
                    className="w-full py-4 bg-primary hover:bg-[#15803d] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    Inquire via WhatsApp
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Construction Highlights (Premium Sub-brand feel) */}
      <section className="py-24 bg-gray-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 lg:pr-12"
            >
              <div className="flex items-center gap-3 text-primary font-bold mb-4 uppercase tracking-widest text-xs">
                <span className="w-10 h-[2px] bg-primary"></span>
                <span>Featured Expertise</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Construction & <br />
                <span className="text-primary">Renovation</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Transform your property with our premium construction sub-brand. We are currently featuring the <strong>Bhara Kahu Construction Project 2026 Islamabad</strong>—delivering high-detail residential excellence from foundation to luxury finish.
              </p>
              <ul className="space-y-4 mb-10">
                {["Structural Engineering", "Interior Remodeling", "Custom Fit-outs", "Project Management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services/construction" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-[#15803d] hover:shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all">
                View Portfolio & Details <ArrowRight size={20} />
              </Link>
            </motion.div>
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="h-64 rounded-2xl overflow-hidden shadow-2xl relative">
                <img src="/images/projects/bhara-kahu.png" alt="Bhara Kahu Construction Project 2026" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="font-bold text-lg">Bhara Kahu Project 2026</span>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="h-64 rounded-2xl overflow-hidden shadow-2xl relative md:translate-y-8">
                <img src="/images/services/interior-design.png" alt="Interior Designing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="font-bold text-lg">Luxury Interior Designing</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-24 bg-[#fcfdfc] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Core Services</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg">Quality maintenance solutions tailored for modern living spaces.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Cleaning Services" 
              description="Comprehensive sofa, carpet, and mattress dry cleaning utilizing advanced extraction technology."
              icon={<Sparkles size={32} />}
              href="/services/cleaning"
            />
            <ServiceCard 
              title="Technical Repair" 
              description="Expert AC servicing, CCTV installation, electrical fixes, and water tank maintenance."
              icon={<Wrench size={32} />}
              href="/services/technical"
            />
            <ServiceCard 
              title="Premium Polishing" 
              description="Restore the glory of your furniture and marble floors with our specialized polishing treatments."
              icon={<Droplets size={32} />}
              href="/services/polishing"
            />
            <ServiceCard 
              title="Interior Designing" 
              description="Bespoke interior solutions that blend luxury with functionality, tailored to your unique lifestyle."
              icon={<PaintRoller size={32} className="text-primary" />}
              href="/services/interior"
            />
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Latest Insights</h2>
              <div className="w-20 h-1.5 bg-primary mb-6 rounded-full" />
              <p className="text-gray-600 text-lg">Stay updated with professional home care tips and maintenance guides from our experts.</p>
            </div>
            <Link href="/blogs" className="group inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:opacity-70 transition-all">
              View All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Why AC Servicing is important in Islamabad?", category: "Technical", date: "Mar 10, 2026", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&h=400&fit=crop", slug: "ac-servicing-important-islamabad" },
              { id: 2, title: "The Hidden Dangers of an Unclean Mattress", category: "Cleaning", date: "Mar 08, 2026", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop", slug: "hidden-dangers-unclean-mattress" },
              { id: 3, title: "How to Maintain Marble Floors at Home", category: "Polishing", date: "Mar 05, 2026", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", slug: "maintain-marble-floors-home" }
            ].map((post) => (
              <motion.div 
                key={post.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-primary/5 group"
              >
                <Link href={`/blogs/${post.slug}`} className="block relative h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    {post.category}
                  </div>
                </Link>
                <div className="p-8">
                  <div className="text-gray-400 text-xs font-bold mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 transition-colors group-hover:text-primary">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <Link href={`/blogs/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] group/link">
                    Read More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
