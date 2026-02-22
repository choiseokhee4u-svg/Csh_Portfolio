import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const allVideos = [
    {
        id: '1',
        title: '[Project Q] G-Star 2024 Special Trailer',
        url: 'https://www.youtube.com/embed/rewe8ZRbxEs',
        category: 'Cinematic Trailer'
    },
    {
        id: '2',
        title: '[Project S] G-Star 2024 Special Trailer',
        url: 'https://www.youtube.com/embed/QH4Phb2wOvI',
        category: 'Cinematic Trailer'
    },
    {
        id: '3',
        title: '[Teaser] Mirage, a new world of NFT gaming',
        url: 'https://www.youtube.com/embed/zjsVCBasYxY',
        category: 'Teaser Trailer'
    },
    {
        id: '4',
        title: '[미르4] 게임 특징 열세번째: 비천약탈전',
        url: 'https://www.youtube.com/embed/DM0Qfg3qlDo',
        category: 'In-game Cinematic'
    },
    {
        id: '5',
        title: '[MIR4] Class Combat/Introduction Video',
        url: 'https://www.youtube.com/embed/V9zs9wA4RZw',
        category: 'Combat & Action Sequence'
    },
    {
        id: '6',
        title: '[미르4] 신규 직업 석궁사 스킬 미리보기',
        url: 'https://www.youtube.com/embed/p6E02XV1F38',
        category: 'Skill Presentation'
    }
];

const Works = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <h1 className="font-cinematic text-5xl md:text-7xl font-bold text-white mb-4">
                            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent">Portfolios</span>
                        </h1>
                        <p className="text-white/50 text-lg uppercase tracking-widest">Complete Archive</p>
                    </div>
                    <div className="h-[1px] flex-1 bg-white/10 ml-0 md:ml-10 mb-4 hidden md:block"></div>
                </div>

                {/* Grid Layout for Portfolio Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
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
