"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function RectorQuote() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Wrapper Utama */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto mt-20 bg-gradient-to-b from-white/5 to-transparent border border-white/20 rounded-3xl p-8 md:p-12"
        >
            
            {/* PERBAIKAN UTAMA DI SINI:
               Gunakan 'md:flex-row' (bukan lg:flex-row).
               Ini memaksa iPad (tablet) untuk berbaris ke samping, bukan ke bawah.
            */}
            <div className="flex flex-col md:flex-row items-end">
                
                {/* === BAGIAN KIRI: FOTO REKTOR === */}
                <div className="
                    /* POSISI MOBILE (HP) */
                    relative w-full h-[300px] 
                    flex items-end justify-center
                    order-2 md:order-1  /* Di HP foto di bawah (order 2), Di iPad/PC di kiri (order 1) */
                    mt-6 md:mt-0        /* Jarak di HP */

                    /* POSISI TABLET & DESKTOP (iPad ke atas) */
                    md:absolute 
                    md:bottom-0 
                    md:left-0 
                    md:w-5/12 
                    md:h-[130%]         /* Tinggi > 100% biar nyembul */
                ">
                    {/* Efek Glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-blue-600/40 blur-[60px] rounded-full -z-10"></div>

                    {/* Foto Rektor */}
                    <Image
                        src="/images/Foto-Rektor-2.png" 
                        alt="Rektor UIN Salatiga"
                        width={500}
                        height={600}
                        className="
                            object-contain 
                            drop-shadow-2xl 
                            w-auto h-full       /* Agar tinggi ngikutin container */
                            max-h-full          /* Safety */
                        " 
                    />
                </div>


                {/* === BAGIAN KANAN: TEKS SAMBUTAN === */}
                <div className="
                    w-full 
                    md:w-7/12 
                    md:ml-auto          /* Dorong ke kanan mentok */
                    md:pl-10            /* Jarak dari foto */
                    text-left
                    order-1 md:order-2  /* Di HP teks di atas (order 1) */
                    relative z-10       /* Pastikan teks di atas layer lain */
                ">
                    
                    {/* Ikon Kutip */}
                    <div className="mb-6 opacity-50">
                        {/* SVG Quote Manual biar aman */}
                        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                    </div>

                    {/* Isi Sambutan */}
                    <blockquote className="text-xl md:text-3xl font-medium text-slate-200 leading-relaxed mb-8">
                        Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak, menepati janji ini, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku
                    </blockquote>

                    {/* Nama & Jabatan */}
                    <div>
                        <div className="w-16 h-1 bg-blue-600 mb-4"></div>
                        <h4 className="text-lg md:text-2xl font-bold text-white">
                            Prof. Dr. Zakiyuddin Baidhawy, M.Ag
                        </h4>
                        <p className="text-slate-400 text-xs md:text-sm tracking-widest uppercase mt-1">
                            Rektor UIN Salatiga
                        </p>
                    </div>

                </div>

            </div>

        </motion.div>

      </div>
    </section>
  );
}