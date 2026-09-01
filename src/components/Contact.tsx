import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Removed Background Gradients for vintage theme */}

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
                        <p className="text-xl text-muted-foreground mb-8">
                            I'm always open to discussing product design work or partnership opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-card border border-border rounded-sm flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email Me</p>
                                    <a href="mailto:priyadharshini2006cse@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                                        priyadharshini2006cse@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect with me</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/priyadharshini0516" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-card border border-border rounded-sm flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/priya-dharshini-s0516" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-card border border-border rounded-sm flex items-center justify-center hover:border-primary hover:text-primary transition-all">
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
                        className="bg-card p-8 rounded-sm border-2 border-border shadow-xl"
                    >
                        <form action="mailto:priyadharshini.dev@example.com" method="POST" encType="text/plain" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-foreground">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-background border-2 border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-all" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-foreground">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-background border-2 border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-all" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-foreground">Subject</label>
                                <input type="text" id="subject" name="subject" className="w-full bg-background border-2 border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-all" placeholder="Project Inquiry" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
                                <textarea id="message" name="message" rows={4} className="w-full bg-background border-2 border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-all resize-none" placeholder="Tell me about your project..." required></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest uppercase py-4 rounded-sm flex items-center justify-center gap-2 transition-all">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
