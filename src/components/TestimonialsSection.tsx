import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, User } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Amazing spiritual journey! The Ganga Aarti experience was truly divine. The guides were knowledgeable and the arrangements were perfect.",
      tour: "Varanasi 3D/2N Package"
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Namokashi Tour made our Prayagraj visit unforgettable. The Sangam darshan was beautifully organized. Highly recommend their services!",
      tour: "Prayagraj Sangam Tour"
    },
    {
      name: "Amit Singh",
      location: "Jaipur",
      rating: 5,
      text: "Excellent service and hospitality. The Kashi Vishwanath darshan was smooth and the accommodation was comfortable. Will book again!",
      tour: "Kashi Heritage Tour"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "The Kumbh Mela experience was once in a lifetime! Well organized, safe, and spiritually enriching. Thank you Namokashi Tour!",
      tour: "Kumbh Mela Special"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Pilgrims Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from thousands of satisfied travelers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card shadow-card-custom hover:shadow-spiritual transition-smooth transform hover:scale-105">
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="text-primary">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Tour Info */}
                <div className="text-xs text-primary font-medium">
                  {testimonial.tour}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;