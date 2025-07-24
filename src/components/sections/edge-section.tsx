import React from 'react';
import { Clock, TrendingUp, Users2, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Save 20+ Hours Weekly",
    description: "Reclaim your time with intelligent automation that handles repetitive tasks flawlessly"
  },
  {
    icon: TrendingUp,
    title: "Higher Conversions",
    description: "AI-powered responses that convert leads at rates human teams struggle to match"
  },
  {
    icon: Users2,
    title: "Enhanced Client Engagement",
    description: "Never miss a lead with instant, personalized responses that feel genuinely human"
  },
  {
    icon: Headphones,
    title: "24/7 Response System",
    description: "Your business never sleeps with round-the-clock automated client communication"
  }
];

const EdgeSection = () => {
  return (
    <section id="edge" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-accent/10 rounded-full text-accent font-medium mb-6">
            Our Competitive Edge
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-8">
            We don't sell bots.{' '}
            <span className="text-gradient-gold">We build you a business assistant.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            While others offer generic chatbots, we craft bespoke automation ecosystems tailored to your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 bg-background rounded-2xl border border-border hover:border-accent/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;