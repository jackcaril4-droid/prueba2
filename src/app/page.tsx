import Navbar from "@/components/Navbar";
import AdCarousel from "@/components/AdCarousel";
import CategorySection from "@/components/CategorySection";
import CatalogosSection from "@/components/CatalogosSection";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const deportivosImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop"
];

const basketballImages = [
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000&auto=format&fit=crop"
];

const futbolImages = [
  "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop"
  
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
