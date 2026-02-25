import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import allVideos from '../data/videos';

const Portfolio = () => {
    // Show first 6 featured videos on the main page
    const featuredVideos = allVideos.slice(0, 6);

    return (
        <section className="min-h-screen py-32 px-6 md:px-20 relative bg-[#0a0a0a]">
            {/* Soft top gradient to blend with Hero fog */}
            <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-background to-transparent z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <h2 className="font-cinematic text-4xl md:text-7xl font-bold text-white mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent">Work</span>
                        </h2>
                        <p className="text-white/40 text-lg uppercase tracking-widest">Selected Sequences</p>
                    </div>
                    <div className="h-[1px] flex-1 bg-white/10 ml-0 md:ml-10 mb-4 hidden md:block"></div>
                </div>

                {/* Grid Layout for Portfolio Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col gap-5 interactive"
                        >
                            {/* Sequence Number */}
                            <div className="absolute -top-3 -left-2 z-20 font-cinematic text-5xl font-bold text-white/[0.04] group-hover:text-accent/20 transition-colors duration-500 select-none pointer-events-none">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            {/* Video Container (Aspect Ratio 16:9) */}
                            <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden border border-white/5 shadow-xl transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(217,119,6,0.15)] group-hover:scale-[1.02]">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                                {/* Hover glow overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-accent/5 to-transparent" />
                            </div>

                            {/* Video Info */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-cinematic font-medium text-white/80 group-hover:text-accent transition-colors duration-300">
                                        {video.title}
                                    </h3>
                                    <span className="text-white/30 text-xs tracking-wider uppercase mt-1 block">
                                        {video.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Cinematic Divider */}
                <div className="cinematic-divider mt-20 mb-12" />

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                >
                    <Link to="/works" className="inline-block interactive cursor-none px-6 md:px-10 py-4 md:py-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-full font-cinematic uppercase tracking-widest text-white/70 hover:text-accent transition-all duration-300 text-xs md:text-sm">
                        View All {allVideos.length} Projects
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
