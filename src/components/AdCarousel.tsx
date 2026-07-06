"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/Poster3.png",
    mobileSrc: "/PosterCelular1.4.png",
    alt: "Nueva Colección Streetwear",
  },
  {
    id: 2,
    src: "/Poster11.png",
    alt: "Estilo Urbano Femenino",
    title: "Reebok Classic",
    subtitle: "Estilo que nunca pasa de moda",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop",
    alt: "Tienda Exclusiva",
    title: "EXCLUSIVIDAD",
    subtitle: "Ediciones limitadas solo para ti",
  },
];

export default function AdCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);


  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >

          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            priority
            className={`object-cover ${images[currentIndex].mobileSrc ? 'hidden md:block' : ''}`}
          />
          {images[currentIndex].mobileSrc && (
            <Image
              src={images[currentIndex].mobileSrc}
              alt={images[currentIndex].alt}
              fill
              priority
              className="object-cover block md:hidden"
            />
          )}
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-4"
            >
              {images[currentIndex].title}
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-zinc-200"
            >
              {images[currentIndex].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
