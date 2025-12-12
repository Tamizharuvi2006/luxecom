import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo-gold.png';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-[#E4D8C4] border-t-4 border-[#C5A059]">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-start">
                            <img src={Logo} alt="Maison Luxe Atelier" className="h-16 w-auto object-contain mb-4" />
                        </div>
                        <p className="text-[#999] text-sm leading-relaxed">
                            Curating timeless elegance for the modern woman. Our collections embody sophistication, quality, and style.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-[#C5A059] transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-[#C5A059] transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-[#C5A059] transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="uppercase tracking-[0.25em] text-sm font-semibold text-white mb-6">Explore</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link to="/" className="text-[#999] hover:text-[#C5A059] transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-0 hover:opacity-100 transition-opacity"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="text-[#999] hover:text-[#C5A059] transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-0 hover:opacity-100 transition-opacity"></span>
                                    Shop Collection
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-[#999] hover:text-[#C5A059] transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-0 hover:opacity-100 transition-opacity"></span>
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-[#999] hover:text-[#C5A059] transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-0 hover:opacity-100 transition-opacity"></span>
                                    Journal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="uppercase tracking-[0.25em] text-sm font-semibold text-white mb-6">Customer Care</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link to="/contact" className="text-[#999] hover:text-[#C5A059] transition-colors duration-300">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/shipping" className="text-[#999] hover:text-[#C5A059] transition-colors duration-300">Shipping & Returns</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-[#999] hover:text-[#C5A059] transition-colors duration-300">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/size-guide" className="text-[#999] hover:text-[#C5A059] transition-colors duration-300">Size Guide</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="uppercase tracking-[0.25em] text-sm font-semibold text-white mb-6">Newsletter</h3>
                        <p className="text-[#999] text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#333] border border-[#444] text-[#E4D8C4] py-3 px-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-colors text-sm placeholder-[#666]"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#C5A059] text-white rounded flex items-center justify-center hover:bg-[#B08D4C] transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#111] border-t border-[#333] py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666]">
                    <p>&copy; {new Date().getFullYear()} Luxe Atelier. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
