"use client";
import { NavbarSimple } from "@/app/components/NavBar";
import { SectionProvider } from "@/app/context/sectionContext";
import SectionHome from "./Section/SectionHome";
import SectionContactUs from "@/app/Section/SectionContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import FabButton from "./components/FabButton";
import { useEffect } from "react";
import SectionExperian from "./Section/SectionExperian";
import SectionProjects from "./Section/SectionProjects";
import { FooterWithLogo } from "./components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <SectionProvider>
      <NavbarSimple />
      <SectionHome />
      <SectionExperian />
      <SectionProjects />
      <SectionContactUs />
      <FooterWithLogo />
      <FabButton />
    </SectionProvider>
  );
}
