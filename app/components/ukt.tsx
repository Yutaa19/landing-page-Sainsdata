"use client";
import Link from "next/link";
import { motion } from "framer-motion";// Tambah ini
import { Check, ArrowRight } from "lucide-react"; // Tambah Calculator

export default function TuitionFee() {
    // Data Benefit UKT
    const benefits = [
        { title: "Golongan Pertama I", desc: "0 - 400,000" },
        { title: "Golongan Kedua II", desc: "3,000,000" },
        { title: "Golongan Ketiga III", desc: "3,500,000" },
        { title: "Golongan Keempat IV", desc: "4,000,000" },
        { title: "Golongan Kelima V", desc: "4,500,000" },
        { title: "Golongan Keenam VI", desc: "5,000,000" },
        { title: "Golongan Keenam VII", desc: "5,500,000" },
        { title: "Golongan Keenam VIII(KIP)", desc: "2,400,000" },
    ];

    // --- STATE UNTUK KALKULATOR ---

    return (
        <section id="biaya-ukt" className="py-20 bg-black relative overflow-hidden">

            {/* Background Glow Hiasan (Ungu/Biru) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* JUDUL SECTION */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Uang Kuliah Tunggal (UKT) <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Terjangkau Se-Indonesia
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Investasi leher ke atas terbaik dengan harga yang masuk akal.
                    </p>
                </div>

                {/* === PRICING CARD WRAPPER === */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto bg-[#0a0a0a] border border-blue-800 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 flex flex-col lg:flex-row"
                >

                    {/* === BAGIAN KIRI: HARGA & CTA (GLOWING BLUE) === */}
                    <div className="w-full lg:w-5/12 relative p-8 md:p-12 flex flex-col justify-center overflow-hidden">

                        {/* Background Blue Gradient di Kiri */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-black z-0"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-10 z-0"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-2">DI Mulai Dengan Harga UKT Golongan Pertama</h3>
                           

                            {/* Harga Coret (Perbandingan Kampus Swasta/Lain) */}
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-red-500 line-through text-lg font-semibold">Rp 15.000.000</span>
                                <span className="bg-red-500/10 text-red-400 text-xs px-2 py-1 rounded border border-red-500/20">Kampus Lain</span>
                            </div>

                            {/* Harga Utama */}
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                                Rp 400.000
                            </h2>
                             <p className="text-slate-300 mb-6">Biaya per Semester (6 Bulan)</p>
                            <p className="text-blue-300 font-medium mb-8">
                                Hanya ± Rp 2.300 / hari Lebih murah di bandingkan kuota scrolling media sosial seharian
                            </p>

                   
                            {/* Tombol CTA */}
                            <Link href="https://pmb.uinsalatiga.ac.id/#jalur-masuk" className="
                        w-full group relative cursor-pointer
                        flex items-center justify-center gap-3
                        px-8 py-4
                        bg-gradient-to-r from-blue-600 to-blue-500
                        hover:from-blue-500 hover:to-blue-400
                        text-white font-bold text-lg 
                        rounded-xl
                        shadow-[0_4px_20px_rgba(37,99,235,0.4)]
                        hover:shadow-[0_6px_30px_rgba(37,99,235,0.6)]
                        hover:-translate-y-1 active:scale-95
                        transition-all duration-300
                    ">
                                Daftar Sekarang
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <p className="text-xs text-slate-500 mt-4 text-center">
                                *Nominal UKT disesuaikan dengan kemampuan ekonomi orang tua (Grade 1 - 7).
                            </p>
                           
              
                        </div>
                        
                    </div>


                    {/* === BAGIAN KANAN: BENEFITS LIST === */}
                    <div className="w-full lg:w-7/12 bg-[#000000] p-8 md:p-12 border-l border-blue-800">
                        <h4 className="mb-10 flex items-center gap-3">
                            {/* Aksen Garis Kecil (Opsional, biar makin manis) */}
                            <span className="w-2 h-10 bg-white-500 rounded-full"></span>

                            {/* Judul Besar dengan Gradasi */}
                            <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text font-bold text-white mb-2 leading-tight">
                                Kelompok Uang Tunggal <br />
                                Kuliah (UKT)
                            </span>
                        </h4>
                       {/* GANTI 'space-y-6' MENJADI GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
    
    {benefits.map((benefit, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
        >
            {/* Ikon Centang Biru */}
            <div className="flex-shrink-0 mt-2"> {/* mt-2 biar pas sama teks besar */}
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
            </div>

            {/* Teks Benefit */}
            <div>
                {/* JUDUL */}
                <h5 className="text-white font-bold text-2xl leading-tight mb-2">
                    {benefit.title}
                </h5>

                {/* DESKRIPSI */}
                <p className="text-slate-300 text-lg font-medium leading-relaxed">
                    {benefit.desc}
                </p>
            </div>
        </motion.div>
    ))}
</div>

                        {/* Footer Kanan */}
                        <div className="mt-10 pt-8 border-t border-slate-800">
                            <p className="text-slate-400 text-sm">
                                Masih ragu? Konsultasikan biaya kuliahmu dengan admin kami. <span className="text-blue-400 cursor-pointer hover:underline">Hubungi Admin</span>
                            </p>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}