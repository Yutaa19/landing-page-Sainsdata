"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react"; // Pastikan install lucide-react

// === 1. DATABASE MATA KULIAH (14 ITEM) ===
// Edit teksnya di sini, nanti tampilan otomatis berubah.

const materiKuliah = [
  { id: 1, title: "Pemograman Dasar", desc: "D sini Kalian akan belajar struktur dasar Python mulai dari Variabel, Tipe Data, hingga Perulangan (Looping) dengan studi kasus nyata. Kalian juga akan mendapatkan 'Blueprint' Logika yang bisa dipakai di bahasa pemrograman apa pun. Cocok untuk pemula yang belum pernah menyentuh koding sama sekali jadi jangan khawatir jika belum ada background IT. ini adalah fondasi wajib untuk menjadi Data Scientist handal.", image: "/images/ular.png" },
  { id: 2, title: "Aljabar Linear Elementer", desc: "Di Mata Kuliah ini kalian akan belajar cara 'bermain' dengan Sistem Persamaan Linear tanpa pusing, membedah struktur Fungsi Kuadrat untuk mengasah pola pikir, dan melihat keindahan pola dalam Barisan & Deret. Kalian akan diajarkan teknik reverse-engineering soal cerita menjadi model matematika yang sederhana dan elegan.", image: "/images/aljabar.png" },
  { id: 3, title: "Basis Data SQL", desc: "kalian disini akan belajar bagaimana cara merancang arsitektur database yang tahan banting, mampu menangani lonjakan data hingga 10x lipat tanpa downtime. Kita akan gunakan strategi Normalization & Indexing rahasia agar aplikasi kalian tidak lemot, mencakup perancangan Table Structure, Relational Logic, dan optimasi Storage.", image: "/images/database.png" },
  { id: 4, title: "Struktur Data Dan Algoritma", desc: "Di sini kalian akan mempelajari logika dasar penyusunan data—mulai dari Array, Linked List, hingga Hash Map—dan bagaimana raksasa teknologi menggunakannya untuk menciptakan sistem rekomendasi yang super cepat dan akurat. Ini adalah ilmu fundamental untuk merancang aplikasi yang tidak hanya berjalan, tapi juga 'mengerti' keinginan user.", image: "/images/algo.png" },
  { id: 5, title: "Data Visualization & Storytelling", desc: "Di sini kalian akan belajar seni Data Storytelling, bukan sekadar bikin grafik cantik yang kosong makna. Kalian akan dilatih untuk mengubah jutaan baris angka rumit menjadi narasi visual yang persuasif, sehingga orang awam hingga CEO perusahaan pun bisa langsung paham dalam sekali lihat..", image: "/images/visualisasi.png" },
  { id: 6, title: "Machine Learning: Supervised", desc: "Di mata kuliah ini, kalian akan berhenti menjadi pengguna AI dan mulai menjadi Pencipta AI. Kalian akan membangun Supervised Learning Model, teknik yang digunakan perusahaan raksasa untuk memprediksi harga saham, mendeteksi penyakit, hingga mengenali wajah.", image: "/images/machine-learning.png" },
  { id: 7, title: "Pengembangan Aplikasi Web", desc: "Di sini Kalian akan mempelajari framework modern seperti Streamlit atau Flask/Django untuk menyulap kode Python menjadi web apps fungsional. Kami akan ajarkan cara membuat API (Application Programming Interface) agar model prediksi kalian bisa 'ngobrol' dengan website. Ini adalah langkah krusial mengubah kalian dari sekadar Analis Data menjadi Pembuat Produk Teknologi.", image: "/images/web.png" },
  { id: 8, title: "Deep Learning & Neural Networks", desc: "Kalian akan merancang Deep Neural Networks yang memiliki banyak lapisan (layers) untuk mengenali pola abstrak. Kami akan ajarkan logika di balik Backpropagation—cara otak buatan 'belajar dari kesalahan' untuk menjadi semakin pintar setiap detiknya. Ini adalah langkah kalian menuju penciptaan Artificial General Intelligence (AGI) masa depan.", image: "/images/deep-learning.png" },
  { id: 9, title: "Natural Language Processing (NLP)", desc: "Kalian akan mempelajari logika dasar text processing yang menjadi batu bata pertama dalam pembangunan Large Language Models (LLM). Jika cita-cita kalian adalah menciptakan asisten virtual cerdas atau sistem yang mengerti bahasa manusia, maka perjalanan kalian dimulai dari sini. Tanpa menguasai NLP, kalian hanya akan jadi pengguna, bukan pencipta.", image: "/images/LLM.png" },
  { id: 10, title: "Data Mining", desc: "Di era digital, data adalah 'minyak baru', tapi masih mentah dan kotor. Di mata kuliah ini, kalian akan diajarkan cara menjadi Penambang Emas Digital. Kalian akan mempelajari teknik Data Mining untuk menggali tumpukan data raksasa dan menemukan Hidden Gems atau pola tersembunyi yang tidak terlihat oleh mata biasa..", image: "/images/mining.png" },
  { id: 11, title: "Mlops For Data Science", desc: "Kalian akan menguasai teknik Deployment, Scaling, dan Monitoring. Kami akan ajarkan cara membungkus model kalian dengan teknologi Containerization (Docker) dan mengelolanya dengan Kubernetes. Ini adalah skill mahal yang membedakan antara seorang pemula yang hanya bisa coding, dengan seorang Engineer yang bisa membangun sistem AI yang hidup dan tahan banting", image: "/images/Mlops.png" },
  { id: 12, title: "Computer Vision", desc: "Kalian akan belajar membangun arsitektur Convolutional Neural Networks (CNN) untuk mengajarkan mesin membedakan objek secara akurat. Dari mengenali rambu lalu lintas hingga mendeteksi wajah dalam keramaian, kalian akan merancang sistem yang memiliki persepsi visual setara—atau bahkan melebihi—mata manusia.", image: "/images/Vision.png" },
  { id: 13, title: "Analytics Big Data", desc: "Kalian akan mempelajari teknologi Distributed Computing seperti Apache Hadoop dan Spark. Kami akan ajarkan cara memecah tugas berat ke ribuan komputer sekaligus agar pemrosesan data selesai dalam hitungan detik. Ini adalah skill wajib untuk bekerja di perusahaan yang datanya 'tumpah ruah' seperti E-commerce atau Telco.", image: "/images/big-data.png" },
  { id: 14, title: "Cloud Computing", desc: "Kalian akan belajar merancang infrastruktur yang Scalable (bisa membesar otomatis saat ramai) menggunakan platform standar global seperti AWS (Amazon Web Services) atau Google Cloud. Di sini, kalian tidak lagi menyimpan data di harddisk yang rentan rusak, tapi membangun sistem terdistribusi yang aman, cepat, dan always-on 24 jam non-stop.", image: "/images/cloud-computing.png" },
];

