import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export const Experience = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-screen bg-sandal text-black relative flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Giant Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-black/5 select-none pointer-events-none whitespace-nowrap z-0 tracking-widest">
                EXPERIENCE
            </div>

            <div className="relative z-10 w-full max-w-4xl px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/50 backdrop-blur-sm border border-black/10 p-12 hover:shadow-2xl transition-all duration-500 rounded-sm"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-2 border-black pb-6">
                        <div className="flex items-center gap-4">
                            <Briefcase size={32} />
                            <div>
                                <h2 className="text-3xl font-sans font-bold">Techpuram Technology Pvt Ltd</h2>
                                <p className="font-mono text-sm uppercase tracking-widest mt-1">Full Stack Developer Intern</p>
                            </div>
                        </div>
                        <div className="font-mono text-sm text-black/70 mt-4 md:mt-0 font-bold border border-black px-4 py-2 rounded-full">
                            21-Nov-2025 to 10-Feb-2026
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 font-mono text-sm leading-relaxed text-black/80">
                        <div>
                            <h3 className="font-bold text-black uppercase tracking-widest mb-4">Responsibilities</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Contributed to CRM full-stack development.</li>
                                <li>Developed and integrated CRM layouts.</li>
                                <li>Implemented dynamic CRM fields within the app.</li>
                                <li>Worked within an agile organizational environment.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-black uppercase tracking-widest mb-4">Impact</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Completed a 50-working-day development internship.</li>
                                <li>Successfully delivered CRM layouts and fields modules.</li>
                                <li>Received an <strong>"Excellent"</strong> performance remark.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
