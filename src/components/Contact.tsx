import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full min-h-screen bg-lime text-charcoal relative flex flex-col items-center justify-center overflow-hidden p-8"
        >
            {/* Giant Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-charcoal/5 select-none pointer-events-none whitespace-nowrap z-0 tracking-widest">
                CONTACT
            </div>

            <div className="relative z-10 w-full max-w-4xl bg-white/50 backdrop-blur-sm border-2 border-charcoal p-8 md:p-12 shadow-[12px_12px_0px_0px_#4A3525]">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4">Let's Work Together</h2>
                    <p className="font-mono text-sm text-charcoal/70">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Info */}
                    <div className="flex flex-col justify-center space-y-8 font-mono text-sm">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-charcoal text-lime flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">Email Me</h3>
                                <a href="mailto:priyadharshini2006cse@gmail.com" className="hover:underline font-bold">priyadharshini2006cse@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-charcoal text-lime flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">Connect</h3>
                                <a href="https://www.linkedin.com/in/priya-dharshini-a76b12330" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">LinkedIn Profile</a>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-charcoal text-lime flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                                <Github size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">Code</h3>
                                <a href="https://github.com/priyadharshini0516" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">GitHub Portfolio</a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form action="https://formsubmit.co/priyadharshini2006cse@gmail.com" method="POST" className="space-y-6 font-mono text-sm">
                        {/* Disable Captcha for a smoother experience */}
                        <input type="hidden" name="_captcha" value="false" />
                        {/* Set email subject */}
                        <input type="hidden" name="_subject" value="New message from your Portfolio!" />
                        {/* Auto-reply to the user */}
                        <input type="hidden" name="_replyto" value="%email%" />
                        
                        <div className="space-y-2">
                            <label htmlFor="name" className="font-bold uppercase tracking-widest text-xs">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-transparent border-b-2 border-charcoal/30 focus:border-charcoal py-2 outline-none transition-colors" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="font-bold uppercase tracking-widest text-xs">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-transparent border-b-2 border-charcoal/30 focus:border-charcoal py-2 outline-none transition-colors" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="font-bold uppercase tracking-widest text-xs">Message</label>
                            <textarea id="message" name="message" rows={4} className="w-full bg-transparent border-2 border-charcoal/30 focus:border-charcoal p-4 outline-none transition-colors resize-none mt-2" placeholder="Tell me about your project..." required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-charcoal text-lime font-bold tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};
