
import CTASection from "@/components/home/CTASection";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import BeachHero from "@/components/home/Homehero";
import PopularDestinationsSlider from "@/components/home/PopularDestinationsSlider";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TravelGallery from "@/components/home/TravelGallery";
import WhyTravelWithUs from "@/components/home/WhyTravelWithUs";


export default function Home() {
  return (
    <>
    <BeachHero />
    <PopularDestinationsSlider />
    <WhyTravelWithUs />
    <FeaturedPackages />
    <TestimonialsSection />
    <TravelGallery />
    <CTASection />
   
    </>
  );
}
