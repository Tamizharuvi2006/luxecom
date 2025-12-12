import React from 'react';
import { Mail, Coffee, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-64 bg-gradient-to-br from-[#C5A059] via-[#8C7B5A] to-[#2C2C2C]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
              <Heart size={48} className="mb-4 animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-serif text-center">Thank You!</h1>
              <p className="text-sm uppercase tracking-[0.3em] mt-2 opacity-90">For Exploring</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Testing Info */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif text-[#2C2C2C]">This is a Testing Website</h2>
              <p className="text-[#4F4F4F] leading-relaxed text-lg">
                I hope you enjoyed the design and user experience of this premium clothing e-commerce demo!
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-[#F5F0E6] rounded-xl p-8 space-y-4">
              <div className="flex items-center justify-center gap-3 text-[#C5A059]">
                <Mail size={24} />
                <h3 className="text-xl font-serif text-[#2C2C2C]">Get in Touch</h3>
              </div>
              <p className="text-center text-[#4F4F4F]">
                If you liked what you see and need something similar for your business:
              </p>
              <a 
                href="mailto:aruvi2908@gmail.com" 
                className="block text-center text-xl text-[#C5A059] hover:text-[#8C7B5A] transition-colors font-medium"
              >
                aruvi2908@gmail.com
              </a>
            </div>

            {/* Coffee Section */}
            <div className="border-t border-[#E4D8C4] pt-8 space-y-6">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-[#2C2C2C]">
                  <Coffee size={28} />
                  <h3 className="text-2xl font-serif">Buy Me a Coffee</h3>
                </div>
                <p className="text-[#4F4F4F]">
                  If you enjoyed this project and want to support my work!
                </p>
              </div>

              <div className="max-w-sm mx-auto space-y-4">
                <div className="bg-gradient-to-br from-[#C5A059] to-[#8C7B5A] rounded-xl p-8 text-center text-white shadow-lg">
                  <p className="text-sm uppercase tracking-[0.3em] opacity-90">Suggested Amount</p>
                  <p className="text-5xl font-serif mt-2">₹40</p>
                </div>

                <button className="w-full py-4 px-8 bg-[#2C2C2C] text-[#F5F0E6] uppercase tracking-[0.3em] text-sm font-semibold hover:bg-[#C5A059] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Pay Now
                </button>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-6">
              <Link 
                to="/" 
                className="inline-block px-8 py-3 border-2 border-[#2C2C2C] text-[#2C2C2C] uppercase tracking-[0.3em] text-xs font-semibold hover:bg-[#2C2C2C] hover:text-[#F5F0E6] transition-all duration-300 rounded-lg"
              >
                Back to Home
              </Link>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-6 border-t border-[#E4D8C4]">
              <p className="text-xs text-[#8C7B5A] tracking-[0.15em] uppercase">Developed with passion by</p>
              <p className="text-lg font-serif text-[#2C2C2C] mt-1">Tamizharuvi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
