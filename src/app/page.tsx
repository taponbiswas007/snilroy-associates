"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import AboutFirm from "@/components/AboutFirm";
import ClientTestimonials from "@/components/ClientTestimonials";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <AboutFirm />
      <ClientTestimonials />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
