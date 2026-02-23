import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import allVideos from '../data/videos';

// Get unique categories
const categories = ['All', ...new Set(allVideos.map(v => v.category))];

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredVideos = activeCategory === 'All'
        ? allVideos
        : allVideos.filter(v => v.category === activeCategory);

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-20 relative">
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-black/80 to-transparent z-0 pointer-events-none" />

            {/* Back Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 pt-10 flex items-center z-50 mix-blend-difference pointer-events-none">
                <Link to="/" className="interactive pointer-events-auto cursor-none group flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-300 uppercase tracking-widest text-sm font-semibold">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Main
                </Link>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h1 className="font-cinematic text-5xl md:text-7xl font-bold text-white mb-4">
                            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent">Portfolios</span>
                        </h1>
                        <p className="text-white/50 text-lg uppercase tracking-widest">
                            Complete Archive — {filteredVideos.length} Projects
                        </p>
                    </div>
                    <div className="h-[1px] flex-1 bg-white/10 ml-0 md:ml-10 mb-4 hidden md:block"></div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`interactive cursor-none px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold border transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-accent/20 border-accent/60 text-accent'
                                    : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid Layout for Portfolio Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                            className="group relative flex flex-col gap-5 interactive"
                        >
                            {/* Video Container */}
                            <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden border border-white/5 shadow-xl transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.2)]">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Video Info */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-cinematic font-medium text-white group-hover:text-accent transition-colors duration-300">
                                        {video.title}
                                    </h3>
                                    <span className="text-white/40 text-xs tracking-wider uppercase mt-1 block">
                                        {video.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Works;
