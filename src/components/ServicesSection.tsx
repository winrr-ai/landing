
import React from 'react';
import { Calendar, Award, Zap, FileCheck, Briefcase, Target } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass-card p-6 rounded-2xl flex flex-col items-start transition-all hover:translate-y-[-5px]">
      <div className="p-3 rounded-xl bg-gradient-to-br from-winrr-primary to-winrr-secondary text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-winrr-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar size={24} />,
      title: "Capture Achievement Moments",
      description: "Document your wins as they happen—from major milestones to small daily victories that shape your professional story."
    },
    {
      icon: <Award size={24} />,
      title: "AI-Crafted Impact Statements",
      description: "Our intelligent system transforms your raw accomplishments into compelling, metrics-driven bullet points that recruiters love."
    },
    {
      icon: <Zap size={24} />,
      title: "Instant Resume Creation",
      description: "Select relevant achievements and watch as your perfectly structured resume assembles itself in seconds—not hours."
    },
    {
      icon: <FileCheck size={24} />,
      title: "ATS-Optimized Export",
      description: "One click delivers a perfectly formatted, applicant tracking system-friendly PDF that gets past digital gatekeepers every time."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Career Growth Portfolio",
      description: "Build a comprehensive archive of your professional journey—your accomplishments become your career story over time."
    },
    {
      icon: <Target size={24} />,
      title: "Job-Specific Targeting",
      description: "Our AI intelligently adapts your achievements to match each job description, dramatically increasing your interview chances."
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-winrr-primary to-winrr-secondary bg-clip-text text-transparent">
            Features That Transform Your Career
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Winrr.ai provides everything you need to document, showcase, and leverage your professional achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
