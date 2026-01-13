"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, BrainCircuit } from "lucide-react";
// Tambahkan Loader2 di sini untuk icon loading
import { Play, Loader2 } from "lucide-react"; 
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  // Tunda load komponen berat sampai interaksi atau setelah mount
  const [isMounted, setIsMounted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  // STATE BARU: Untuk melacak status loading video
  const [isVideoLoading, setIsVideoLoading] = useState(true); 
  
  const DRIVE_VIDEO_ID = "1mlqfFFLgap1_LkFGLh4GBYIUBIsBkawI";

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

        {/* animasi */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-medium mb-6"
        >
          {/* Gunakan CSS murni untuk animasi*/}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Pendaftaran Gelombang 1 Dibuka
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white">
          Persiapkan Karir Masa Depan Anda<br />
          <span>Di Era</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">Artificial Intelligence</span>
        </h1>

        {/* VIDEO SECTION*/}
        <div className="relative z-10 mx-auto max-w-4xl mt-10 mb-10">
          {/* Container Pembungkus Utama dengan Aspect Ratio Terkunci */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10 bg-slate-900 group">

            {!showVideo ? (
              /* COVER IMAGE*/
              <div
                className="absolute inset-0 z-10 cursor-pointer group"
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src="/images/thumbnail.jpeg"
                  alt="Thumbnail"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-75 transition-opacity"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-500 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white ml-1"/>
                  </div>
                </div>
              </div>
            ) : (
              /* LOGIKA BARU: WRAPPER VIDEO DENGAN LOADING STATE */
              <div className="relative w-full h-full bg-slate-950">
                
                {/* 1. Tampilkan Loader jika isVideoLoading masih true */}
                {isVideoLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-slate-900">
                    <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-2" />
                    <span className="text-slate-400 text-sm">Memuat Video...</span>
                  </div>
                )}

                {/* 2. IFRAME GOOGLE DRIVE RESMI */}
                <iframe
                  src={`https://drive.google.com/file/d/${DRIVE_VIDEO_ID}/preview`}
                  className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  onLoad={() => setIsVideoLoading(false)} // Matikan loading saat iframe selesai dimuat
                ></iframe>
              </div>
            )}
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            <Link href="https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/" className="text-blue-600">
                Menurut World Economic Forum, 
            </Link> profesi yang berkenaan <span className="text-white font-semibold">AI dan Big Data</span>, sangat dibutuhkan dalam 5-10 tahun ke depan.
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

        {/*Render animasi background HANYA jika device mampu*/}
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
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-50"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-500 blur-sm z-20"></div>
    </section>
  );
}

export default Hero;