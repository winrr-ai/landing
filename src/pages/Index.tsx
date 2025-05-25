import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
