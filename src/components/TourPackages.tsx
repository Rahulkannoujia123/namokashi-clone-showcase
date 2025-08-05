import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";
import templeImage from "@/assets/temple-tour.jpg";
import gangaAartiImage from "@/assets/ganga-aarti.jpg";
import boatRideImage from "@/assets/boat-ride.jpg";
import prayagrajImage from "@/assets/prayagraj-tour.jpg";
import kumbhMelaImage from "@/assets/kumbh-mela.jpg";
import varanasiGhatsImage from "@/assets/varanasi-ghats.jpg";

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Varanasi Spiritual Tour 2D/1N",
      image: varanasiGhatsImage,
      duration: "2 Days 1 Night",
      location: "Varanasi",
      price: "₹4,999",
      rating: 4.8,
      features: ["Kashi Vishwanath", "Ganga Aarti", "Boat Ride", "Local Guide"],
      description: "Experience the spiritual essence of Varanasi with temple visits and Ganga Aarti ceremony."
    },
    {
      id: 2,
      title: "Prayagraj Sangam Tour 3D/2N",
      image: prayagrajImage,
      duration: "3 Days 2 Nights",
      location: "Prayagraj (Allahabad)",
      price: "₹7,999",
      rating: 4.9,
      features: ["Triveni Sangam", "Hanuman Temple", "Anand Bhavan", "Local Culture"],
      description: "Witness the sacred confluence of three rivers and explore the cultural heritage of Prayagraj."
    },
    {
      id: 3,
      title: "Ganga Aarti Special Experience",
      image: gangaAartiImage,
      duration: "1 Day",
      location: "Dashashwamedh Ghat",
      price: "₹1,999",
      rating: 4.9,
      features: ["Evening Aarti", "Boat Ride", "Photography", "Refreshments"],
      description: "Witness the magnificent Ganga Aarti ceremony with a peaceful boat ride on the holy river."
    },
    {
      id: 4,
      title: "Varanasi Heritage Walk 4D/3N",
      image: varanasiGhatsImage,
      duration: "4 Days 3 Nights",
      location: "Varanasi & Nearby",
      price: "₹12,999",
      rating: 4.7,
      features: ["All Major Ghats", "Cultural Shows", "Heritage Walk", "Traditional Food"],
      description: "Complete spiritual journey covering all major temples, ghats and cultural experiences."
    },
    {
      id: 5,
      title: "Kumbh Mela Special Package",
      image: kumbhMelaImage,
      duration: "5 Days 4 Nights",
      location: "Prayagraj",
      price: "₹18,999",
      rating: 4.8,
      features: ["Kumbh Darshan", "VIP Access", "Guided Tours", "Accommodation"],
      description: "Experience the world's largest spiritual gathering with exclusive arrangements and comfort."
    },
    {
      id: 6,
      title: "Sunrise Boat Ride Experience",
      image: boatRideImage,
      duration: "Half Day",
      location: "Varanasi Ghats",
      price: "₹1,299",
      rating: 4.6,
      features: ["Sunrise Views", "Photography", "Tea Service", "Multiple Ghats"],
      description: "Peaceful morning boat ride witnessing the sunrise over the sacred Ganges river."
    }
  ];
  
  // Added images to the ritual packages
  const ritualPackages = [
    {
      title: "Rudrabhishek In Kashivishwanath Temple",
      description: "Special worship ceremony at the sacred Kashi Vishwanath Temple.",
      price: "₹2,500",
      image: templeImage
    },
    {
      title: "Pind Daan Packages",
      description: "Traditional ritual for ancestors in Varanasi, Bodhgaya, or Allahabad.",
      price: "₹5,000",
      image: varanasiGhatsImage
    },
    {
      title: "Special Shradh Pooja",
      description: "Complete Shradh ceremony performed by experienced Pandits at the holy ghats.",
      price: "₹3,500",
      image: boatRideImage
    },
    {
      title: "Dev Diwali Special",
      description: "Experience the grand Dev Diwali celebration with special viewing arrangements.",
      price: "₹8,999",
      image: gangaAartiImage
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
              <Card key={pkg.id} className="overflow-hidden shadow-card-custom hover:shadow-spiritual transition-smooth transform hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {pkg.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-smooth"></div>
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
        
        {/* Rituals & Pooja Packages - Updated with Images */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Rituals & Pooja Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Sacred ceremonies and spiritual rituals with experienced Pandits
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ritualPackages.map((ritual, index) => (
              <Card key={index} className="flex flex-col md:flex-row overflow-hidden shadow-card-custom hover:shadow-spiritual transition-smooth transform hover:scale-105 group">
                <div className="md:w-1/3 relative overflow-hidden">
                  <img
                    src={ritual.image}
                    alt={ritual.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow md:w-2/3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {ritual.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {ritual.description}
                    </p>
                  </div>
                  <div className="mt-auto flex justify-between items-center pt-4">
                    <span className="text-2xl font-bold text-primary">
                      {ritual.price}
                    </span>
                    <Button variant="spiritual" className="shrink-0">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            View All Packages & Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
