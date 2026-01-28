import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Next.js To-Do App",
        description: "A modern, persistent to-do application built with Next.js 14 and Server Actions. Features include drag-and-drop reordering, dark mode, and category management.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        image: "/project_todo_app_1769582162169.png",
        links: { demo: "#", github: "https://github.com/priyadharshini0516/nextjs-todo" }
    },
    {
        title: "Waste Identifier AI",
        description: "An AI-powered application that identifies types of waste from images to assist in proper recycling sorting. Uses TensorFlow.js for client-side classification.",
        tags: ["React", "TensorFlow.js", "Python", "Material UI"],
        image: "/project_waste_identifier_1769582285700.png",
        links: { demo: "#", github: "https://github.com/priyadharshini0516/waste-identifier" }
    },
    {
        title: "Portfolio Website 2.0",
        description: "A redesign of my personal portfolio using modern web technologies to showcase my projects and skills with better performance and aesthetics.",
        tags: ["React", "Vite", "Framer Motion", "Shadcn UI"],
        image: "/project_portfolio_site_1769582737524.png",
        links: { demo: "#", github: "https://github.com/priyadharshini0516/portfolio_priyadharshini" }
    },
    {
        title: "TrustScore",
        description: "A comprehensive trust scoring system built with TypeScript. Analyzes data points to calculate reliability scores for various entities.",
        tags: ["TypeScript", "Node.js", "Data Analysis"],
        image: "/project_trust_score_1769582370755.png",
        links: { demo: "#", github: "https://github.com/priyadharshini0516/TrustScore" }
    },
    {
        title: "Mental Health App",
        description: "An interactive web application designed to support mental well-being, featuring mood tracking and resource accessibility.",
        tags: ["JavaScript", "Web App", "Healthcare"],
        image: "/project_mental_health_1769582450726.png",
        links: { demo: "#", github: "https://github.com/priyadharshini0516/mental-health-app" }
    },
    {
        title: "Object Detection",
        description: "Real-time object detection system using Python and Computer Vision libraries. Capable of identifying multiple object classes in video streams.",
        tags: ["Python", "OpenCV", "Machine Learning"],
        image: "/project_object_detection_1769582541066.png",
        links: { demo: "#", github: "https://github.com/priyadharshini0516/object_detection" }
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group rounded-xl overflow-hidden bg-slate-900 border border-white/10 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10"
                        >
                            {/* Project Image */}
                            <div className="h-48 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.links.demo} className="p-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors" title="View Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.links.github} className="p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors" title="View Code">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
