import { motion } from 'framer-motion';

const videos = [
    {
        id: '1',
        title: 'Cinematic Reel 2026',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1', // Placeholder URL
        category: 'Unreal Engine 5'
    },
    {
        id: '2',
        title: 'Environment Showcase',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1', // Placeholder URL
        category: 'Level Design'
    }
];

const Portfolio = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-20 relative bg-[#0a0a0a]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <h2 className="font-cinematic text-5xl md:text-7xl font-bold text-white mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent">Work</span>
                        </h2>
                        <p className="text-white/50 text-lg uppercase tracking-widest">Selected Sequences</p>
                    </div>
                    <div className="h-[1px] flex-1 bg-white/10 ml-0 md:ml-10 mb-4 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative flex flex-col gap-6 interactive"
                        >
                            {/* Video Container (Aspect Ratio 16:9) */}
                            <div className="relative w-full pt-[56.25%] bg-black rounded-xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(217,119,6,0.15)]">
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
                                    <h3 className="text-2xl font-cinematic font-medium text-white group-hover:text-accent transition-colors duration-300">
                                        {video.title}
                                    </h3>
                                    <span className="text-white/40 text-sm tracking-wider uppercase mt-1 block">
                                        {video.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
