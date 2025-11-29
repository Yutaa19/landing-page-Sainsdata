"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

// === DATA PERTANYAAN (Riset Khusus Siswa Kelas 12) ===
const faqData = [
  {
    question: "Kak, aku belum bisa koding sama sekali, apakah bisa masuk Sains Data?",
    answer: "Bisa banget! Kurikulum kami dirancang dari nol (Zero to Hero). Di semester awal, kamu akan diajarkan logika dasar pemrograman. Jadi, kamu tidak perlu punya background IT sebelumnya. Yang penting punya kemauan belajar dan rasa penasaran yang tinggi!",
  },
  {
    question: "Apakah harus jago Matematika biar bisa survive di jurusan ini?",
    answer: "Gak harus jenius matematika kok. Kamu cuma perlu paham logika dasar. Matematika di Sains Data itu 'Matematika Terapan', artinya kita pakai rumus untuk memecahkan masalah nyata, bukan cuma hitung-hitungan abstrak di kertas. Kita juga banyak pakai software bantuan.",
  },
  {
    question: "Lulusan Sains Data kerjanya jadi apa aja? Susah cari kerja gak?",
    answer: "Justru ini profesi paling dicari dekade ini! Lulusan kita bisa jadi Data Scientist, AI Engineer, Data Analyst, hingga Business Intelligence. Gajinya di atas rata-rata fresh graduate lain dan bisa kerja remote (WFH) untuk perusahaan luar negeri.",
  },
  {
    question: "Apakah harus punya Laptop Spek Dewa (Gaming) buat kuliah?",
    answer: "Tidak wajib! Di UIN Salatiga, kita punya fasilitas Lab Komputer HPC (High Performance Computing) dan Mempunyai Server Sendiri. Jadi untuk tugas berat, kamu bisa pakai fasilitas kampus. Laptop spek menengah (Core i3/i5 atau Ryzen 3/5) sudah cukup untuk coding dasar.",
  },
  {
    question: "Apa bedanya Sains Data UIN Salatiga dengan Teknik Informatika biasa?",
    answer: "Kalau TI fokus bikin aplikasi, Sains Data fokus mengolah data di dalam aplikasi itu untuk jadi keputusan cerdas (AI). Di UIN Salatiga, kita punya keunggulan biaya UKT yang jauh lebih terjangkau dengan kurikulum yang setara standar industri global.",
  },
];

export default function FAQ() {
  // State untuk melacak pertanyaan mana yang sedang terbuka
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fungsi toggle buka/tutup
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Linkwa = () => {
    <Link href="https://wa.me/6285799350924"></Link>
  }

  return (
  <section className="py-20 bg-black relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* GRID LAYOUT RESPONSIVE:
            - Mobile: 1 Kolom (Tumpuk ke bawah)
            - Laptop (lg): 12 Kolom (Kiri Kanan)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* === BAGIAN KIRI: HEADLINE & CTA === */}
          {/* Di Mobile: relative (ikut scroll). Di Laptop: sticky (nempel saat discroll) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32">
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Frequently <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Asked Questions
              </span>
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              Masih ragu atau punya pertanyaan spesifik tentang masa depanmu di Sains Data? Jangan dipendam sendiri.
            </p>

            {/* Tombol WA */}
            <Link href="https://wa.me/6285799350924" className="
                group relative z-50 cursor-pointer inline-flex
                items-center gap-3
                px-6 py-3 md:px-8 md:py-4
                bg-blue-600 hover:bg-blue-500
                text-white font-bold text-base md:text-lg 
                rounded-full 
                shadow-[0_0_20px_rgba(37,99,235,0.5)]
                hover:shadow-[0_10px_30px_rgba(37,99,235,0.8)]
                transition-all duration-300 ease-out
                hover:-translate-y-1 active:scale-95
            ">
                <MessageCircle className="w-5 h-5" />
                <span>Langsung Aja Tanya!</span>
            </Link>
          </div>


          {/* === BAGIAN KANAN: LIST PERTANYAAN (ACCORDION) === */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    border-b border-slate-800 rounded-xl transition-colors duration-300
                    ${isOpen ? 'bg-slate-900/30' : 'bg-transparent'}
                  `}
                >
                  {/* Header Pertanyaan */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start md:items-center justify-between py-5 px-4 text-left focus:outline-none"
                  >
                    <span className={`text-base md:text-xl font-semibold transition-colors duration-300 pr-4 ${isOpen ? 'text-blue-400' : 'text-slate-200'}`}>
                      {item.question}
                    </span>
                    {/* Ikon Plus/Minus (Flex Shrink agar tidak gepeng) */}
                    <span className="flex-shrink-0 mt-1 md:mt-0 text-slate-400">
                      {isOpen ? <Minus className="w-5 h-5 md:w-6 md:h-6 text-blue-400" /> : <Plus className="w-5 h-5 md:w-6 md:h-6" />}
                    </span>
                  </button>

                  {/* Isi Jawaban */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-6 text-slate-400 leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}