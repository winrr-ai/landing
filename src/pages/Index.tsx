
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-purple-50">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
