import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import Header from '../Components/Header';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#F5F0E6] flex flex-col">
                <div className="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-12 py-24">
                    <div className="grid md:grid-cols-2 gap-24">

                        {/* Get in Touch */}
                        <div className="space-y-12">
                            <div>
                                <span className="text-[#C5A059] text-xs uppercase tracking-[0.4em] font-semibold">Contact Us</span>
                                <h1 className="font-serif text-5xl text-[#2C2C2C] mt-4 mb-8">Get in Touch</h1>
                                <p className="text-[#666] text-lg leading-relaxed">
                                    Have a question about a product, shipping, or just want to say hello?
                                    We'd love to hear from you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C5A059] shadow-sm shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#2C2C2C] mb-1">Email</h3>
                                        <p className="text-[#666]">aruvi2908@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C5A059] shadow-sm shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#2C2C2C] mb-1">Phone</h3>
                                        <p className="text-[#666]">+91 63813 53913</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Action */}
                            <div className="pt-8 border-t border-[#E4D8C4]">
                                <h3 className="font-serif text-2xl text-[#2C2C2C] mb-6">Quick Chat</h3>
                                <a
                                    href="https://wa.me/916381353913"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#1faa53] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                                >
                                    <MessageCircle size={24} />
                                    <span className="font-semibold tracking-wide">Chat on WhatsApp</span>
                                </a>
                                <p className="text-xs text-[#666] mt-4 ml-1">
                                    Available Mon-Fri, 9am - 6pm EST
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#E4D8C4]">
                            <h3 className="font-serif text-2xl text-[#2C2C2C] mb-8">Send a Message</h3>
                            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                                <input type="hidden" name="access_key" value="177b54e2-67bd-4bf1-89f4-5c252405cde9" />

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#666]">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded focus:outline-none focus:border-[#C5A059] transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#666]">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded focus:outline-none focus:border-[#C5A059] transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#666]">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        className="w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded focus:outline-none focus:border-[#C5A059] transition-colors"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#2C2C2C] text-white py-4 px-6 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#C5A059] transition-colors rounded flex justify-center gap-2">
                                    <Send size={16} />
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
