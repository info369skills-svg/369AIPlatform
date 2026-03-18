import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  { id: 1, title: "Why AC Servicing is important in Islamabad?", category: "Technical", date: "Mar 10, 2026", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&h=400&fit=crop", slug: "ac-servicing-important-islamabad" },
  { id: 2, title: "The Hidden Dangers of an Unclean Mattress", category: "Cleaning", date: "Mar 08, 2026", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop", slug: "hidden-dangers-unclean-mattress" },
  { id: 3, title: "How to Maintain Marble Floors at Home", category: "Polishing", date: "Mar 05, 2026", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", slug: "maintain-marble-floors-home" },
  { id: 4, title: "5 Signs You Need Electrical House Wiring Upgrades", category: "Technical", date: "Feb 28, 2026", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop", slug: "signs-electrical-house-wiring-upgrades" },
  { id: 5, title: "Choosing the Right Renovation Contractor", category: "Construction", date: "Feb 22, 2026", image: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=600&h=400&fit=crop", slug: "choosing-right-renovation-contractor" },
  { id: 6, title: "Dry vs Steam Carpet Cleaning: Which is Better?", category: "Cleaning", date: "Feb 18, 2026", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop", slug: "dry-vs-steam-carpet-cleaning" },
  { id: 7, title: "The Ultimate Guide to Sofa Fabric Protection", category: "Polishing", date: "Feb 15, 2026", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop", slug: "ultimate-guide-sofa-fabric-protection" },
  { id: 8, title: "Why Water Tank Cleaning is Crucial for Health", category: "Technical", date: "Feb 10, 2026", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop", slug: "water-tank-cleaning-crucial-health" },
  { id: 9, title: "CCTV Installation: Where to Place Your Cameras", category: "Technical", date: "Feb 05, 2026", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop", slug: "cctv-installation-place-cameras" },
  { id: 10, title: "Wood Furniture Polishing Tips and Tricks", category: "Polishing", date: "Jan 30, 2026", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&h=400&fit=crop", slug: "wood-furniture-polishing-tips" },
  { id: 11, title: "Modern Trends in Kitchen Renovation", category: "Construction", date: "Jan 25, 2026", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop", slug: "modern-trends-kitchen-renovation" },
  { id: 12, title: "How Frequently Should You Deep Clean Your House?", category: "Cleaning", date: "Jan 20, 2026", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop", slug: "how-frequently-deep-clean-house" },
  { id: 13, title: "Common Plumbing Emergencies and How to Avert Them", category: "Technical", date: "Jan 15, 2026", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&h=400&fit=crop", slug: "common-plumbing-emergencies-avert-them" },
  { id: 14, title: "Enhancing Exterior Facades: A Quick Guide", category: "Construction", date: "Jan 10, 2026", image: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=600&h=400&fit=crop", slug: "enhancing-exterior-facades-quick-guide" },
  { id: 15, title: "Essential Home Maintenance Checklist for 2026", category: "General", date: "Jan 05, 2026", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop", slug: "essential-home-maintenance-checklist" }
];

export default function Blogs() {
  return (
    <div className="pt-8 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Latest Insights</h1>
        <p className="text-xl text-gray-600">Expert advice, tips, and trends for modern home maintenance and living.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
            <div className="h-48 overflow-hidden relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs text-gray-500 font-bold mb-2 block">{post.date}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                Discover the best practices and professional tips on {post.title.toLowerCase()} to maintain a pristine environment.
              </p>
              <Link href={`/blogs/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
