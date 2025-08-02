import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import AboutSection from "@/components/AboutSection";
import TourPackages from "@/components/TourPackages";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedDestinations />
      <AboutSection />
      <TourPackages />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
