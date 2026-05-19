"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const CATALOGOS = [
  {
    id: 1,
    name: "Accesorios",
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Camisetas deportivas",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mochilas",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Balones",
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function CatalogosSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section id="catalogos" className="py-10 md:py-16 px-4 max-w-7xl mx-auto w-full overflow-hidden">
      <motion.div 
        className="flex flex-col items-center justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-zinc-900 dark:text-white">
          Catálogos
        </h2>
        <div className="w-16 h-1 bg-black dark:bg-white mt-4"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {CATALOGOS.map((item) => (
          <motion.div 
            key={item.id}
            variants={itemVariants}
            className="group relative aspect-[3/4] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            
            {/* Dark Gradient Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-colors duration-200 group-hover:from-black/90" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-center z-10">
              <h3 className="text-2xl font-bold text-white mb-4 transform transition-transform duration-200 group-hover:-translate-y-2">
                {item.name}
              </h3>
              
              {/* Button */}
              <button className="px-6 py-2 rounded-full border border-white text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white hover:text-black">
                Ver más
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
