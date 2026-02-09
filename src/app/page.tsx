// Local Components
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Legacy from "@/components/layout/Legacy";
import Genres from "@/components/layout/Genres";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between pt-26 sm:items-start">
      <Navbar/>
      <Hero/>
      <About/>
      <Legacy/>
      <Genres/>
      <Footer/>
    </main>
  );
}
