"use client";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PracticeAreasGrid from "@/components/practiceArea/PracticeAreasGrid";
import PracticeAreasHero from "@/components/practiceArea/PracticeAreasHero";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <PracticeAreasHero />
      <PracticeAreasGrid />
      <ConsultationCTA />
      <Footer />
    </div>
  );
}
