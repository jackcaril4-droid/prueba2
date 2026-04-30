"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const WHATSAPP_NUMBER = "593963768074";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Santo Sports! Vengo desde la página web y quiero asegurar mi par de edición limitada ahora mismo. 👟🔥"
);

export default function Drop() {
  return (
    <section id="lanzamientos" className="relative w-full overflow-hidden bg-santo-red border-y border-santo-red/50">
      {/* Marquee Background */}
      <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex font-black text-[12vw] uppercase tracking-tighter text-black"
        >
          <span>SNEAKER DROP OUT NOW - LIMITED EDITION - DON&apos;T SLEEP ON THIS - SNEAKER DROP OUT NOW - LIMITED EDITION - DON&apos;T SLEEP ON THIS -&nbsp;</span>
          <span>SNEAKER DROP OUT NOW - LIMITED EDITION - DON&apos;T SLEEP ON THIS - SNEAKER DROP OUT NOW - LIMITED EDITION - DON&apos;T SLEEP ON THIS -&nbsp;</span>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Visual Anchor */}
        <div className="order-2 md:order-1 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-video md:aspect-square bg-white/20 dark:bg-black/20 rounded-3xl backdrop-blur-md border border-santo-red/20 dark:border-white/20 shadow-2xl flex items-center justify-center overflow-hidden group">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-santo-red/10 dark:from-santo-red/20 to-transparent" />
            
            {/* Simulated 3D Shoe / Drop Placeholder */}
            <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
              <div className="w-48 h-24 bg-gradient-to-r from-santo-red to-black dark:from-zinc-800 dark:to-black rounded-full blur-[2px] opacity-80 rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,1)]">
                <span className="text-white/80 dark:text-white/50 text-xs font-bold tracking-widest uppercase">
                  [ Render Exclusivo ]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copy & CTA */}
        <div className="order-1 md:order-2 flex flex-col items-start space-y-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-white text-santo-red dark:bg-black dark:text-santo-red text-xs font-bold uppercase tracking-widest rounded-full shadow-md">
            <Zap className="w-4 h-4 fill-current" />
            Edición Limitada
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tighter text-white leading-[0.9]">
            El tiempo se agota. <br />
            <span className="text-black">No te quedes atrás.</span>
          </h2>

          <p className="text-lg md:text-xl text-santo-red font-medium max-w-lg leading-relaxed">
            Hemos soltado la bestia. Solo <strong className="text-white">100 pares</strong> disponibles a nivel mundial del nuevo <strong className="text-white font-bold">NeoHuma Apex</strong>. La calle no espera a nadie, y tu talla está a punto de volar.
          </p>

          <div className="pt-6 w-full sm:w-auto">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center w-full sm:w-auto px-10 py-5 bg-white text-santo-red dark:bg-black dark:text-white font-bold text-lg uppercase tracking-wide rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
            >
              Asegurar mi par ahora
            </a>
            <p className="text-center sm:text-left text-sm text-santo-red dark:text-santo-red font-semibold mt-4">
              *Envío gratis asegurado para los primeros 50 compradores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
