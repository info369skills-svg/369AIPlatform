import Link from "next/link";
import { Facebook, Instagram, Youtube, Music2, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fcfdfc] border-t border-gray-100 pt-10 pb-8 overflow-hidden text-center">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Brand Section - Tightened */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <Link href="/" className="inline-block group transition-transform hover:scale-105 active:scale-95">
            <img 
              src="/logo.png" 
              alt="Care Services" 
              className="w-32 h-auto drop-shadow-md" 
            />
          </Link>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
            Elevating home living standards through precision maintenance and premium architectural solutions. Your sanctuary, our expertise.
          </p>
          
          {/* Centered Social Icons - More Compact */}
          <div className="flex items-center justify-center gap-3">
            <SocialButton href="https://facebook.com/careservices" icon={<Facebook size={16} />} label="Facebook" />
            <SocialButton href="https://instagram.com/careservices" icon={<Instagram size={16} />} label="Instagram" />
            <SocialButton href="https://tiktok.com/@careservices" icon={<Music2 size={16} />} label="TikTok" />
            <SocialButton href="https://youtube.com/careservices" icon={<Youtube size={16} />} label="YouTube" />
          </div>
        </div>

        {/* Simplified Links - More Compact Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-100/50 mb-8">
          <div className="space-y-3 flex flex-col items-center">
            <h4 className="text-gray-900 font-black text-[10px] uppercase tracking-[0.2em]">Services</h4>
            <ul className="flex flex-col items-center gap-1.5">
              <FooterLink href="/services/cleaning">Cleaning</FooterLink>
              <FooterLink href="/services/technical">Technical</FooterLink>
              <FooterLink href="/services/polishing">Polishing</FooterLink>
              <FooterLink href="/services/construction">Construction</FooterLink>
            </ul>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <h4 className="text-gray-900 font-black text-[10px] uppercase tracking-[0.2em]">Company</h4>
            <ul className="flex flex-col items-center gap-1.5">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/blogs">Insights</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          <div className="col-span-2 space-y-3 flex flex-col items-center justify-center">
            <h4 className="text-gray-900 font-black text-[10px] uppercase tracking-[0.2em]">Connect</h4>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5 text-gray-600 text-xs font-bold">
                <MapPin size={14} className="text-primary/70" /> Office#5 KRL Road Rajgan Plaza near Khanna Pull, Rawalpindi
              </div>
              <div className="flex items-center gap-1.5 text-gray-600 text-xs font-bold">
                <Phone size={14} className="text-primary/70" /> +92 320 6600448
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Perfectly Centered and Compact */}
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-gray-900 text-sm font-black tracking-tight">All rights to CareservicesPk</p>
            <p className="text-gray-400 text-[10px] font-medium">
              Created by <a href="https://369Aiventures.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 font-black underline decoration-1 underline-offset-2">369Aiventures.com</a>
            </p>
          </div>
          
          <div className="flex items-center gap-6 justify-center">
            <Link href="#" className="text-[9px] font-black text-gray-400 hover:text-primary transition-all uppercase tracking-[0.3em]">Privacy Policy</Link>
            <Link href="#" className="text-[9px] font-black text-gray-400 hover:text-primary transition-all uppercase tracking-[0.3em]">Terms</Link>
          </div>
          
          <p className="text-gray-300 text-[8px] uppercase tracking-[0.4em] font-medium pt-2">&copy; {currentYear} &bull; RAWALPINDI</p>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 text-gray-500 shadow-sm transition-all hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-500 hover:text-primary font-bold text-[11px] transition-all tracking-wide"
      >
        {children}
      </Link>
    </li>
  );
}
