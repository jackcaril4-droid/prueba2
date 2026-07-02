import Navbar from "@/components/Navbar";
import AdCarousel from "@/components/AdCarousel";
import CategorySection from "@/components/CategorySection";
import CatalogosSection from "@/components/CatalogosSection";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const deportivosImages = [
  "/Deportivo11.png",
  "/Deportivo2.png",
  "/Deportivo33.png",
  "/Deportivo4.png"
];

const basketballImages = [
  "/Basket1.png",
  "/Basket2.png",
  "/Basket3.png",
  "/Basket4.png"
];

const futbolImages = [
  "/Futbol1.1.png",
  "/Futbol2.1.png",
  "/Futbol3.1.png",
  "/Futbol4.1.png"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-white selection:bg-santo-red/30 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <AdCarousel />
      <CategorySection id="deportivos" title="Deportivos" images={deportivosImages} />
      <CategorySection id="basketball" title="Basketball" images={basketballImages} />
      <CategorySection id="futbol" title="Fútbol" images={futbolImages} />
      <CatalogosSection />
      <About />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
