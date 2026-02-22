import { motion } from 'framer-motion';

const videos = [
    {
        id: '1',
        title: 'Cinematic Reel 2026',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1',
        category: 'Unreal Engine 5 Core'
    },
    {
        id: '2',
        title: 'Cyberpunk Cityscape',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1',
        category: 'Lighting & Environment'
    },
    {
        id: '3',
        title: 'Fantasy Forest Sequence',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1',
        category: 'Level Design & Cinematography'
    },
    {
        id: '4',
        title: 'Sci-Fi Corridor',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1',
        category: 'Hard Surface & Materials'
    },
    {
        id: '5',
        title: 'Character Animation Test',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1',
        category: 'Sequencer & Rigging'
    },
    {
        id: '6',
        title: 'Abstract VFX Breakdown',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1',
        category: 'Niagara Systems'
    }
];

const Portfolio = () => {
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
                        <h2 className="font-cinematic text-5xl md:text-7xl font-bold text-white mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent">Work</span>
                        </h2>
                        <p className="text-white/50 text-lg uppercase tracking-widest">Selected Sequences</p>
                    </div>
                    <div className="h-[1px] flex-1 bg-white/10 ml-0 md:ml-10 mb-4 hidden md:block"></div>
                </div>

                {/* Grid Layout for Portfolio Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col gap-5 interactive"
                        >
                            {/* Video Container (Aspect Ratio 16:9) */}
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
        </section>
    );
};

export default Portfolio;
