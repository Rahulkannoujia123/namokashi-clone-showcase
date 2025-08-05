import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>booking@namokashi.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9336514563</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card shadow-card-custom">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Namokashi
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-smooth">
                HOME
              </a>
              <a href="#tours" className="text-foreground hover:text-primary transition-smooth">
                TOUR PACKAGES
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-smooth">
                SERVICES
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth">
                ABOUT US
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
                CONTACT US
              </a>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Button variant="spiritual">
                Enquiry Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-foreground hover:text-primary transition-smooth">
                  HOME
                </a>
                <a href="#tours" className="text-foreground hover:text-primary transition-smooth">
                  TOUR PACKAGES
                </a>
                <a href="#services" className="text-foreground hover:text-primary transition-smooth">
                  SERVICES
                </a>
                <a href="#about" className="text-foreground hover:text-primary transition-smooth">
                  ABOUT US
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
                  CONTACT US
                </a>
                <Button variant="spiritual" className="w-fit">
                  Enquiry Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
