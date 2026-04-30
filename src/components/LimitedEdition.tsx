"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const EDITIONS = [
  {
    id: 1,
    name: "Apex Huma",
    description: "Para los que dominan la altura.",
    color: "from-santo-red/10 to-transparent",
    accent: "text-santo-red/70",
  },
  {
    id: 2,
    name: "Crimson Core",
    description: "El rojo de la pasión y la fuerza.",
    color: "from-santo-red/5 to-transparent",
    accent: "text-santo-red/60",
  },
  {
    id: 3,
    name: "Verde Profundo",
    description: "La energía inagotable de nuestra tierra.",
    color: "from-santo-green/10 to-transparent",
    accent: "text-santo-green/80",
  },
  {
    id: 4,
    name: "Shadow Runner",
    description: "Sigilo y rendimiento absoluto.",
    color: "from-zinc-500/10 to-transparent",
    accent: "text-zinc-400",
  },
];

export default function LimitedEdition() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="edicion-limitada" className="relative py-32 w-full bg-white dark:bg-[#050505] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] bg-santo-red/5 blur-[120px] rounded-full opacity-50 dark:opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 bg-santo-red/5 text-santo-red/80 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-santo-red/10"
          >
            <Sparkles className="w-4 h-4" />
            Colección Privada
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]"
          >
            Nuestro <span className="text-zinc-500 dark:text-zinc-600">Catálogo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 mt-6 text-lg md:text-xl max-w-2xl"
          >
            Encontrarás una selección exclusiva de calzado deportivo que combina lo último en tecnología, diseño y comodidad.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {EDITIONS.map((edition) => (
            <motion.a
              href="#catalogo"
              key={edition.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative flex flex-col h-full p-8 rounded-3xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 overflow-hidden transition-colors"
            >
              {/* Shimmer Effect */}
              <motion.div
                variants={{
                  hover: { left: "100%" },
                }}
                initial={{ left: "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent z-20 skew-x-12"
              />

              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edition.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Card Content Wrapper to be scaled */}
              <motion.div
                variants={{
                  hover: { scale: 1.05, rotate: 1 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 flex flex-col flex-grow"
              >
                <div className="mb-8 w-16 h-16 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                  <span className={`font-black text-xl ${edition.accent}`}>0{edition.id}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight group-hover:text-santo-red dark:group-hover:text-white transition-colors duration-300">
                  {edition.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-8 flex-grow">
                  {edition.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  Explorar línea
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
