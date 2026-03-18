export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80", title: "Living Room Deep Clean" },
    { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", title: "Commercial Cleaning" },
    { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80", title: "Electrical Work" },
    { src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80", title: "AC Servicing" },
    { src: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800&q=80", title: "Pre-Construction" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", title: "Marble Polishing Finish" },
  ];

  return (
    <div className="pt-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Portfolio</h1>
        <p className="text-xl text-gray-600">A showcase of our premium maintenance and renovation projects.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-2xl hover:shadow-primary/5 transition-all">
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-white font-bold text-lg drop-shadow-md">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
