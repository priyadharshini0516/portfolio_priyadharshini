import { motion } from "framer-motion";
import { GraduationCap, Code2, Palette, Lightbulb } from "lucide-react";

const highlights = [
    {
        icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
        title: "Education",
        desc: "B.E. in Computer Science",
    },
    {
        icon: <Code2 className="w-6 h-6 text-blue-400" />,
        title: "Full Stack Dev",
        desc: "MERN Stack Specialist",
    },
    {
        icon: <Palette className="w-6 h-6 text-pink-400" />,
        title: "UI/UX Design",
        desc: "Creating Modern Interfaces",
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
        title: "Problem Solver",
        desc: "Innovative Tech Solutions",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                            Passionate about creating digital solutions
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I am a dedicated Full Stack Developer and UI/UX Designer with a strong foundation in modern web technologies.
                            My journey in tech is driven by a curiosity to understand how things work and a desire to build tools that meaningful impact people's lives.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            With expertise in React, Node.js, and design principles, I bridge the gap between engineering and aesthetics.
                            I thrive in collaborative environments and am always eager to learn new technologies.
                        </p>
                    </motion.div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl bg-slate-800/50 border border-white/5 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="mb-3 p-3 bg-slate-900/80 rounded-lg w-fit">
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
