import { motion } from "framer-motion";
import { Briefcase, Activity, Target } from "lucide-react";

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
            transition: { type: "spring", bounce: 0.5, duration: 0.8 }
        }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="show"
            exit="exit"
            variants={containerVariants}
            className="w-full min-h-screen bg-lime text-black relative flex flex-col justify-center items-center overflow-hidden p-8 pt-24 pb-24"
        >
            {/* Giant Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-black/5 select-none pointer-events-none whitespace-nowrap z-0 tracking-widest">
                EXPERIENCE
            </div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col gap-6 mt-12 md:mt-0">
                
                {/* Header Card (Full Width) */}
                <motion.div 
                    variants={itemVariants}
                    className="w-full bg-charcoal text-lime p-8 md:p-12 border-2 border-charcoal hover:shadow-[12px_12px_0px_0px_rgba(28,28,28,0.4)] hover:-translate-y-2 transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-lime text-charcoal shadow-sm">
                                <Briefcase size={32} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-sans font-bold mb-2">Techpuram Technology Pvt Ltd</h2>
                                <p className="font-mono text-sm uppercase tracking-widest">Full Stack Developer Intern</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-8 md:mt-0 font-mono text-sm font-bold border-2 border-lime px-6 py-3 bg-charcoal">
                            <span className="w-3 h-3 rounded-full bg-lime animate-[pulse_2s_ease-in-out_infinite]"></span>
                            21-Nov-2025 to 10-Feb-2026
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Responsibilities Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-charcoal text-lime p-8 md:p-12 border-2 border-charcoal hover:shadow-[12px_12px_0px_0px_rgba(28,28,28,0.4)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="flex items-center gap-4 mb-8 border-b border-lime/30 pb-6">
                            <Activity className="text-lime" size={28} />
                            <h3 className="font-bold uppercase tracking-widest text-lg">Responsibilities</h3>
                        </div>
                        <ul className="list-none space-y-4 font-mono text-sm leading-relaxed text-lime/80 flex-grow">
                            <li className="flex items-start gap-3 hover:text-lime transition-colors">
                                <span className="text-lime mt-1">▹</span> Contributed to CRM full-stack development.
                            </li>
                            <li className="flex items-start gap-3 hover:text-lime transition-colors">
                                <span className="text-lime mt-1">▹</span> Developed and integrated core CRM layouts.
                            </li>
                            <li className="flex items-start gap-3 hover:text-lime transition-colors">
                                <span className="text-lime mt-1">▹</span> Implemented dynamic CRM fields within the application architecture.
                            </li>
                            <li className="flex items-start gap-3 hover:text-lime transition-colors">
                                <span className="text-lime mt-1">▹</span> Worked effectively within an agile organizational environment.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Impact Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-charcoal text-lime p-8 md:p-12 border-2 border-charcoal hover:shadow-[12px_12px_0px_0px_rgba(28,28,28,0.4)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="flex items-center gap-4 mb-8 border-b border-lime/30 pb-6">
                            <Target className="text-lime" size={28} />
                            <h3 className="font-bold uppercase tracking-widest text-lg">Impact & Results</h3>
                        </div>
                        <ul className="list-none space-y-4 font-mono text-sm leading-relaxed text-lime/80 flex-grow">
                            <li className="flex items-start gap-3 hover:text-lime transition-colors">
                                <span className="text-lime mt-1">▹</span> Completed an intensive 50-working-day development internship.
                            </li>
                            <li className="flex items-start gap-3 hover:text-lime transition-colors">
                                <span className="text-lime mt-1">▹</span> Successfully delivered production-ready CRM layouts and fields modules.
                            </li>
                            <li className="flex items-start gap-3 hover:text-lime transition-colors">
                                <span className="text-lime mt-1">▹</span> Received an official <strong className="text-lime">"Excellent"</strong> performance remark from management.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
