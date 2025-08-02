import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Namokashi Tour</h3>
            <p className="text-primary-foreground/80">
              Experience the spiritual journey of Varanasi with our expert guides and customized tour packages.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 8081787687</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>booking@namokashi.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Home
              </a>
              <a href="#tours" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Tour Packages
              </a>
              <a href="#services" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Services
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                About Us
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* Tour Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Tours</h4>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Kashi Darshan
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Ganga Aarti
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Heritage Tours
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Dev Diwali Special
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Pilgrimage Tours
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1" />
                <div className="text-sm">
                  <div className="font-medium">Office Hours</div>
                  <div className="text-primary-foreground/80">24/7 Available</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1" />
                <div className="text-sm">
                  <div className="font-medium">Emergency Contact</div>
                  <div className="text-primary-foreground/80">+91 8081787687</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Namokashi Tour. All rights reserved. | Experience the Divine Journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;