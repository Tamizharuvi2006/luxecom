import React from 'react';
import { Truck, ShieldCheck, Gem, Clock } from 'lucide-react';

const features = [
    {
        icon: <Gem size={32} />,
        title: "Artisan Quality",
        desc: "Hand-finished details and premium materials."
    },
    {
        icon: <Truck size={32} />,
        title: "Global Shipping",
        desc: "Complimentary shipping on orders over ₹10,000."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Secure Payment",
        desc: "100% secure payment processing."
    },
    {
        icon: <Clock size={32} />,
        title: "24/7 Support",
        desc: "Dedicated concierge service."
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-[#F5F0E6] border-y border-[#E4D8C4]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center group cursor-default">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#C5A059] mb-6 transition-all duration-300 group-hover:bg-[#C5A059] group-hover:text-white group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">{feature.title}</h3>
                            <p className="text-sm text-[#666] leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
