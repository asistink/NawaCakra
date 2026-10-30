import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VillageProfile from "@/components/sections/VillageProfile";
import Problems from "@/components/sections/Problems";
import Programs from "@/components/sections/Programs";
import Impact from "@/components/sections/Impact";
import Timeline from "@/components/sections/Timeline";
import Sponsors from "@/components/sections/Sponsors";
import Team from "@/components/sections/Team";
import Documentation from "@/components/sections/Documentation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VillageProfile />
        <Problems />
        <Programs />
        <Impact />
        <Timeline />
        <Sponsors />
        <Team />
        <Documentation />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
