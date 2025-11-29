"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Video } from "lucide-react";

// Data Dummy Poster Webinar (Ganti dengan foto poster kampusmu nanti)
const webinars = [
  { id: 1, title: "Teknik Simulasi Sains", image: "/images/webinar1.jpeg" },
  { id: 2, title: "Digital Transformation", image: "/images/webinar2.jpeg" },
  { id: 3, title: "Hybrid Esg Architecture", image: "/images/webinar3.jpeg" },
  { id: 4, title: "Web 3 And Blockchain", image: "/images/webinar4.jpeg" },
];

export default function ExclusiveWebinar() {
  return (
    <section className="py-20 bg-black selection:bg-cyan-500 selection:text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* === 1. HEADER TEXT === */}
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cryn-400 to-teal-400">
                    Webinar Eksklusif
                </span>{' '}
                 <br />
                Seharga <span className="text-slate-400 line-through decoration-red-500 decoration-2">Rp 500rb</span> Per Webinar
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Kalian akan dapatkan <span className="text-white font-bold">GRATIS</span> hanya dengan menjadi bagian dari keluarga besar Sains Data UIN Salatiga.
            </p>
        </div>


        {/* === 2. WRAPPER KOTAK UTAMA (BORDER UNGU) === */}
        <div className="relative mt-10">
            
           {/* BADGE HIJAU (VALUE) - POSISI ABSOLUTE DI TENGAH ATAS */}
<div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center">
    <div className="
        bg-blue-600 text-white font-bold 
        
        /* RESPONSIVE PADDING */
        px-4 py-2           /* Mobile: Padding lebih kecil */
        md:px-8             /* Desktop: Padding lebar */
        
        rounded-t-xl 
        
        /* RESPONSIVE TEXT SIZE */
        text-[10px]         /* Mobile: Font kecil agar muat */
        sm:text-xs          /* Tablet: Sedikit lebih besar */
        md:text-base        /* Desktop: Normal */
        
        shadow-[0_0_20px_rgba(22,163,74,0.6)] 
        uppercase tracking-wider
        
        /* RESPONSIVE WRAPPING (Supaya rapi di HP kecil) */
        whitespace-nowrap   /* Default: Satu baris */
        max-w-[90%]         /* Jaga-jaga: Jangan lebih lebar dari 90% layar HP */
        overflow-hidden text-ellipsis /* Kalau kepanjangan, potong rapi */
    ">
        Di Isi Oleh Praktisi Dan Akademisi
    </div>
</div>

            {/* KOTAK BORDER GLOWING */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl border border-blue-500/50 bg-black p-1 shadow-[0_0_50px_rgba(168,85,247,0.15)]"
            >
                {/* LABEL "LIVE ON ZOOM" */}
                <div className="flex justify-center items-center gap-2 py-6 text-white font-medium">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Video className="w-4 h-4 text-white" />
                    </div>
                    <span>Live On Zoom + Recording</span>
                </div>

                {/* GRID POSTER WEBINAR */}
                <div className="bg-[#0a0a0a] rounded-[20px] p-6 md:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {webinars.map((item) => (
                            <div key={item.id} className="group relative aspect-square rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500 transition-colors cursor-pointer">
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                />
                                {/* Overlay Gradient Gelap di Bawah */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                
                                {/* Judul Poster di Bawah */}
                                <div className="absolute bottom-0 left-0 w-full p-4">
                                    <p className="text-white font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">Limited Seat</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </motion.div>
        </div>

      </div>
    </section>
  );
}