"use client";
import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import ClientSuccess from "@/components/about/ClientSuccess";
import FoundersStory from "@/components/about/FoundersStory";
import TeamExcellence from "@/components/about/TeamExcellence";
import ValuesPhilosophy from "@/components/about/ValuesPhilosophy";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <FoundersStory />
      <ValuesPhilosophy />
      <TeamExcellence />
      <ClientSuccess />
      <AboutCTA />
      <Footer />
    </div>
  );
}
