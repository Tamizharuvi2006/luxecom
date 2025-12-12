import React, { useState } from 'react';
import { ShoppingCart, Heart, ArrowRight, Filter, X, Star, CreditCard, Eye } from 'lucide-react';
import Header from '../Components/Header';
import { useCart } from '../Context/CartContext';

// Reliable Mock Data with Dress-focused images for Adults
const ADULT_PRODUCTS = [
  {
    id: 101,
    name: 'Midnight Velvet Gown',
    price: '₹12,000',
    image: 'https://www.forevernew.co.in//pub/media/catalog/product/o/l/oldimlall_onbody_28020202_f.jpg?width=1046&height=1118&store=default&image-type=image', // Elegant dress
    category: 'Formal',
    tag: 'Best Seller',
    description: 'Exquisite midnight blue velvet gown tailored for a sharp, modern silhouette. Features a plunging neckline and a high slit.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 102,
    name: 'Silk Chiffon Maxi',
    price: '₹8,500',
    image: 'https://www.inddus.in/cdn/shop/products/blue-pink-floral-chiffon-maxi-dress-886426.jpg?v=1752668875', // Maxi dress
    category: 'Evening Wear',
    tag: 'New Arrival',
    description: 'Flowing silk chiffon maxi dress in a stunning floral print. Perfect for summer galas and evening soirées.',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 103,
    name: 'Satin Slip Dress',
    price: '₹15,000',
    // Changed to a more reliable, clear image
    image: 'https://mishindia.com/wp-content/uploads/2024/01/7-31-768x1024.jpg',
    category: 'Party',
    description: 'Luxuriously soft satin slip dress in champagne gold. A timeless investment piece for your wardrobe.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 104,
    name: 'Bohemian Lace Dress',
    price: '₹9,800',
    image: 'https://ariamobridal.com/wp-content/uploads/2024/09/sounds-of-her-c.jpg', // White lace
    category: 'Summer',
    tag: 'Limited',
    description: 'Breathable cotton lace dress, structured for a relaxed yet polished summer look. Ideal for beach weddings.',
    sizes: ['38', '40', '42', '44']
  },
  {
    id: 105,
    name: 'Rouge Cocktail Dress',
    price: '₹11,500',
    image: 'https://www.izziofbaslow.com/cdn/shop/files/lindsey-brown-resortwear-beachwear-lindsey-brown-mykonos-maxi-dress-in-aqua-and-pink-izzi-of-baslow-30898606637131.png?v=1717709653', // Black/dark cocktail
    category: 'Cocktail',
    description: 'A stunning rouge cocktail dress that commands attention. Fitted bodice with a flared skirt.',
    sizes: ['XS', 'S', 'M']
  },
  {
    id: 106,
    name: 'Emerald Pleated Midi',
    price: '₹13,200',
    image: 'https://cdn.shopify.com/s/files/1/0613/0316/1058/files/250306_StFrock_Bridesmaid_DA12048-GRN_0231.jpg?v=1746143486&width=700', // Pleated
    category: 'Formal',
    description: 'Elegant emerald green pleated midi dress. The movement of the fabric creates a mesmerizing effect.',
    sizes: ['M', 'L', 'XL']
  }
];

const KID_PRODUCTS = [
  {
    id: 201,
    name: 'Petite Floral Dress',
    price: '₹2,500',
    // REPLACED with reliable Kid dress image
    image: 'https://liandli.in/cdn/shop/files/WHITE2_c62aa2a9-9f19-40ae-9d0f-93ef6032b981.jpg?v=1723014989',
    category: 'Girls',
    tag: 'Cute',
    description: 'Adorable floral print dress with a satin sash. Made from 100% organic cotton for comfort.',
    sizes: ['2Y', '4Y', '6Y', '8Y']
  },
  {
    id: 202,
    name: 'Junior Gentleman Suit',
    price: '₹4,200',
    // REPLACED with reliable Kid suit image
    image: 'https://m.media-amazon.com/images/I/61LUx7BWwzL._AC_UY1100_.jpg',
    category: 'Boys',
    description: 'Miniature version of our classic suit, designed for ring bearers and special occasions.',
    sizes: ['3Y', '5Y', '7Y', '9Y']
  },
  {
    id: 203,
    name: 'Winter Knit Set',
    price: '₹1,200',
    // NEW, reliable kid image
    image: 'https://www.katia.com/files/mod/6232/pattern-knit-crochet-baby-set-autumn-winter-katia-6232-16-g.jpg',
    category: 'Infant',
    tag: 'Cozy',
    description: 'Ultra-soft knitted set for winter. Hypoallergenic and gentle on delicate skin.',
    sizes: ['0-3M', '3-6M', '6-12M']
  },
  {
    id: 204,
    name: 'Denim Day Jacket',
    price: '₹2,800',
    // NEW, reliable kid jacket
    image: 'https://img.tatacliq.com/images/i14/437Wx649H/MP000000019635373_437Wx649H_202310122009421.jpeg',
    category: 'Unisex',
    description: 'Cool and durable denim jacket with custom buttons. A staple for any stylish kid.',
    sizes: ['4Y', '6Y', '8Y', '10Y']
  }
];

