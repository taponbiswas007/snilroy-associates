"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TermsAndConditions from "@/components/TermsAndConditions";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}
