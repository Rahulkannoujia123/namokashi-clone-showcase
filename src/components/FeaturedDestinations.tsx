import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Star, Calendar } from "lucide-react";
import spiritualPattern from "@/assets/spiritual-pattern.jpg";

const FeaturedDestinations = () => {
  const destinations = [
    {
      name: "Varanasi (Kashi)",
      description: "The spiritual capital of India with ancient temples and holy ghats",
      image: "🕉️",
      highlights: ["Kashi Vishwanath Temple", "84 Ghats", "Ganga Aarti", "Ancient Culture"],
      tours: "15+ Tour Packages"
    },
    {
      name: "Prayagraj (Allahabad)",
      description: "Sacred confluence of three rivers - Ganga, Yamuna, and Saraswati",
      image: "🙏",
      highlights: ["Triveni Sangam", "Kumbh Mela", "Hanuman Temple", "Anand Bhavan"],
      tours: "8+ Tour Packages"
    },
    {
      name: "Bodhgaya",
      description: "The place of Buddha's enlightenment under the Bodhi Tree",
      image: "☸️",
      highlights: ["Mahabodhi Temple", "Bodhi Tree", "Great Buddha Statue", "Meditation Centers"],
      tours: "6+ Tour Packages"
    },
    {
      name: "Ayodhya",
      description: "Birthplace of Lord Rama with newly constructed Ram Mandir",
      image: "🏛️",
      highlights: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhavan", "Saryu River"],
      tours: "4+ Tour Packages"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${spiritualPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sacred Destinations We Cover
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the most sacred and culturally rich destinations of India with our expert guided tours
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card-custom hover:shadow-spiritual transition-smooth transform hover:scale-105 group">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
                  {destination.image}
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {destination.description}
                </p>

                <div className="space-y-2">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-3 h-3 text-primary mr-2" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-center text-primary font-semibold text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {destination.tours}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Explore Tours
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;