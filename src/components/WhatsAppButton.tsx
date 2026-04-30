"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <a
        href="https://wa.me/593963768074"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75" />
        
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}
