import Navbar from "@/components/Navbar";
import AdCarousel from "@/components/AdCarousel";
import CategorySection from "@/components/CategorySection";
import CatalogosSection from "@/components/CatalogosSection";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const deportivosImages = [
  "/Deportivo11.webp",
  "/Deportivo2.webp",
  "/Deportivo33.webp",
  "/Deportivo4.webp"
];

const basketballImages = [
  "/Basket1.webp",
  "/Basket2.webp",
  "/Basket3.webp",
  "/Basket4.webp"
];

const futbolImages = [
  "/Futbol1.1.webp",
  "/Futbol2.1.webp",
  "/Futbol3.1.webp",
  "/Futbol4.1.webp"
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
