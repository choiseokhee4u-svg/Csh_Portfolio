import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import Home from './pages/Home';
import Works from './pages/Works';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Triggered when Preloader finishes counting
  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Give the letterbox animation time to finish (1.5s + small buffer)
    setTimeout(() => {
      setIsAnimationComplete(true);
    }, 2000);
  };

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Cinematic Letterbox Opening Animation */}
      {!isAnimationComplete && (
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="fixed inset-0 z-[9999] pointer-events-none flex flex-col"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, delay: 1.5 }}
            >
              {/* Top Bar */}
              <motion.div
                className="w-full h-1/2 bg-black"
                initial={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              />
              {/* Bottom Bar */}
              <motion.div
                className="w-full h-1/2 bg-black"
                initial={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <BrowserRouter>
        <div
          className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden"
          style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
        >
          <BackgroundParticles />
          <CustomCursor />
          {!isLoading && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
