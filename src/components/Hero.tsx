"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -left-[20%] w-[50%] h-[50%] rounded-full bg-santo-red/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-[10%] w-[40%] h-[40%] rounded-full bg-santo-green/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 pt-20">
        
        {/* Left Column: Copy */}
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-white/5 text-xs font-semibold tracking-widest text-santo-green uppercase mb-4">
              Fuerza Colorada
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.9] text-zinc-900 dark:text-white text-balance">
              Supera tus<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-santo-red to-santo-green">
                Límites
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            Llevamos a Santo Domingo en nuestro ADN. Conocemos tus pasos y por eso te entregamos el equilibrio perfecto. Una empresa de nuestra tierra, diseñada para que superes cualquier desafío.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <a href="#lanzamientos" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center">
              Ver Lanzamientos
            </a>
            <a href="#nosotros" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-white/20 dark:text-white font-medium rounded-full dark:hover:bg-white/5 active:scale-[0.98] transition-all duration-300 text-center">
              Nuestra Historia
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual Anchor */}
        <div className="relative flex items-center justify-center h-[50vh] lg:h-[80vh]">
          {/* Subtle glowing ring behind product */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
             <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full border border-zinc-200 bg-gradient-to-br from-zinc-100 to-transparent dark:border-white/5 dark:from-white/[0.03] backdrop-blur-3xl shadow-[0_0_80px_-20px_rgba(211,47,47,0.15)]" />
          </motion.div>

          {/* Levitating Product Placeholder */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[280px] sm:max-w-sm aspect-square flex flex-col items-center justify-center group"
          >
            <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-3xl border border-zinc-300 dark:border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2">
              <div className="text-center p-6 space-y-4">
                 <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-santo-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                 </div>
                 <p className="text-zinc-600 dark:text-zinc-400 font-medium text-sm tracking-wide">
                   [ Espacio para Zapato Deportivo 3D / PNG ]
                 </p>
                 <p className="text-xs text-zinc-600">Animación de levitación activa</p>
              </div>
            </div>
            {/* Dynamic shadow that reacts to levitation */}
            <motion.div 
              animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-12 w-3/4 h-8 bg-black blur-xl rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
