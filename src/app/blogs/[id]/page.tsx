import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

// Using the same data as the main blog page, plus full content generation
const blogPosts = [
  { id: 1, title: "Why AC Servicing is important in Islamabad?", category: "Technical", date: "Mar 10, 2026", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1200&h=600&fit=crop", slug: "ac-servicing-important-islamabad" },
  { id: 2, title: "The Hidden Dangers of an Unclean Mattress", category: "Cleaning", date: "Mar 08, 2026", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=600&fit=crop", slug: "hidden-dangers-unclean-mattress" },
  { id: 3, title: "How to Maintain Marble Floors at Home", category: "Polishing", date: "Mar 05, 2026", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop", slug: "maintain-marble-floors-home" },
  { id: 4, title: "5 Signs You Need Electrical House Wiring Upgrades", category: "Technical", date: "Feb 28, 2026", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=600&fit=crop", slug: "signs-electrical-house-wiring-upgrades" },
  { id: 5, title: "Choosing the Right Renovation Contractor", category: "Construction", date: "Feb 22, 2026", image: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=1200&h=600&fit=crop", slug: "choosing-right-renovation-contractor" },
  { id: 6, title: "Dry vs Steam Carpet Cleaning: Which is Better?", category: "Cleaning", date: "Feb 18, 2026", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=600&fit=crop", slug: "dry-vs-steam-carpet-cleaning" },
  { id: 7, title: "The Ultimate Guide to Sofa Fabric Protection", category: "Polishing", date: "Feb 15, 2026", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop", slug: "ultimate-guide-sofa-fabric-protection" },
  { id: 8, title: "Why Water Tank Cleaning is Crucial for Health", category: "Technical", date: "Feb 10, 2026", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=600&fit=crop", slug: "water-tank-cleaning-crucial-health" },
  { id: 9, title: "CCTV Installation: Where to Place Your Cameras", category: "Technical", date: "Feb 05, 2026", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=600&fit=crop", slug: "cctv-installation-place-cameras" },
  { id: 10, title: "Wood Furniture Polishing Tips and Tricks", category: "Polishing", date: "Jan 30, 2026", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1200&h=600&fit=crop", slug: "wood-furniture-polishing-tips" },
  { id: 11, title: "Modern Trends in Kitchen Renovation", category: "Construction", date: "Jan 25, 2026", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=600&fit=crop", slug: "modern-trends-kitchen-renovation" },
  { id: 12, title: "How Frequently Should You Deep Clean Your House?", category: "Cleaning", date: "Jan 20, 2026", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=600&fit=crop", slug: "how-frequently-deep-clean-house" },
  { id: 13, title: "Common Plumbing Emergencies and How to Avert Them", category: "Technical", date: "Jan 15, 2026", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1200&h=600&fit=crop", slug: "common-plumbing-emergencies-avert-them" },
  { id: 14, title: "Enhancing Exterior Facades: A Quick Guide", category: "Construction", date: "Jan 10, 2026", image: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=1200&h=600&fit=crop", slug: "enhancing-exterior-facades-quick-guide" },
  { id: 15, title: "Essential Home Maintenance Checklist for 2026", category: "General", date: "Jan 05, 2026", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop", slug: "essential-home-maintenance-checklist" }
];

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     id: post.slug,
//   }));
// }

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.id);

  if (!post) {
    notFound();
  }

  // Generates roughly 1000 words of placeholder/SEO text related to the title
  const renderContent = () => {
    return (
      <div className="prose prose-lg prose-primary max-w-none space-y-6 text-gray-700 leading-relaxed">
        <p className="text-xl font-bold text-gray-900 leading-relaxed">
          Welcome to this comprehensive guide on <strong>{post.title}</strong>. 
          In today's fast-paced world, maintaining a clean, safe, and efficient environment is more critical than ever. 
          Whether you are a homeowner seeking peace of mind or a business owner looking to protect your investments, 
          understanding the nuances of proper maintenance can save you significant time and money in the long run.
        </p>
        
        <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">Introduction to the Core Concepts</h2>
        <p>
          It is a well-established fact that preventative care usually outweighs reactive repairs. 
          When dealing with scenarios related to {post.title.toLowerCase()}, early intervention is key. 
          Many property owners wait until there is a noticeable malfunction before taking action, which often results in 
          compounded damage. For example, delaying standard servicing can put undue stress on surrounding components, 
          leading to a cascading failure effect that disrupts daily life and incurs heavy financial tolls. 
          By prioritizing a consistent schedule, you ensure longevity and optimal performance.
        </p>
        <p>
          But what exactly does proper maintenance entail? It goes far beyond a superficial wipe-down or a cursory glance. 
          It requires a systematic approach, often utilizing specialized tools and deep industry knowledge. 
          This is exactly why consulting professionals is usually the most cost-effective and secure route.
          Experts not only bring the physical tools required for the job but also the analytical skills to diagnose 
          hidden issues before they manifest into catastrophic problems. 
          The unseen dangers are often the most destructive, quietly eroding structural integrity, air quality, or overall utility.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">The Hidden Benefits of Regular Maintenance</h2>
        <p>
          While the immediate benefits are obvious—such as restored functionality or a visually pleasing surface—the 
          long-term advantages are where the true value lies. Firstly, there is the aspect of health and safety. 
          Whether it is ensuring clean air through duct maintenance, removing allergens from deep within upholstery, 
          or verifying that electrical systems are not a fire hazard, regular professional attention creates a secure living space.
        </p>
        <p>
          Secondly, energy efficiency is heavily dependent on maintenance. Systems that are clogged, misaligned, or struggling 
          against friction consume vast amounts of excess electricity. By tuning these systems to run smoothly, not only 
          is the carbon footprint reduced, but monthly utility bills are drastically lowered. In many cases, the cost of 
          a professional service call is entirely offset by the savings accrued over the subsequent months.
        </p>
        <p>
          Lastly, we must consider property valuation. A well-maintained property consistently appraises higher than one showing 
          signs of deferred maintenance. When prospective buyers or tenants tour a property, they are keenly aware of the 
          state of the infrastructure. Pristine floors, clean air, quiet mechanical systems, and updated utilities all signal 
          that the property has been cared for lovingly, thus commanding a premium market price.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">Common Myths and Misconceptions</h2>
        <div className="bg-primary/5 p-8 rounded-2xl my-8 border-l-4 border-primary">
          <p className="font-bold italic text-gray-900">
            "One of the biggest misconceptions we see in the industry is the belief that if it isn't broken, it doesn't need to be fixed or checked."
          </p>
        </div>
        <p>
          This reactive mindset is the source of many severe household emergencies. The 'if it ain't broke' philosophy simply 
          does not apply to complex, modern residential systems. Wear and tear are inevitable facts of physics. Parts degrade, 
          dust accumulates, and tolerances slip. 
        </p>
        <p>
          Another pervasive myth is that DIY solutions are universally superior or more economical. While DIY has its place for 
          minor cosmetic touch-ups, attempting complex mechanical, chemical, or structural tasks without formal training is highly risky. 
          Incorrectly applied chemicals can permanently ruin expensive fabrics or stonework. Improperly wired electrical fixtures 
          can create lethal shock hazards or spark devastating fires. In almost all high-stakes scenarios, the DIY route ends up 
          costing substantially more when professionals must inevitably be called in to undo the botched attempt and fix the original problem.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">Actionable Steps Designed for Success</h2>
        <p>
          To ensure that you are maximizing the lifespan of your investments, we recommend establishing a master maintenance calendar. 
          Document the last time each major system or significant surface was professionally serviced. From there, 
          extrapolate out to create a proactive schedule.
        </p>
        <ul className="list-disc pl-6 space-y-4 my-6 marker:text-primary">
          <li><strong>Quarterly Inspections:</strong> Highly utilized elements like HVAC filters, high-traffic carpets, and primary plumbing fixtures should be checked every 3 to 4 months.</li>
          <li><strong>Bi-Annual Deep Cleans:</strong> Items like mattresses, sofa upholstery, and intricate electronics require deep, professional cleaning every 6 months to prevent allergen buildup and dust intrusion.</li>
          <li><strong>Annual Heavy Maintenance:</strong> Comprehensive structural checks, marble polishing, exterior facade cleaning, and full electrical panel reviews should occur once a year.</li>
        </ul>

        <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">Why Choose Care Services?</h2>
        <p>
          At Care Services, we understand that your property is more than just a physical asset; it is a sanctuary. 
          That is why we approach every job with rigorous attention to detail and a commitment to zero-compromise quality. 
          Our technicians are extensively trained, constantly reviewing the latest industry standards and technological advancements. 
          We use proprietary techniques—whether it’s our premium marble polishing, our rapid-response technical diagnostic tools, 
          or our eco-friendly, deep-penetrating cleaning solutions.
        </p>
        <p>
          Every intervention we perform is logged, verified, and guaranteed. We do not consider a job complete until our rigorous internal 
          quality assurance metrics have been satisfied and, more importantly, until you are entirely elated with the result. 
          When you partner with Care Services, you are not just buying a one-off task; you are investing in the long-term vitality, 
          beauty, and safety of your home. 
        </p>
        <p>
          If you have found the information in this guide regarding <em>{post.title.toLowerCase()}</em> helpful, 
          and you recognize the need for professional intervention, do not hesitate to reach out. 
          Our customer service team is available around the clock to assist you in designing a customized care plan 
          that perfectly aligns with your specific needs, schedule, and architectural realities. 
          Let us take the burden of maintenance off your shoulders so you can focus on simply enjoying your beautiful, perfectly functioning space.
        </p>
      </div>
    );
  };

  return (
    <div className="pt-8 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-black transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm font-bold">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm font-bold">
              <Clock size={16} />
              5 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl border border-gray-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl relative isolate shadow-xl shadow-primary/5">
          {renderContent()}
        </article>

        {/* CTA */}
        <div className="mt-16 bg-[#002b12] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden isolate">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          <h3 className="text-3xl font-black text-white mb-6">Need Professional Help?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg font-medium">
            Don't let maintenance tasks pile up. Contact our expert team today for a free consultation and bring your property back to pristine condition.
          </p>
          <a
            href={`https://wa.me/923206600448?text=${encodeURIComponent(`Hi, I just read your article "${post.title}" and would like to inquire about your services.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-[#15803d] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-black/20"
          >
            Book via WhatsApp
          </a>
        </div>


      </div>
    </div>
  );
}
