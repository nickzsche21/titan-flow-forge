import React from 'react';
import Navigation from '../components/ui/navigation';
import HeroSection from '../components/sections/hero-section';
import ServicesSection from '../components/sections/services-section';
import EdgeSection from '../components/sections/edge-section';
import PricingSection from '../components/sections/pricing-section';
import FooterSection from '../components/sections/footer-section';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <EdgeSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
};

export default Index;
