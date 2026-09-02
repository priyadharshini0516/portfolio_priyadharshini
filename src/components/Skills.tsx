import { motion } from "framer-motion";
import { Monitor, Cpu, Code2, Database } from "lucide-react";

export const Skills = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-screen bg-sandal text-black relative flex flex-col md:flex-row overflow-hidden"
        >
            {/* Network Nodes Background (SVG Pattern) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="network" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="currentColor" />
                            <circle cx="80" cy="40" r="2" fill="currentColor" />
                            <circle cx="50" cy="80" r="2" fill="currentColor" />
                            <line x1="20" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" />
                            <line x1="80" y1="40" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
                            <line x1="50" y1="80" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#network)" />
                </svg>
            </div>

            {/* Giant Background Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-black text-black/5 select-none pointer-events-none whitespace-nowrap z-0">
                Skills
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row max-w-7xl mx-auto items-center justify-center gap-12 p-8">
                
                {/* Left Panel: Full-Stack */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full bg-white/50 backdrop-blur-sm p-10 border border-black/10 rounded-sm hover:shadow-2xl transition-all duration-500 group"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <Monitor className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                        <h2 className="text-2xl font-bold font-sans tracking-wide">Full-Stack</h2>
                    </div>

                    <div className="space-y-8 font-mono text-sm leading-relaxed">
                        <div>
                            <p className="text-black/70 mb-4">
                                Building scalable products from zero to production with modern frameworks and clean architecture.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 uppercase tracking-widest text-xs">Frontend & Backend</h3>
                            <p className="text-black/80">React, Next.js, Tailwind CSS, Node.js, Express.js, FastAPI</p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 uppercase tracking-widest text-xs">Databases & Deployment</h3>
                            <ul className="list-disc list-inside text-black/80 space-y-1">
                                <li>MongoDB, MySQL, SQLite</li>
                                <li>Vercel, Netlify, Render</li>
                                <li>REST APIs, JWT, Git, GitHub</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Right Panel: AI/ML */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-1 w-full bg-brown text-sandal p-10 border border-brown rounded-sm hover:shadow-2xl transition-all duration-500 group"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <Cpu className="w-8 h-8 group-hover:-rotate-12 transition-transform" />
                        <h2 className="text-2xl font-bold font-sans tracking-wide">AI/ML</h2>
                    </div>

                    <div className="space-y-8 font-mono text-sm leading-relaxed">
                        <div>
                            <p className="text-sandal/70 mb-4">
                                Integrating AI, computer vision, and emerging Web3 technologies into production workflows.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 uppercase tracking-widest text-xs">Languages & Web3</h3>
                            <p className="text-sandal/80">Python, JavaScript, TypeScript, Solidity, Blockchain Fundamentals</p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 uppercase tracking-widest text-xs">AI / ML Expertise</h3>
                            <ul className="list-disc list-inside text-sandal/80 space-y-1">
                                <li>Machine Learning</li>
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
