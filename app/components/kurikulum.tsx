"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react"; 
// === 1. DATABASE MATA KULIAH (14 ITEM) ===

const materiKuliah = [
  { id: 1, title: "Matematika dan Statistik", desc: "Matematika dan statistika adalah bahasa universal di balik setiap teknologi cerdas. Di sini, Anda akan belajar memodelkan ketidakpastian menjadi prediksi yang akurat. Bagi calon Data Scientist, penguasaan statistik adalah pondasi mutlak untuk membangun model prediktif yang valid dan tidak bias. Sementara bagi Data Analyst, kemampuan inferensi statistik memungkinkan Anda mengubah sekumpulan angka menjadi rekomendasi pengambilan keputusan yang tepat. Kemampuan inilah yang akan membedakan Anda dari praktisi biasa menjadi seorang ahli data yang mampu memberikan insight bermakna di tengah ketidakpastian pasar global.", image: "/images/MATEMATIKA.png" },
  { id: 2, title: "Computing and Computer Fundamentals (CCF)", desc: "Memahami cara kerja komputer adalah langkah awal menjadi talenta digital yang kompeten. Melalui Computing Fundamentals, Anda akan mempelajari arsitektur sistem, sistem operasi, hingga infrastruktur cloud yang menjadi tulang punggung industri digital. Kompetensi ini sangat krusial bagi Data Engineer untuk merancang sistem pemrosesan data yang cepat dan stabil. Selain itu, bagi calon Web Developer, pemahaman mendalam tentang bagaimana perangkat lunak berinteraksi dengan perangkat keras akan membantu Anda menciptakan aplikasi yang efisien dan responsif. Jadilah profesional yang tidak hanya bisa menggunakan teknologi, tetapi benar-benar menguasai mesin di baliknya", image: "/images/COMPUTER.png" },
  { id: 3, title: "Artificial Intelligence (AI)", desc: "Berkaitan dengan Artificial Intelligence, Anda akan belajar merancang sistem yang mampu meniru kecerdasan manusia, mulai dari pengenalan suara hingga pengambilan keputusan otonom. Sebagai calon Data Scientist, Anda akan dibekali kemampuan untuk menciptakan solusi cerdas yang mampu  mengotomasi kerja industri. Fokus pada logika fuzzy, jaringan saraf tiruan, dan sistem pakar akan menjadikan Anda inovator yang sangat dicari oleh perusahaan teknologi global (Big Tech) untuk mewujudkan sistem yang lebih pintar dan efisien.", image: "/images/AI.png" },
  { id: 4, title: "Big Data Systems (BDS)", desc: "Dunia saat ini memiliki keanekaragaman data, maka kemampuan mengelola data skala besar adalah kekuatan utama. Big Data Systems mengajarkan Anda cara membangun dan mengelola ekosistem data raksasa menggunakan teknologi terkini. Ini adalah keahlian inti seorang Data Engineer yang bertugas memastikan aliran data tetap lancar meski volume, variasi, dan kecepatannya meningkat drastis. Dengan menguasai sistem terdistribusi, Anda akan menjadi arsitek di balik layar yang memungkinkan perusahaan besar mengolah informasi masif secara real-time untuk keunggulan kompetitif mereka.", image: "/images/big_data.png" },
  { id: 5, title: "Data Acquisition, Management, and Governance (DG)", desc: "Data yang berkualitas lahir dari pengelolaan yang profesional. Di sini, Anda akan mempelajari seni akuisisi data, teknik ETL (Extract, Transform, Load), hingga tata kelola data yang etis. Bagi seorang Data Engineer, bidang ini sangat penting untuk memastikan bahwa data yang digunakan perusahaan akurat, bersih, dan mematuhi regulasi hukum. Saat ini Perusahaan global sangat membutuhkan ahli yang mampu menjaga integritas data sebagai aset paling berharga mereka. Kuasai manajemen data untuk menjadi profesional yang menjamin transparansi dan keandalan informasi di setiap level organisasi.", image: "/images/data_akuisisi.png" },
  { id: 6, title: "Data Mining (DM)", desc: "Anda akan mempelajari berbagai teknik untuk menemukan pola tersembunyi, tren pasar, dan anomali yang tidak terlihat oleh mata awam. Kompetensi ini adalah senjata rahasia bagi seorang Data Analyst untuk memberikan wawasan mendalam tentang perilaku konsumen atau deteksi kecurangan (fraud detection). Dengan menguasai algoritma klasifikasi, klastering, dan asosiasi, Anda akan menjadi pakar yang mampu mengubah data historis menjadi strategi masa depan yang menguntungkan bagi pengguna.", image: "/images/ml.png" },
  { id: 7, title: "Data Privacy, Security, Integrity, and Analysis for Security (DP)", desc: "Di tengah meningkatnya ancaman siber saat ini, keamanan data adalah prioritas tertinggi. Bidang ini membekali Anda dengan teknik kriptografi, keamanan jaringan, dan pemahaman mendalam tentang UU Pelindungan Data Pribadi (PDP). Bagi calon Security Data Analyst, Anda akan belajar bagaimana melindungi aset digital dari peretasan sekaligus menjaga integritasnya. Memahami etika privasi bukan hanya soal teknis, tetapi tentang membangun kepercayaan publik. Jadilah garda terdepan pelindung data yang memastikan inovasi teknologi tetap berjalan selaras dengan keamanan dan privasi pengguna.", image: "/images/security.png" },
  { id: 8, title: "Machine Learning (ML)", desc: "Machine Learning adalah inti dari perkembangan Sains Data modern. Anda akan belajar bagaimana melatih mesin untuk belajar dari pengalaman tanpa diprogram secara eksplisit. Bidang ini adalah jalur utama bagi calon Data Scientist untuk membangun model prediksi, sistem rekomendasi seperti Netflix, hingga teknologi pemrosesan bahasa alami (NLP). Dengan menguasai supervised, unsupervised, hingga deep learning, Anda akan memiliki kemampuan untuk menciptakan solusi otomatis yang cerdas dan adaptif terhadap perubahan data yang dinamis di industri 5.0.", image: "/images/machine.png" },
  { id: 9, title: "Programming, Data Structures, and Algorithms (PDA)", desc: "Pemrograman, Struktur Data, dan Algoritma adalah bahasa universal untuk membangun solusi digital yang cerdas. Di sini, Anda belajar menulis kode yang tidak hanya sekadar berjalan, tetapi juga optimal dalam kecepatan dan penggunaan memori. Bagi Data Scientist, keahlian ini krusial untuk melatih model AI yang efisien, sementara bagi Data Analyst, logika pemrograman yang kuat memudahkan manipulasi data yang kompleks dalam sekejap. Sebagai calon Data Engineer, Anda akan mengandalkan pemahaman algoritma untuk membangun jalur data raksasa yang stabil. Sedangkan bagi Web Developer, bidang ini adalah kunci untuk menciptakan aplikasi yang responsif dan berkinerja tinggi.", image: "/images/algoritma.png" },
  { id: 10, title: "Software Development and Maintenance (SDM)", desc: "Membangun perangkat lunak bukan sekadar coding, melainkan tentang siklus hidup sistem yang berkelanjutan. Di sini, Anda akan belajar metodologi Agile, DevOps, hingga pengujian perangkat lunak berstandar industri. Kompetensi ini sangat vital bagi Web Developer agar mampu menciptakan produk digital yang berkualitas tinggi, minim bug, dan mudah dirawat. Dengan memahami Software Development Life Cycle (SDLC), Anda akan menjadi profesional yang mampu bekerja dalam tim skala besar untuk menghadirkan solusi teknologi yang stabil dan berdampak luas.", image: "/images/software.png" },
  { id: 11, title: "Analysis and Presentation (AP)", desc: "Wawasan data menjadi kurang bermakna jika tidak disertai dengan komunikasi yang efektif. Melalui Analysis and Presentation, Anda akan menguasai teknik Data Storytelling dan visualisasi data yang interaktif. Seorang Data Analyst yang sukses adalah mereka yang mampu menerjemahkan grafik rumit menjadi narasi yang mudah dipahami oleh pengambil keputusan. Anda akan belajar menggunakan tools visualisasi terkini untuk mempresentasikan temuan Anda secara persuasif. Jadilah jembatan komunikasi antara data dan kebijakan, dan pastikan setiap analisis yang Anda buat dapat dipahami secara efektif oleh pengguna.", image: "/images/presentasi.png" },
  { id: 12, title: "Professionalism (PR)", desc: "Menjadi talenta digital menuntut lebih dari sekadar keahlian teknis, dibutuhkan profesionalisme dan etika kerja standar global. Bidang ini membekali Anda dengan kemampuan kolaborasi tim, etika profesi, dan pemahaman tentang standar industri internasional. Bagi Anda yang mengincar karier sebagai Consultant atau Project Manager, sikap profesional adalah kunci untuk memenangkan kepercayaan klien dan memimpin proyek skala besar. Kami mempersiapkan Anda menjadi lulusan yang siap kerja, memiliki integritas tinggi, dan mampu beradaptasi di lingkungan kerja multikultural yang dinamis.", image: "/images/profesional.png" },
  { id: 13, title: "Pembentukan Karakter", desc: "Melalui program pembentukan karakter, kami mengasah leadership, resiliensi, dan empati Anda didasarkan pada 7 (tujuh) nilai utama Islam wasathiyyah yaitu tawassuth (moderasi), i’tidal (adil), tasamuh (toleransi), syura (musyawarah), islah (perbaikan), qudwah (keteladanan), dan muwathanah (kewarganegaraan) . Di dunia kerja, seorang talenta digital tidak hanya bekerja dengan mesin, tetapi juga memimpin manusia. Kami ingin Anda menjadi inovator yang memiliki integritas moral dan semangat pantang menyerah. Dengan karakter yang kuat, Anda tidak hanya akan sukses secara karier, tetapi juga menjadi agen perubahan yang membawa dampak positif bagi masyarakat dan lingkungan melalui teknologi.", image: "/images/pembentukan.png" },
  { id: 14, title: "Penelitian dan Pengembangan (R&D)", desc: "Sains Data adalah bidang yang terus berkembang, dan rasa ingin tahu adalah kuncinya. Di sini, Anda akan belajar metodologi penelitian untuk mengeksplorasi dan menghasilkan solusi yang cerdas dan inovatif. Bagi Anda yang berjiwa inovator, bidang R&D membuka peluang karier sebagai profesional yang mampu mempublikasikan temuan di tingkat internasional. Anda akan diajak untuk berpikir kritis, melakukan eksperimen data, dan berkontribusi pada kemajuan ilmu pengetahuan. Jadilah penemu masa depan yang selalu selangkah lebih maju dalam mengembangkan teknologi terbaru!.", image: "/images/rnd.png" },
];

