"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, BrainCircuit } from "lucide-react";
import { YouTubeEmbed } from '@next/third-parties/google'
import { useState, useEffect } from "react";

export default function Hero() {
  // Tunda load komponen berat sampai interaksi atau setelah mount
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const Scroling = () => {
    const Ukt = document.getElementById('biaya-ukt')
    if (Ukt) {
      Ukt.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black selection:bg-cyan-500 selection:text-white">

      {/* PERBAIKAN 1: Hapus CSS Blur berat.
        Gunakan Radial Gradient CSS biasa yang jauh lebih ringan bagi browser render engine.
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow Biru Tua - Menggunakan Radial Gradient, bukan Blur Filter */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black opacity-70"></div>
        
        {/* Glow Cyan - Lebih ringan */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[40vw] h-[30vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">

        {/* Kurangi animasi kompleks pada load awal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} // Percepat durasi
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-medium mb-6"
        >
          {/* Gunakan CSS murni untuk animasi ping, jangan JS/Framer Motion untuk hal kecil ini */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Pendaftaran Gelombang 1 Dibuka
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white">
          Persiapkan Karir Masa Depan <br />
          <span>Di Era</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">Artificial Intelligence</span>
        </h1>

        {/* PERBAIKAN 2: Prioritaskan LCP. 
           Video Youtube seringkali memblokir main thread. 
           Pastikan container video memiliki aspect ratio statis untuk mencegah Layout Shift.
        */}
        <div className="relative z-10 mx-auto max-w-4xl mt-10 mb-10">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10 bg-slate-900">
               {/* Tips: Lite YouTube Embed jauh lebih cepat. 
                   Jika menggunakan component standard, pastikan tidak autoload. */}
               <YouTubeEmbed
                videoid="s5Ef7ZCiDNs"
                params="controls=1&rel=0&playsinline=1&modestbranding=1"
                playlabel="Sains Data UIN Salatiga Video"
                style="border-radius: 12px;" 
              />
            </div>
        </div>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Menurut World Economic Forum Profesi <span className="text-white font-semibold">Data Scientist & AI Engineer</span>, Sangat Dibutuhkan dalam 5-10 tahun ke depan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-15">
          <button
            onClick={Scroling}
            className="group relative cursor-pointer flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Gabung Sekarang
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* PERBAIKAN 3: Render animasi background HANYA jika device mampu (Client Side Only) */}
        {isMounted && (
          <>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-10 md:left-20 text-blue-500/30 hidden lg:block pointer-events-none"
            >
              <Database size={40} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-10 md:right-20 text-cyan-500/30 hidden lg:block pointer-events-none"
            >
              <BrainCircuit size={40} />
            </motion.div>
          </>
        )}
      </div>
      
      {/* Footer Gradient Static - CSS Only */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}