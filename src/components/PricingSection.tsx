import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  icon?: React.ReactNode;
  gradient?: string;
}

const PricingPlan = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  icon,
  gradient,
}: PlanProps) => {
  return (
    <div className="relative">
      {/* Popular Badge - Fixed positioning */}
      {isPopular && (
        <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 z-20 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 animate-pulse-glow">
          <Crown size={14} className="text-yellow-400 sm:w-4 sm:h-4" />
          <span className="text-white">Most Popular</span>
        </div>
      )}

      <div
        className={`bento-card p-6 sm:p-8 flex flex-col h-full relative transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 group ${
          isPopular
            ? "border-white/30 bg-gradient-to-br from-white/10 to-white/5 mt-6 sm:mt-8"
            : ""
        }`}
      >
        {/* Background Gradient */}
        {gradient && (
          <div
            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${gradient}`}
          />
        )}

        {/* Plan Header */}
        <div className="mb-6 sm:mb-8 relative z-10">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            {icon && (
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/10 text-white backdrop-blur-xl border border-white/20">
                {icon}
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-bold text-white">{name}</h3>
          </div>

          <div className="mb-3 sm:mb-4">
            <span className="text-4xl sm:text-5xl font-bold text-white">
              {price}
            </span>
            {price !== "$0" && (
              <span className="text-white/60 ml-2 text-sm sm:text-base">
                /month
              </span>
            )}
          </div>

          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>

        {/* Features List */}
        <div className="flex-grow mb-6 sm:mb-8">
          <ul className="space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 sm:gap-3 group/item"
              >
                <div className="mt-0.5 sm:mt-1 p-1 rounded-full bg-white/10 group-hover/item:bg-white/20 transition-all duration-300 flex-shrink-0">
                  <Check size={14} className="text-green-400 sm:w-4 sm:h-4" />
                </div>
                <span className="text-white/90 leading-relaxed group-hover/item:text-white transition-colors duration-300 text-sm sm:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          variant={isPopular ? "default" : "outline"}
          className={`w-full text-sm sm:text-base py-3 sm:py-4 font-semibold transition-all duration-300 ${
            isPopular
              ? "glow-button bg-white text-black hover:bg-white/90 hover:scale-105"
              : "glass-card border-white/20 text-white hover:bg-white/10 hover:border-white/40"
          }`}
        >
          {isPopular ? "Get Started Now" : "Coming Soon"}
          {isPopular && <Zap size={14} className="ml-2 sm:w-4 sm:h-4" />}
        </Button>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description:
        "Perfect for getting started with achievement tracking and basic resume building.",
      features: [
        "Daily Achievement Logging",
        "Basic AI Bullet Enhancement",
        "Single Resume Template",
        "Email Support",
        "7-day History",
      ],
      icon: <Sparkles size={20} className="sm:w-6 sm:h-6" />,
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Professional",
      price: "$9.99",
      description:
        "Essential tools for dedicated job seekers and career advancement.",
      features: [
        "Unlimited Achievement Storage",
        "Premium AI-Powered Impact Statements",
        "5 Tailored Resume Exports",
        "Multiple Professional Templates",
        "Job Description Matching",
        "Priority Support",
        "Advanced Analytics",
      ],
      isPopular: true,
      icon: <Crown size={20} className="sm:w-6 sm:h-6" />,
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Enterprise",
      price: "$19.99",
      description:
        "The ultimate career acceleration toolkit for professionals and teams.",
      features: [
        "All Professional Features",
        "Unlimited Resume Customizations",
        "Advanced Job Keyword Analysis",
        "24/7 Priority Support",
        "AI-Powered Cover Letter Generation",
        "Personal Career Coach",
        "Team Collaboration Tools",
        "Custom Branding",
      ],
      icon: <Zap size={20} className="sm:w-6 sm:h-6" />,
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-white/[0.02] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-60 h-60 sm:w-80 sm:h-80 bg-white/[0.03] rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-card rounded-full text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 animate-pulse-glow">
            <Crown size={14} className="text-yellow-400 sm:w-4 sm:h-4" />
            <span>Flexible Pricing</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Choose Your <span className="gradient-text-accent">Plan</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Select the perfect plan to advance your career journey with EzRez
            AI's powerful features and AI-driven insights.
          </p>
        </div>

        {/* Pricing Grid - Mobile-first responsive with proper spacing for popular badge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto pt-6 sm:pt-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              icon={plan.icon}
              gradient={plan.gradient}
            />
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="glass-hero rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
              Looking for enterprise features, custom integrations, or volume
              pricing? We'd love to discuss how EZREZ AI can fit your
              organization's needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="outline"
                className="glass-card border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 text-sm sm:text-base"
              >
                Schedule Demo
              </Button>
              <Button className="glow-button bg-white text-black hover:bg-white/90 px-6 sm:px-8 text-sm sm:text-base">
                Contact Sales
              </Button>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-400 sm:w-4 sm:h-4" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-400 sm:w-4 sm:h-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
