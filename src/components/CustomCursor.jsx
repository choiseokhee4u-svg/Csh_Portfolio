import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const canvasRef = useRef(null);
    const trailRef = useRef([]);
    const animationRef = useRef(null);
    const mouseRef = useRef({ x: -100, y: -100 });
    const smoothPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        // Mobile check
        if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const updateMousePosition = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
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

        // Trail particles
        const maxTrail = 18;
        let hueShift = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth follow
            smoothPos.current.x += (mouseRef.current.x - smoothPos.current.x) * 0.18;
            smoothPos.current.y += (mouseRef.current.y - smoothPos.current.y) * 0.18;

            const mx = smoothPos.current.x;
            const my = smoothPos.current.y;

            // Push trail point
            trailRef.current.unshift({ x: mx, y: my, life: 1.0 });
            if (trailRef.current.length > maxTrail) trailRef.current.pop();

            hueShift = (hueShift + 0.3) % 360;

            // --- Draw Lumen trail glow ---
            for (let i = trailRef.current.length - 1; i >= 0; i--) {
                const p = trailRef.current[i];
                p.life -= 0.045;
                if (p.life <= 0) {
                    trailRef.current.splice(i, 1);
                    continue;
                }
                const alpha = p.life * 0.35;
                const radius = 20 + (1 - p.life) * 30;

                // Warm amber core bounce light
                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
                grad.addColorStop(0, `rgba(255, 180, 60, ${alpha * 0.6})`);
                grad.addColorStop(0.4, `rgba(217, 119, 6, ${alpha * 0.3})`);
                grad.addColorStop(1, `rgba(217, 119, 6, 0)`);

                ctx.beginPath();
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            }

            // --- Main Lumen core glow (multi-layer) ---
            // Layer 1: Wide ambient bounce (soft, large)
            const ambientGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 90);
            ambientGrad.addColorStop(0, 'rgba(255, 190, 80, 0.08)');
            ambientGrad.addColorStop(0.3, 'rgba(217, 119, 6, 0.04)');
            ambientGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
            ctx.beginPath();
            ctx.arc(mx, my, 90, 0, Math.PI * 2);
            ctx.fillStyle = ambientGrad;
            ctx.fill();

            // Layer 2: Mid emission glow
            const midGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 45);
            midGrad.addColorStop(0, 'rgba(255, 200, 100, 0.2)');
            midGrad.addColorStop(0.5, 'rgba(255, 160, 40, 0.08)');
            midGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
            ctx.beginPath();
            ctx.arc(mx, my, 45, 0, Math.PI * 2);
            ctx.fillStyle = midGrad;
            ctx.fill();

            // Layer 3: Hot center emission
            const coreGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 18);
            coreGrad.addColorStop(0, 'rgba(255, 240, 200, 0.5)');
            coreGrad.addColorStop(0.3, 'rgba(255, 200, 100, 0.3)');
            coreGrad.addColorStop(0.7, 'rgba(255, 150, 30, 0.1)');
            coreGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
            ctx.beginPath();
            ctx.arc(mx, my, 18, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.fill();

            // Layer 4: Bright white-hot pinpoint
            const pinGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 5);
            pinGrad.addColorStop(0, 'rgba(255, 255, 240, 0.85)');
            pinGrad.addColorStop(0.5, 'rgba(255, 220, 150, 0.4)');
            pinGrad.addColorStop(1, 'rgba(255, 180, 60, 0)');
            ctx.beginPath();
            ctx.arc(mx, my, 5, 0, Math.PI * 2);
            ctx.fillStyle = pinGrad;
            ctx.fill();

            // --- Subtle light ray flickers ---
            ctx.save();
            ctx.translate(mx, my);
            const numRays = 6;
            const time = Date.now() * 0.001;
            for (let i = 0; i < numRays; i++) {
                const angle = (Math.PI * 2 / numRays) * i + time * 0.5;
                const rayLen = 25 + Math.sin(time * 2 + i * 1.3) * 12;
                const rayAlpha = 0.06 + Math.sin(time * 3 + i) * 0.03;

                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(angle) * rayLen, Math.sin(angle) * rayLen);
                ctx.strokeStyle = `rgba(255, 200, 100, ${rayAlpha})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            ctx.restore();

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('resize', resize);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Canvas for Lumen glow trail */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[9998]"
                style={{ mixBlendMode: 'screen' }}
            />
            {/* Outer ring - expands on hover */}
            <div
                className="fixed pointer-events-none z-[9999] rounded-full"
                style={{
                    left: mousePosition.x - (isHovering ? 22 : 14),
                    top: mousePosition.y - (isHovering ? 22 : 14),
                    width: isHovering ? 44 : 28,
                    height: isHovering ? 44 : 28,
                    border: `1.5px solid rgba(255, 200, 100, ${isHovering ? 0.8 : 0.4})`,
                    boxShadow: isHovering
                        ? '0 0 20px rgba(255, 180, 60, 0.5), 0 0 40px rgba(217, 119, 6, 0.2), inset 0 0 10px rgba(255, 200, 100, 0.15)'
                        : '0 0 10px rgba(255, 180, 60, 0.25), 0 0 25px rgba(217, 119, 6, 0.1)',
                    background: isHovering ? 'rgba(255, 200, 100, 0.08)' : 'transparent',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    mixBlendMode: 'screen',
                }}
            />
            {/* Central bright dot */}
            <div
                className="fixed pointer-events-none z-[10000] rounded-full"
                style={{
                    left: mousePosition.x - 2.5,
                    top: mousePosition.y - 2.5,
                    width: 5,
                    height: 5,
                    background: 'radial-gradient(circle, rgba(255,255,240,0.95) 0%, rgba(255,200,100,0.6) 60%, transparent 100%)',
                    boxShadow: '0 0 6px rgba(255, 220, 150, 0.8)',
                    opacity: isHovering ? 0 : 1,
                    transform: isHovering ? 'scale(0)' : 'scale(1)',
                    transition: 'opacity 0.15s, transform 0.15s',
                }}
            />
        </>
    );
};

export default CustomCursor;
