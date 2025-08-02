import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/varanasi-hero.jpg";

const HeroSection = () => {
  const tours = [
    { name: "Varanasi Tour", image: "🕉️" },
    { name: "Prayagraj Tour", image: "🙏" },
    { name: "Bodhgaya Tour", image: "☸️" },
    { name: "Ayodhya Tour", image: "🏛️" },
    { name: "Chitrakoot Tour", image: "⛰️" },
    { name: "Kumbh Mela", image: "🎆" },
  ];

  const services = [
    "Kashi Darshan / Boat Ride",
    "Hinduism Pilgrimage Tour", 
    "Heritage & Culture Tour",
    "Dev Diwali Tour",
    "Taxi Rentals",
    "Special Boat Ride Dev Diwali"
  ];

  return (
    <section className="relative min-h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Namokashi Tour
            </h1>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-primary-glow">›</span>
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Enquiry Now
            </Button>
          </div>

          {/* Right Content - Tour Grid */}
          <div className="grid grid-cols-2 gap-4">
            {tours.map((tour, index) => (
              <Card key={index} className="bg-card/95 backdrop-blur-sm p-6 hover:shadow-glow transition-smooth transform hover:scale-105 cursor-pointer">
                <div className="text-center space-y-3">
                  <div className="text-4xl">{tour.image}</div>
                  <h3 className="font-semibold text-foreground">{tour.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Floating indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
      </div>
    </section>
  );
};

export default HeroSection;