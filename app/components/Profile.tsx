"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Data Karir
const careers = [
  {
    title: "Data Engineer",
    image: "/images/data_enginerr.png",
    description: "Profesional yang yang bertanggung jawab untuk merancang, mengembangkan, dan memelihara arsitektur manajemen data baik berupa database, datawarehouse, maupun sistem pemrosesan data berskala besar.",
  
    bgGradient: "from-blue-900 to-slate-900", 
    border: "hover:border-blue-400"
  },
  {
    title: "Data Analyst",
    image: "/images/p_data_analyst.png",
    description: "Profesional yang bertanggung jawab untuk mengumpulkan, mengelola, dan menganalisis data untuk memberikan wawasan yang berguna kepada perusahaan atau organisasi dengan tugas analisis eksploratif data, pembuatan model statistik, penggunaan algoritma pembelajaran mesin, pengujian hipotesis, dan visualisasi data yang dapat digunakan untuk pengambilan keputusan untuk menyelesaikan permasalahan di berbagai bidang industri.",
    bgGradient: "from-cyan-900 to-slate-900",
    border: "hover:border-cyan-400"
  },
  {
    title: "Data Scientist",
    image: "/images/data_scientist.png",
    description: "Profesional yang memiliki pemahaman yang mendalam tentang teori statistik, matematika, dan ilmu komputer, serta mampu menerapkan pengetahuan tersebut untuk mengekstraksi wawasan dari data dengan tugas mengembangkan model prediktif, melakukan analisis statistik, dan mengimplementasikan teknik machine learning untuk memahami data yang kompleks untuk menyelesaikan permasalahan di berbagai bidang industri.",
    bgGradient: "from-indigo-900 to-slate-900",
    border: "hover:border-indigo-400"
  },
  {
    title: "Web Developer",
    image: "/images/web_developer.png",
    description: "Profesional yang fokus pada pembangunan dan pemeliharaan infrastruktur data yang kokoh dan skalabel serta bertanggung jawab untuk merancang dan membangun sistem penyimpanan data, mengelola aliran data dari berbagai sumber, memastikan keamanan dan integritas data, serta membangun pipeline data yang efisien.",
    bgGradient: "from-sky-900 to-slate-900",
    border: "hover:border-sky-400"
  }
];

const Career = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Ambient Glow (Biru Luas) */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-blue-900/20 blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Peluang Karier <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
              Program Studi Sains Data
            </span>
          </motion.h2>
          <p className="text-slate-400 text-lg">
            Pilih jalur karier masa depanmu dengan skill teknologi terkini.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-6"> {/* gap-y-20 diperbesar agar gambar tidak tabrakan */}
          {careers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // STYLE CARD UTAMA:
              className={`
                  group relative 
                  bg-gradient-to-b ${item.bgGradient} /* Background Gradient Biru */
                  border border-white/10 ${item.border}
                  p-6 pt-0 /* pt-0 karena gambar akan naik ke atas */
                  rounded-3xl 
                  overflow-visible /* WAJIB: Agar gambar bisa keluar */
                  transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20
              `}
            >
              
              {/* AREA GAMBAR (POP-OUT STATIC) */}
              <div className="relative w-full h-56 -mt-16 mb-4 flex items-center justify-center z-20">
                  <div className="relative w-[100%] h-[100%]"> {/* Size Gambar Diperbesar 150% */}
                      <Image 
                          src={item.image}
                          alt={item.title}
                          fill
                          priority={index < 2}
                          className="
                              object-contain 
                              drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] /* Shadow Tebal */
                              transition-transform duration-500
                          "
                          sizes="(max-width: 768px) 100vw, 33vw"
                      />
                  </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="relative z-10 mt-2">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                </h3>
                <p className="text-blue-100/70 text-sm leading-relaxed mb-6 min-h-[60px]">
                    {item.description}
                </p>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-50"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-500 blur-sm z-20"></div>
    </section>
  );
}

export default Career