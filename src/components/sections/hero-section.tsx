import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '../../assets/hero-bg.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated background elements with premium effects */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * -0.2}px)`, animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse-slow"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
      </div>

      <div className="relative container mx-auto px-6 text-center pt-24 md:pt-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-8 leading-tight animate-fade-in">
            Automate Your Work.{' '}
            <span className="text-gradient-gold animate-glow">Scale With Ease.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Titan Automation builds custom AI-powered systems to free up your time & maximize your business output.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button 
              variant="gold" 
              size="xl"
              onClick={() => window.open('https://calendly.com/nikhil211884/30min', '_blank')}
              className="hover-scale text-lg px-12 py-6"
            >
              Book Discovery Call
            </Button>
            
            <Button 
              variant="luxuryOutline" 
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover-scale text-lg px-12 py-6"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;