import React, { useState } from 'react';
import { ArrowRight, Lock, User, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#F9F6F0] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E4D8C4] rounded-full filter blur-[80px] opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059] rounded-full filter blur-[100px] opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-md w-full relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E4D8C4]/50">

          {/* Header */}
          <div className="bg-[#2C2C2C] p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg animate-pulse">
              <Sparkles size={20} />
            </div>
            <h1 className="font-serif text-3xl text-[#F5F0E6] mb-2 tracking-wide">Maison Luxe</h1>
            <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium">Member Access</p>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10">
            {/* Toggle Switch */}
            <div className="flex bg-[#F5F0E6] rounded-full p-1 mb-8 relative">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${isLogin ? 'bg-[#2C2C2C] text-[#F5F0E6] shadow-md' : 'text-[#8C7B5A] hover:bg-white/50'}`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${!isLogin ? 'bg-[#2C2C2C] text-[#F5F0E6] shadow-md' : 'text-[#8C7B5A] hover:bg-white/50'}`}
              >
                Join Us
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {!isLogin && (
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A059] group-focus-within:text-[#2C2C2C] transition-colors" size={18} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-[#F9F6F0] border border-transparent focus:bg-white focus:border-[#C5A059] rounded-xl text-[#2C2C2C] text-sm outline-none transition-all placeholder:text-[#8C7B5A]/50"
                  />
                </div>
              )}

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A059] group-focus-within:text-[#2C2C2C] transition-colors" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-[#F9F6F0] border border-transparent focus:bg-white focus:border-[#C5A059] rounded-xl text-[#2C2C2C] text-sm outline-none transition-all placeholder:text-[#8C7B5A]/50"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A059] group-focus-within:text-[#2C2C2C] transition-colors" size={18} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-4 bg-[#F9F6F0] border border-transparent focus:bg-white focus:border-[#C5A059] rounded-xl text-[#2C2C2C] text-sm outline-none transition-all placeholder:text-[#8C7B5A]/50"
                />
              </div>

              <button className="w-full bg-[#2C2C2C] text-[#F5F0E6] py-4 rounded-xl font-medium tracking-[0.2em] uppercase text-xs hover:bg-[#C5A059] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 text-center space-y-4">
              <a href="#" className="text-xs text-[#8C7B5A] hover:text-[#2C2C2C] transition-colors border-b border-transparent hover:border-[#2C2C2C]">
                Forgot Password?
              </a>

              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#E4D8C4]/30">
                <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#2C2C2C] transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;