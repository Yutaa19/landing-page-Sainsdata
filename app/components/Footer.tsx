"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Ikon WA

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* Background Glow Hiasan (Opsional - Biar nyambung sama section atas) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        
        {/* === LOGO & BRANDING === */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-8"
        >
            {/* Logo UIN */}
            <div className="relative w-20 h-20 mb-4">
                <Image 
                    src="/images/logo_uin.png" 
                    alt="Logo UIN Salatiga" 
                    fill 
                    className="object-contain"
                />
            </div>
            
            {/* Nama Prodi (Style Akademi Crypto) */}
            <h3 className="text-2xl font-bold tracking-wider text-white uppercase">
                Sains Data <span className="font-light text-slate-400">UIN Salatiga</span>
            </h3>
        </motion.div>


        {/* === CONTACT INFO === */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2 text-slate-400 text-sm md:text-base mb-10"
        >
            <p className="hover:text-white transition-colors cursor-pointer">
                +62 812-3456-7890 <span className="mx-2">|</span> sainsdata@uinsalatiga.ac.id
            </p>
            <p>
                Copyright © {new Date().getFullYear()} Sains Data UIN Salatiga. All rights reserved.
            </p>
        </motion.div>


        {/* === GARIS PEMBATAS === */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>


        {/* === LEGALITAS / AKREDITASI === */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 text-xs md:text-sm font-medium"
        >
            <p>
                Program Studi Terakreditasi oleh <span className="text-slate-300">Lembaga Akreditasi Mandiri Informatika dan Komputer (LAM INFOKOM)</span>.
                <br className="hidden md:block" />
                SK Nomor:  No.050/SK/LAM-INFOKOM/Ak.P/S/VIII/2025
            </p>
        </motion.div>

      </div>

      {/* === FLOATING WHATSAPP BUTTON (Pojok Kanan Bawah) === */}
      {/* Fixed position biar nempel terus walaupun di-scroll */}

    </footer>
  );
}