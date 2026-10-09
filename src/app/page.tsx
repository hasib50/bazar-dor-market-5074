import Hero from "@/components/home/Hero";
import PriceSection from "@/components/home/PriceSection";
import PriceTicker from "@/components/layout/PriceTicker";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <PriceTicker />
      <Hero />
      <PriceSection />
      <Footer />
    </main>
  );
}