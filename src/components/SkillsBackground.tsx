import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseAlpha: number;
    pulseSpeed: number;
    shape: 'circle' | 'ring' | 'diamond';
}

export const SkillsBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
        let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

        const handleResize = () => {
            if (!canvas || !canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight;
            initNodes();
        };

        window.addEventListener("resize", handleResize);

        const mouse = {
            x: -1000,
            y: -1000,
            radius: 220,
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const parent = canvas.parentElement;
        if (parent) {
            parent.addEventListener("mousemove", handleMouseMove);
            parent.addEventListener("mouseleave", handleMouseLeave);
        }

        let nodes: Node[] = [];

        const initNodes = () => {
            const area = width * height;
            const nodeCount = Math.min(Math.max(Math.floor(area / 14000), 35), 75);
            nodes = [];
            const shapes: ('circle' | 'ring' | 'diamond')[] = ['circle', 'ring', 'diamond'];

            for (let i = 0; i < nodeCount; i++) {
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.9,
                    vy: (Math.random() - 0.5) * 0.9,
                    radius: shape === 'ring' ? 4 : shape === 'diamond' ? 3.5 : Math.random() * 3 + 2,
                    baseAlpha: Math.random() * 0.4 + 0.3, // Darker base opacity
                    pulseSpeed: Math.random() * 0.03 + 0.015,
                    shape,
                });
            }
        };

        initNodes();

        let time = 0;

        const render = () => {
            time += 0.02;
            ctx.clearRect(0, 0, width, height);

            // 1. Draw Mouse Dark Spotlight Halo
            if (mouse.x > 0 && mouse.y > 0) {
                const gradient = ctx.createRadialGradient(
                    mouse.x, mouse.y, 0,
                    mouse.x, mouse.y, mouse.radius
                );
                gradient.addColorStop(0, 'rgba(0, 0, 0, 0.18)');
                gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.07)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            // 2. Connect nearby nodes with crisp, bold dark lines
            const maxDistance = 160;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const alphaRatio = 1 - dist / maxDistance;
                        const alpha = alphaRatio * 0.38; // Rich dark line intensity
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(10, 10, 10, ${alpha})`;
                        ctx.lineWidth = alphaRatio * 1.4;
                        ctx.stroke();
                    }
                }
            }

            // 3. Mouse Interaction: Bold Dark Connections & Dynamic Push
            if (mouse.x > 0 && mouse.y > 0) {
                for (let i = 0; i < nodes.length; i++) {
                    const dx = nodes[i].x - mouse.x;
                    const dy = nodes[i].y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const alphaRatio = 1 - dist / mouse.radius;
                        const alpha = alphaRatio * 0.7; // Deep dark interaction lines
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
                        ctx.lineWidth = alphaRatio * 2;
                        ctx.stroke();

                        // Gentle push effect
                        const force = (mouse.radius - dist) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        nodes[i].x += Math.cos(angle) * force * 0.6;
                        nodes[i].y += Math.sin(angle) * force * 0.6;
                    }
                }
            }

            // 4. Render Dark Geometric Nodes
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];

                node.x += node.vx;
                node.y += node.vy;

                // Screen bounce
                if (node.x < 0) { node.x = 0; node.vx *= -1; }
                if (node.x > width) { node.x = width; node.vx *= -1; }
                if (node.y < 0) { node.y = 0; node.vy *= -1; }
                if (node.y > height) { node.y = height; node.vy *= -1; }

                const currentAlpha = node.baseAlpha + Math.sin(time * node.pulseSpeed * 50 + i) * 0.2;
                const alphaClamped = Math.max(0.25, Math.min(0.9, currentAlpha));

                ctx.save();
                ctx.fillStyle = `rgba(15, 15, 15, ${alphaClamped})`;
                ctx.strokeStyle = `rgba(15, 15, 15, ${alphaClamped})`;

                if (node.shape === 'ring') {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                } else if (node.shape === 'diamond') {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y - node.radius * 1.2);
                    ctx.lineTo(node.x + node.radius * 1.2, node.y);
                    ctx.lineTo(node.x, node.y + node.radius * 1.2);
                    ctx.lineTo(node.x - node.radius * 1.2, node.y);
                    ctx.closePath();
                    ctx.fill();
                } else {
                    // Circle node with solid dark center
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.restore();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            if (parent) {
                parent.removeEventListener("mousemove", handleMouseMove);
                parent.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto select-none">
            {/* Interactive Dark Canvas Animation */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Deep Dark Ambient Shadow Blobs */}
            <motion.div
                animate={{
                    x: [0, 60, -40, 0],
                    y: [0, -50, 40, 0],
                    scale: [1, 1.25, 0.9, 1],
                    opacity: [0.15, 0.22, 0.15],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/6 left-1/5 w-[32rem] h-[32rem] bg-black rounded-full blur-3xl pointer-events-none"
            />

            <motion.div
                animate={{
                    x: [0, -50, 60, 0],
                    y: [0, 40, -50, 0],
                    scale: [1, 0.85, 1.2, 1],
                    opacity: [0.18, 0.25, 0.18],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/6 right-1/5 w-[36rem] h-[36rem] bg-black rounded-full blur-3xl pointer-events-none"
            />

            {/* Central Dark Energy Pulsing Core */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.08, 0.16, 0.08],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-black rounded-full blur-[100px] pointer-events-none"
            />

            {/* Floating Circuit Tech Orbs - Darker styling */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-32 -right-32 w-96 h-96 border-2 border-black/20 rounded-full border-dashed pointer-events-none"
            />

            <motion.div
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] border-2 border-black/20 rounded-full border-dashed pointer-events-none"
            />

            {/* High Contrast Dark Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#000000 2px, transparent 2px)`,
                    backgroundSize: `36px 36px`,
                }}
            />
        </div>
    );
};
