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
                    Unreal Engine Cinematic Artist
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-cinematic text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-none drop-shadow-2xl"
                >
                    SEOKHEE
                    <br />
                    CHOI
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="mt-12 max-w-xl px-6"
                >
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                        Crafting immersive digital worlds and narrative-driven sequences through the lens of Unreal Engine.
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute bottom-12 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll to Explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
