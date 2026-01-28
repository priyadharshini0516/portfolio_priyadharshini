import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together!</h2>
                        <p className="text-xl text-gray-400 mb-8">
                            I'm always open to discussing product design work or partnership opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Me</p>
                                    <a href="mailto:priyadharshini.dev@example.com" className="text-lg font-semibold hover:text-primary transition-colors">
                                        priyadharshini.dev@example.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/priyadharshini0516" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/priya-dharshini-s0516" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-8 rounded-2xl border border-white/10 shadow-xl"
                    >
                        <form action="mailto:priyadharshini.dev@example.com" method="POST" encType="text/plain" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-slate-800 border border-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-slate-800 border border-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                                <input type="text" id="subject" name="subject" className="w-full bg-slate-800 border border-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Project Inquiry" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                <textarea id="message" name="message" rows={4} className="w-full bg-slate-800 border border-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell me about your project..." required></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
