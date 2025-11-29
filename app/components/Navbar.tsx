"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Efek: Deteksi scroll buat ubah background jadi blur
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
        
        {/* 1. Logo Uin (TIDAK BERUBAH) */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          Sains<span className="text-primary">Data.</span>
        </Link>

        {/* 2. TOMBOL CTA (LANGSUNG DITAMPILKAN DI SEMUA LAYAR) */}
        {/* Saya hapus 'hidden md:block' supaya muncul di HP */}
        {/* Saya tambahkan responsive sizing biar di HP agak kecil dikit, di Laptop normal */}
        <Link
          href="https://pmb.uinsalatiga.ac.id/#jalur-masuk"
          className="
            px-3 py-1.5 text-sm          /* Ukuran Mobile (Lebih ringkas) */
            md:px-4 md:py-2 md:text-base /* Ukuran Desktop (Normal) */
            bg-white/10 hover:bg-primary hover:text-white 
            border border-white/10 rounded-xl 
            font-semibold transition-all
          "
        >
          PMB 2026
        </Link>

      </div>
    </motion.nav>
  );
}