import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DumpMe = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:aruvi2908@gmail.com';
  };

  const handlePaymentClick = () => {
    window.open('https://rzp.io/rzp/V80RxeVg', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E4D8C4]">

          <div className="grid md:grid-cols-2">

            {/* Left Side - Visual */}
            <div className="relative bg-[#2C2C2C] p-12 flex flex-col items-center justify-center text-center text-[#F5F0E6]">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="relative z-10">
                <CheckCircle2 size={64} className="text-[#C5A059] mb-6 mx-auto animate-bounce" />
                <h2 className="text-3xl font-serif mb-4">Checkout Process</h2>
                <p className="text-[#F5F0E6]/80 text-sm leading-relaxed">
                  This is a demonstration of the Maison Luxe e-commerce experience. No actual products will be shipped, but your interest is highly appreciated.
                </p>
              </div>
            </div>

            {/* Right Side - Action */}
            <div className="p-12 flex flex-col justify-center space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-serif text-[#2C2C2C] mb-2">Almost There!</h1>
                <p className="text-[#8C7B5A] text-xs uppercase tracking-widest">Support the Developer</p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#F9F6F0] p-6 rounded-xl border border-[#E4D8C4] text-center">
                  <p className="text-[#2C2C2C] font-medium mb-2">Buy Me a Coffee</p>
                  <p className="text-[#666] text-xs mb-4">Support the creation of more premium templates.</p>
                  <button
                    onClick={handlePaymentClick}
                    className="w-full py-3 bg-[#C5A059] text-white rounded-lg font-semibold shadow-md hover:bg-[#B08D4C] hover:-translate-y-1 transition-all duration-300"
                  >
                    Donate ₹10
                  </button>
                </div>

                <button
                  onClick={handleMailClick}
                  className="w-full py-3 bg-white border border-[#E4D8C4] text-[#2C2C2C] rounded-lg font-medium hover:bg-[#F9F6F0] transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Contact Developer
                </button>
              </div>

              <div className="text-center pt-4 border-t border-[#E4D8C4]/50">
                <Link to="/" className="text-xs font-bold text-[#C5A059] hover:text-[#2C2C2C] uppercase tracking-[0.2em] transition-colors">
                  Return to Shop
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DumpMe;
