import React from 'react';
import { Button } from '../ui/button';
import { Mail, Phone, Globe, ArrowRight } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Brand & CTA */}
          <div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Join elite businesses who've automated their way to freedom. 
              Your custom automation system is just one call away.
            </p>
            <Button 
              variant="gold" 
              size="xl"
              onClick={() => window.open('https://calendly.com/nikhil211884/30min', '_blank')}
              className="group"
            >
              Schedule Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-16">
            <h3 className="text-2xl font-playfair font-semibold mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Website</p>
                  <a 
                    href="https://titanautomation.site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    titanautomation.site
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+917800709475" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    +91 78007 09475
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <div className="space-y-1">
                    <a 
                      href="mailto:nikhil211884@gmail.com" 
                      className="block text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      nikhil211884@gmail.com
                    </a>
                    <a 
                      href="mailto:titanmediaoffice@gmail.com" 
                      className="block text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      titanmediaoffice@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-playfair text-2xl font-bold">
              Titan Automation
            </div>
            
            <p className="text-primary-foreground/60 text-center md:text-right">
              © 2024 Titan Automation. Empowering premium businesses through intelligent automation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;