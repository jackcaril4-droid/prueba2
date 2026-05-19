"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section id="nosotros" className="relative py-16 w-full bg-white dark:bg-[#050505]">
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[50vw] h-[50vw] bg-santo-red/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Header Title */}
          <motion.div variants={itemVariants} className="md:col-span-12 mb-8">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter text-zinc-900 dark:text-white leading-tight">
              Nuestra <span className="text-zinc-600">Esencia</span>
            </h2>
          </motion.div>

          {/* History Card (Large) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 group relative p-8 md:p-12 rounded-3xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 overflow-hidden hover:border-zinc-300 dark:hover:border-white/10 transition-colors duration-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-10 dark:from-white/[0.02] to-transparent pointer-events-none" />
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">El Origen</h3>
            <p className="text-lg md:text-xl dark:text-zinc-700 dark:text-zinc-600 leading-relaxed font-light mb-6">
              Todo empezó con una frustración común: no lográbamos encontrar zapatos que combinaran verdaderamente una calidad excepcional con un diseño sobresaliente.Por eso decidimos tomar acción y fundar Santo Sports, para brindarte el equilibrio perfecto entre estilo, elegancia y durabilidad.
            </p>
            <p className="text-base text-zinc-500 leading-relaxed max-w-2xl">
              En <strong className="text-santo-red font-medium"> Santo Sports</strong>, conectamos a nuestros clientes con las mejores tendencias y el confort necesario para superar sus retos diarios. Porque queremos que pises fuerte y recuerdes siempre que ¡Tú eres más!
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 p-8 md:p-12 rounded-3xl bg-santo-red/5 border border-santo-red/5 hover:border-santo-red/5 transition-colors duration-200 flex flex-col justify-center"
          >
            <h3 className="text-sm font-semibold tracking-widest text-santo-red uppercase mb-4">
              Misión
            </h3>
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Elevar el calzado deportivo a través de la <span className="text-santo-red">elegancia</span> y el <span className="text-santo-red">alto rendimiento.</span>
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-12 p-8 md:p-12 rounded-3xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <h3 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                Visión
              </h3>
              <p className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
                Marcar la diferencia con elegancia en cada paso que das, <span className="text-zinc-500">sin límites.</span>
              </p>
            </div>
            {/* Visual element or icon */}
            <div className="hidden md:flex items-center justify-center w-32 h-32 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.01]">
              <svg className="w-12 h-12 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
