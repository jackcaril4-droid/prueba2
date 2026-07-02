"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";

const BRANDS = [
  {
    id: "adidas",
    name: "Adidas",
    image: "/Adidas.png",
    pdfUrl: "/ADIDAS V1.0.pdf",
  },
  {
    id: "nike",
    name: "Nike",
    image: "/Nike.png",
    pdfUrl: "/NIKE V1.0.pdf",
  },
  {
    id: "skechers",
    name: "Skechers",
    image: "/Skechers.png",
    pdfUrl: "/SKECHERS V1.0.pdf",
  },
  {
    id: "new-balance",
    name: "New Balance",
    image: "/NewBalance.png",
    pdfUrl: "/NEW BALANCE V4.0.pdf",
  },
  {
    id: "new-athletic",
    name: "New Athletic",
    image: "/NewAtletic.png",
    pdfUrl: "/NEW ATHLETIC V1.0.pdf",
  },
  {
    id: "deportivos-otras-marcas",
    name: "Otras Marcas",
    image: "/OtrasMarcas.png",
    pdfUrl: "/OTRAS MARCAS V1.0.pdf",
  },
];

export default function DeportivosPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-white flex flex-col font-sans">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-28 pb-16 px-6 max-w-7xl mx-auto w-full">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
        </motion.div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center md:items-start mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-zinc-900 dark:text-white text-center md:text-left">
            Marcas Deportivas
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-center md:text-left max-w-2xl text-base md:text-lg">
            Explora los catálogos oficiales de calzado deportivo de las marcas líderes en el mercado. Haz clic en el botón de cada marca para visualizar su catálogo completo en PDF.
          </p>
          <div className="w-16 h-1 bg-black dark:bg-white mt-5"></div>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.id}
              variants={cardVariants}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 md:p-8"
            >
              {/* Background Image */}
              <Image
                src={brand.image}
                alt={`Catálogo de ${brand.name}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />

              {/* Gradient Overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 transition-all duration-300 group-hover:via-black/65" />

              {/* Decorative category label */}
              <div className="absolute top-6 left-6 z-10">
                <span className="text-[10px] tracking-widest uppercase font-bold text-white/50 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  Santo Sports
                </span>
              </div>

              {/* Content block */}
              <div className="relative z-10 flex flex-col items-center w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide uppercase mb-6 drop-shadow-md select-none group-hover:scale-105 transition-transform duration-300">
                  {brand.name}
                </h2>

                <a
                  href={brand.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 bg-transparent hover:bg-white hover:text-black hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  <FileText className="w-4.5 h-4.5" />
                  Ver más
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
