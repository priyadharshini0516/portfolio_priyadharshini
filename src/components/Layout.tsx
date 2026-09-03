import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, Linkedin, Youtube, Mail } from "lucide-react";

interface LayoutProps {
    children: React.ReactNode;
    activeView: string;
    setActiveView: (view: string) => void;
}

export const Layout = ({ children, activeView, setActiveView }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-lime text-black font-sans overflow-hidden relative selection:bg-black selection:text-white">
            
            {/* Edge Navigation - Only visible on Home */}
            <AnimatePresence>
                {activeView === "home" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 pointer-events-none z-50"
                    >
                        {/* Top Left Logo */}
                        <div className="absolute top-8 left-8 font-pacifico text-3xl font-bold pointer-events-auto cursor-pointer">
                            PD
                        </div>
                        
                        {/* Top Right */}
                        <button 
                            onClick={() => setActiveView('contact')}
                            className="absolute top-8 right-8 font-mono text-sm pointer-events-auto cursor-pointer hover:opacity-60 transition-opacity font-bold"
                        >
                            Say hi..
                        </button>

                        {/* Left Vertical Links */}
                        <div className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 flex gap-12 font-mono text-sm uppercase tracking-widest pointer-events-auto font-bold">
                            <button onClick={() => setActiveView('projects')} className="hover:opacity-60 transition-opacity">Projects</button>
                            <button onClick={() => setActiveView('experience')} className="hover:opacity-60 transition-opacity">Experience</button>
                        </div>

                        {/* Right Vertical Link */}
                        <div className="absolute top-1/2 -right-6 -translate-y-1/2 rotate-90 font-mono text-sm uppercase tracking-widest pointer-events-auto font-bold">
                            <button onClick={() => setActiveView('feats')} className="hover:opacity-60 transition-opacity">Feats</button>
                        </div>

                        {/* Bottom Links */}
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-32 font-mono text-sm uppercase tracking-widest pointer-events-auto font-bold">
                            <button onClick={() => setActiveView('about')} className="hover:opacity-60 transition-opacity">About</button>
                            <button onClick={() => setActiveView('skills')} className="hover:opacity-60 transition-opacity">My Skills</button>
                        </div>

                        {/* Bottom Left Socials */}
                        <div className="absolute bottom-8 left-8 flex flex-col gap-4 pointer-events-auto">
                            <a href="https://www.linkedin.com/in/priya-dharshini-a76b12330" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                            <a href="https://github.com/priyadharshini0516" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Github size={20} /></a>
                            <a href="https://www.youtube.com/@Codoro-k8h" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Youtube size={20} /></a>
                            <a href="mailto:priyadharshini2006cse@gmail.com" className="hover:scale-110 transition-transform"><Mail size={20} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Back Button for other views */}
            <AnimatePresence>
                {activeView !== "home" && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
                    >
                        <button 
                            onClick={() => setActiveView('home')}
                            className={`p-2 rounded-full border transition-colors ${
                                activeView === 'projects' || activeView === 'about'
                                ? 'border-lime text-lime hover:bg-lime hover:text-charcoal' 
                                : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-lime'
                            }`}
                        >
                            <ArrowLeft size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="w-full h-screen relative">
                {children}
            </main>
        </div>
    );
};
