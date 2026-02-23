import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const mouseRef = useRef({ x: -100, y: -100 });
    const smoothPos = useRef({ x: -100, y: -100 });
    const trailRef = useRef([]);

    useEffect(() => {
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

        const maxTrail = 12;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth follow - cursor follows closely
            const lerpSpeed = 0.25;
            smoothPos.current.x += (mouseRef.current.x - smoothPos.current.x) * lerpSpeed;
            smoothPos.current.y += (mouseRef.current.y - smoothPos.current.y) * lerpSpeed;

            const mx = smoothPos.current.x;
            const my = smoothPos.current.y;

            // Add trail point
            trailRef.current.unshift({ x: mx, y: my, life: 1.0 });
            if (trailRef.current.length > maxTrail) trailRef.current.pop();

            // === LUMEN GI EFFECT ===
            // Lumen = soft, diffuse indirect light bouncing off surfaces
            // NOT a point light. Think: gentle ambient color bleeding, soft volumetric haze.

            // 1) Soft trail - very faint light traces (indirect bounce simulation)
            for (let i = trailRef.current.length - 1; i >= 0; i--) {
                const p = trailRef.current[i];
                p.life -= 0.06;
                if (p.life <= 0) {
                    trailRef.current.splice(i, 1);
                    continue;
                }
                const alpha = p.life * 0.12;
                const radius = 12 + (1 - p.life) * 18;

                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
                grad.addColorStop(0, `rgba(255, 170, 60, ${alpha})`);
                grad.addColorStop(1, `rgba(217, 119, 6, 0)`);
                ctx.beginPath();
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            }

            // 2) Very soft ambient bounce — wide, barely visible (Lumen's indirect lighting)
            const ambientGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 60);
            ambientGrad.addColorStop(0, 'rgba(255, 180, 80, 0.035)');
            ambientGrad.addColorStop(0.5, 'rgba(217, 130, 30, 0.015)');
            ambientGrad.addColorStop(1, 'rgba(200, 100, 0, 0)');
            ctx.beginPath();
            ctx.arc(mx, my, 60, 0, Math.PI * 2);
            ctx.fillStyle = ambientGrad;
            ctx.fill();

            // 3) Small warm core — the actual cursor light source, subtle
            const coreGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 10);
            coreGrad.addColorStop(0, 'rgba(255, 210, 140, 0.2)');
            coreGrad.addColorStop(0.6, 'rgba(255, 170, 60, 0.06)');
            coreGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
            ctx.beginPath();
            ctx.arc(mx, my, 10, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.fill();

            // 4) Tiny center point
            const dotGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 3);
            dotGrad.addColorStop(0, 'rgba(255, 230, 180, 0.5)');
            dotGrad.addColorStop(1, 'rgba(255, 200, 100, 0)');
            ctx.beginPath();
            ctx.arc(mx, my, 3, 0, Math.PI * 2);
            ctx.fillStyle = dotGrad;
            ctx.fill();

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
            {/* Canvas for Lumen GI soft glow */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[9998]"
                style={{ mixBlendMode: 'screen' }}
            />
            {/* Thin outer ring — cursor indicator */}
            <div
                className="fixed pointer-events-none z-[9999] rounded-full transition-all duration-150 ease-out"
                style={{
                    left: mouseRef.current?.x,
                    top: mouseRef.current?.y,
                    width: isHovering ? 40 : 26,
                    height: isHovering ? 40 : 26,
                    transform: `translate(-50%, -50%)`,
                    border: `1px solid rgba(217, 150, 50, ${isHovering ? 0.6 : 0.3})`,
                    boxShadow: isHovering
                        ? '0 0 12px rgba(217, 150, 50, 0.15)'
                        : '0 0 6px rgba(217, 150, 50, 0.08)',
                    background: isHovering ? 'rgba(217, 150, 50, 0.05)' : 'transparent',
                }}
            />
            {/* Small center dot */}
            <div
                className="fixed pointer-events-none z-[10000] rounded-full"
                style={{
                    left: mouseRef.current?.x,
                    top: mouseRef.current?.y,
                    width: 4,
                    height: 4,
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(255, 210, 140, 0.7)',
                    boxShadow: '0 0 4px rgba(255, 200, 100, 0.4)',
                    opacity: isHovering ? 0 : 1,
                    transition: 'opacity 0.15s',
                }}
            />
        </>
    );
};

export default CustomCursor;