export default function Curriculum() {

  const scroolUkt = () => {
    const element = document.getElementById('biaya-ukt')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'})
    }
  }
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      
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
              14 Mata Kuliah inti yang dirancang untuk mengubah pemula menjadi Expert Data Scientist Bahkan masih ada Mata Kuliah lain yang ga kalah keren nya hanya ada di Sains Data UIN SALATIGA.
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
                // Mobile: flex-col (Atas Bawah)
                // Laptop: flex-row (Kiri Kanan)
                // Zig-Zag: Kalau Genap 'flex-row', Kalau Ganjil 'flex-row-reverse'
                className={`
                   relative flex items-center gap-8 lg:gap-16
                   flex-col 
                   ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
              >

                {/* 1. BAGIAN GAMBAR */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800 shadow-2xl">
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
        <button onClick={scroolUkt} className="
            group relative z-50
            flex items-center justify-center gap-3
            px-8 py-4
            bg-gradient-to-br from-blue-500 to-blue-700
            hover:from-blue-400 hover:to-blue-600
            text-white text-lg font-bold
            rounded-2xl
            shadow-[0_0_20px_rgba(148,163,184,0.3)] 
    
            /* Hover: Shadow melebar dan lebih terang (seperti lampu sorot) */
            hover:shadow-[0_10px_40px_rgba(148,163,184,0.6)]
                    
            /* --- BAGIAN PENTING (ANIMASI & CURSOR) --- */
            cursor-pointer               /* Biar kursor jadi tangan */
            transition-all               /* Animasikan semua perubahan */
            duration-300                 /* Durasi 0.3 detik (pas, gak kecepetan/kelambatan) */
            ease-out                     /* Pelembut: Melambat di akhir (biar gak kaku) */
            hover:-translate-y-1         /* Efek naik sedikit */
            active:scale-95
            left-125
            mt-10              /* Efek 'kepencet' (mengecil dikit pas diklik) */
        ">
          {/* BAGIAN IKON */}
   

          Gabung Sekarang
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-50"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-500 blur-sm z-20"></div>
    </section>
  );
}