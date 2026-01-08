import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Opening"; 
import Footer from "@/app/components/Footer"; // Footer sebaiknya static agar struktur bawah halaman jelas
import dynamic from "next/dynamic";

// Gunakan Loading skeleton sederhana untuk mencegah CLS (Layout Shift)
const LoadingFallback = () => <div className="py-20 bg-black min-h-[50vh] animate-pulse"></div>;

// Component di bawah fold (tidak terlihat saat pertama load)
const Profile = dynamic(() => import("@/app/components/Profile"), { loading: () => <LoadingFallback /> });
const Kurikulum = dynamic(() => import("@/app/components/kurikulum"), { loading: () => <LoadingFallback /> });
const Events = dynamic(() => import('@/app/components/event'));
const ExclusiveWebinar = dynamic(() => import('@/app/components/webinar'));
const TuitionFee = dynamic(() => import("@/app/components/ukt"));
const FAQ = dynamic(() => import("@/app/components/Faq"));
const Rectorsambutan = dynamic(() => import("@/app/components/Rektor"));

export default function Home() {
  return (
   <main className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      {/* Hero dirender langsung (bukan dynamic) untuk LCP Score */}
      <Hero /> 
      
      {/* Render komponen ini saat user scroll mendekat */}
      <div className="flex flex-col gap-0">
        <Profile />
        <Kurikulum />
        <Events />
        <ExclusiveWebinar />
        <TuitionFee />
        <FAQ />
        <Rectorsambutan />
      </div>
      
      <Footer />
    </main>
  );
}