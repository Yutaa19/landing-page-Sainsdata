import Link from "next/link";
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Opening";
import Profile from "@/app/components/Profile";
import Kurikulum from "@/app/components/kurikulum";

export default function Home() {
  return (
   <main className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero/>
      <Profile />
      <Kurikulum />
      {/* Placeholder buat section selanjutnya biar bisa discroll */}
      <div className="h-screen bg-surface border-t border-white/5 flex items-center justify-center text-textMuted">
        <p>Section Problem & Solution (Coming Soon...)</p>
      </div>
    </main>
  );
}