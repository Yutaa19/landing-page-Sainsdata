"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Users, ArrowRight, ArrowUpRight } from 'lucide-react';
// --- KONFIGURASI DATA GAMBAR ---
// Masukkan foto-foto kegiatan Anda disini. 
// "desktopPosition" mengatur letak foto saat di layar komputer (agar tersebar).
const galleryImages = [
  {
    id: 1,
    src: "/images/g_1.jpeg", // Ganti dengan path foto lokal Anda
    alt: "Join lecturer bohme",
    desktopPosition: "top-10 left-[5%] -rotate-6", // Kiri Atas
  },
  {
    id: 2,
    src: "/images/g_2.jpeg",
    alt: "review kurikulum",
    desktopPosition: "top-1/2 -translate-y-1/2 left-[2%] rotate-3", // Kiri Tengah
  },
  {
    id: 3,
    src: "/images/g_3.jpeg",
    alt: "International Conferences",
    desktopPosition: "bottom-20 left-[8%] -rotate-3", // Kiri Bawah
  },
  {
    id: 4,
    src: "/images/g_4.jpeg",
    alt: "Pelatihan infografis dan dashboard analytic",
    desktopPosition: "top-12 right-[5%] rotate-6", // Kanan Atas
  },
  {
    id: 5,
    src: "/images/g_5.jpeg",
    alt: "Live coding",
    desktopPosition: "top-1/2 -translate-y-1/2 right-[2%] -rotate-3", // Kanan Tengah
  },
  {
    id: 6,
    src: "/images/g_6.jpeg",
    alt: "Sharing dan diskusi",
    desktopPosition: "bottom-17 right-[8%] rotate-2", // Kanan Bawah
  },
];

const Pekanilimah = () => {
  const Scroling = () => {
    const ukt = document.getElementById("biaya-ukt")
    if (ukt) {
      ukt.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center py-20 px-4">

      {/* 1. Background Glow (Estetika) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Main Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">

        {/* TEXT SECTION (CENTER) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-0 md:py-32 relative z-20">


          <h1 className="text-2xl md:text-6xl font-bold tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
            Pekan Ilmiah <br />
            <span className="text-blue-500">Belajar Bareng Dengan Mahasiswa Lain</span>
          </h1>

          <p className="font-bold text-white-400 text-lg md:text-xl leading-relaxed mb-10 px-4">
            Ketemu langsung dengan praktisi industri dan akademisi, networking, menambah wawasan
            dan meningkatkan skill set.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button
              onClick={Scroling}
              className="group relative cursor-pointer flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Gabung Sekarang
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <Link className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2" href="https://tarbiyah.uinsalatiga.ac.id/snd/galeri/">
              <Users size={20} />
              Lihat Dokumentasi
            </Link>
          </div>
        </div>

        {/* 3. IMAGES SECTION */}

        {/* A. DESKTOP VIEW (Floating / Scattered Style) 
            Hanya muncul di layar 'lg' (Large) ke atas */}
        <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`absolute w-64 h-44 rounded-2xl border-4 border-black/50 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:z-50 hover:border-blue-500/50 ${img.desktopPosition}`}
            >
              <div className="relative w-full h-full bg-neutral-900">
                {/* Gunakan component Image Next.js */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                {/* Overlay Text Kecil */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-xs text-white font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* B. MOBILE & TABLET VIEW (Grid Style) 
            Muncul di layar kecil agar rapi */}
        <div className="lg:hidden w-full grid grid-cols-2 gap-3 md:gap-6 px-2 mt-8">
          {galleryImages.map((img) => (
            <div key={img.id} className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default Pekanilimah;