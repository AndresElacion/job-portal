export default function HeroSection() {
    return (
        <div>
            {/* Hero Section */}
            <main className="flex-1 mt-16">
                <div className="relative">
                    <div className="bg-gradient-to-br from-orange-800 to-orange-600 h-[calc(100vh-4rem)] relative">
                        {/* Decorative Background SVG */}
                        <div className="absolute inset-0 opacity-10">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
                                <defs>
                                    <pattern id="grid-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                                    </pattern>
                                </defs>
                            </svg>
                        </div>
                        
                        {/* Main Content */}
                        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
                                {/* Left Content */}
                                <div className="max-w-2xl space-y-8">
                                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                        Find Your Dream Job <br/>
                                        <span className="text-orange-200">Today</span>
                                    </h1>
                                    <p className="text-xl text-white/90">
                                        Discover thousands of job opportunities. Your next career move starts here.
                                    </p>
                                    
                                    {/* Search Box */}
                                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                placeholder="Search jobs..."
                                                className="w-full px-6 py-4 rounded-lg shadow-lg text-gray-800 focus:ring-2 focus:ring-orange-300 transition-all duration-300 border border-[#f8f8f835]"
                                            />
                                        </div>
                                        <button className="px-8 py-4 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transform hover:-translate-y-0.5 transition-all duration-300">
                                            Search Jobs
                                        </button>
                                    </div>
                                </div>

                                {/* Right Illustration */}
                                <div className="lg:w-1/2">
                                    <svg className="w-full h-auto" viewBox="0 0 400 400" fill="none">
                                        <circle cx="200" cy="200" r="150" fill="white" fillOpacity="0.1"/>
                                        <circle cx="200" cy="200" r="120" fill="white" fillOpacity="0.1"/>
                                        <circle cx="200" cy="200" r="90" fill="white" fillOpacity="0.1"/>
                                        <path d="M200,50 L200,350 M50,200 L350,200" stroke="white" strokeOpacity="0.2" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Wave SVG at bottom */}
                        <div className="absolute bottom-0 left-0 right-0">
                            <svg className="w-full h-16" viewBox="0 0 1440 54" preserveAspectRatio="none">
                                <path 
                                    fill="#FDFDFC" 
                                    d="M0,0 C480,54 960,54 1440,0 L1440,54 L0,54 Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}