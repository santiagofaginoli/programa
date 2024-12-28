import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Publicidad from '@/components/Publicidad'
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mx-auto text-center">
        <h2 className="mb-2 py-10">PROGRAMA DIGITAL</h2>
      </div>
      <Publicidad />
      <Footer />
    </main>
  );
}
