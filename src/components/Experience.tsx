import { motion } from "framer-motion";
import { Briefcase, Activity, Target } from "lucide-react";
import KineticGrid from "@/components/ui/kinetic-grid";

export const Experience = () => {
    // Container handles the stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        },
        exit: { opacity: 0 }
    };

    // Item handles the spring animation for each individual card
    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        show: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: "spring" as const, bounce: 0.5, duration: 0.8 }
        }
    };

    return (
        <KineticGrid globalColor="gold" className="min-h-screen text-white select-none">
            <motion.div 
                initial="hidden"
                animate="show"
                exit="exit"
                variants={containerVariants}
                className="w-full min-h-screen relative flex flex-col justify-center items-center overflow-hidden p-8 pt-24 pb-24"
            >
                {/* Giant Background Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-white/5 select-none pointer-events-none whitespace-nowrap z-0 tracking-widest">
                    EXPERIENCE
                </div>

                <div className="relative z-10 w-full max-w-5xl flex flex-col gap-6 mt-12 md:mt-0">
                    
                    {/* Header Card (Full Width) */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.01, y: -4 }}
                        className="w-full bg-[#0E1222]/80 backdrop-blur-xl text-white p-8 md:p-12 border border-white/10 rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(230,200,121,0.15)] transition-all duration-300 group relative overflow-hidden"
                    >
                        {/* Top subtle glowing gold accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6C879]/0 via-[#E6C879] to-[#E6C879]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-[#E6C879] text-[#070914] shadow-md rounded-lg group-hover:scale-105 transition-transform duration-300">
                                    <Briefcase size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-sans font-bold mb-2 text-white">Techpuram Technology Pvt Ltd</h2>
                                    <p className="font-mono text-sm uppercase tracking-widest text-[#E6C879]">Full Stack Developer Intern</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-8 md:mt-0 font-mono text-sm font-bold border border-[#E6C879]/30 px-6 py-3 bg-[#070914]/60 rounded-lg text-[#E6C879] shadow-inner">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#E6C879] animate-[pulse_2s_ease-in-out_infinite]"></span>
                                21-Nov-2025 to 10-Feb-2026
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Responsibilities Card */}
                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="bg-[#0E1222]/80 backdrop-blur-xl text-white p-8 md:p-12 border border-white/10 rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(230,200,121,0.15)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Top subtle glowing gold accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6C879]/0 via-[#E6C879] to-[#E6C879]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                                <Activity className="text-[#E6C879]" size={28} />
                                <h3 className="font-bold uppercase tracking-widest text-lg text-white">Responsibilities</h3>
                            </div>
                            <ul className="list-none space-y-4 font-mono text-sm leading-relaxed text-white/80 flex-grow">
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <span className="text-[#E6C879] mt-1">▹</span> Contributed to CRM full-stack development.
                                </li>
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <span className="text-[#E6C879] mt-1">▹</span> Developed and integrated core CRM layouts.
                                </li>
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <span className="text-[#E6C879] mt-1">▹</span> Implemented dynamic CRM fields within the application architecture.
                                </li>
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <span className="text-[#E6C879] mt-1">▹</span> Worked effectively within an agile organizational environment.
                                </li>
                            </ul>
                        </motion.div>

                        {/* Impact Card */}
                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="bg-[#0E1222]/80 backdrop-blur-xl text-white p-8 md:p-12 border border-white/10 rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(127,196,255,0.15)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Top subtle glowing blue accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7FC4FF]/0 via-[#7FC4FF] to-[#7FC4FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                                <Target className="text-[#7FC4FF]" size={28} />
                                <h3 className="font-bold uppercase tracking-widest text-lg text-white">Impact & Results</h3>
                            </div>
                            <ul className="list-none space-y-4 font-mono text-sm leading-relaxed text-white/80 flex-grow">
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <span className="text-[#7FC4FF] mt-1">▹</span> Completed an intensive 50-working-day development internship.
                                </li>
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <span className="text-[#7FC4FF] mt-1">▹</span> Successfully delivered production-ready CRM layouts and fields modules.
                                </li>
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <span className="text-[#7FC4FF] mt-1">▹</span> Received an official <strong className="text-[#7FC4FF]">"Excellent"</strong> performance remark from management.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </KineticGrid>
    );
};


