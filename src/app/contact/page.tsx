"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Contact Form Inquiry\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const url = `https://wa.me/923206600448?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-600">We&apos;d love to hear from you. Drop us a message or visit us.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-black">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Our Office</p>
                  <p className="text-gray-600 font-medium">Office#5 KRL Road Rajgan Plaza near Khanna Pull, Rawalpindi</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Phone / WhatsApp</p>
                  <p className="text-gray-600 font-medium">+92 320 6600448</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600 font-medium">info@careservices.com</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Working Hours</p>
                  <p className="text-gray-600 font-medium">24/7 Support Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-100 p-8 rounded-3xl relative isolate shadow-2xl shadow-primary/5">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-black">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Name</label>
              <input 
                type="text" required 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone</label>
                <input 
                  type="tel" required 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
              <textarea 
                required rows={4}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-medium"
                value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-primary hover:bg-[#15803d] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
