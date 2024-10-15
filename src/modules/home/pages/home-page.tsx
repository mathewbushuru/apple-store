import HeroSection from "@/modules/home/components/hero-section";
import ProductCardsSection from "@/modules/home/components/product-cards-section";
import HelpSection from "@/modules/home/components/help-section";
import WhyShopWithUsSection from "@/modules/home/components/why-shop-with-us-section";
import AccessoriesSection from "@/modules/home/components/accessories-section";
import MusicSection from "@/modules/home/components/music-section";
import ServicesSection from "@/modules/home/components/services-section";
import QuickLinksSection from "@/modules/home/components/quick-links-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductCardsSection />
      <HelpSection />
      <WhyShopWithUsSection />
      <AccessoriesSection />
      <MusicSection />
      <ServicesSection />
      <QuickLinksSection />
    </main>
  );
}
