"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const PRODUCTS = [
  {
    id: 1,
    name: "NeoHuma Alpha",
    price: "$180.00",
    color: "from-santo-red/20 to-santo-green/5",
    accent: "text-santo-red",
  },
  {
    id: 2,
    name: "Andean Flow X",
    price: "$150.00",
    color: "from-zinc-500/20 to-zinc-800/5",
    accent: "text-zinc-300",
  },
  {
    id: 3,
    name: "Street Core V1",
    price: "$130.00",
    color: "from-zinc-700/20 to-zinc-900/5",
    accent: "text-zinc-400",
  },
  {
    id: 4,
    name: "Eclipse Runner",
    price: "$160.00",
    color: "from-santo-green/20 to-santo-red/5",
    accent: "text-santo-green",
  },
];

export default function Catalog() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="catalogo" className="relative py-32 w-full bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter text-zinc-900 dark:text-white leading-none">
              Lanzamientos
            </h2>
            <p className="text-zinc-500 mt-4 text-lg">Ediciones limitadas. Rendimiento absoluto.</p>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02] flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-santo-red dark:hover:text-santo-red transition-colors shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02] flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-santo-red dark:hover:text-santo-red transition-colors shadow-sm"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="flex-none w-[85vw] sm:w-80 snap-center md:snap-start group relative flex flex-col p-6 rounded-3xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-white/[0.04] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container (Placeholder) */}
              <div className={`relative w-full aspect-square rounded-2xl bg-gradient-to-br ${product.color} mb-6 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-white/5`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Simulated 3D Shoe Placeholder */}
                <div className="relative z-10 w-3/4 h-3/4 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:-rotate-2 group-hover:-translate-y-1">
                  {/* Placeholder content until real images are added */}
                  <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 dark:border-white/10 rounded-xl">
                    <span className={`text-xs font-bold uppercase tracking-widest ${product.accent}`}>
                      [ Modelo 3D ]
                    </span>
                  </div>
                </div>

                {/* Simulated drop shadow for the shoe */}
                <div className="absolute bottom-4 w-1/2 h-4 bg-black/40 blur-xl rounded-[100%] transition-transform duration-700 group-hover:scale-125 group-hover:opacity-60" />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white tracking-tight mb-1">
                      {product.name}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 font-medium">{product.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
