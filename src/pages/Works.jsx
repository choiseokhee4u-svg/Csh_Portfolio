import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
                <Link to="/" className="interactive pointer-events-auto cursor-none group flex items-center gap-2 text-white/50 hover:text-accent transition-colors duration-300 uppercase tracking-widest text-xs font-semibold">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
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
                        <p className="text-white/40 text-lg uppercase tracking-widest">
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
                                : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Sequencer Timeline Container */}
                <div className="relative w-full mt-10 border border-white/10 bg-[#0a0a0a] rounded-lg overflow-hidden shadow-2xl">

                    {/* Timeline Ruler Header */}
                    <div
                        className="w-full h-8 border-b border-white/10 relative flex items-center bg-[#151515]"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.1) 50px)',
                            backgroundSize: '100px 100%'
                        }}
                    >
                        {/* Time markers */}
                        {[...Array(20)].map((_, i) => (
                            <span key={i} className="absolute text-[8px] text-white/30 font-mono" style={{ left: `${i * 100 + 5}px` }}>00:00:{String(i * 5).padStart(2, '0')}</span>
                        ))}
                    </div>

                    {/* Fixed 'Playhead' Line */}
                    <div className="absolute top-0 left-[20%] w-[1px] h-full bg-red-500/80 z-20 pointer-events-none shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                        <div className="w-3 h-3 bg-red-500 absolute -top-1 -translate-x-1/2 clip-triangle" />
                    </div>

                    {/* Horizontal Scroll Area for Clips */}
                    <motion.div layout className="flex flex-row overflow-x-auto hide-scrollbar snap-x snap-mandatory pt-8 pb-12 px-6 h-[600px] items-start gap-4" style={{ paddingLeft: '20%' }}>
                        <AnimatePresence mode="popLayout">
                            {filteredVideos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                                    className="group relative flex flex-col interactive shrink-0 snap-center"
                                    style={{ width: 'clamp(280px, 30vw, 400px)' }}
                                >
                                    {/* Clip Track Info */}
                                    <div className="bg-[#1a1a1a] border border-white/10 rounded-t-md px-3 py-1 flex items-center justify-between z-10">
                                        <span className="text-[10px] text-white/50 uppercase tracking-widest font-sans flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-accent/60 inline-block" /> Track {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-[10px] text-white/30 font-mono">SEQ_{video.id}</span>
                                    </div>

                                    {/* Video Container (The Clip) */}
                                    <div className="relative w-full pt-[56.25%] bg-black border-x border-b border-white/5 overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(217,119,6,0.15)] group-hover:-translate-y-1">
                                        {video.url.toLowerCase().endsWith('.mp4') ? (
                                            <video
                                                src={video.url}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                            />
                                        ) : (
                                            <iframe
                                                src={video.url}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        )}
                                        {/* Hover glow overlay */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-accent/10 to-transparent" />
                                    </div>

                                    {/* Clip Details */}
                                    <div className="p-4 bg-gradient-to-b from-[#111] to-transparent rounded-b-md border-x border-b border-white/5">
                                        <h3 className="text-sm md:text-base font-cinematic font-medium text-white/80 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <span className="text-accent/60 text-[10px] tracking-wider uppercase mt-2 block font-semibold">
                                            {video.category}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Works;
