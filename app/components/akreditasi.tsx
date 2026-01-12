"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Award } from "lucide-react";

const Akreditasi = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">

            {/* Background Ambient Glow (Emas/Kuning karena Akreditasi biasanya identik dengan prestasi) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* ======================================= */}
                    {/* BAGIAN KIRI: TEKS & INFO                */}
                    {/* ======================================= */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Label Kecil */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold mb-6">
                                <Award className="w-4 h-4" />
                                AKREDiTASI PROGRAM STUDI SAINS DATA
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Terakreditasi <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cryn-400 to-teal-400">
                                    "BAIK"
                                </span> Oleh LAM INFOKOM
                            </h2>

                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Program Studi Sains Data UIN Salatiga telah memenuhi standar mutu pendidikan nasional yang ditetapkan oleh Lembaga Akreditasi Mandiri Informatika dan Komputer.
                            </p>
                        </motion.div>
                    </div>

                    {/* ======================================= */}
                    {/* BAGIAN KANAN: GAMBAR SERTIFIKAT         */}
                    {/* ======================================= */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">

                        {/* Efek Glow di Belakang Sertifikat */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-blue-500/20 blur-2xl -z-10 rounded-xl transform rotate-3 scale-105"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            {/* Frame Sertifikat */}
                            <div className="relative w-full aspect-video lg:aspect-auto lg:h-[300px] rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800 shadow-2xl">
                                <div className="relative w-[400px] h-[290px] md:w-[500px] md:h-[350px]">
                                    {/* GANTI src INI DENGAN FILE GAMBAR ANDA */}
                                    <Image
                                        src="/images/akreditasi.jpg"
                                        alt="aljabar"
                                        fill
                                        className="object-cover scale-105 transition-transform duration-500"
                                    />
                                </div>

                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Akreditasi