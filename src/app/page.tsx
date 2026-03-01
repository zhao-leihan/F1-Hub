import EntryAnimation from "@/components/EntryAnimation";
import Hero from "@/components/Hero";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";
import LazyContent from "@/components/LazyContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[--color-f1-red] selection:text-white">
      <ScrollProgressBar />
      <EntryAnimation />
      <Hero />
      <LazyContent />
      <BackToTop />
    </main>
  );
}
