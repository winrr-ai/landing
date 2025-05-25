import React from "react";
import {
  Calendar,
  Award,
  Zap,
  FileCheck,
  Briefcase,
  Target,
  BarChart,
  Globe,
  Sparkles,
  TrendingUp,
  Layers,
  Rocket,
  Users,
  Shield,
} from "lucide-react";

interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  featured?: boolean;
  stats?: { label: string; value: string };
  gradient?: string;
  size?: "small" | "medium" | "large" | "wide" | "tall";
}

const BentoCard = ({
  icon,
  title,
  description,
  className = "",
  featured = false,
  stats,
  gradient,
  size = "medium",
}: BentoCardProps) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-1 md:row-span-2",
    large: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
    wide: "col-span-1 md:col-span-2 row-span-1",
    tall: "col-span-1 row-span-2",
  };

  return (
    <div
      className={`bento-card group cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      <div className="h-full flex flex-col relative p-4 sm:p-6 lg:p-8">
        {/* Background Gradient Overlay */}
        {gradient && (
          <div
            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${gradient}`}
          />
        )}

        {/* Floating Corner Element */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />

        {/* Icon */}
        <div className="relative z-10 mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 rounded-xl bg-white/5 text-white w-fit group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 backdrop-blur-xl border border-white/10">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-white/70 leading-relaxed text-sm sm:text-base lg:text-lg mb-4">
            {description}
          </p>

          {/* Featured content */}
          {featured && (
            <div className="mt-auto">
              <div className="glass-card rounded-xl p-4 group-hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-white/60">Live Preview</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <TrendingUp size={14} className="text-green-400" />
                  </div>
                </div>
                <p className="text-sm text-white font-medium mb-3">
                  "Led team to 25% revenue increase through process
                  optimization"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-grow bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-3/4 animate-pulse" />
                  </div>
                  <span className="text-xs text-white/60 whitespace-nowrap">
                    AI Match: 95%
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          {stats && (
            <div className="mt-auto">
              <div className="glass-card rounded-xl p-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stats.value}
                </div>
                <div className="text-sm text-white/60">{stats.label}</div>
              </div>
            </div>
          )}
        </div>

        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full" />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar size={28} />,
      title: "Capture Achievement Moments",
      description:
        "Document your wins as they happen—from major milestones to small daily victories that shape your professional story.",
      size: "large" as const,
      featured: true,
      gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    },
    {
      icon: <Award size={24} />,
      title: "AI-Crafted Impact",
      description:
        "Transform raw accomplishments into compelling, metrics-driven bullet points.",
      size: "medium" as const,
      stats: { label: "Accuracy Rate", value: "97%" },
      gradient: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    },
    {
      icon: <Zap size={24} />,
      title: "Instant Generation",
      description:
        "Watch your perfectly structured resume assemble itself in seconds.",
      size: "small" as const,
      stats: { label: "Speed", value: "0.3s" },
      gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: <FileCheck size={24} />,
      title: "ATS-Optimized Export",
      description:
        "Get past digital gatekeepers with perfectly formatted, ATS-friendly PDFs.",
      size: "wide" as const,
      gradient: "bg-gradient-to-br from-pink-500/20 to-red-500/20",
    },
    {
      icon: <Target size={24} />,
      title: "Job Targeting",
      description:
        "AI intelligently adapts your achievements to match specific job descriptions.",
      size: "small" as const,
      stats: { label: "Match Rate", value: "89%" },
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description:
        "Share and collaborate on career development with mentors and peers.",
      size: "medium" as const,
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Templates",
      description:
        "Access region-specific resume formats that match local hiring expectations worldwide.",
      size: "wide" as const,
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: <Shield size={24} />,
      title: "Privacy First",
      description:
        "Your data stays secure with enterprise-grade encryption and privacy controls.",
      size: "small" as const,
      gradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-72 sm:h-72 bg-white/[0.02] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-white/[0.03] rounded-full blur-3xl animate-float-delayed" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-r border-white/10" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-white/80 mb-6 animate-pulse-glow">
            <Sparkles size={16} className="text-white" />
            <span>Powerful AI Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Features That{" "}
            <span className="gradient-text-accent">Transform</span> Your Career
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            EZREZ AI provides everything you need to document, showcase, and
            leverage your professional achievements with cutting-edge
            technology.
          </p>
        </div>

        {/* Redesigned Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-min">
          {services.map((service, index) => (
            <BentoCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              size={service.size}
              featured={service.featured}
              stats={service.stats}
              gradient={service.gradient}
            />
          ))}
        </div>

        {/* Enhanced Status Section */}
        <div className="mt-16 sm:mt-20">
          <div className="glass-hero rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                  </div>
                  <span className="text-white font-medium">System Status</span>
                </div>
                <div className="text-2xl font-bold text-white">Operational</div>
                <div className="text-sm text-white/60">99.9% uptime</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Users size={16} className="text-blue-400" />
                  <span className="text-white font-medium">Active Users</span>
                </div>
                <div className="text-2xl font-bold text-white">1,000+</div>
                <div className="text-sm text-white/60">Growing daily</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Rocket size={16} className="text-purple-400" />
                  <span className="text-white font-medium">Version</span>
                </div>
                <div className="text-2xl font-bold text-white">v2.1.0</div>
                <div className="text-sm text-white/60">Latest features</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
