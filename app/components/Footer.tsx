"use client";

import Image from "next/image";
import { motion } from "framer-motion";// Ikon WA
import { Mail, Globe, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden ">

            {/* Background Glow Hiasan (Opsional - Biar nyambung sama section atas) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="container mx-auto px-6 text-center z-10 relative">

                {/* === LOGO & BRANDING === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center mb-8"
                >
                    {/* Logo UIN */}
                    <div className="relative w-20 h-20 mb-4">
                        <Image
                            src="/images/logo_uin.png"
                            alt="Logo UIN Salatiga"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Nama Prodi (Style Akademi Crypto) */}
                    <h3 className="text-2xl font-bold tracking-wider text-white uppercase">
                        <span className="font-light text-slate-400">PROGRAM STUDI </span>
                        Sains Data <span className="font-light text-slate-400">UIN Salatiga</span>
                    </h3>
                </motion.div>


                {/* === CONTACT INFO === */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2 text-slate-400 text-sm md:text-base mb-10"
                >
                    {/* Container Utama: Flexbox agar sejajar */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-sm text-slate-400">

                        {/* 1. INSTAGRAM */}
                        <Link
                            href="https://instagram.com/sainsdata_uinsalatiga"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                        >
                            <FaInstagram className="w-4 h-4" />
                            <span>sainsdata_uinsalatiga</span>
                        </Link>

                        {/* Separator (Hanya muncul di layar lebar) */}
                        <s className="hidden md:inline text-slate-700">|</s>

                        {/* 2. EMAIL */}
                        <p
                            className="flex items-center gap-2"
                        >
                            <Mail className="w-4 h-4" />
                            <span>sd@uinsalatiga.ac.id</span>
                        </p>

                        {/* Separator */}
                        <span className="hidden md:inline text-slate-700">|</span>

                        {/* Separator */}
                        <span className="hidden md:inline text-slate-700">|</span>

                        {/* 4. WEBSITE */}
                        <Link
                            href="https://tarbiyah.uinsalatiga.ac.id/snd/"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span>tarbiyah.uinsalatiga.ac.id/snd</span>
                        </Link>

                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2 text-slate-400 text-sm md:text-base mb-10"
                >
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-sm text-slate-400">
                        {/* 5. ALAMAT (Dibuat Link ke Google Maps) */}
                        <Link
                            href="https://maps.app.goo.gl/YicSg4Pru7qgnick6"
                            target="_blank"
                            className="w-full basis-full flex items-center justify-center gap-2 hover:text-blue-400 transition-colors"
                        >
                            <MapPin className="w-4 h-4 shrink-0" />
                            <span className="text-left md:text-left leading-tight">Jalan Lingkar Salatiga Km. 2, Pulutan, Sidorejo, Kota Salatiga, Jawa Tengah</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

        </footer>
    );
}

export default Footer