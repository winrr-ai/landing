
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan = ({ name, price, description, features, isPopular = false }: PlanProps) => {
  return (
    <div className={`glass-card rounded-2xl p-6 flex flex-col h-full relative ${
      isPopular ? 'border-2 border-winrr-accent' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-winrr-accent text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-3">
          <span className="text-3xl font-bold">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-winrr-primary mt-1">
                <Check size={16} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        variant={isPopular ? "default" : "outline"} 
        className={isPopular ? "bg-gradient-primary w-full" : "w-full"}
      >
        Coming Soon
      </Button>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      description: "Perfect for getting started with achievement tracking.",
      features: [
        "Daily Achievement Logging",
        "Basic AI Bullet Enhancement",
        "Single Resume Template"
      ]
    },
    {
      name: "Pro",
      price: "$9.99",
      description: "Essential for dedicated job seekers.",
      features: [
        "Unlimited Achievement Storage",
        "Premium AI-Powered Impact Statements",
        "5 Tailored Resume Exports",
        "Multiple Professional Templates",
        "Job Description Matching"
      ],
      isPopular: true
    },
    {
      name: "Premium",
      price: "$19.99",
      description: "The ultimate career acceleration toolkit.",
      features: [
        "All Pro Features",
        "Unlimited Resume Customizations",
        "Advanced Job Keyword Analysis",
        "Priority Support Access",
        "AI-Powered Cover Letter Generation"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-mesh-gradient relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-winrr-primary to-winrr-secondary bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan to advance your career journey with Winrr.ai
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
