# 🎓 Landing Page Program Studi Sains Data - UIN Salatiga

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Repositori ini berisi *source code* untuk antarmuka web resmi (Landing Page) Program Studi Sains Data, Universitas Islam Negeri (UIN) Salatiga. Proyek ini dibangun menggunakan **Next.js (App Router)** dan **TypeScript** untuk menghasilkan antarmuka yang modern, cepat, responsif, dan *SEO-friendly*.

🌐 **Live Website:** [sainsdatauinsalatiga.com](https://sainsdatauinsalatiga.com/)

## ✨ Fitur Utama (Key Features)

- **Modern & Responsive UI:** Desain antarmuka yang optimal di berbagai perangkat (Mobile, Tablet, Desktop) untuk memberikan pengalaman pengguna (UX) terbaik bagi calon mahasiswa maupun pengunjung.
- **Component-Driven Architecture:** Dibangun dengan pendekatan modular. Setiap bagian web (Navbar, Profil, Kurikulum, FAQ, dll) dipisah menjadi komponen independen yang *reusable* dan mudah di-*maintenance*.
- **SEO Optimized:** Memanfaatkan fitur *Server-Side Rendering (SSR)* dan *Static Site Generation (SSG)* dari Next.js untuk memastikan situs mudah ditemukan oleh mesin pencari.
- **Static Assets & Media Optimization:** Pengelolaan aset gambar dan ikon secara efisien menggunakan tag `<Image>` bawaan Next.js untuk *loading* yang lebih cepat.
- **Type-Safe:** Seluruh *codebase* ditulis dalam **TypeScript**, meminimalisir *runtime error* dan meningkatkan kualitas kode secara keseluruhan.

## 🛠️ Teknologi yang Digunakan (Tech Stack)

* **Framework:** Next.js (v14/15 App Router)
* **Library UI:** React.js
* **Bahasa Pemrograman:** TypeScript
* **Styling:** CSS / Tailwind CSS (berdasarkan global.css)
* **Package Manager:** npm
* **Deployment:** Vercel / Custom Domain Integration

## 🗂️ Struktur Proyek (Architecture Overview)

Proyek ini menggunakan struktur **App Router** modern dari Next.js. Logika antarmuka dipisahkan ke dalam folder `components` untuk menjaga kebersihan *codebase*.

```text
├── app/
│   ├── components/      # Reusable UI Components
│   │   ├── Navbar.tsx      # Navigasi utama
│   │   ├── Opening.tsx     # Hero section/Landing area
│   │   ├── Profile.tsx     # Profil Program Studi
│   │   ├── kurikulum.tsx   # Informasi struktur kurikulum
│   │   ├── akreditasi.tsx  # Informasi status akreditasi
│   │   ├── ukt.tsx         # Informasi biaya pendidikan (UKT)
│   │   ├── event.tsx & webinar.tsx # Modul acara dan seminar
│   │   ├── Faq.tsx         # Frequently Asked Questions
│   │   └── Footer.tsx      # Bagian kaki website
│   ├── globals.css      # Global stylesheet
│   ├── layout.tsx       # Root layout configuration (Metadata, Fonts)
│   ├── page.tsx         # Entry point (Main Landing Page)
│   ├── robots.ts        # Konfigurasi SEO bot
│   └── sitemap.ts       # Konfigurasi Sitemap XML
├── public/              # Direktori aset statis (Gambar, Ikon, SVG)
├── next.config.ts       # Konfigurasi Next.js
├── tsconfig.json        # Konfigurasi TypeScript
└── package.json         # Dependensi proyek