const Curriculum = () => {

  const scroolUkt = () => {
    const element = document.getElementById('biaya-ukt')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="relative py-20 bg-black overflow-hidden selection:bg-cyan-500 selection:text-white">

      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}>

          {/* Judul Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kurikulum <span className="text-blue-500">Mengikuti Perkembangan Teknologi</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Kurikulum Berbasis OBE (Outcome Based Education) yang relevan dengan kebutuhan industry, dunia usaha, dan dunia kerja global.
            </p>
          </div>


        </motion.div>

        {/* === FONDASI PEMBUNGKUS UTAMA (TIMELINE) === */}
        <div className="relative flex flex-col gap-12 lg:gap-24">

          {/* Garis Tengah (Hanya muncul di Laptop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 -translate-x-1/2" />

          {/* === LOOPING DATA 14 ITEM === */}
          {materiKuliah.map((item, index) => {

            // Logic Zig-Zag: Apakah ini urutan Genap? (0, 2, 4...)
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.1 }} // Stagger animation

                // === LAYOUT RESPONSIVE ===
                className={`
                   relative flex items-center gap-8 lg:gap-16
                   flex-col 
                   ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
              >

                {/* 1. BAGIAN GAMBAR */}
                <div className="w-full lg:w-1/2 relative group">
         
                  <div className="relative w-full aspect-video lg:aspect-auto lg:h-[300px] rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover scale-105 transition-transform duration-500"
                    />
                  </div>




                  {/* Dekorasi Garis ke Tengah (Hiasan Desktop) */}
                  <div className={`hidden lg:block absolute top-1/2 w-8 h-[2px] bg-blue-500/50 
                    ${isEven ? "-right-8" : "-left-8"}`}
                  />
                </div>

                {/* 2. IKON TENGAH (Checklist) */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                </div>

                {/* 3. BAGIAN TEKS */}
                <div className={`w-full lg:w-1/2 text-center ${isEven ? "lg:text-left" : "lg:text-right"}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    <span className="text-blue-500">#{item.id}.</span> {item.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>
        {/* 1. Wrapper Pembungkus (Wajib ada biar tengah) */}
        <div className="w-full flex justify-center relative z-50">

         <button
            onClick={scroolUkt}
            className="group relative cursor-pointer flex items-center justify-center gap-3 px-8 py-4 mt-10 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Gabung Sekarang
            <ArrowUpRight className="w-5 h-5" />
          </button>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-50"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-500 blur-sm z-20"></div>
    </section>
  );
}

export default Curriculum