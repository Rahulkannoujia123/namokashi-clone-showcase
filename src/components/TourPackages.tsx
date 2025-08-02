import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";
import templeImage from "@/assets/temple-tour.jpg";
import gangaAartiImage from "@/assets/ganga-aarti.jpg";
import boatRideImage from "@/assets/boat-ride.jpg";

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Kashi Tour 01 Nights/ 02 Days",
      image: templeImage,
      duration: "2 Days 1 Night",
      location: "Varanasi",
      price: "₹4,999",
      rating: 4.8,
      features: ["Temple Darshan", "Ganga Aarti", "Boat Ride", "Local Guide"],
      description: "Experience the spiritual essence of Varanasi with temple visits and Ganga Aarti."
    },
    {
      id: 2,
      title: "Ganga Aarti / Boat Ride Special",
      image: gangaAartiImage,
      duration: "1 Day",
      location: "Dashashwamedh Ghat",
      price: "₹1,999",
      rating: 4.9,
      features: ["Evening Aarti", "Boat Ride", "Photography", "Refreshments"],
      description: "Witness the magnificent Ganga Aarti ceremony with a peaceful boat ride."
    },
    {
      id: 3,
      title: "Kashi Tour 03 Nights/ 04 Days",
      image: boatRideImage,
      duration: "4 Days 3 Nights",
      location: "Varanasi & Nearby",
      price: "₹12,999",
      rating: 4.7,
      features: ["All Temples", "Cultural Shows", "Heritage Walk", "Traditional Food"],
      description: "Complete spiritual journey covering all major temples and cultural experiences."
    }
  ];

  const ritualPackages = [
    {
      title: "Rudrabhishek In Kashivishwanath Temple",
      description: "Special worship ceremony at the sacred Kashi Vishwanath Temple",
      price: "₹2,500"
    },
    {
      title: "Pind Daan Packages",
      description: "Traditional ritual for ancestors in Varanasi, Bodhgaya, Allahabad",
      price: "₹5,000"
    },
    {
      title: "Special Shradh Pooja",
      description: "Complete Shradh ceremony with experienced Pandits",
      price: "₹3,500"
    },
    {
      title: "Dev Diwali Special",
      description: "Experience the grand Dev Diwali celebration with special arrangements",
      price: "₹8,999"
    }
  ];

  return (
    <section id="tours" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Tour Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Customized Tour Packages
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore the spiritual heart of India with our carefully crafted tour packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden shadow-card-custom hover:shadow-spiritual transition-smooth transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.price}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm text-muted-foreground">{pkg.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {pkg.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{pkg.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pkg.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="spiritual" className="w-full">
                    Book Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Rituals & Pooja Packages */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Rituals & Pooja Related Tours
            </h2>
            <p className="text-muted-foreground text-lg">
              Sacred ceremonies and spiritual rituals with experienced Pandits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ritualPackages.map((ritual, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card-custom hover:shadow-spiritual transition-smooth">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {ritual.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {ritual.description}
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      {ritual.price}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;