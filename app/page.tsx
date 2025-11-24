"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import StorySection from "@/components/StorySection";
import TrainingSection from "@/components/TrainingSection";
import FeaturedClassesSection from "@/components/FeaturedClassesSection";
import MembershipSection from "@/components/MembershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <Hero />
      <MetricsStrip />
      <StorySection />
      <TrainingSection />
      <FeaturedClassesSection />
      <MembershipSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

