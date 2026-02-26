import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const totalShaders = 4512;

    useEffect(() => {
        // Fast counter simulation
        const interval = setInterval(() => {
            setProgress((prev) => {
                const step = Math.floor(Math.random() * 150) + 50; // Jump by random amounts
                if (prev + step >= totalShaders) {
                    clearInterval(interval);
                    setTimeout(() => setIsFinished(true), 400); // slight pause when done
                    return totalShaders;
                }
                return prev + step;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    // Notify parent to show app after exit animation
    useEffect(() => {
        if (isFinished) {
            const timer = setTimeout(() => {
                onComplete();
            }, 1000); // Wait for the shutter animation to finish
            return () => clearTimeout(timer);
        }
    }, [isFinished, onComplete]);

    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-end pb-24 bg-black pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // Black background fades out
                >
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3">
                            {/* Spinning loading indicator */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/20 border-t-accent rounded-full"
                            />
                            <p className="font-mono text-white/50 text-sm tracking-widest uppercase">
                                Compiling Shaders
                            </p>
                        </div>

                        {/* Shaders count */}
                        <p className="font-mono text-white/30 text-xs tracking-wider">
                            ({progress}/{totalShaders})
                        </p>
                    </motion.div>

                    {/* Progress Bar Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
                        <motion.div
                            className="h-full bg-accent"
                            style={{ width: `${(progress / totalShaders) * 100}%` }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
