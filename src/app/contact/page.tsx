"use client";
import ContactHero from "@/components/contact/ContactHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Footer />
    </div>
  );
}