const Shop = () => {
  const { addToCart } = useCart();
  const [activeSection, setActiveSection] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = (product, size = null) => {
    const itemToAdd = size ? { ...product, size } : product;
    addToCart(itemToAdd);
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product) => {
    alert(`Proceeding to checkout for ${product.name}.`);
  };

  // Get suggestions
  const getRelatedProducts = (current) => {
    const pool = [...ADULT_PRODUCTS, ...KID_PRODUCTS];
    return pool.filter(p => p.id !== current.id && p.category === current.category).slice(0, 2);
  };

  const ProductCard = ({ product }) => (
    <div
      className="group relative bg-white cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      onClick={() => setSelectedProduct(product)}
    >
      {/* CHANGED aspect ratio from [3/4] to [2/3] to show more vertical height (full dress) */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          // CHANGED object-cover to object-top to focus on the top/full garment if it crops
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Desktop Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[1px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2C2C2C] hover:bg-[#C5A059] hover:text-white transition-all transform hover:scale-110 shadow-lg"
          >
            <ShoppingCart size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2C2C2C] hover:bg-[#C5A059] hover:text-white transition-all transform hover:scale-110 shadow-lg"
          >
            <Eye size={20} />
          </button>
        </div>

        {/* Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-[#C5A059] text-white text-[9px] uppercase tracking-widest px-2 py-1 shadow-sm font-semibold">
            {product.tag}
          </div>
        )}
      </div>

      <div className="p-4 bg-white">
        <p className="text-[#8C7B5A] text-[10px] uppercase tracking-widest mb-1">{product.category}</p>
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-base text-[#2C2C2C] group-hover:text-[#C5A059] transition-colors line-clamp-1">{product.name}</h3>
          <p className="text-[#2C2C2C] font-semibold text-sm whitespace-nowrap ml-2">{product.price}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F9F6F0]">
        {/* Hero Section */}
        <div className="relative h-[25vh] md:h-[40vh] bg-[#2C2C2C] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop"
              alt="Collection Header"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <span className="block text-[#C5A059] text-[10px] md:text-xs uppercase tracking-[0.4em] mb-2 md:mb-4">Season 2024</span>
            <h1 className="font-serif text-4xl md:text-6xl mb-2 md:mb-4">The Dress Edit</h1>
            <p className="text-gray-200 text-xs md:text-sm max-w-md mx-auto leading-relaxed hidden md:block">
              Elegance for every occasion.
            </p>
          </div>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-[70px] md:top-[80px] z-30 bg-white/95 backdrop-blur-sm border-b border-[#E4D8C4] py-3 shadow-sm transition-all">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 flex justify-center md:justify-between items-center">
            <div className="flex gap-6 overflow-x-auto no-scrollbar py-1">
              {['all', 'adults', 'kids'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`uppercase text-[10px] md:text-xs tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${activeSection === section
                      ? 'text-[#C5A059] font-bold'
                      : 'text-[#888] hover:text-[#C5A059]'
                    }`}
                >
                  {section === 'all' ? 'All Collections' : section}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2 text-[#4F4F4F] cursor-pointer hover:text-[#C5A059] transition-colors">
              <span className="uppercase text-xs tracking-widest">Filter</span>
              <Filter size={14} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-8 md:py-16 space-y-16">

          {/* Adults */}
          {(activeSection === 'all' || activeSection === 'adults') && (
            <section className="animate-fade-in">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-8 text-center md:text-left">
                <span className="border-b-2 border-[#C5A059] pb-2">Women</span>'s Dresses
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
                {ADULT_PRODUCTS.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}

          {/* Kids */}
          {(activeSection === 'all' || activeSection === 'kids') && (
            <section className="animate-fade-in">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-8 text-center md:text-left">
                <span className="border-b-2 border-[#C5A059] pb-2">Little</span> Ones
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
                {KID_PRODUCTS.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProduct(null)}
          ></div>

          <div className="relative w-full md:max-w-xl lg:max-w-2xl bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 slide-in-from-right">

            <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-start bg-gradient-to-b from-black/30 to-transparent pointer-events-none">
              <button
                onClick={() => setSelectedProduct(null)}
                className="pointer-events-auto p-2 bg-white rounded-full shadow-md text-[#2C2C2C] hover:bg-[#C5A059] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              <div className="h-[60vh] md:h-[65%] w-full relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-6 md:p-10 bg-white -mt-8 rounded-t-3xl relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.2em] font-semibold block mb-1">
                      {selectedProduct.category}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] leading-tight">
                      {selectedProduct.name}
                    </h2>
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-[#2C2C2C]">{selectedProduct.price}</span>
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C5A059" className="text-[#C5A059]" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">(4.9 Reviews)</span>
                </div>

                <p className="text-[#666] leading-relaxed text-sm mb-8">
                  {selectedProduct.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-3">Select Size</h3>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {selectedProduct.sizes?.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[48px] h-12 px-2 flex items-center justify-center border rounded-lg text-sm font-medium transition-all ${selectedSize === size
                            ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                            : 'border-gray-200 text-[#666] hover:border-[#C5A059]'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mb-12">
                  <button
                    onClick={() => handleAddToCart(selectedProduct, selectedSize)}
                    className="flex-1 py-4 bg-[#2C2C2C] text-white uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold hover:bg-[#444] transition-colors rounded-lg flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(selectedProduct)}
                    className="flex-1 py-4 bg-[#C5A059] text-white uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold hover:bg-[#B08D4C] transition-colors rounded-lg flex items-center justify-center gap-2 shadow-lg"
                  >
                    <CreditCard size={16} />
                    Buy Now
                  </button>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h3 className="font-serif text-xl text-[#2C2C2C] mb-6">Detailed Suggestions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {getRelatedProducts(selectedProduct).length > 0 ? (
                      getRelatedProducts(selectedProduct).map(related => (
                        <div
                          key={related.id}
                          className="group cursor-pointer"
                          onClick={() => setSelectedProduct(related)}
                        >
                          <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 bg-gray-100">
                            <img
                              src={related.image}
                              alt={related.name}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                            />
                          </div>
                          <h4 className="font-serif text-sm text-[#2C2C2C] line-clamp-1">{related.name}</h4>
                          <p className="text-xs text-[#C5A059] font-semibold">{related.price}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400 col-span-2">No related products found.</p>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
