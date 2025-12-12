import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import Header from '../Components/Header';

const ErrorPage = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center px-6">
                <div className="text-center max-w-lg mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-[#2C2C2C] rounded-full flex items-center justify-center text-[#C5A059] animate-bounce">
                            <AlertTriangle size={40} />
                        </div>
                    </div>
                    <h1 className="text-6xl font-serif text-[#2C2C2C] mb-4">404</h1>
                    <h2 className="text-2xl font-serif text-[#4F4F4F] mb-6">Page Not Found</h2>
                    <p className="text-[#8C7B5A] mb-8 leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#2C2C2C] text-[#F5F0E6] uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#C5A059] transition-all duration-300 rounded-lg group"
                    >
                        <Home size={16} />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
