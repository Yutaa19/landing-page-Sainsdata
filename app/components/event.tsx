"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Events() {
    return(
        <section className='relative min-h screen flex items-center justify-center overflow-hidden pt-20 bg-black py-20'>
            <div className='container mx-auto px-6 z-10 relative'>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4}}
            className="relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-600 to-gray-600"
        >
            
            {/* Efek Blur di belakang biar makin 'menyala' (Optional) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-gray-600 blur-3xl opacity-20 -z-10"></div>

            {/* === 2. KOTAK HITAM UTAMA (ISINYA) === */}
            <div className="bg-black rounded-[22px] p-6 md:p-12 h-full">
                
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    
                    {/* --- BAGIAN KIRI: FOTO EVENT --- */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Frame Gambar ala Discord/Chat */}
                        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                            {/* Header kecil ala window browser (Hiasan) */}
                            <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>

                            {/* FOTO UTAMA */}
                            <div className="relative h-[300px] w-full">
                                <Image 
                                    src="/images/neodata.jpg" // Ganti dengan foto event kampusmu
                                    alt="Dokumentasi Event Kampus" 
                                    fill 
                                    className="object-cover"
                                />
                                {/* Overlay Gradasi Hitam di bawah foto biar teks kebaca kalau ada */}
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent">
                                    
                                </div>
                            </div>

                            {/* Caption ala Chat (Optional - Biar mirip referensi Discord) */}
                            <div className="p-4 flex gap-3">
                                <div className=" relative w-10 h-10 rounded-full flex-shrink-0">
                                    <Image 
                                    src='/images/logo-uin.png'
                                    alt='uin saga'
                                    fill
                                    className='object-cover'/>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Sains Data Uin Salatiga</p>
                                    <p className="text-xs text-slate-400">19 Agustus 2025</p>
                                    <p className="text-sm text-slate-300 mt-1">
                                        Suasana Seminar Neo Data Fest kemarin pecah banget! 🔥 Mahasiswa langsung memahami prospek Sains data di masa depan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* --- BAGIAN KANAN: PENJELASAN --- */}
                    <div className="w-full lg:w-1/2 text-left">
                        
                        {/* Judul dengan Gradasi */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cryn-400 to-teal-400">
                                Exclusive Event
                            </span>{' '}
                            & Workshop
                        </h2>

                        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                            <p>
                                Kalian akan mendapatkan akses prioritas ke berbagai{' '}
                                <span className="text-white font-bold">Seminar Nasional & Workshop Teknis</span>{' '}
                                yang diadakan rutin setiap semester. Tidak perlu bayar mahal di luar sana untuk belajar teknologi terbaru.
                            </p>
                            
                            <p>
                                Kami mengundang praktisi dari{' '}
                                <span className="text-white font-bold">Industri</span>{' '}
                                untuk bedah kasus nyata. Kalian bisa bertanya langsung, membangun koneksi, dan mendapatkan sertifikat kompetensi yang diakui industri.
                            </p>

                            <p>
                                Kalian akan hemat jutaan rupiah karena materi yang diajarkan setara dengan{' '}
                                <span className="text-white font-bold">Bootcamp Coding Premium</span>{' '}
                                di luar sana. Ini fasilitas spesial untuk mahasiswa Sains Data UIN Salatiga.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </motion.div>

        
            </div>
        </section>
    )
}