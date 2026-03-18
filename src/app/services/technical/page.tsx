import { ServiceCard } from "@/components/ServiceCard";
import { Wrench, Shield, Zap, Video } from "lucide-react";

export default function TechnicalServices() {
  return (
    <div className="pt-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Technical Repair & Maintenance</h1>
        <p className="text-xl text-gray-600">Ensure the smooth operation of your home systems with our expert technicians.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ServiceCard 
          title="AC Servicing & Repair" 
          description="Comprehensive air conditioning maintenance, duct cleaning, and gas refilling to keep your environment cool and energy-efficient."
          icon={<Zap size={32} />}
          href="/contact"
        />
        <ServiceCard 
          title="CCTV Installation" 
          description="Secure your premises with modern, high-definition camera systems and smart home integrations."
          icon={<Video size={32} />}
          href="/contact"
        />
        <ServiceCard 
          title="Electrical Fixes" 
          description="From minor socket repairs to complete home rewiring, handled safely by licensed electricians."
          icon={<Shield size={32} />}
          href="/contact"
        />
        <ServiceCard 
          title="Plumbing Solutions" 
          description="Fast and reliable water tank maintenance, leak detection, and pipe repairs."
          icon={<Wrench size={32} />}
          href="/contact"
        />
      </div>
    </div>
  );
}
