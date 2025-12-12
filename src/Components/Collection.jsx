import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const collections = [
  {
    id: 1,
    name: "Evening Elegance",
    category: "Gowns",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop",
    className: "row-span-3 col-start-1 row-start-1"
  },
  {
    id: 2,
    name: "Tailored Perfection",
    category: "Suits",
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1887&auto=format&fit=crop",
    className: "row-span-3 col-start-2 row-start-1"
  },
  {
    id: 3,
    name: "Casual Luxe",
    category: "Day Wear",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    className: "col-span-2 row-span-2 col-start-1 row-start-4"
  },
  {
    id: 4,
    name: "Heritage Collection",
    category: "Classic",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
    className: "col-span-2 row-span-5 col-start-3 row-start-1"
  },
  {
    id: 5,
    name: "Modern Minimalist",
    category: "Contemporary",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    className: "row-span-3 col-start-5 row-start-1"
  },
  {
    id: 6,
    name: "Statement Pieces",
    category: "Avant-Garde",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    className: "row-span-2 col-start-5 row-start-4"
  }
];


const Collection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/shop');
  };

  return (
    <section className="bg-[#F5F0E6] min-h-screen py-16 px-6 lg:px-12 flex flex-col">
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <span className="uppercase tracking-[0.3em] text-xs text-[#C5A059] font-semibold">Discover</span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mt-4">Signature Collections</h2>
        <p className="text-[#4F4F4F] mt-3 text-sm tracking-wide">Timeless elegance meets contemporary craftsmanship</p>
      </div>

      <div className="max-w-7xl mx-auto w-full h-[600px] lg:h-[700px] grid grid-cols-5 grid-rows-5 gap-2 group">
        {collections.map((item) => (
          <div
            key={item.id}
            className={`relative group/item overflow-hidden rounded-xl ${item.className} cursor-pointer transition-all duration-500 group-hover:grayscale hover:!grayscale-0`}
            onClick={handleNavigate}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-semibold">{item.category}</span>
                <h3 className="font-serif text-2xl mt-1">{item.name}</h3>
                <button className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-[#2C2C2C] transition-all duration-300 uppercase tracking-[0.2em] text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100">
                  Explore <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleNavigate}
          className="px-10 py-4 bg-[#2C2C2C] text-[#F5F0E6] uppercase tracking-[0.3em] text-xs font-semibold hover:bg-[#C5A059] transition-all duration-300"
        >
          View All Collections
        </button>
      </div>
    </section>
  );
};

export default Collection;
