"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, BrainCircuit } from "lucide-react"; // Icon Keren

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Effects (Glow Ungu di belakang) */}
          {/* Badcground gradasi effect*/}
            <div className='absolute 
                            top-[-100px]          /* Geser sedikit ke atas agar pendarannya turun pas */
                            left-1/2 
                            -translate-x-1/2 
                            w-[600px] h-[600px]   /* Diperbesar sedikit */
                            bg-slate-500/30       /* <-- WARNA ABU (Slate) dengan transparansi 30% */
                            rounded-full          /* <-- PERBAIKAN TYPO (pakai strip) */
                            blur-[120px] z-10'>

      </div>
      <div className='absolute top-[-150px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gray-200/20 rounded-full blur-[80px] -z-10'></div>


      <div className="container mx-auto px-6 text-center z-10">
        
        {/* Badge Kecil di Atas Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Pendaftaran Gelombang 1 Dibuka
        </motion.div>

        {/* HEADLINE YANG MENAMPAR */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Persiapkan Karir Masa Depan <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-white to-slate-400">
            Di Era Artificial Intellegence
          </span>
        </motion.h1>
        <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
    className="relative z-10 mx-auto max-w-4xl mt-16"
  >
    {/* Efek Cahaya Putih di Belakang Video */}
    <div className="absolute inset-0 bg-white/20 blur-3xl -z-10 rounded-full transform scale-110 opacity-50"></div>

    {/* Wadah Video dengan Shadow dan Rounded Corners */}
    <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-white/10 border border-white/10">
      <div className="aspect-video w-full">
        <iframe 
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/s5Ef7ZCiDNs?controls=1&rel=0&playsinline=1&modestbranding=1" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
      {/* Lapisan Overlay Gelap untuk Judul (Opsional, meniru gaya player asli) */}
    </div>
</motion.div>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-10 mt-10"
        >
          Menurut World Economic Forum Profesi <span className="text-white font-semibold">Data Scientist & AI Engineer</span>, Sangat Di butuhkan dalam
          5-10 tahun ke depan.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-15"
        >
          <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2 group">
            Gabung Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
        </motion.div>

        {/* Floating Icons (Visual Candy) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 md:left-20 text-secondary/50 hidden lg:block"
        >
          <Database size={40} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 md:right-20 text-accent/50 hidden lg:block"
        >
          <BrainCircuit size={40} />
        </motion.div>

      </div>

      {/* === 1. JEMBATAN GRADASI (FADE TO BLACK) === */}
  {/* Ini bikin background hero pelan-pelan jadi hitam di bawah, biar nyatu sama section selanjutnya */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

  {/* === 2. GARIS GLOWING (SEPERTI AKADEMI CRYPTO) === */}
  {/* Posisinya absolute di paling bawah. */}
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-50"></div>
  
  {/* Efek pendaran cahaya di sekitar garis (biar makin glowing) */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-500 blur-sm z-20"></div>
    </section>
  );
}