import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, Linkedin, Youtube } from "lucide-react";

interface LayoutProps {
    children: React.ReactNode;
    activeView: string;
    setActiveView: (view: string) => void;
}

export const Layout = ({ children, activeView, setActiveView }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-lime text-black font-sans overflow-hidden relative selection:bg-black selection:text-white">
            
            {/* Top Navigation Bar: Logo, Center Arrow Button, Say Hi */}
            <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-50 pointer-events-none">
                {/* Top Left Logo */}
                <div 
                    onClick={() => setActiveView('home')} 
                    className="font-pacifico text-3xl font-bold pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
                >
                    PD
                </div>
                
                {/* Top Center Circle Arrow Button */}
                <div className="pointer-events-auto">
                    <button 
                        onClick={() => setActiveView('home')}
                        className={`w-10 h-10 rounded-full border border-black flex items-center justify-center transition-colors ${
                            activeView !== 'home'
                            ? 'bg-black text-lime hover:bg-lime hover:text-black' 
                            : 'bg-transparent text-black hover:bg-black hover:text-lime'
                        }`}
                        title="Home"
                    >
                        <ArrowLeft size={20} />
                    </button>
                </div>

                {/* Top Right */}
                <button 
                    onClick={() => setActiveView('contact')}
                    className="font-mono text-sm pointer-events-auto cursor-pointer hover:opacity-60 transition-opacity font-bold"
                >
                    Say hi..
                </button>
            </div>

            {/* Edge Navigation - Visible on Home View */}
            <AnimatePresence>
                {activeView === "home" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 pointer-events-none z-40"
                    >
                        {/* Left Vertical Link 1: Experience */}
                        <div className="absolute top-[28%] left-8 -translate-x-1/2 -translate-y-1/2 -rotate-90 pointer-events-auto">
                            <button 
                                onClick={() => setActiveView('experience')} 
                                className="font-mono text-sm uppercase tracking-widest font-bold hover:opacity-60 transition-opacity whitespace-nowrap"
                            >
                                Experience
                            </button>
                        </div>

                        {/* Left Vertical Link 2: Projects */}
                        <div className="absolute top-[54%] left-8 -translate-x-1/2 -translate-y-1/2 -rotate-90 pointer-events-auto">
                            <button 
                                onClick={() => setActiveView('projects')} 
                                className="font-mono text-sm uppercase tracking-widest font-bold hover:opacity-60 transition-opacity whitespace-nowrap"
                            >
                                Projects
                            </button>
                        </div>

                        {/* Right Vertical Link: Feats */}
                        <div className="absolute top-1/2 right-8 translate-x-1/2 -translate-y-1/2 rotate-90 pointer-events-auto">
                            <button 
                                onClick={() => setActiveView('feats')} 
                                className="font-mono text-sm uppercase tracking-widest font-bold hover:opacity-60 transition-opacity whitespace-nowrap"
                            >
                                Feats
                            </button>
                        </div>

                        {/* Bottom Links: About & My Skills */}
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-44 font-mono text-sm uppercase tracking-widest pointer-events-auto font-bold">
                            <button onClick={() => setActiveView('about')} className="hover:opacity-60 transition-opacity">About</button>
                            <button onClick={() => setActiveView('skills')} className="hover:opacity-60 transition-opacity">My Skills</button>
                        </div>

                        {/* Bottom Left Social Icons with Solid Vertical Line */}
                        <div className="absolute bottom-0 left-8 flex flex-col items-center gap-4 pointer-events-auto">
                            <a href="https://www.linkedin.com/in/priya-dharshini-a76b12330" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Linkedin size={18} /></a>
                            <a href="https://github.com/priyadharshini0516" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Github size={18} /></a>
                            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Twitter size={18} /></a> */}
                            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Facebook size={18} /></a> */}
                            <a href="https://www.youtube.com/@Codoro-k8h" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Youtube size={18} /></a>
                            <div className="w-[1.5px] h-16 bg-black"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="w-full h-screen relative">
                {children}
            </main>
        </div>
    );
};

