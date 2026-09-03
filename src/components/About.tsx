import { motion } from "framer-motion";
import profilePic from "../assets/profile_pic.png";

export const About = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-screen flex flex-col md:flex-row overflow-hidden"
        >
            {/* Left Side (Black) */}
            <div className="flex-1 bg-black text-white p-12 md:p-24 flex flex-col justify-center relative">
                {/* Giant watermark */}
                <div className="absolute top-1/4 left-0 -translate-y-1/2 text-[15vw] font-black text-white/5 select-none pointer-events-none whitespace-nowrap z-0 tracking-widest">
                    ABOUT
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 max-w-xl"
                >
                    <h1 className="text-4xl md:text-6xl font-sans font-bold mb-8 leading-tight">
                        Hi, <br />
                        I'm Priya Dharshini
                    </h1>
                    
                    <div className="font-mono text-sm md:text-base leading-relaxed text-white/80 space-y-6">
                        <p>
                            I am a Computer Science Engineering student and Full Stack Developer Intern with hands-on experience in CRM full-stack development, web applications, and AI-enabled software projects.
                        </p>
                        <p>
                            Skilled in React, Next.js, Node.js, Python, MongoDB, and modern web development practices. I have a strong foundation in bridging the gap between engineering and aesthetics.
                        </p>
                        <p className="italic text-white">
                            Looking to build scalable, user-focused applications? Let's talk.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Right Side (White/Sandal) */}
            <div className="flex-1 bg-lime relative flex items-center justify-center p-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-64 h-64 md:w-[450px] md:h-[450px]"
                >
                    {/* Shadow aura */}
                    <div className="absolute inset-0 bg-black/10 rounded-full blur-3xl -z-10 transform translate-y-10 scale-90"></div>
                    
                    {/* Image with vintage/grayscale treatment to match the theme */}
                    <img 
                        src={profilePic} 
                        alt="Priya Dharshini" 
                        className="w-full h-full object-cover grayscale sepia-[.2] contrast-[1.1] rounded-sm shadow-2xl border-2 border-black/10" 
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};
