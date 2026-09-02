import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-background py-8 border-t border-border/50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Priya Dharshini. All rights reserved.
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Made with</span>
                    <Heart size={16} className="text-secondary fill-secondary" />
                    <span>using React & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};
