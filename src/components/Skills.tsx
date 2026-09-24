import { motion } from "framer-motion";
import { Monitor, Cpu, Code2, Database, Layers, Sparkles } from "lucide-react";
import ConstellationField from "@/components/ui/constellation-field";

export const Skills = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full min-h-screen md:h-screen bg-lime text-black relative flex flex-col md:flex-row overflow-y-auto md:overflow-hidden select-none"
        >
            {/* Constellation Field WebGL Background */}
            <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
                <ConstellationField
                    mode="dark"
                    speed={1}
                    size={1}
                    strokeWidth={1}
                    length={1}
                    density={1.2}
                    opacity={0.9}
                    hue={0}
                    saturation={1}
                    brightness={1}
                />
            </div>

            {/* Giant Background Animated Watermark */}
            <motion.div 
                animate={{ 
                    y: [0, -12, 0],
                    opacity: [0.06, 0.1, 0.06] 
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[16vw] font-black text-white/10 select-none pointer-events-none whitespace-nowrap z-0 tracking-tighter"
            >
                SKILLS
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row max-w-7xl mx-auto items-center justify-center gap-8 md:gap-12 p-6 md:p-8 py-16 md:py-0">
                
                {/* Left Panel: Full-Stack */}
                <motion.div 
                    initial={{ opacity: 0, x: -40, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="flex-1 w-full bg-[#0E1222]/80 backdrop-blur-xl p-8 md:p-10 border border-white/10 text-white rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(230,200,121,0.15)] transition-all duration-300 group relative overflow-hidden"
                >
                    {/* Top subtle glowing accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6C879]/0 via-[#E6C879] to-[#E6C879]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-[#E6C879] text-[#070914] rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold font-sans tracking-wide text-white">Full-Stack</h2>
                        </div>
                        <Code2 className="w-5 h-5 text-[#E6C879]/60 group-hover:text-[#E6C879] transition-colors" />
                    </div>

                    <div className="space-y-6 font-mono text-sm leading-relaxed">
                        <p className="text-white/80">
                            Building scalable products from zero to production with modern frameworks and clean architecture.
                        </p>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <h3 className="font-bold mb-2 uppercase tracking-widest text-xs text-[#E6C879] flex items-center gap-2">
                                <Layers className="w-3.5 h-3.5" /> Frontend & Backend
                            </h3>
                            <p className="text-white/80">React, Next.js, Tailwind CSS, Node.js, Express.js, FastAPI</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <h3 className="font-bold mb-2 uppercase tracking-widest text-xs text-[#E6C879] flex items-center gap-2">
                                <Database className="w-3.5 h-3.5" /> Databases & Infrastructure
                            </h3>
                            <ul className="list-disc list-inside text-white/80 space-y-1">
                                <li>MongoDB, MySQL, SQLite</li>
                                <li>Vercel, Netlify, Render</li>
                                <li>REST APIs, JWT, Git, GitHub</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Right Panel: AI/ML */}
                <motion.div 
                    initial={{ opacity: 0, x: 40, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="flex-1 w-full bg-[#0E1222]/80 backdrop-blur-xl text-white p-8 md:p-10 border border-white/10 rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(127,196,255,0.15)] transition-all duration-300 group relative overflow-hidden"
                >
                    {/* Top subtle glowing blue accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7FC4FF]/0 via-[#7FC4FF] to-[#7FC4FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-[#7FC4FF] text-[#070914] rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold font-sans tracking-wide text-white">AI / ML</h2>
                        </div>
                        <Sparkles className="w-5 h-5 text-[#7FC4FF]/60 group-hover:text-[#7FC4FF] transition-colors" />
                    </div>

                    <div className="space-y-6 font-mono text-sm leading-relaxed">
                        <p className="text-white/80">
                            Integrating AI, computer vision, and emerging Web3 technologies into production workflows.
                        </p>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <h3 className="font-bold mb-2 uppercase tracking-widest text-xs text-[#7FC4FF] flex items-center gap-2">
                                <Code2 className="w-3.5 h-3.5" /> Languages & Web3
                            </h3>
                            <p className="text-white/80">Python, JavaScript, TypeScript, Solidity, Blockchain Fundamentals</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <h3 className="font-bold mb-2 uppercase tracking-widest text-xs text-[#7FC4FF] flex items-center gap-2">
                                <Cpu className="w-3.5 h-3.5" /> AI / ML Expertise
                            </h3>
                            <ul className="list-disc list-inside text-white/80 space-y-1">
                                <li>Machine Learning Algorithms</li>
                                <li>OpenCV & Computer Vision</li>
                                <li>OCR (Optical Character Recognition)</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};


