import { Card } from "@/components/ui/card";
import { MapPin, Car, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      number: "3459+",
      label: "Itineraries"
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      number: "249+",
      label: "Private Tours"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "500K+",
      label: "Happy Travelers"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      number: "15+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Experience the Magic of Varanasi with Namokashi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Discover the ancient city of Varanasi, where spirituality and history intertwine, 
                  creating a mesmerizing experience for every traveler. At Namokashi, we offer 
                  curated tours that take you on a journey through the timeless alleys, sacred 
                  temples, and vibrant ghats of Kashi.
                </p>
                <p>
                  We have taken forward the ageless tradition of India "Atithi Devo Bhava" which 
                  means Guests are like God, with this thought we have successfully provided 
                  unforgettable spiritual experiences to thousands of pilgrims and travelers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Choose Namokashi Tour?
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card shadow-card-custom hover:shadow-spiritual transition-smooth">
                  <div className="flex flex-col items-center space-y-3">
                    {stat.icon}
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;