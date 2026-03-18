import { ServiceCard } from "@/components/ServiceCard";
import { Sparkles, BedDouble, Droplets } from "lucide-react";

export default function CleaningServices() {
  return (
    <div className="pt-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Cleaning Services</h1>
        <p className="text-xl text-gray-600">Advanced extraction and professional cleaning technology for a revitalized home.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          title="Sofa Cleaning" 
          description="Remove deep-seated dust, stains, and allergens from your fabric and leather sofas with our specialized foam and extraction technique."
          icon={<Sparkles size={32} />}
          href="/contact"
        />
        <ServiceCard 
          title="Carpet Cleaning" 
          description="Industrial-grade vacuuming and shampooing to restore the original texture and color of your carpets."
          icon={<Droplets size={32} />}
          href="/contact"
        />
        <ServiceCard 
          title="Mattress Cleaning" 
          description="Sanitize and deodorize mattresses to ensure a healthy, dust-mite-free sleep environment."
          icon={<BedDouble size={32} />}
          href="/contact"
        />
      </div>
    </div>
  );
}
