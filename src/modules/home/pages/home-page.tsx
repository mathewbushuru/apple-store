import HeroSection from "../components/hero-section";
import ProductCardsSection from "../components/product-cards-section";
import HelpSection from "../components/help-section";
import WhyShopWithUsSection from "../components/why-shop-with-us-section";
import AccessoriesSection from "../components/accessories-section";
import MusicSection from "../components/music-section";
import ServicesSection from "../components/services-section";
import QuickLinksSection from "../components/quick-links-section";

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
