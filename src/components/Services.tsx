import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Database, BlocksIcon } from "lucide-react";

const services = [
    {
        icon: <Code className="w-10 h-10 text-purple-400" />,
        title: "Full Stack Development",
        description: "Building robust, scalable applications from front-end to back-end using modern technologies.",
        features: ["React / Next.js", "Node.js Architecture", "API Development", "Database Optimization"]
    },
    {
        icon: <Layout className="w-10 h-10 text-blue-400" />,
        title: "UI/UX Design",
        description: "Creating intuitive and visually stunning user interfaces that enhance user experience.",
        features: ["Wireframing & Prototyping", "Design Systems", "User Research", "Interactive Animations"]
    },
    {
        icon: <Smartphone className="w-10 h-10 text-pink-400" />,
        title: "Blockchain Development",
        description: "Developing blockchain applications that provide seamless blockchain experiences.",
        features: ["Smart Contracts", "Solidity", "NFTs"]
    },
    {
        icon: <Database className="w-10 h-10 text-green-400" />,
        title: "Database Design",
        description: "Designing efficient database schemas and ensuring data integrity and performance.",
        features: ["SQL & NoSQL", "Data Modeling", "Optimization", "Migration"]
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Services & Expertise</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:bg-slate-800/50"
                        >
                            <div className="mb-6 bg-slate-900/50 w-fit p-4 rounded-xl shadow-inner">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
