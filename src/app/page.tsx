import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LimitedEdition from "@/components/LimitedEdition";
import Catalog from "@/components/Catalog";
import Drop from "@/components/Drop";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-white selection:bg-santo-red/30 font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Drop />
      <Catalog />
      <LimitedEdition />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
