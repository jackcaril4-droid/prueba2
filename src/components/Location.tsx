"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";

export default function Location() {
  return (
    <section id="ubicacion" className="relative py-32 w-full bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter text-zinc-900 dark:text-white">
            Nuestra <span className="text-zinc-500">Tienda</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-lg max-w-xl mx-auto">
            Visítanos en nuestra tienda ubicada en el corazón de Santo Domingo, Ecuador.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Contact & Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 p-8 rounded-3xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 flex flex-col justify-center space-y-10"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-santo-red/10 flex items-center justify-center text-santo-red">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Ubicación</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 pl-16">
                Av. Quito y Ambato,<br />
                Santo Domingo, Ecuador.<br />
                Sector Centro.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Horarios</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 pl-16">
                Lunes a Viernes: 09:00 - 18:00<br />
                Fin de semana: 09:00 - 18:00
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Contacto</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 pl-16">
                santo_sports@hotmail.com<br />
                +593 96 376 8074
              </p>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8 rounded-3xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 overflow-hidden aspect-video lg:aspect-auto flex items-center justify-center relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.778629894415!2d-79.17458332550136!3d-0.2555667997419172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d547e17f5157a1%3A0x8a36a3a5265ede30!2sSanto%20Sports!5e0!3m2!1ses-419!2sec!4v1777505895751!5m2!1ses-419!2sec"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
