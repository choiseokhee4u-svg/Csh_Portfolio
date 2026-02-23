import { useEffect, useRef } from 'react';

const BackgroundParticles = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Initialize particles
        const count = 40;
        particlesRef.current = [];
        for (let i = 0; i < count; i++) {
            particlesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.15,
                speedY: -Math.random() * 0.25 - 0.05,
                opacity: Math.random() * 0.3 + 0.05,
                fadeDir: Math.random() > 0.5 ? 1 : -1,
                hue: Math.random() > 0.7 ? 220 : 35, // 70% amber, 30% cool blue
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const p of particlesRef.current) {
                // Move
                p.x += p.speedX;
                p.y += p.speedY;

                // Gentle fade pulse
                p.opacity += p.fadeDir * 0.002;
                if (p.opacity > 0.35) p.fadeDir = -1;
                if (p.opacity < 0.05) p.fadeDir = 1;

                // Wrap around
                if (p.y < -10) {
                    p.y = canvas.height + 10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                if (p.hue === 35) {
                    ctx.fillStyle = `rgba(217, 170, 80, ${p.opacity})`;
                } else {
                    ctx.fillStyle = `rgba(140, 170, 230, ${p.opacity * 0.6})`;
                }
                ctx.fill();

                // Soft glow around particle
                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
                if (p.hue === 35) {
                    grad.addColorStop(0, `rgba(217, 150, 50, ${p.opacity * 0.3})`);
                } else {
                    grad.addColorStop(0, `rgba(120, 160, 220, ${p.opacity * 0.15})`);
                }
                grad.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{ opacity: 0.6 }}
        />
    );
};

export default BackgroundParticles;
