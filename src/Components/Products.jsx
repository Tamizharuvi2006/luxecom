import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹1500",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1908&auto=format&fit=crop",
    category: "Summer Collection"
  },
  {
    id: 2,
    name: "Elegant Evening Gown",
    price: "₹2500",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1908&auto=format&fit=crop",
    category: "Evening Wear"
  },
  {
    id: 3,
    name: "Boho Chic Maxi",
    price: "₹1700",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1908&auto=format&fit=crop",
    category: "Bohemian"
  },
  {
    id: 4,
    name: "Vintage Lace Dress",
    price: "₹1800",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1908&auto=format&fit=crop",
    category: "Vintage"
  },
  {
    id: 5,
    name: "Silk Slip Dress",
    price: "₹4500",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1908&auto=format&fit=crop",
    category: "Silk Collection"
  },
  {
    id: 6,
    name: "Casual Linen Dress",
    price: "₹800",
    image: "https://images.unsplash.com/photo-1589810635657-232948472d98?q=80&w=1908&auto=format&fit=crop",
    category: "Casual Wear"
  }
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // We duplicate the products to create the infinite loop illusion
  // [0, 1, 2, 3, 4, 5, 0(clone), 1(clone), ...]
  const displayProducts = [...products, ...products];

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds for better readability

    return () => clearInterval(interval);
  }, [activeIndex]); // Re-create interval to reset timer on manual interaction

  const handleNext = () => {
    if (activeIndex >= products.length) {
      // If we are already at the clone, we shouldn't be here normally if logic works,
      // but just in case, reset instantly then move.
      // Actually, the logic is: Move to next. If next is 'length', we show it, then reset.
    }

    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (activeIndex <= 0) {
      // If at 0, jump to 'length' (clone of 0) instantly, then move to 'length - 1'
      setIsTransitioning(false);
      setActiveIndex(products.length);

      // Force reflow/next tick to re-enable transition and move
      setTimeout(() => {
        setIsTransitioning(true);
        setActiveIndex(products.length - 1);
      }, 50);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Handle the "Snap Back" logic
  useEffect(() => {
    if (activeIndex === products.length) {
      // We reached the first clone (visually identical to index 0)
      // Wait for the transition to finish (500ms), then snap back to real 0 without transition
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500); // Match CSS transition duration

      return () => clearTimeout(timeout);
    }

    // If we just snapped back to 0 (transition is false), re-enable it for next move
    if (activeIndex === 0 && !isTransitioning) {
      // Use a small timeout to ensure the DOM has updated with the "no-transition" state
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, isTransitioning]);


  return (
    <section className="h-screen p-5 bg-[#F5F0E6] flex flex-col lg:flex-row overflow-hidden">

      {/* Left Panel - Static Info & Dynamic Background Image */}
      {/* Mobile: h-[40%] to give enough space. Desktop: h-full w-1/3 */}
      <div className="w-full lg:w-1/3 h-[40%] lg:h-full relative overflow-hidden shrink-0">

        {/* Dynamic Background Image */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              // Handle the loop for the background image
              index === (activeIndex % products.length) ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={product.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#F5F0E6]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0E6] via-[#F5F0E6]/30 to-transparent" />
            {/* Add a bottom gradient for mobile text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F5F0E6] to-transparent lg:hidden" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full p-6 lg:p-12 flex flex-col justify-center lg:justify-center justify-end">
          <div className="space-y-2 lg:space-y-6">
            <span className="uppercase tracking-[0.3em] text-[10px] lg:text-xs text-[#C5A059] font-bold">
              New Arrivals
            </span>
            <h2 className="text-4xl lg:text-7xl font-serif text-[#2C2C2C] leading-none">
              Autumn <br className="hidden lg:block" />
              <span className="italic text-[#C5A059] lg:block inline"> Winter</span> <br className="hidden lg:block" />
              <span className="lg:block inline"> 2024</span>
            </h2>
            <p className="text-gray-800 max-w-sm text-xs lg:text-sm leading-relaxed pt-2 lg:pt-4 font-medium hidden lg:block">
              Explore our latest collection featuring premium fabrics, timeless silhouettes, and the season's most coveted styles.
            </p>

            <div className="flex gap-4 pt-4 lg:pt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#2C2C2C] flex items-center justify-center hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
              >
                <ArrowRight className="rotate-180" size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#2C2C2C] flex items-center justify-center hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Horizontal Scroll */}
      {/* Mobile: h-[60%] */}
      <div className="w-full lg:w-2/3 h-[60%] lg:h-full relative bg-[#F5F0E6] overflow-hidden">

        {/* Carousel Track */}
        <div
          className="flex items-center h-full px-6 lg:px-12"
          style={{
            // Calculate transform based on activeIndex and card width (approximate or percentage)
            // For a smoother CSS transform, we can use a wrapper that shifts.
            // But since card widths are fixed/responsive, let's use a container that translates.
            // We'll assume a fixed card width + gap for calculation or use percentage.
            // Let's use a percentage-based approach for simplicity and responsiveness.
            // Mobile: Card is 80vw. Desktop: Card is 350px.
            // This is tricky with mixed units. 
            // Better approach: Use a flex container and translate it.
            transform: `translateX(calc(-${activeIndex} * (var(--card-width) + var(--gap))))`,
            transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
            '--card-width': 'min(80vw, 350px)',
            '--gap': '2rem' // 32px
          }}
        >
          {displayProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className={`shrink-0 w-[var(--card-width)] h-[80%] relative group cursor-pointer transition-all duration-500 mr-[var(--gap)] ${index === activeIndex ? 'scale-105 shadow-2xl z-10' : 'scale-95 opacity-70 hover:opacity-100'
                }`}
              onClick={() => {
                // If clicking a future item, update index
                setActiveIndex(index);
              }}
            >
              <div className="w-full h-full overflow-hidden relative rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              <div className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white transition-transform duration-500 ${index === activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] mb-1 block">
                  {product.category}
                </span>
                <h3 className="font-serif text-2xl mb-2">{product.name}</h3>
                <p className="font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Products;
