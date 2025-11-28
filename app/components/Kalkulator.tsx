"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Calculator, RefreshCcw } from "lucide-react";

export default function Fee() {
  
  // --- LOGIC KALKULATOR UKT ---
  const [income, setIncome] = useState<string>("");
  const [result, setResult] = useState<{ grade: string; cost: string; note: string } | null>(null);

  // Fungsi Format Rupiah (biar ada titiknya pas ngetik)
  const formatRupiah = (value: string) => {
    const numberString = value.replace(/[^,\d]/g, "").toString();
    const split = numberString.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }
    return split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  };

  const handleCalculate = () => {
    // Hapus titik untuk perhitungan logika
    const cleanValue = parseInt(income.replace(/\./g, "") || "0");

    // LOGIKA PENENTUAN UKT (CONTOH ESTIMASI)
    if (cleanValue <= 500000) {
      setResult({ grade: "Kelompok I", cost: "Rp 400.000", note: "Sangat Terjangkau!" });
    } else if (cleanValue <= 2000000) {
      setResult({ grade: "Kelompok II", cost: "Rp 2.000.000", note: "Masih di bawah rata-rata nasional." });
    } else if (cleanValue <= 3500000) {
      setResult({ grade: "Kelompok III", cost: "Rp 3.500.000", note: "Standard UKT UIN." });
    } else if (cleanValue <= 5000000) {
      setResult({ grade: "Kelompok IV", cost: "Rp 4.000.000", note: "Investasi wajar untuk karir masa depan." });
    } else {
      setResult({ grade: "Kelompok V-VII", cost: "Rp 5.000.000++", note: "Fasilitas premium untuk masa depan." });
    }
  };

  const handleReset = () => {
    setIncome("");
    setResult(null);
  };

  // Data Benefit (Sama seperti sebelumnya)
  const benefits = [
    { title: "Akses Lab HPC & Server AI", desc: "Training model berat tanpa laptop jebol." },
    { title: "Sertifikasi Kompetensi Global", desc: "Lulus langsung dapat pendamping ijazah." },
    { title: "Mentoring Praktisi Expert", desc: "Belajar real case industry, bukan teori doang." },
    { title: "Free WiFi 24 Jam", desc: "Akses internet kampus super kencang." },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Uang Kuliah Tunggal (UKT) <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Fleksibel & Terjangkau
                </span>
            </h2>
            <p className="text-slate-400 text-lg">
                Biaya kuliah disesuaikan dengan kemampuan ekonomi orang tua. Cek estimasinya di sini!
            </p>
        </div>

        {/* === WRAPPER UTAMA === */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-[#0a0a0a] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 flex flex-col lg:flex-row"
        >
            
            {/* ================================================= */}
            {/* BAGIAN KIRI: KALKULATOR UKT CANGGIH               */}
            {/* ================================================= */}
            <div className="w-full lg:w-5/12 relative p-8 md:p-10 flex flex-col justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/50">
                
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-[80px] pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/30">
                            <Calculator className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Simulasi UKT</h3>
                    </div>

                    {/* --- AREA HASIL (ANIMATED) --- */}
                    <div className="min-h-[140px] mb-6">
                        <AnimatePresence mode="wait">
                            {result ? (
                                <motion.div 
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-center border border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                                >
                                    <p className="text-blue-100 text-sm font-medium mb-1">Estimasi Kategori Kamu:</p>
                                    <h2 className="text-4xl font-black text-white mb-1">{result.cost}</h2>
                                    <div className="inline-block bg-black/30 px-3 py-1 rounded-full text-xs text-white font-bold mb-2 border border-white/10">
                                        {result.grade}
                                    </div>
                                    <p className="text-xs text-blue-100 italic">"{result.note}"</p>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-700 rounded-2xl p-6 text-slate-500"
                                >
                                    <p className="text-sm">Hasil estimasi akan muncul di sini</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* --- AREA INPUT --- */}
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm text-slate-300 font-medium mb-2 block">
                                Penghasilan Orang Tua (Per Bulan)
                            </label>
                            <div className="relative group">
                                <span className="absolute left-4 top-3.5 text-slate-400 font-bold group-focus-within:text-blue-400 transition-colors">Rp</span>
                                <input 
                                    type="text" 
                                    value={income}
                                    onChange={(e) => setIncome(formatRupiah(e.target.value))}
                                    placeholder="Contoh: 3.000.000" 
                                    className="w-full bg-black border border-slate-700 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-bold text-lg placeholder:text-slate-600 placeholder:font-normal"
                                />
                            </div>
                        </div>

                        {/* BUTTONS */}
                        {!result ? (
                            <button 
                                onClick={handleCalculate}
                                disabled={!income}
                                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                Hitung Estimasi <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button 
                                onClick={handleReset}
                                className="w-full py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 border border-slate-700"
                            >
                                Hitung Ulang <RefreshCcw className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                    
                    <p className="text-[10px] text-slate-500 mt-6 text-center">
                        *Ini hanya simulasi berdasarkan data tahun lalu. Keputusan final ditentukan oleh tim verifikasi UIN Salatiga.
                    </p>
                </div>
            </div>


            {/* ================================================= */}
            {/* BAGIAN KANAN: LIST BENEFIT (Tetap Sama)           */}
            {/* ================================================= */}
            <div className="w-full lg:w-7/12 bg-[#0f0f0f] p-8 md:p-12">
                <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Kenapa UKT ini Worth It?
                    </span>
                </h4>

                <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-600/50 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Check className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" strokeWidth={3} />
                                </div>
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-blue-300 transition-colors">
                                    {benefit.title}
                                </h5>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-800">
                    <p className="text-slate-400 text-sm">
                        Masih bingung soal biaya? <span className="text-blue-400 cursor-pointer hover:underline hover:text-blue-300 font-semibold">Chat Admin Prodi Sekarang</span>
                    </p>
                </div>
            </div>

        </motion.div>

      </div>
    </section>
  );
}