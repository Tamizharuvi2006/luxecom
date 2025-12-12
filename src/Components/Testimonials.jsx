import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "New York",
        text: "The quality of the silk dress is absolutely stunning. It fits perfectly and feels so luxurious. Will definitely be ordering again.",
        rating: 5
    },
    {
        id: 2,
        name: "Priya Sharma",
        location: "Mumbai",
        text: "I was hesitant about ordering online, but the sizing guide was spot on. The package arrived beautifully wrapped. A true premium experience.",
        rating: 5
    },
    {
        id: 3,
        name: "Emma Dubois",
        location: "Paris",
        text: "Maison Luxe has become my go-to for evening wear. The attention to detail is unmatched at this price point.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#F5F0E6] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <Quote size={400} className="absolute -top-20 -left-20 text-[#C5A059]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="uppercase tracking-[0.3em] text-xs text-[#C5A059] font-semibold">Testimonials</span>
                    <h2 className="text-4xl font-serif text-[#2C2C2C] mt-4">Client Love</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#E4D8C4]/50">
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="#C5A059" className="text-[#C5A059]" />
                                ))}
                            </div>
                            <p className="text-[#4F4F4F] italic leading-relaxed mb-6 font-serif text-lg">"{review.text}"</p>
                            <div>
                                <h4 className="font-bold text-[#2C2C2C] text-sm uppercase tracking-wider">{review.name}</h4>
                                <span className="text-xs text-[#8C7B5A] block mt-1">{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
