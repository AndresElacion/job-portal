export default function HeroSection() {
    return (
        <div>
            <main className="flex-1 mt-16">
                <div className="relative">
                    <div className="bg-slate-300 h-[250px] relative">
                        {/* Main Content */}
                        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                            <div className="w-full max-w-4xl mx-auto text-center">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Find Your Dream Job Today
                                </h1>
                                
                                {/* Enhanced Search Box */}
                                <div className="bg-white p-4 rounded-lg shadow-xl max-w-3xl mx-auto">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="flex-1 relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Job title, keywords, or company"
                                                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 bg-gray-50 border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all duration-300"
                                            />
                                        </div>
                                        <div className="flex-1 relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="City or location"
                                                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 bg-gray-50 border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all duration-300"
                                            />
                                        </div>
                                        <button className="px-8 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transform hover:-translate-y-0.5 transition-all duration-300 font-medium">
                                            Search
                                        </button>
                                    </div>
                                    <div className="mt-3 flex items-center justify-center gap-4 text-sm text-gray-600">
                                        <span>Popular:</span>
                                        <div className="flex gap-2">
                                            {['Remote', 'Part-time', 'Full-time', 'Tech'].map((tag) => (
                                                <button
                                                    key={tag}
                                                    className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}