"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface CategorySectionProps {
  title: string;
  images: string[];
  id?: string;
}

export default function CategorySection({ title, images, id }: CategorySectionProps) {
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
    <section id={id} className="py-10 md:py-16 px-4 max-w-7xl mx-auto w-full overflow-hidden">
      <motion.div 
        className="flex flex-col items-center justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-zinc-900 dark:text-white">
          {title}
        </h2>
        <div className="w-16 h-1 bg-black dark:bg-white mt-4"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8"
      >
        {images.map((src, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
          >
            <Image
              src={src}
              alt={`${title} producto ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 md:group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Overlay sutil al hacer hover */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 md:group-hover:bg-black/20" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
      >
        <Link 
          href={`/catalogo/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="px-8 py-3 rounded-full border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Ver más
        </Link>
      </motion.div>
    </section>
  );
}
