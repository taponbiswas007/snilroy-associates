"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
