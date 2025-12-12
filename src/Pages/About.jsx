import React from 'react';
import Header from '../Components/Header';
import { Leaf, Heart, Gem } from 'lucide-react';

const About = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#F9F6F0]">
                {/* Hero Section */}
                <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                        alt="Atelier"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 text-center text-white p-6 animate-fade-in">
                        <span className="uppercase tracking-[0.4em] text-xs md:text-sm mb-4 block text-[#C5A059]">Since 2010</span>
                        <h1 className="font-serif text-5xl md:text-7xl mb-6">Maison Luxe</h1>
                        <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Where traditional craftsmanship meets contemporary design to create timeless elegance.
                        </p>
                    </div>
                </div>

                {/* Our Journey */}
                <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <span className="text-[#C5A059] uppercase tracking-[0.2em] text-xs font-semibold">Our Story</span>
                            <h2 className="font-serif text-4xl text-[#2C2C2C]">A Decade of Excellence</h2>
                            <p className="text-[#666] leading-relaxed">
                                Founded in the heart of New Delhi's fashion district, Maison Luxe began as a small boutique with a big dream: to redefine luxury for the modern individual. What started as a passion project has grown into a globally recognized brand, celebrated for its attention to detail and uncompromising quality.
                            </p>
                            <p className="text-[#666] leading-relaxed">
                                Every piece tells a story. From the initial sketch to the final stitch, our artisans pour their heart and soul into creating garments that are not just worn, but cherished.
                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
                                alt="Design Studio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 bg-white border-y border-[#E4D8C4]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                        <span className="text-[#C5A059] uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">Philosophy</span>
                        <h2 className="font-serif text-3xl text-[#2C2C2C] mb-16">Core Values</h2>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-[#F5F0E6] rounded-full flex items-center justify-center text-[#C5A059] mb-6">
                                    <Gem size={28} />
                                </div>
                                <h3 className="font-serif text-xl text-[#2C2C2C] mb-3">Craftsmanship</h3>
                                <p className="text-[#666] text-sm leading-relaxed max-w-xs">
                                    We believe in the power of hand-finished details. Our artisans are masters of their trade, preserving techniques passed down through generations.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-[#F5F0E6] rounded-full flex items-center justify-center text-[#C5A059] mb-6">
                                    <Leaf size={28} />
                                </div>
                                <h3 className="font-serif text-xl text-[#2C2C2C] mb-3">Sustainability</h3>
                                <p className="text-[#666] text-sm leading-relaxed max-w-xs">
                                    Fashion shouldn't cost the earth. We are committed to ethical sourcing, minimizing waste, and using eco-friendly packaging.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-[#F5F0E6] rounded-full flex items-center justify-center text-[#C5A059] mb-6">
                                    <Heart size={28} />
                                </div>
                                <h3 className="font-serif text-xl text-[#2C2C2C] mb-3">Community</h3>
                                <p className="text-[#666] text-sm leading-relaxed max-w-xs">
                                    We support our local community of weavers and tailors, ensuring fair wages and safe working conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Atelier */}
                <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2059&auto=format&fit=crop"
                                alt="Atelier Work"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <span className="text-[#C5A059] uppercase tracking-[0.2em] text-xs font-semibold">Behind the Scenes</span>
                            <h2 className="font-serif text-4xl text-[#2C2C2C]">The Atelier</h2>
                            <p className="text-[#666] leading-relaxed">
                                Our creative process begins in our sunlit atelier. Here, designers and tailors work in harmony, turning sketches into reality. It is a space of innovation, where fabrics are draped, patterns are cut, and magic happens.
                            </p>
                            <p className="text-[#666] leading-relaxed">
                                We invite you to be a part of our journey. Whether you are looking for a statement piece or everyday elegance, Maison Luxe is here to elevate your style.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default About;
