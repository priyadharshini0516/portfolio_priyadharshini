import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10" />

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
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                            Priya Dharshini
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                        Full Stack Developer | UI/UX Designer | Innovator
                    </p>
                    <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
                        I craft stunning, user-centric digital experiences that blend aesthetic elegance with powerful functionality.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-gray-700 hover:border-gray-500 hover:bg-white/5 rounded-full font-medium transition-all flex items-center gap-2"
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
                        {/* Glowing Circle Behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                            {/* Placeholder for Profile Image */}
                            <span className="text-gray-500 text-lg">Profile Image</span>
                            {/* If user uploads an image, we'll replace this */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
