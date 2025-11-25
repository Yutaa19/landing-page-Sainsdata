"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Profile() {
    
    // === DATA GAMBAR DENGAN RESPONSIVE CLASS ===
    // LOGIKA: 
    // 1. Mobile: 'relative w-full translate-x-0' (Tumpuk Rapi)
    // 2. Desktop (lg): 'lg:absolute lg:top-...' (Pakai nilai aslimu)

    const section1Images = [
        { 
            src: "/images/machine-learning.png", 
            alt: "Machine Learning", 
            // Mobile: relative, margin-bawah. Desktop: absolute, top-12, left-20 (Sesuai request)
            className: "relative w-full h-48 mb-4 lg:mb-0 lg:absolute lg:top-12 lg:left-20 lg:w-70 lg:h-40 z-30" 
        },
        { 
            src: "/images/deep-learning.png", 
            alt: "Deep Learning", 
            className: "relative w-full h-48 mb-4 lg:mb-0 lg:absolute lg:top-55 lg:left-55 lg:w-70 lg:h-40 z-20" 
        },
        { 
            src: "/images/cloud-computing.png", 
            alt: "Cloud Computing", 
            className: "relative w-full h-48 lg:mb-0 lg:absolute lg:top-55 lg:-left-18 lg:w-70 lg:h-40 z-10" 
        }
    ]

    const section2Images = [
        { 
            src: "/images/programing.png", 
            alt: "Programming", 
            className: "relative w-full h-48 mb-4 lg:mb-0 lg:absolute lg:-top-20 lg:-right-15 lg:w-64 lg:h-40 z-30" 
        },
        { 
            src: "/images/lab_kom.png", 
            alt: "Lab Komputer", 
            className: "relative w-full h-48 mb-4 lg:mb-0 lg:absolute lg:-top-20 lg:right-50 lg:w-64 lg:h-40 z-20" 
        },
        { 
            src: "/images/dosen.png", 
            alt: "Dosen", 
            className: "relative w-full h-48 lg:mb-0 lg:absolute lg:top-22 lg:right-20 lg:w-64 lg:h-40 z-10" 
        }
    ]

    const section3Images = [
        { 
            src: "/images/sd1.jpg", 
            alt: "Machine Learning", 
            className: "relative w-full h-48 mb-4 lg:mb-0 lg:absolute lg:top-12 lg:left-110 lg:w-55 lg:h-35 z-30" 
        },
        { 
            src: "/images/sd2jpg.jpg", 
            alt: "Deep Learning", 
            className: "relative w-full h-48 mb-4 lg:mb-0 lg:absolute lg:top-55 lg:left-110 lg:w-55 lg:h-35 z-20" 
        },
        { 
            src: "/images/sd3.jpg", 
            alt: "Cloud Computing", 
            className: "relative w-full h-48 mb-4 lg:mb-0 lg:absolute lg:top-55 lg:left-45 lg:w-55 lg:h-35 z-10" 
        },
        { 
            src: "/images/sd4.jpg", 
            alt: "Machine Learning", 
            className: "relative w-full h-48 lg:mb-0 lg:absolute lg:top-12 lg:left-45 lg:w-55 lg:h-35 z-30" 
        }
    ]

    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black py-20'>
            
            {/* Background gradasi effect */}
            <div className='absolute top-[10px] left-1/2 -translate-x-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-slate-500/30 rounded-full blur-[80px] lg:blur-[120px] z-0'></div>
            <div className='absolute top-[-150px] left-1/2 -translate-x-1/2 w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] bg-gray-200/20 rounded-full blur-[60px] lg:blur-[80px] z-0'></div>

            <div className='container mx-auto px-6 z-10 relative'>
                
                {/* Judul */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-16 text-center'
                >
                    Kenapa Harus Pilih Sains Data UIN Salatiga?
                </motion.h1>

                {/* ========================================== */}
                {/* SECTION 1: Teks Kiri + Timeline + Gambar Kanan */}
                {/* ========================================== */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 lg:mb-40'>

                    {/* Teks Kiri (Order 1 di Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='lg:col-span-5 text-lg text-slate-300 leading-relaxed space-y-6 text-left order-1'
                    >
                        <div className='text-left max-w-2xl'>
                            <p className='text-xl md:text-2xl font-medium leading-snug text-slate-300'>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cryn-400 to-teal-400 font-bold">
                                    Kalian akan dibimbing dari Nol sampai bisa mahir
                                </span>{' '}
                                mengolah data menjadi wawasan berharga dengan kurikulum berbasis proyek nyata dalam{' '}
                                <span className="font-bold text-cyan-400 decoration-cyan-400/30 underline decoration-2 underline-offset-4">
                                    100+ SKS Praktikum Intensif
                                </span>{' '}
                                yang bisa diakses ketika menjadi Mahasiswa aktif Sains Data UIN Salatiga. Karena Sains Data adalah ilmu yang dibutuhkan dalam perkembangan AI saat ini.
                                <br className="block my-6" />
                                Mata Kuliah Kurikulum pembelajaran disusun oleh para{' '}
                                <span className="font-bold text-cyan-400 decoration-cyan-400/30 underline decoration-2 underline-offset-4">
                                    Praktisi Industri & Dosen Bergelar PhD
                                </span>{' '}
                                untuk memastikan skill kalian relevan dengan kebutuhan pasar global.
                            </p>
                        </div>
                    </motion.div>

                    {/* Timeline Divider (Hidden di Mobile) */}
                    <div className="hidden lg:flex lg:col-span-2 justify-center relative h-[400px] order-2">
                        <div className="h-full w-1 bg-white/80 absolute top-0"></div>
                        <div className="absolute top-0 z-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white/60">
                            <Check className="w-7 h-7 text-white" strokeWidth={3} />
                        </div>
                        <div className="absolute -bottom-25 z-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white/60">
                            <Check className="w-7 h-7 text-white" strokeWidth={3} />
                        </div>
                    </div>

                    {/* Gambar Kanan (Order 3 di Mobile, h-auto biar ga kepotong) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 relative h-auto lg:h-[400px] w-full order-3 mt-8 lg:mt-0"
                    >
                        {/* Container Wrapper Mobile */}
                        <div className="flex flex-col gap-4 lg:block">
                            {section1Images.map((img, idx) => (
                                <div key={idx} className={`${img.className} bg-slate-800 rounded-xl shadow-2xl overflow-hidden border-2 border-slate-700/500`}>
                                    <Image src={img.src} alt={img.alt} fill className="object-cover opacity-80 lg:scale-110" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ========================================== */}
                {/* SECTION 2: Gambar Kiri + Timeline + Teks Kanan */}
                {/* ========================================== */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>

                    {/* Gambar Kiri (Order 2 di Mobile -> Pindah Bawah Teks) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 relative h-auto lg:h-[400px] w-full order-2 lg:order-1 mt-8 lg:mt-0"
                    >
                         <div className="flex flex-col gap-4 lg:block">
                            {section2Images.map((img, idx) => (
                                <div key={idx} className={`${img.className} bg-slate-800 rounded-xl shadow-2xl overflow-hidden border-2 border-slate-700/50`}>
                                    <Image src={img.src} alt={img.alt} fill className="object-cover opacity-80" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Timeline Divider */}
                    <div className="hidden lg:flex lg:col-span-2 justify-center relative h-[500px] order-2">
                        <div className="h-full w-1 bg-white/80 absolute -top-40"></div>
                        <div className="absolute top-80 -translate-y-1/2 z-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white/60">
                            <Check className="w-7 h-7 text-white" strokeWidth={3} />
                        </div>
                    </div>

                    {/* Teks Kanan (Order 1 di Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        // Di Mobile Margin Top dihapus, Di Laptop pakai -mt-85
                        className='lg:col-span-5 text-lg text-slate-300 leading-relaxed space-y-6 text-left lg:-mt-85 order-1 lg:order-3'
                    >
                        <div className='text-left max-w-2xl'>
                            <p className='text-xl md:text-2xl font-medium leading-snug text-slate-300'>
                                Dapatkan akses eksklusif ke kurikulum dinamis di mana kalian bisa{' '}
                                <span className="text-blue-400 font-semibold">
                                    mendapatkan materi AI & Data Science
                                </span>{' '}
                                yang jarang diajarkan di kampus konvensional. Kami pastikan kalian menguasai{' '}
                                <span className="text-blue-400 font-semibold">
                                    pemanfaatan AI
                                </span>{' '}
                                dengan tepat guna. Semua materi disampaikan dalam Kelas Kuliah oleh para ahli—gabungan dosen peneliti dan praktisi lapangan—yang berpengalaman mendeploy model Machine Learning untuk solusi dunia nyata.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ========================================== */}
                {/* SECTION 3: Teks Kiri + Timeline + Gambar Kanan */}
                {/* ========================================== */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-20 lg:-mt-55'>
                    
                    {/* Teks Kiri (Order 1) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='lg:col-span-5 text-lg text-slate-300 leading-relaxed space-y-6 text-left order-1'
                    >
                        <p className='text-xl md:text-2xl font-medium leading-snug text-slate-300'>
                            <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cryn-500 to-teal-500">
                                Akses Eksklusif Pekan Ilmiah.
                            </span> Ini bukan kuliah umum biasa. Tiap minggu, kalian akan masuk ke{' '}
                            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                                circle khusus mahasiswa Sains Data
                            </span>{' '}buat mengasah skill kalian sampai advanced.{' '}
                            Kita hadirkan praktisi industri asli. Kalian bisa networking, gali ilmunya lewat{' '}
                            <span className="text-white font-bold decoration-cyan-400 underline decoration-2 underline-offset-4">
                                Live QnA
                            </span>,
                            dan dapatkan insight langsung dari mereka.
                        </p>
                    </motion.div>

                    {/* Timeline Divider (Hidden Mobile) */}
                    <div className="hidden lg:flex lg:col-span-2 justify-center relative h-[400px] order-2">
                         {/* Bisa ditambah garis manual jika mau */}
                    </div>

                    {/* Gambar Kanan (Order 3) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 relative h-auto lg:h-[400px] w-full order-3 mt-8 lg:mt-0 -left-50"
                    >
                        <div className="flex flex-col gap-4 lg:block">
                            {/* 1. Loop Gambar Latar */}
                            {section3Images.map((img, idx) => (
                                <div key={idx} className={`${img.className} bg-slate-800 rounded-xl shadow-2xl overflow-hidden border-2 border-slate-700/50`}>
                                    <Image src={img.src} alt={img.alt} fill className="object-cover opacity-80 lg:scale-110" />
                                </div>
                            ))}

                            {/* 2. Gambar Logo UIN (Spesial) */}
                            <div className="relative w-32 h-32 mx-auto lg:absolute lg:top-27 lg:left-77 lg:w-55 lg:h-35 z-50 mt-4 lg:mt-0">
                                <Image src="/images/logo_uin.png" alt="Logo UIN" fill className="object-contain lg:scale-110" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-500 blur-sm z-20"></div>
        </section>
    )
}