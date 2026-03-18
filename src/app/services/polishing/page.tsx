import { ServiceCard } from "@/components/ServiceCard";
import { Droplets, Sparkle } from "lucide-react";

export default function PolishingServices() {
  return (
    <div className="pt-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Premium Polishing</h1>
        <p className="text-xl text-gray-600">Restoring the original luster and shine to your valuable surfaces.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ServiceCard 
          title="Furniture Polishing" 
          description="Careful treatment of wooden tables, chairs, and antiques using premium oils and sealants to protect and shine."
          icon={<Sparkle size={32} />}
          href="/contact"
        />
        <ServiceCard 
          title="Marble & Stone Care" 
          description="Professional grinding, buffing, and sealing to remove scratches and bring out the natural beauty of your stone floors."
          icon={<Droplets size={32} />}
          href="/contact"
        />
      </div>
    </div>
  );
}
