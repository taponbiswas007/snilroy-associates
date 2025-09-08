"use client";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <ServicesHero />
      <ServicesOverview />
      <ServiceProcess />
      <WhyChooseUs />
      <ConsultationCTA />
      <Footer />
    </div>
  );
}
