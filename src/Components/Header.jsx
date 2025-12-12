import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../Context/CartContext';
import Cat from '../assets/image.png';
import CatBg from '../assets/image1.png';

import Logo from '../assets/logo-gold.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { cartCount } = useCart();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#E4D8C4]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img src={Logo} alt="Maison Luxe Atelier" className="h-12 w-auto object-contain" />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    <Link to="/" className="uppercase tracking-[0.25em] text-xs text-[#4F4F4F] hover:text-[#C5A059] transition-colors duration-300">Home</Link>
                    <Link to="/shop" className="uppercase tracking-[0.25em] text-xs text-[#4F4F4F] hover:text-[#C5A059] transition-colors duration-300">Shop</Link>
                    <Link to="/about" className="uppercase tracking-[0.25em] text-xs text-[#4F4F4F] hover:text-[#C5A059] transition-colors duration-300">About</Link>
                    <Link to="/contact" className="uppercase tracking-[0.25em] text-xs text-[#4F4F4F] hover:text-[#C5A059] transition-colors duration-300">Contact</Link>
                </nav>

                <div className="hidden md:flex items-center gap-6 text-[#2C2C2C]">
                    <button className="hover:text-[#C5A059] transition-colors duration-300">
                        <Search size={20} />
                    </button>
                    <Link to="/cart" className="relative hover:text-[#C5A059] transition-colors duration-300">
                        <ShoppingCart size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <div className="relative">
                        <button
                            onClick={toggleProfile}
                            className="hover:text-[#C5A059] transition-colors duration-300"
                        >
                            <User size={20} />
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-4 w-80 bg-white border border-[#E4D8C4] rounded-xl shadow-xl overflow-hidden">
                                {/* Profile Header with Image */}
                                <div className="relative h-32 bg-gradient-to-br from-[#C5A059] to-[#8C7B5A]">
                                    <img
                                        src={CatBg}
                                        alt="Profile Background"
                                        className="w-full h-full object-cover opacity-30"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                                            <img
                                                src={Cat}
                                                alt="User"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Profile Content */}
                                <div className="p-6 space-y-4">
                                    <div className="text-center">
                                        <p className="text-sm text-[#4F4F4F] uppercase tracking-[0.2em]">Welcome Back</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Link
                                            to="/login"
                                            className="block w-full py-3 px-4 bg-[#2C2C2C] text-[#F5F0E6] text-center uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#C5A059] transition-colors duration-300 rounded-lg"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to="/signup"
                                            className="block w-full py-3 px-4 border border-[#2C2C2C] text-[#2C2C2C] text-center uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#2C2C2C] hover:text-[#F5F0E6] transition-all duration-300 rounded-lg"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>

                                    <div className="pt-4 border-t border-[#E4D8C4] text-center">
                                        <p className="text-xs text-[#8C7B5A] tracking-[0.15em]">Developed by</p>
                                        <p className="text-sm font-serif text-[#2C2C2C] mt-1">Tamizharuvi</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-[#2C2C2C] focus:outline-none">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#F5F0E6] border-t border-[#E4D8C4]">
                    <nav className="flex flex-col px-6 py-4 space-y-3 text-[#2C2C2C]">
                        <Link to="/" className="uppercase tracking-[0.3em] text-xs py-2 border-b border-[#E4D8C4]">Home</Link>
                        <Link to="/shop" className="uppercase tracking-[0.3em] text-xs py-2 border-b border-[#E4D8C4]">Shop</Link>
                        <Link to="/about" className="uppercase tracking-[0.3em] text-xs py-2 border-b border-[#E4D8C4]">About</Link>
                        <Link to="/contact" className="uppercase tracking-[0.3em] text-xs py-2 border-b border-[#E4D8C4]">Contact</Link>
                        <div className="flex items-center gap-6 pt-4 text-[#2C2C2C]">
                            <Link to="/search" className="hover:text-[#C5A059] transition-colors duration-300"><Search size={20} /></Link>
                            <Link to="/cart" className="hover:text-[#C5A059] transition-colors duration-300"><ShoppingCart size={20} /></Link>
                            <Link to="/profile" className="hover:text-[#C5A059] transition-colors duration-300"><User size={20} /></Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
export default Header;