import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);

    // Parallax on scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] min-h-[600px] flex flex-col items-center justify-center overflow-x-clip"
        >
            {/* Cinematic Letterbox Bars */}
            <div className="absolute top-0 left-0 w-full h-[8vh] bg-black z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[8vh] bg-black z-30 pointer-events-none" />

            {/* Ambient glowing background */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                {/* Main amber glow */}
                <div className="absolute inset-0 bg-hero-glow opacity-100" />
                {/* Secondary subtle blue accent at edges */}
                <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-blue-900/5 to-transparent" />
                <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-blue-900/5 to-transparent" />
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${2 + Math.random() * 2}px`,
                            height: `${2 + Math.random() * 2}px`,
                            left: `${10 + i * 11}%`,
                            bottom: `${15 + (i % 3) * 20}%`,
                            background: i % 2 === 0
                                ? 'rgba(217, 150, 50, 0.4)'
                                : 'rgba(200, 200, 255, 0.2)',
                            animation: i % 2 === 0
                                ? `float-particle ${6 + i * 1.5}s ease-in-out infinite`
                                : `float-particle-2 ${8 + i * 1.2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.8}s`,
                        }}
                    />
                ))}
            </div>

            {/* Decorative cinematic lines */}
            <div className="absolute top-0 left-10 w-[1px] h-screen bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 right-10 w-[1px] h-screen bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Main Content */}
            <motion.div
                style={{ y: y2, opacity }}
                className="z-10 text-center flex flex-col items-center mt-8"
            >
                {/* Name - Identity */}
                <motion.p
                    initial={{ opacity: 0, letterSpacing: '0.1em' }}
                    animate={{ opacity: 1, letterSpacing: '0.5em' }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    className="text-white/30 uppercase text-xs md:text-sm mb-8 font-light tracking-[0.5em]"
                >
                    Seokhee Choi
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-accent uppercase tracking-[0.3em] text-sm mb-6 font-semibold text-glow"
                >
                    Unreal Engine
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                    className="font-cinematic text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none"
                >
                    CINEMATIC
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">ARTIST</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="mt-12 max-w-xl px-6 mb-24"
                >
                    <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
                        Crafting immersive digital worlds and narrative-driven sequences through the lens of Unreal Engine.
                    </p>
                </motion.div>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
            >
                <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium whitespace-nowrap">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-accent/60 to-transparent"
                />
            </motion.div>

            {/* Fog Effect at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none mix-blend-normal" />
        </section>
    );
};

export default Hero;
