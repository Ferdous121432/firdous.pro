import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Image from "next/image";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto  sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Hero2 /> */}
        <Skills />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
