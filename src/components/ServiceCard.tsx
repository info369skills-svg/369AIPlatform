import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, href, className }: ServiceCardProps) {
  const whatsappLink = `https://wa.me/923206600448?text=Hello%20Care%20Services,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(title)}%20service.`;

  return (
    <div className={cn(
      "group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5",
      className
    )}>
      <div>
        <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(1,65,28,0.3)]">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">{description}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <Link 
          href={href}
          className="flex-1 flex items-center justify-center gap-2 text-primary font-bold py-2.5 px-4 rounded-xl hover:bg-primary/5 transition-colors border border-primary/10"
        >
          Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center bg-primary hover:bg-[#15803d] text-white font-bold py-2.5 px-4 rounded-xl transition-colors shadow-md shadow-primary/10"
        >
          Book via WhatsApp
        </a>
      </div>
    </div>
  );
}
