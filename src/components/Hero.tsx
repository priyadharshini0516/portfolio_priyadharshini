import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import profilePic from "../assets/profile_pic.png";

const typewriterContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const typewriterChar = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Decor - removed glowing orbs for vintage feel */}
            <div className="absolute top-0 right-0 w-[300px] h-full bg-card -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-medium tracking-wider mb-2 block">
                        Welcome to my portfolio
                    </span>
                    <motion.h1 
                        variants={typewriterContainer}
                        initial="hidden"
                        animate="show"
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif border-b-4 border-foreground pb-4 inline-block"
                    >
                        {"Hi, I'm ".split("").map((char, i) => (
                            <motion.span key={i} variants={typewriterChar}>{char === " " ? "\u00A0" : char}</motion.span>
                        ))}
                        <br />
                        <span className="text-secondary italic font-serif">
                            {"Priya Dharshini".split("").map((char, i) => (
                                <motion.span key={i} variants={typewriterChar}>{char === " " ? "\u00A0" : char}</motion.span>
                            ))}
                        </span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
                        Full Stack Developer | UI/UX Designer | Innovator
                    </p>
                    <p className="text-foreground mb-8 max-w-lg leading-relaxed text-lg">
                        I craft stunning, user-centric digital experiences that blend aesthetic elegance with powerful functionality.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest uppercase transition-all flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-border hover:border-primary hover:bg-card font-bold tracking-widest uppercase transition-all flex items-center gap-2"
                        >
                            Contact Me <Mail size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image / Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                        {/* Image Container */}
                        <div className="relative w-full h-full border-4 border-border bg-card overflow-hidden flex items-center justify-center p-2 shadow-2xl">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none"></div>
                            <img src={profilePic} alt="Priya Dharshini" className="w-full h-full object-cover grayscale sepia-[.4] contrast-110" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
