import React, { useState, useEffect } from 'react';
import { Button } from './button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold text-foreground">
            Titan Automation
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#edge" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Edge
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>

          <Button 
            variant="gold" 
            size="lg"
            onClick={() => window.open('https://calendly.com/nikhil211884/30min', '_blank')}
            className="hover-scale"
          >
            Book Discovery Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;