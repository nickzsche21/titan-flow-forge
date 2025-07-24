import React from 'react';
import { MessageSquare, Users, Phone, Zap } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: "Auto DM Replies",
    description: "Intelligent Instagram lead responses that convert prospects into clients 24/7"
  },
  {
    icon: Users,
    title: "Lead Capturing + CRM",
    description: "Seamless lead capture systems with automated CRM pipeline management"
  },
  {
    icon: Phone,
    title: "WhatsApp Automation",
    description: "Smart WhatsApp replies and follow-up sequences that never miss an opportunity"
  },
  {
    icon: Zap,
    title: "Funnel & Appointments",
    description: "Complete automation of your booking funnels and appointment scheduling"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Custom automation workflows designed for premium businesses who value their time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-luxury hover-lift group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;