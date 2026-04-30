import Link from "next/link";

const NAV_LINKS = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Sneaker Drop", href: "#lanzamientos" },
  { name: "Edición Limitada", href: "#catalogo" },
  { name: "Catálogo", href: "#edicion-limitada" },
  { name: "Ubicación", href: "#ubicacion" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-[#050505] border-t border-zinc-200 dark:border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand & Slogan */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-white uppercase flex items-center">
                Santo<span className="text-santo-green">Sports</span>
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-500 max-w-sm text-lg leading-relaxed">
              Desde el centro del mundo, para tus pies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-end md:text-right">
            <h4 className="text-zinc-900 dark:text-white font-bold uppercase tracking-widest text-sm mb-6">Explorar</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-600 dark:text-zinc-400 hover:text-santo-red transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 dark:text-zinc-600 text-sm">
            &copy; 2026 SantoSports. Todos los derechos reservados.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/share/18TsbZ433v/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/santosports2?igsh=MWM2Mno4Y2x0anFzZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@santo.sports?_r=1&_t=ZS-95xKmZWGCmb" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="https://wa.me/593963768074" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
