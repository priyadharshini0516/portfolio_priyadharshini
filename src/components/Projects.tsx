import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

const projects = [
    {
        title: "Vocab Voice App",
        description: "An AI-enabled application featuring voice-based learning functionality to help users improve their vocabulary interactively.",
        tags: ["#React", "#Node.js", "#AI", "#VoiceIntegration"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "TrustScore",
        description: "A comprehensive trust scoring system built as an AI-enabled application. Analyzes data points to calculate reliability scores.",
        tags: ["#TypeScript", "#Python", "#DataAnalysis", "#AI"],
        links: { demo: "#", github: "https://github.com/priyadharshini0516/TrustScore" }
    },
    {
        title: "Codecrave / AMUHACKS 5.0",
        description: "A project developed during the AMUHACKS 5.0 hackathon, focusing on solving real-world problems with full-stack technologies.",
        tags: ["#Hackathon", "#FullStack", "#React", "#Express"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Next.js To-Do App",
        description: "A modern, persistent to-do application built with Next.js 14 and Server Actions. Features include drag-and-drop reordering and dark mode.",
        tags: ["#Nextjs", "#TypeScript", "#Tailwind", "#Prisma"],
        links: { demo: "#", github: "https://github.com/priyadharshini0516/nextjs-todo" }
    },
    {
        title: "Waste Identifier AI",
        description: "An AI-powered application that identifies types of waste from images to assist in proper recycling sorting.",
        tags: ["#React", "#TensorFlow.js", "#Python", "#MaterialUI"],
        links: { demo: "#", github: "https://github.com/priyadharshini0516/waste-identifier" }
    }
];

export const Projects = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-screen bg-black text-white relative overflow-hidden flex flex-col justify-center"
        >
            {/* Giant Background Watermark */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 select-none pointer-events-none whitespace-nowrap z-0 tracking-widest">
                WORK
            </div>

            {/* Bottom Right Swipe Watermark */}
            <div className="absolute bottom-12 right-12 text-[8vw] font-black text-white/5 select-none pointer-events-none whitespace-nowrap z-0 flex items-center gap-8">
                Swipe
                <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-50">
                    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2 Z" fill="currentColor" />
                    <circle cx="50" cy="26" r="6" className="fill-brown" />
                    <circle cx="50" cy="74" r="6" fill="currentColor" />
                </svg>
            </div>

            {/* Horizontal Scroll Container for Projects */}
            <div className="w-full relative z-10 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-24 pb-12 px-12 md:px-32" style={{ perspective: "1000px" }}>
                <div className="flex gap-12 w-max items-center h-full min-h-[400px]">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, rotateY: 45, scale: 0.8 }}
                            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateY: -45, scale: 0.8 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            viewport={{ amount: 0.4, margin: "0px -100px 0px -100px" }}
                            className="w-[350px] md:w-[450px] h-[450px] bg-white text-black p-10 flex flex-col justify-between snap-center flex-shrink-0 group hover:-translate-y-2 transition-transform duration-300"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div>
                                <h3 className="text-2xl font-bold font-sans tracking-wide mb-8 border-b-2 border-black pb-4 text-center">
                                    {project.title}
                                </h3>
                                
                                <p className="font-mono text-sm leading-relaxed text-black/80 text-justify">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs font-bold">
                                    {project.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <a 
                                        href={project.links.demo} 
                                        className="px-6 py-2 border-2 border-black font-sans font-bold hover:bg-black hover:text-white transition-colors uppercase text-sm tracking-widest"
                                    >
                                        Visit
                                    </a>
                                    <a 
                                        href={project.links.github}
                                        className="p-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Empty spacer at the end for scrolling padding */}
                    <div className="w-[10px] md:w-[50px] flex-shrink-0"></div>
                </div>
            </div>
            
            {/* Custom CSS to hide scrollbar */}
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </motion.div>
    );
};
