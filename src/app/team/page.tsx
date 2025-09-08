"use client";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamExpertise from "@/components/team/TeamExpertise";
import TeamHero from "@/components/team/TeamHero";
import TeamMembersGrid from "@/components/team/TeamMembersGrid";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <TeamHero />
      <TeamMembersGrid />
      <TeamExpertise />
      <ConsultationCTA />
      <Footer />
    </div>
  );
}
