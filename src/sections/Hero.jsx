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
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Ambient glowing background */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 bg-hero-glow z-0 pointer-events-none"
            />

            {/* Decorative cinematic lines */}
            <div className="absolute top-0 left-10 w-[1px] h-screen bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 right-10 w-[1px] h-screen bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Main Content */}
            <motion.div
                style={{ y: y2, opacity }}
                className="z-10 text-center flex flex-col items-center mt-20"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-accent uppercase tracking-[0.3em] text-sm mb-6 font-semibold"
                >
                    Unreal Engine
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-cinematic text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-none drop-shadow-2xl"
                >
                    CINEMATIC
                    <br />
                    ARTIST
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="mt-12 max-w-xl px-6 mb-32"
                >
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                        Crafting immersive digital worlds and narrative-driven sequences through the lens of Unreal Engine.
                    </p>
                </motion.div>

            </motion.div>

            {/* Scroll Indicator - Moved outside parallax div */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
            >
                <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium whitespace-nowrap">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent"
                />
            </motion.div>

            {/* Fog Effect at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none mix-blend-normal" />
        </section>
    );
};

export default Hero;
