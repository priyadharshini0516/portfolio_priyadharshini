import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary scroll-smooth">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
