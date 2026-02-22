import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
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

    // Hide cursor on mobile devices where pointer is coarse
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 1,
            backgroundColor: 'transparent',
            border: '1.5px solid rgba(217, 119, 6, 0.5)',
            boxShadow: '0 0 10px rgba(217, 119, 6, 0.3)',
            transition: { type: 'tween', ease: 'backOut', duration: 0.15 }
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: 1.5,
            opacity: 1,
            backgroundColor: 'rgba(217, 119, 6, 0.15)',
            border: '1.5px solid rgba(217, 119, 6, 0.8)',
            boxShadow: '0 0 20px rgba(217, 119, 6, 0.6)',
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            opacity: 1,
            scale: 1,
        },
        hover: {
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            opacity: 0,
            scale: 0,
        }
    };

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-accent rounded-full pointer-events-none z-[10000]"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
            />
        </>
    );
};

export default CustomCursor;
