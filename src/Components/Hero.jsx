const Hero = () => {
    return (
        <div className="relative w-full h-[100vh] bg-[#C5A059] overflow-hidden flex flex-col lg:flex-row">
            {/* Left Sidebar / Background Image Section */}
            <div className="w-full lg:w-[35%] h-64 lg:h-auto relative bg-[#C5A059]">
                {/* Main Sidebar Image */}
                <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
                    alt="Model"
                    className="w-full h-full object-cover opacity-90"
                />

                {/* Logo */}
                <div className="absolute top-8 left-8 text-white font-serif text-3xl tracking-widest z-20">
                    LUXE
                </div>

                {/* Vertical Social Links */}
                <div className="hidden lg:flex absolute bottom-24 left-8 flex-col gap-8 text-white text-[10px] font-bold tracking-[0.2em] z-20">
                    <span className="writing-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>INSTAGRAM</span>
                    <span className="writing-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>FACEBOOK</span>
                    <span className="writing-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>TWITTER</span>
                </div>
            </div>

            {/* Main Content Card - Overlaps the left section on large screens */}
            <div className="flex-1 max-w-full max-h-[100vh] bg-[#F5F0E6] relative lg:-ml-24 z-10 px-6 py-12 lg:p-16 shadow-2xl overflow-y-auto">

                {/* Top Navigation - Links Removed as requested */}
                <nav className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 gap-6">
                    <div className="flex flex-wrap gap-8">
                        {/* Links removed: Fashion, Beauty, Life, Sales */}
                    </div>
                    <div className="flex flex-wrap gap-8 items-center">
                        {/* Links removed: Careers, Events */}
                    </div>
                </nav>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column (Title + Text + Image 02) */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl font-serif text-[#4A2C2A] leading-[1.1]">
                                Milan Womenswear <br />
                                Collections <span className="text-sm align-top font-sans font-normal text-[#C5A059]">2024</span>
                            </h1>

                            <p className="text-gray-500 text-xs leading-relaxed max-w-xs font-medium">
                                Our aim is to inspire, pamper you and provide you the energy and self-confidence you need because the rest is up to you.
                            </p>
                        </div>

                        {/* Image 02 */}
                        <div className="relative group cursor-pointer">
                            <span className="text-[10px] font-bold text-gray-400 mb-2 block">02</span>
                            <div className="overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
                                    alt="Collection Item"
                                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Images 01, 03, 04) */}
                    <div className="lg:col-span-7 relative min-h-[600px]">

                        {/* Image 01 - Top Right */}
                        <div className="w-2/3 ml-auto mb-12 relative group cursor-pointer">
                            <span className="text-[10px] font-bold text-gray-400 mb-2 block">01</span>
                            <div className="overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop"
                                    alt="Main Feature"
                                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>

                        {/* Image 03 - Center Left Offset */}
                        <div className="w-1/2 absolute top-[40%] left-0 z-20 group cursor-pointer hidden md:block">
                            <span className="text-[10px] font-bold text-gray-400 mb-2 block">03</span>
                            <div className="overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop"
                                    alt="Detail View"
                                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>

                        {/* Image 04 - Bottom Right */}
                        <div className="w-2/3 ml-auto mt-24 group cursor-pointer">
                            <span className="text-[10px] font-bold text-gray-400 mb-2 block">04</span>
                            <div className="overflow-hidden h-48">
                                <img
                                    src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop"
                                    alt="Texture Detail"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>

                        <div className="text-right mt-4">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">LUXE</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Links and Search Removed */}
                <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                    <div className="flex gap-12 mb-4 md:mb-0">
                        {/* Links removed */}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Hero;