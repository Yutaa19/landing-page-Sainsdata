import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Opening"; // Hero tetap import biasa agar cepat
import dynamic from "next/dynamic"; // Import dynamic

// Ubah komponen di bawah ini jadi dynamic import
const Profile = dynamic(() => import("@/app/components/Profile"));
const Kurikulum = dynamic(() => import("@/app/components/kurikulum"));
const Events = dynamic(() => import('@/app/components/event'));
const ExclusiveWebinar = dynamic(() => import('@/app/components/webinar'));
const TuitionFee = dynamic(() => import("@/app/components/ukt"));
const FAQ = dynamic(() => import("@/app/components/Faq"));
const Rectorsambutan = dynamic(() => import("@/app/components/Rektor"));
const Footer = dynamic(() => import("@/app/components/Footer"));

export default function Home() {
  return (
   <main className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero /> {/* Ini akan dimuat duluan */}
      
      {/* Sisanya akan dimuat belakangan sambil user scroll */}
      <Profile />
      <Kurikulum />
      <Events />
      <ExclusiveWebinar />
      <TuitionFee />
      <FAQ />
      <Rectorsambutan />
      <Footer />
    </main>
  );
}