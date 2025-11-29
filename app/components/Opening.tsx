"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, BrainCircuit, ArrowUpRight } from "lucide-react"; 

export default function Hero() {

  const Scroling = () => {
    const Ukt = document.getElementById('biaya-ukt')
    if(Ukt) {
      Ukt.scrollIntoView({ behavior: 'smooth'})
    }
  }

  return (
    // UBAH: Base background tetap hitam, tapi nuansa ambient-nya nanti biru
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black selection:bg-cyan-500 selection:text-white">
      
      {/* ========================================= */}
      {/* BACKGROUND EFFECTS (DARK BLUE THEME)      */}
      {/* ========================================= */}
      
      {/* Layer 1: Glow Utama (Biru Tua/Indigo) */}
      <div className='
          absolute 
          top-[-100px] left-1/2 -translate-x-1/2 
          w-[600px] h-[600px] 
          bg-blue-800/40       /* <-- UBAH KE BIRU TUA */
          rounded-full blur-[120px] 
          -z-10 pointer-events-none
      '></div>

      {/* Layer 2: Glow Sekunder (Cyan/Biru Muda) */}
      <div className='
          absolute top-[-150px] left-1/2 -translate-x-1/2 
          w-[300px] h-[300px] 
          bg-cyan-600/20       /* <-- UBAH KE CYAN AGAR LEBIH MENYALA */
          rounded-full blur-[80px] 
          -z-10 pointer-events-none
      '></div>


      {/* ========================================= */}
      {/* KONTEN UTAMA                              */}
      {/* ========================================= */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        
        {/* Badge Kecil (Nuansa Biru) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Pendaftaran Gelombang 1 Dibuka
        </motion.div>

        {/* HEADLINE (Gradasi Putih ke Biru Es) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white"
        >
          Persiapkan Karir Masa Depan <br />
          <span >
            Di Era</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cryn-400 to-blue-400">Artifical Intellegence</span>
        </motion.h1>

        {/* VIDEO SECTION (Glow Biru) */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative z-10 mx-auto max-w-4xl mt-16"
        >
            {/* Efek Cahaya Biru di Belakang Video */}
            <div className="absolute inset-0 bg-blue-600/30 blur-3xl -z-10 rounded-full transform scale-110 opacity-50"></div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/40 border border-white/10">
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
            </div>
        </motion.div>

        {/* Subheadline (Text Slate Kebiruan) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 mt-10"
        >
          Menurut World Economic Forum Profesi <span className="text-white font-semibold">Data Scientist & AI Engineer</span>, Sangat Dibutuhkan dalam 5-10 tahun ke depan.
        </motion.p>

        {/* Call to Actions (Tombol Biru Glowing) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-15"
        >
          <button 
            onClick={Scroling} 
            className="
                group relative z-50 cursor-pointer
                flex items-center justify-center gap-3
                px-8 py-4
                bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600
                text-white font-bold text-lg 
                rounded-full 
                transition-all duration-300 ease-out
                hover:-translate-y-1 
                active:scale-95 
                shadow-[0_0_20px_rgba(37,99,235,0.4)] 
                hover:shadow-[0_10px_40px_rgba(37,99,235,0.6)]
            "
          >
            Gabung Sekarang
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45" />
          </button>
        </motion.div>

        {/* Floating Icons (Warna Biru/Cyan) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 md:left-20 text-blue-500/30 hidden lg:block"
        >
          <Database size={40} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 md:right-20 text-cyan-500/30 hidden lg:block"
        >
          <BrainCircuit size={40} />
        </motion.div>

      </div>

      {/* ========================================= */}
      {/* FOOTER GRADIENT (Penghubung)              */}
      {/* ========================================= */}
      
      {/* Gradasi Hitam ke Transparan */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

      {/* Garis Glowing Biru */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-50"></div>
      
      {/* Pendaran Cahaya Bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-500 blur-sm z-20"></div>
      
    </section>
  );
}