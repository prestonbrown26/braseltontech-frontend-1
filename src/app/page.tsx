import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-between">
      <div className="bg-background">
        <NavBar />
        <HeroSection />
        <FeaturesSection />
        <CallToActionSection />
      </div>
      <Footer />
    </main>
  );
}
