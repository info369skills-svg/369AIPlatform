export default function About() {
  return (
    <div className="pt-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">About Care Services</h1>
        <p className="text-xl text-gray-600">The story of how we became the premier choice for modern home maintenance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="bg-white border border-gray-100 rounded-3xl p-6 relative isolate shadow-xl shadow-primary/5">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop" alt="Team at work" className="rounded-2xl shadow-sm w-full h-auto object-cover" />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Founded with a commitment to excellence, Care Services started with a simple idea: home maintenance should be seamless, reliable, and premium. We saw an industry struggling with outdated methods and brought a modern, transparent approach to every service we offer.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From cleaning services that revitalizes your living spaces to expert technical repairs and luxury construction finishings, our team of verified professionals treats every home as if it were their own. We don&apos;t just fix things; we elevate your environment.
          </p>
        </div>
      </div>
    </div>
  );
}
