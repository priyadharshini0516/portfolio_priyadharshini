import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Priya Dharshini. All rights reserved.
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Made with</span>
                    <Heart size={16} className="text-red-500 fill-red-500" />
                    <span>using React & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};
