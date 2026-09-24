import { motion } from "framer-motion";

interface HomeViewProps {
    setActiveView: (view: string) => void;
}

export const HomeView = ({ setActiveView }: HomeViewProps) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col items-center justify-center relative"
        >
            <div className="relative cursor-pointer group flex flex-col items-center" onClick={() => setActiveView('about')}>
                <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-56 md:h-56 animate-[spin_16s_linear_infinite] group-hover:scale-105 transition-transform duration-500">
                    <circle cx="50" cy="50" r="48" className="stroke-charcoal fill-transparent" strokeWidth="2" />
                    <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2 Z" className="fill-charcoal" />
                    <circle cx="50" cy="26" r="7" className="fill-lime" />
                    <circle cx="50" cy="74" r="7" className="fill-charcoal" />
                </svg>
                <span className="mt-4 font-mono text-sm tracking-widest lowercase hover:underline select-none">
                    click here
                </span>
            </div>
        </motion.div>
    );
};

