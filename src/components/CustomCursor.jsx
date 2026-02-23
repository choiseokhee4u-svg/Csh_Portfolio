import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Lumen ambient glow — soft indirect light that follows cursor */}
            <motion.div
                className="fixed pointer-events-none z-[9997]"
                animate={{
                    x: mousePosition.x - 75,
                    y: mousePosition.y - 75,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
                style={{
                    width: 150,
                    height: 150,
                    background: 'radial-gradient(circle, rgba(217, 150, 50, 0.06) 0%, rgba(217, 119, 6, 0.02) 40%, transparent 70%)',
                    mixBlendMode: 'screen',
                }}
            />

            {/* Outer ring */}
            <motion.div
                className="fixed pointer-events-none z-[9999] rounded-full"
                animate={{
                    x: mousePosition.x - (isHovering ? 20 : 13),
                    y: mousePosition.y - (isHovering ? 20 : 13),
                    width: isHovering ? 40 : 26,
                    height: isHovering ? 40 : 26,
                    borderColor: isHovering ? 'rgba(217, 150, 50, 0.6)' : 'rgba(217, 150, 50, 0.25)',
                    boxShadow: isHovering
                        ? '0 0 15px rgba(217, 150, 50, 0.15), inset 0 0 8px rgba(217, 150, 50, 0.05)'
                        : '0 0 8px rgba(217, 150, 50, 0.06)',
                    backgroundColor: isHovering ? 'rgba(217, 150, 50, 0.04)' : 'transparent',
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.1 }}
                style={{
                    border: '1px solid rgba(217, 150, 50, 0.25)',
                    mixBlendMode: 'screen',
                }}
            />

            {/* Center dot */}
            <motion.div
                className="fixed pointer-events-none z-[10000] rounded-full"
                animate={{
                    x: mousePosition.x - 2,
                    y: mousePosition.y - 2,
                    opacity: isHovering ? 0 : 1,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.05 }}
                style={{
                    width: 4,
                    height: 4,
                    background: 'rgba(255, 210, 140, 0.6)',
                    boxShadow: '0 0 4px rgba(255, 200, 100, 0.3)',
                }}
            />
        </>
    );
};

export default CustomCursor;
