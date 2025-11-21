"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Profile () {
    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black py-20 relative'>
            {/* Badcground gradasi effect*/}
            <div className='absolute 
                            top-[10px]          /* Geser sedikit ke atas agar pendarannya turun pas */
                            left-1/2 
                            -translate-x-1/2 
                            w-[600px] h-[600px]   /* Diperbesar sedikit */
                            bg-slate-500/30       /* <-- WARNA ABU (Slate) dengan transparansi 30% */
                            rounded-full          /* <-- PERBAIKAN TYPO (pakai strip) */
                            blur-[120px] z-10'>

            </div>
            <div className='absolute top-[-150px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gray-200/20 rounded-full blur-[80px] -z-10'></div>

            <div className='container mx-auto px-0 text-center z-10 absolute top-24 left-0 right-0 '>
                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6'
                >
                    Kenapa Harus Pilih Sains Data UIN Salatiga?
                </motion.h1>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
                    {/* Highilights kiri */}
                    <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className='lg:col-span-5 text-lg text-slate-300 leading-relaxed space-y-6'>
                        <p>
                        Kalian akan dibimbing dari Nol sampai bisa mahir mengolah data menjadi 
                        wawasan berharga dengan kurikulum berbasis proyek nyata yang dituangkan dalam{' '}
                        {/* CARA HIGHLIGHT: Bungkus kata penting dengan <span> dan kasih warna beda */}
                        <span className="text-blue-400 font-semibold">
                        100+ SKS Praktikum Intensif
                        </span>{' '}
                        yang bisa diakses kapan saja karena Sains Data adalah ilmu yang tidak pernah 
                        berhenti berkembang di era AI saat ini. Modul pembelajaran dirancang langsung oleh para{' '}
                        <span className="text-blue-400 font-semibold">
                            Praktisi Industri & Dosen Bergelar PhD
                        </span>{' '}
                        untuk memastikan skill kalian relevan dengan kebutuhan pasar global.
                        </p>
                    </motion.div>

                   {/* === 3. KOLOM TENGAH: TIMELINE DIVIDER (Garis & Centang Baru) === */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative h-full min-h-[400px]">
            
            {/* Garis Vertikal Putih Tebal (Pakai w-1 atau w-2 sesuai selera) */}
            <div className="h-full w-1 bg-white absolute top-0"></div>
            
            {/* === IKON CENTANG ATAS (BARU) === */}
            {/* Kita buat lingkaran biru manual, lalu isi ikon centang putih */}
            <div className="absolute top-16 z-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-[2px]">
                 <Check className="w-7 h-7 text-white" strokeWidth={3} />
            </div>
            
            {/* === IKON CENTANG BAWAH (BARU) === */}
            <div className="absolute bottom-16 z-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-[2px]">
                 <Check className="w-7 h-7 text-white" strokeWidth={3} />
            </div>

          </div>

                </div>
            </div>
        </section>
    )
}