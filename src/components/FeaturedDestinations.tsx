import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";
import spiritualPattern from "@/assets/spiritual-pattern.jpg";

// Importing the images
import varanasiGhatsImage from "@/assets/varanasi-ghats.jpg";
import prayagrajImage from "@/assets/prayagraj-tour.jpg";
import sarnathImage from "@/assets/sarnath.jpg";
import ramMandirImage from "@/assets/ram-mandir.jpg"; // New Ram Mandir image

const FeaturedDestinations = () => {
  const destinations = [
    {
      name: "Varanasi (Kashi)",
      description: "The spiritual capital of India with ancient temples and holy ghats.",
      image: varanasiGhatsImage,
      highlights: ["Kashi Vishwanath", "84 Ghats", "Ganga Aarti", "Ancient Culture"],
      tours: "15+ Tour Packages"
    },
    {
      name: "Prayagraj (Allahabad)",
      description: "Sacred confluence of three rivers - Ganga, Yamuna, and Saraswati.",
      image: prayagrajImage,
      highlights: ["Triveni Sangam", "Kumbh Mela", "Hanuman Temple", "Anand Bhavan"],
      tours: "8+ Tour Packages"
    },
    {
      name: "Bodhgaya",
      description: "The place of Buddha's enlightenment under the Bodhi Tree.",
      image: sarnathImage,
      highlights: ["Mahabodhi Temple", "Bodhi Tree", "Great Buddha Statue", "Meditation Centers"],
      tours: "6+ Tour Packages"
    },
    {
      name: "Ayodhya",
      description: "Birthplace of Lord Rama with the magnificent Ram Mandir.",
      image: ramMandirImage, // <-- Image updated to Ram Mandir as requested
      highlights: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhavan", "Saryu River"],
      tours: "4+ Tour Packages"
    }
  ];

  return (
    <section className="py-20 bg-background/50 relative overflow-hidden">
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
            Explore the most sacred and culturally rich destinations of India with our expert guided tours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card shadow-card-custom hover:shadow-spiritual transition-smooth transform hover:-translate-y-2 group">
              {/* Image Container */}
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col h-[calc(100%-10rem)]"> {/* 10rem is h-40 */}
                <h3 className="text-xl font-bold text-foreground">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {destination.description}
                </p>

                <div className="space-y-2 mt-4 flex-grow">
                  {destination.highlights.slice(0, 2).map((highlight, idx) => ( // Show first 2 highlights
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-3.5 h-3.5 text-primary mr-2 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border mt-4 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary font-semibold text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {destination.tours}
                    </div>
                    <Button variant="outline" size="sm">
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
