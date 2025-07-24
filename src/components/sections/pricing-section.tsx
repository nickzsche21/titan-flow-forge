import React from 'react';
import { Button } from '../ui/button';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Starter Flow",
    description: "Perfect for solopreneurs and small teams starting their automation journey",
    features: [
      "Basic automation setup",
      "Single platform integration",
      "Standard response templates",
      "Email support"
    ],
    highlight: false
  },
  {
    name: "Business Engine",
    description: "Comprehensive automation for growing businesses with multiple touchpoints",
    features: [
      "Multi-platform automation",
      "Advanced AI responses",
      "CRM integration",
      "Custom workflows",
      "Priority support"
    ],
    highlight: true
  },
  {
    name: "Titan Pro",
    description: "Enterprise-level automation for high-volume, premium operations",
    features: [
      "Unlimited integrations",
      "White-label solutions",
      "Custom AI training",
      "Dedicated success manager",
      "24/7 phone support"
    ],
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            Built For Scale.{' '}
            <span className="text-gradient-gold">Priced For Growth.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Investment details discussed in your personalized discovery call
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-elegant ${
                plan.highlight 
                  ? 'border-accent bg-accent/5 scale-105' 
                  : 'border-border bg-background hover:border-accent/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-black px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? "gold" : "luxuryOutline"}
                size="lg"
                onClick={() => window.open('https://calendly.com/nikhil211884/30min', '_blank')}
                className="w-full group"
              >
                Book Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Pricing discussed in 1:1 Discovery Call
          </p>
          <Button 
            variant="gold" 
            size="xl"
            onClick={() => window.open('https://calendly.com/nikhil211884/30min', '_blank')}
            className="hover-scale"
          >
            Schedule Your Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;