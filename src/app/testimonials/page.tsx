"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RatingForm from "@/components/RatingForm";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <TestimonialsHero />
      <TestimonialsGrid />
      <RatingForm />
      <Footer />
    </div>
  );
}
