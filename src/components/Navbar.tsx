"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Deportivos", href: "/#deportivos" },
  { name: "Basketball", href: "/#basketball" },
  { name: "Fútbol", href: "/#futbol" },
  { name: "Catálogos", href: "/#catalogos" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Ubicación", href: "/#ubicacion" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo1.png"
            alt="Santo Sports"
            width={200}
            height={64}
            className="h-16 w-auto object-contain dark:brightness-200"
            priority
          />
        </Link>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-600 dark:text-white/70 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA - WhatsApp & ThemeToggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://wa.me/593963768074?text=%C2%A1Hola!%20Vengo%20de%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex group relative px-6 py-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-zinc-200 dark:bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 ease-out"></div>
            <span className="relative text-sm font-medium text-zinc-900 dark:text-white tracking-wide">
              Contactar
            </span>
          </a>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-white dark:bg-[#050505] border-b border-zinc-200 dark:border-white/10 flex flex-col p-6 gap-6 shadow-2xl">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-600 dark:text-white/70 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://wa.me/593963768074?text=%C2%A1Hola!%20Vengo%20de%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 text-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold tracking-wide"
          >
            Contactar
          </a>
        </div>
      )}
    </nav>
  );
}
