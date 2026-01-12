"use client";

import Link from "next/link";
import Image from "next/image"; // 1. Wajib import ini
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? " bg-surface/70 backdrop-blur-md border-white/10 shadow-md"
          : " bg-transparent border-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        
        {/* ======================================= */}
        {/* 1. LOGO & JUDUL (RESPONSIVE AREA)       */}
        {/* ======================================= */}
        <Link href="/" className="flex items-center gap-3 group">
          
          {/* Container Logo: Kecil di HP (w-10), Besar di Desktop (md:w-12) */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
            <Image 
                // Pastikan nama file sesuai dengan yang ada di folder public/images/
                // Saya lihat di file list ada "logo_uin.png"
                src="/images/logo_uin_nav.png" 
                alt="Logo UIN Salatiga"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 40px, 48px"
            />
          </div>

          {/* Container Teks: Flex Column biar rapi */}
          <div className="flex flex-col justify-center">
            {/* Teks Kecil (Eyebrow) */}
            <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-wider leading-none mb-0.5">
                Program Studi
            </span>
            
            {/* Teks Utama: Ukuran menyesuaikan layar */}
            <h1 className="text-sm md:text-xl font-bold text-white leading-none">
                Sains Data <span className="text-primary">UIN Salatiga</span>
            </h1>
          </div>
        </Link>


        {/* ======================================= */}
        {/* 2. TOMBOL CTA (BUTTON)                  */}
        {/* ======================================= */}
        <Link
          href="https://pmb.uinsalatiga.ac.id/#jalur-masuk"
          className="
            px-3 py-1.5 text-xs          /* Mobile: Lebih kecil */
            md:px-5 md:py-2.5 md:text-sm /* Desktop: Normal */
            bg-white/10 hover:bg-primary hover:text-white 
            border border-white/10 rounded-full 
            font-semibold transition-all duration-300
            flex items-center gap-2
          "
        >
          {/* Teks Button */}
          <span>PMB 2026</span>
        </Link>

      </div>
    </motion.nav>
  );
}

export default Navbar