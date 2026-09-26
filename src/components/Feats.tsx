import { motion } from "framer-motion";
import { Award, CheckCircle2, Code, ShieldCheck, Cpu } from "lucide-react";

const feats = [
    {
        title: "Build a Face Recognition Application using Python",
        tags: ["#Guinness", "#AI-For-India", "#ArtificialIntelligence"],
        issuer: "GUVI Geek Networks, IITM Research Park",
        date: "Jul 14, 2020",
        type: "AI & ML",
        badge: Cpu,
        certTitle: "AI FOR INDIA GUINNESS WORLD RECORD",
        certOrg: "GUVI & IITM Research Park"
    },
    {
        title: "Getting Started with AWS Machine Learning",
        tags: ["#coursera", "#aws", "#machine-learning"],
        issuer: "Coursera certification",
        date: "May 29, 2020",
        type: "Cloud & ML",
        badge: ShieldCheck,
        certTitle: "AWS MACHINE LEARNING SPECIALIZATION",
        certOrg: "Amazon Web Services • Coursera"
    },
    {
        title: "Practical Java course : Zero to One",
        tags: ["#Java", "#Udemy", "#OOPS"],
        issuer: "Udemy Certification",
        date: "May 20, 2020",
        type: "Programming",
        badge: Code,
        certTitle: "PRACTICAL JAVA : ZERO TO ONE",
        certOrg: "Udemy Academy"
    },
    {
        title: "The Python 3 Course - Learn Python Practically",
        tags: ["#Python", "#OOPS", "#Udemy"],
        issuer: "Udemy Certification",
        date: "May 25, 2020",
        type: "Programming",
        badge: Award,
        certTitle: "THE PYTHON 3 COURSE",
        certOrg: "Udemy Academy"
    },
    {
        title: "DUHacks 5.0 - National Level Hackathon",
        tags: ["#Hackathon", "#GoogleDevGroups", "#Innovation"],
        issuer: "GDG on-Campus DDU",
        date: "Jan 24-25, 2026",
        type: "Hackathon",
        badge: Code,
        certTitle: "DUHACKS 5.0 HACKATHON PARTICIPATION",
        certOrg: "Google Developer Groups"
    },
    {
        title: "LCAT Certification - Aptitude & Technical",
        tags: ["#LCAT", "#Aptitude", "#Certification"],
        issuer: "Internshala - ID: 0664361D-388D-E9FE-CDEE-52C350E6A7D9",
        date: "Sep 2025",
        type: "Certification",
        badge: CheckCircle2,
        certTitle: "INTERNSHALA COMMON APTITUDE TEST",
        certOrg: "Internshala"
    }
];

export const Feats = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen text-black relative overflow-y-auto select-none"
        >
            {/* Vintage Scrapbook & Newspaper Collage Background Image */}
            <div 
                className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-90"
                style={{
                    backgroundImage: `url('/feats_bg.png')`,
                }}
            />

            {/* Soft Warm Vignette & Tint Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-[#EFE9DF]/20 mix-blend-multiply" />

            {/* Fixed Giant Watermark "FEATURES" */}
            <div className="fixed top-28 left-6 md:left-14 text-[12vw] font-black text-black/20 select-none pointer-events-none whitespace-nowrap z-0 tracking-wider font-sans uppercase">
                FEATURES
            </div>

            {/* Main Cards Grid */}
            <div className="relative z-10 max-w-6xl mx-auto pt-32 pb-24 px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {feats.map((feat, index) => {
                        const BadgeIcon = feat.badge;
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className={`border-2 border-black p-0 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                                    isEven ? "bg-[#1C1C1C] text-white" : "bg-white text-black"
                                }`}
                            >
                                {/* Certificate Image Container (Top Half) */}
                                <div className={`w-full h-52 md:h-60 border-b-2 border-black p-5 flex flex-col justify-between items-center text-center relative overflow-hidden transition-colors ${
                                    isEven ? "bg-[#262626] text-white" : "bg-[#FAF8F5] text-black"
                                }`}>
                                    {/* Ornamental Certificate Frame Borders */}
                                    <div className={`absolute inset-2 border pointer-events-none ${isEven ? "border-white/20" : "border-black/20"}`}></div>
                                    <div className={`absolute inset-3 border-2 border-dashed pointer-events-none ${isEven ? "border-white/10" : "border-black/10"}`}></div>

                                    {/* Certificate Header */}
                                    <div className={`w-full flex justify-between items-center z-10 border-b pb-2 ${isEven ? "border-white/15" : "border-black/15"}`}>
                                        <span className={`font-mono text-[10px] uppercase font-bold tracking-widest ${isEven ? "text-white/70" : "text-black/60"}`}>{feat.type}</span>
                                        <div className={`flex items-center gap-1 px-2.5 py-0.5 rounded-xs font-mono text-[9px] font-bold ${
                                            isEven ? "bg-white text-black" : "bg-black text-white"
                                        }`}>
                                            <BadgeIcon size={12} />
                                            <span>VERIFIED</span>
                                        </div>
                                    </div>

                                    {/* Certificate Center Content */}
                                    <div className="my-auto z-10 px-3 py-1">
                                        <div className={`font-serif italic text-xs mb-1 ${isEven ? "text-white/70" : "text-black/70"}`}>Certificate of Completion</div>
                                        <div className={`font-sans font-extrabold text-sm md:text-base tracking-tight uppercase line-clamp-2 ${isEven ? "text-white" : "text-black"}`}>
                                            {feat.certTitle}
                                        </div>
                                        <div className={`w-20 h-[1.5px] mx-auto my-2 ${isEven ? "bg-white/40" : "bg-black/40"}`}></div>
                                        <div className={`font-mono text-[11px] font-bold ${isEven ? "text-white/90" : "text-black/80"}`}>{feat.certOrg}</div>
                                    </div>

                                    {/* Certificate Footer */}
                                    <div className={`w-full z-10 border-t pt-1.5 flex justify-between items-center font-mono text-[9px] font-semibold ${
                                        isEven ? "border-white/15 text-white/60" : "border-black/15 text-black/60"
                                    }`}>
                                        <span>OFFICIAL CREDENTIAL</span>
                                        <span>{feat.date}</span>
                                    </div>
                                </div>

                                {/* Content Section (Bottom Half) */}
                                <div className={`p-6 flex flex-col flex-1 justify-between ${isEven ? "bg-[#1C1C1C] text-white" : "bg-white text-black"}`}>
                                    <div>
                                        <h3 className={`text-lg md:text-xl font-bold font-sans leading-snug mb-3 transition-colors ${
                                            isEven ? "text-white group-hover:text-white/80" : "text-black group-hover:text-black/80"
                                        }`}>
                                            {feat.title}
                                        </h3>

                                        <div className={`w-full h-[2px] my-3 ${isEven ? "bg-white/30" : "bg-black"}`}></div>

                                        {/* Hashtags / Badges */}
                                        <div className={`flex flex-wrap gap-2 text-xs md:text-sm font-mono font-bold my-3 ${
                                            isEven ? "text-white/90" : "text-black"
                                        }`}>
                                            {feat.tags.map(tag => (
                                                <span key={tag} className="hover:underline cursor-pointer">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Issuer & Date Footer */}
                                    <div className={`border-t pt-3 mt-2 font-mono text-xs flex justify-between items-center ${
                                        isEven ? "border-white/15 text-white/80" : "border-black/15 text-black/80"
                                    }`}>
                                        <span className="truncate pr-2">{feat.issuer}</span>
                                        <span className="whitespace-nowrap font-bold text-[11px]">{feat.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};




