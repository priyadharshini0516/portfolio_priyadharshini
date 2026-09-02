import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

const feats = [
    {
        title: "DUHacks 5.0",
        description: "Participated in a 36-hour National Level Hackathon organized by Google Developer Groups on-Campus at DDU.",
        date: "24–25 January 2026",
        tags: ["#Hackathon", "#GoogleDevGroups", "#Innovation"]
    },
    {
        title: "HackOdisha 5.0",
        description: "Actively participated and developed solutions during the HackOdisha 5.0 event.",
        date: "6–7 September 2025",
        tags: ["#HackOdisha", "#Development", "#Competition"]
    },
    {
        title: "LCAT Certification",
        description: "Successfully participated in the Internship Common Aptitude Test (LCAT).",
        date: "September 2025",
        tags: ["#LCAT", "#Aptitude", "#Certification"]
    },
    {
        title: "Jaya Engineering College",
        description: "B.E. Computer Science and Engineering. Expected Graduation: 2027.",
        date: "Current Grade: 85%",
        tags: ["#Academic", "#CSE", "#Degree"]
    }
];

export const Feats = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full min-h-screen bg-sandal text-black relative p-12 md:p-24"
        >
            {/* Giant Background Watermark */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/5 select-none pointer-events-none whitespace-nowrap z-0 tracking-widest">
                FEATS
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto pt-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {feats.map((feat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white border-2 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 relative group"
                        >
                            <Anchor className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity" />
                            
                            <h3 className="text-2xl font-bold font-sans mb-4 pr-12">{feat.title}</h3>
                            <p className="font-mono text-sm leading-relaxed text-black/80 mb-6 min-h-[60px]">
                                {feat.description}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-2 border-black/10 pt-6">
                                <div className="font-bold font-mono text-xs uppercase tracking-widest bg-black text-white px-3 py-1 rounded-sm mb-4 sm:mb-0">
                                    {feat.date}
                                </div>
                                <div className="flex gap-2 font-mono text-[10px] uppercase font-bold text-black/60">
                                    {feat.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
