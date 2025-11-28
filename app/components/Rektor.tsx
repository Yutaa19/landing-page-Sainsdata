"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Rectorsambutan() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Wrapper Utama (Kotak Border Tipis) */}
        {/* mt-20 supaya ada ruang buat kepala rektor nyembul ke atas */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto mt-20 bg-gradient-to-b from-white/5 to-transparent border border-white/20 rounded-3xl p-8 md:p-12"
        >
            
            <div className="flex flex-col md:flex-row items-center">
                
                {/* === BAGIAN KIRI: FOTO REKTOR (POP-OUT EFFECT) === */}
                {/* Trik CSS: 
                    - 'absolute bottom-0' biar nempel bawah.
                    - 'h-[130%]' biar tingginya melebihi kotak (kepala nyembul).
                    - Di Mobile, kita buat relative biasa biar gak berantakan.
                */}
                <div className="
                    relative w-full md:w-5/12 
                    h-[400px] md:absolute md:bottom-0 md:left-10 md:h-[135%] 
                    flex items-end justify-center md:justify-start
                    mb-8 md:mb-0
                ">
                    {/* Efek Glow di belakang Rektor */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-600/30 blur-[80px] rounded-full -z-10"></div>

                    {/* Foto Rektor */}
                    <Image
                        src="/images/Foto-Rektor-2.png" // GANTI DENGAN FOTO REKTOR TRANSPARAN (PNG)
                        alt="Rektor UIN Salatiga"
                        width={500}
                        height={600}
                        className="object-contain drop-shadow-2xl" 
                        // Tips: Pastikan fotonya high-res dan crop badan setengah atau sepinggang
                    />
                </div>


                {/* === BAGIAN KANAN: TEKS SAMBUTAN === */}
                <div className="w-full md:w-7/12 md:ml-auto md:pl-10 text-left">
                    
                    {/* Ikon Kutip */}
                    <Quote className="text-blue-500 w-12 h-12 mb-6 opacity-50" />

                    {/* Isi Sambutan */}
                    <blockquote className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed mb-8">
                        "Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak, menepati janji ini, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku"
                    </blockquote>

                    {/* Nama & Jabatan */}
                    <div>
                        <div className="w-16 h-1 bg-blue-600 mb-4"></div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                            Prof. Dr. Zakiyuddin Baidhawy, M.Ag
                        </h4>
                        <p className="text-slate-400 text-sm tracking-widest uppercase mt-1">
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