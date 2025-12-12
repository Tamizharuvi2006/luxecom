import React from 'react';
import Header from '../Components/Header';

const About = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#F5F0E6]">
                {/* Hero */}
                <div className="relative h-[60vh] bg-[#2C2C2C] flex items-center justify-center text-center px-6">
                    <div className="absolute inset-0 opacity-40">
                         <img 
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop" 
                            alt="Atelier Background" 
                                     loading="lazy"
                                     decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <span className="text-[#C5A059] text-xs uppercase tracking-[0.4em] font-semibold">Established 2024</span>
                        <h1 className="font-serif text-5xl md:text-7xl text-white">The Atelier Story</h1>
                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                            Where craftsmanship meets contemporary elegance.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-6 py-24 space-y-24">
                    <section className="text-center space-y-8">
                        <span className="w-12 h-1 bg-[#C5A059] block mx-auto"></span>
                        <h2 className="font-serif text-4xl text-[#2C2C2C]">Our Philosophy</h2>
                        <p className="text-[#666] text-lg leading-relaxed">
                            Maison Luxe Atelier was founded on the belief that true luxury lies in the details. 
                            We source the finest fabrics from around the globe to create pieces that are not just worn, 
                            but experienced. Our designs blur the lines between art and fashion, offering a curated 
                            collection for those who seek individuality in every stitch.
                        </p>
                    </section>
                    
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                             <img 
                                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop" 
                                alt="Craftsmanship" 
                                          loading="lazy"
                                          decoding="async"
                                className="w-full h-full object-cover"
                            />
                         </div>
                         <div className="space-y-6">
                             <h3 className="font-serif text-3xl text-[#2C2C2C]">Artisan Craftsmanship</h3>
                             <p className="text-[#666] leading-relaxed">
                                 Every garment is a testament to the skill of our master tailors. 
                                 From the initial sketch to the final button, we ensure uncompromising quality.
                                 We believe in fashion that lasts beyond a season—creating heirlooms for the future.
                             </p>
                         </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;
