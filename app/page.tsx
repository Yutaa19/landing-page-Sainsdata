import Link from "next/link";
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Opening";
import Profile from "@/app/components/Profile";
import Kurikulum from "@/app/components/kurikulum";
import Events from '@/app/components/event';
import ExclusiveWebinar from '@/app/components/webinar'
import TuitionFee from "@/app/components/ukt";
import FAQ from "@/app/components/Faq";
import Rectorsambutan from "@/app/components/Rektor";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
   <main className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero/>
      <Profile />
      <Kurikulum />
      <Events />
      <ExclusiveWebinar />
      <TuitionFee />
      <FAQ />
      <Rectorsambutan />
      <Footer />
      
      {/* Placeholder buat section selanjutnya biar bisa discroll */}
    </main>
  );
}