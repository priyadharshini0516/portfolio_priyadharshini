import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React / Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 80 },
        ],
    },
    {
        title: "Backend Development",
        skills: [
            { name: "Node.js / Express", level: 85 },
            { name: "Python", level: 75 },
            { name: "PostgreSQL", level: 70 },
            { name: "REST APIs", level: 90 },
        ],
    },
    {
        title: "Design & Tools",
        skills: [
            { name: "Figma (UI/UX)", level: 85 },
            { name: "Git / GitHub", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Responsive Design", level: 95 },
        ],
    },
    {
        title: "Emerging Tech",
        skills: [
            { name: "OpenCV", level: 70 },
            { name: "Blockchain Basics", level: 60 },
            { name: "AI / ML Integration", level: 65 },
        ],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-background relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and proficiency levels across various domains.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/40 p-6 rounded-2xl border border-white/5"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                                {category.title}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2 text-sm">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
