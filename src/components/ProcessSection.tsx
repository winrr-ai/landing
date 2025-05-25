import React from "react";
import {
  CheckCircle,
  Trophy,
  FileText,
  Share2,
  Sparkles,
  Zap,
  TrendingUp,
  BarChart,
} from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-white/[0.02] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-60 h-60 sm:w-80 sm:h-80 bg-white/[0.03] rounded-full blur-3xl animate-float-delayed" />

        {/* Floating Geometric Shapes */}
        <div className="hidden md:block absolute top-20 left-20 w-6 h-6 bg-white/10 rotate-45 animate-spin-slow" />
        <div className="hidden md:block absolute bottom-40 right-32 w-4 h-4 bg-white/20 rounded-full animate-pulse-glow" />
        <div className="hidden md:block absolute top-60 right-20 w-3 h-3 bg-white/15 rotate-45 animate-float" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-card rounded-full text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 animate-pulse-glow">
            <Sparkles size={14} className="text-white sm:w-4 sm:h-4" />
            <span>See How It Works</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            From Daily Wins to{" "}
            <span className="gradient-text-accent">Dream Job</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Discover how EZREZ AI transforms your everyday achievements into
            powerful career advancement tools through our intelligent three-step
            process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32">
          {/* Step 1: Logging Wins */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-card rounded-full text-xs sm:text-sm text-white/80">
                  <Trophy size={14} className="text-yellow-400 sm:w-4 sm:h-4" />
                  <span>Step 1: Capture Your Wins</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Log Every Victory,{" "}
                  <span className="gradient-text">Big or Small</span>
                </h3>

                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  Never let another achievement slip through the cracks. Our
                  intelligent logging system captures your professional wins in
                  real-time, building a comprehensive career narrative.
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: (
                      <CheckCircle
                        size={18}
                        className="text-green-400 sm:w-5 sm:h-5"
                      />
                    ),
                    title: "Smart Achievement Detection",
                    description:
                      "AI recognizes patterns in your work and suggests wins to log",
                  },
                  {
                    icon: (
                      <Zap size={18} className="text-blue-400 sm:w-5 sm:h-5" />
                    ),
                    title: "One-Click Logging",
                    description:
                      "Capture achievements instantly with pre-filled templates",
                  },
                  {
                    icon: (
                      <BarChart
                        size={18}
                        className="text-purple-400 sm:w-5 sm:h-5"
                      />
                    ),
                    title: "Impact Measurement",
                    description:
                      "Automatically quantify your achievements with metrics and data",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 glass-card rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Win Logging Form */}
            <div className="relative">
              <div className="glass-hero rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-6 sm:grid-cols-8 h-full">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="border-r border-white/10" />
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      Log Your Win
                    </h4>
                    <div className="flex items-center gap-2 px-2 sm:px-3 py-1 glass-card rounded-full">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-white/80">Live Demo</span>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-white/80 mb-2">
                        Achievement Title
                      </label>
                      <div className="glass-card rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/20">
                        <input
                          type="text"
                          value="Led cross-functional team to deliver project 2 weeks ahead of schedule"
                          className="w-full bg-transparent text-white placeholder:text-white/50 outline-none text-sm sm:text-base"
                          readOnly
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-white/80 mb-2">
                        Impact & Metrics
                      </label>
                      <div className="glass-card rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/20">
                        <input
                          type="text"
                          value="Saved $50,000 in project costs, improved team efficiency by 25%"
                          className="w-full bg-transparent text-white placeholder:text-white/50 outline-none text-sm sm:text-base"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-white/80 mb-2">
                          Category
                        </label>
                        <div className="glass-card rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/20">
                          <select className="w-full bg-transparent text-white outline-none text-sm sm:text-base">
                            <option>Leadership</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-white/80 mb-2">
                          Priority
                        </label>
                        <div className="glass-card rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/20">
                          <select className="w-full bg-transparent text-white outline-none text-sm sm:text-base">
                            <option>High Impact</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button className="w-full glow-button bg-white text-black hover:bg-white/90 font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base">
                      Save Achievement
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Status Cards - Hidden on small mobile for cleaner look */}
              <div className="hidden sm:block absolute -top-5 -right-3 sm:-top-4 sm:-right-4 glass-card rounded-lg sm:rounded-xl p-2 sm:p-3 animate-float">
                <div className="text-xs sm:text-sm text-white/80">
                  AI Analysis
                </div>
                <div className="text-xs text-white/60 flex items-center gap-1">
                  <TrendingUp
                    size={10}
                    className="text-green-400 sm:w-3 sm:h-3"
                  />
                  95% Impact Score
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 glass-card rounded-lg sm:rounded-xl p-2 sm:p-3 animate-float-delayed">
                <div className="text-xs sm:text-sm text-white/80">
                  Auto-Categorized
                </div>
                <div className="text-xs text-white/60">🏆 Leadership Win</div>
              </div>
            </div>
          </div>

          {/* Step 2: Resume Generation */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content - Resume Preview */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-hero rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      AI-Generated Resume
                    </h4>
                    <div className="flex items-center gap-2 px-2 sm:px-3 py-1 glass-card rounded-full">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-xs text-white/80">
                        Generated in 0.3s
                      </span>
                    </div>
                  </div>

                  {/* Resume Content Preview */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                      <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                        Sarah Johnson
                      </h5>
                      <p className="text-white/60 text-xs sm:text-sm">
                        Senior Project Manager | Tech Innovation
                      </p>
                    </div>

                    <div className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                      <h6 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">
                        Key Achievements
                      </h6>
                      <div className="space-y-1.5 sm:space-y-2">
                        {[
                          "Led cross-functional team to deliver project 2 weeks ahead of schedule, saving $50,000 in costs",
                          "Improved team efficiency by 25% through process optimization and automation",
                          "Managed $2M budget and coordinated 15+ stakeholders across 3 departments",
                        ].map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-white/70 text-xs sm:text-sm"
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <button className="flex-1 glow-button bg-white text-black hover:bg-white/90 font-semibold py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm">
                        Download PDF
                      </button>
                      <button className="flex-1 glass-card border-white/20 text-white hover:bg-white/10 font-semibold py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm">
                        Customize
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="hidden sm:block absolute -top-5 -left-3 sm:-top-4 sm:-left-4 glass-card rounded-lg sm:rounded-xl p-2 sm:p-3 animate-float">
                <div className="text-xs sm:text-sm text-white/80">
                  ATS Score
                </div>
                <div className="text-xs text-white/60 flex items-center gap-1">
                  <CheckCircle
                    size={10}
                    className="text-green-400 sm:w-3 sm:h-3"
                  />
                  98% Compatible
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-card rounded-full text-xs sm:text-sm text-white/80">
                  <FileText size={14} className="text-blue-400 sm:w-4 sm:h-4" />
                  <span>Step 2: Generate Perfect Resumes</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Watch Your Achievements{" "}
                  <span className="gradient-text">Come to Life</span>
                </h3>

                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  Our AI transforms your logged wins into professionally crafted
                  resume content, optimized for both human recruiters and ATS
                  systems.
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: (
                      <Zap
                        size={18}
                        className="text-yellow-400 sm:w-5 sm:h-5"
                      />
                    ),
                    title: "Instant Generation",
                    description:
                      "Create tailored resumes in seconds, not hours",
                  },
                  {
                    icon: (
                      <TrendingUp
                        size={18}
                        className="text-green-400 sm:w-5 sm:h-5"
                      />
                    ),
                    title: "Impact Optimization",
                    description:
                      "AI enhances your achievements with powerful action words and metrics",
                  },
                  {
                    icon: (
                      <CheckCircle
                        size={18}
                        className="text-blue-400 sm:w-5 sm:h-5"
                      />
                    ),
                    title: "ATS-Friendly",
                    description:
                      "Guaranteed to pass through automated screening systems",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 glass-card rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: LinkedIn Posts */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-card rounded-full text-xs sm:text-sm text-white/80">
                  <Share2 size={14} className="text-purple-400 sm:w-4 sm:h-4" />
                  <span>Step 3: Share Your Success</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Amplify Your Wins on{" "}
                  <span className="gradient-text">LinkedIn</span>
                </h3>

                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  Transform your achievements into engaging LinkedIn posts that
                  showcase your expertise and attract opportunities to your
                  professional network.
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: (
                      <Sparkles
                        size={18}
                        className="text-purple-400 sm:w-5 sm:h-5"
                      />
                    ),
                    title: "Engaging Content Creation",
                    description:
                      "AI crafts compelling posts that resonate with your audience",
                  },
                  {
                    icon: (
                      <TrendingUp
                        size={18}
                        className="text-green-400 sm:w-5 sm:h-5"
                      />
                    ),
                    title: "Viral Potential Analysis",
                    description: "Optimize for maximum engagement and reach",
                  },
                  {
                    icon: (
                      <Share2
                        size={18}
                        className="text-blue-400 sm:w-5 sm:h-5"
                      />
                    ),
                    title: "Smart Scheduling",
                    description:
                      "Post at optimal times for your industry and network",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 glass-card rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - LinkedIn Post Preview */}
            <div className="relative">
              <div className="glass-hero rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      LinkedIn Post
                    </h4>
                    <div className="flex items-center gap-2 px-2 sm:px-3 py-1 glass-card rounded-full">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-xs text-white/80">
                        Ready to Share
                      </span>
                    </div>
                  </div>

                  <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                    {/* Post Header */}
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm sm:text-base">
                          SJ
                        </span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white text-sm sm:text-base">
                          Sarah Johnson
                        </h5>
                        <p className="text-white/60 text-xs sm:text-sm">
                          Senior Project Manager at TechCorp
                        </p>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="text-white/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      <p>
                        🚀 Proud to share that our team just delivered our
                        biggest project 2 weeks ahead of schedule!
                      </p>
                      <br />
                      <p>Key highlights:</p>
                      <p>✅ Saved $50,000 in project costs</p>
                      <p>✅ Improved team efficiency by 25%</p>
                      <p>✅ Coordinated 15+ stakeholders seamlessly</p>
                      <br />
                      <p>
                        Amazing what can happen when you combine great people
                        with the right processes! 💪
                      </p>
                      <br />
                      <p className="text-blue-400">
                        #ProjectManagement #Leadership #TeamWork
                      </p>
                    </div>

                    {/* Post Actions */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 sm:gap-4 text-white/60 text-xs sm:text-sm">
                        <span>👍 24 likes</span>
                        <span>💬 8 comments</span>
                        <span className="hidden sm:inline">🔄 3 shares</span>
                      </div>
                      <button className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-colors">
                        View Post
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
                    <button className="flex-1 glow-button bg-white text-black hover:bg-white/90 font-semibold py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm">
                      Post to LinkedIn
                    </button>
                    <button className="flex-1 glass-card border-white/20 text-white hover:bg-white/10 font-semibold py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm">
                      Schedule Later
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Analytics */}
              <div className="hidden sm:block absolute -top-5 -right-3 sm:-top-4 sm:-right-4 glass-card rounded-lg sm:rounded-xl p-2 sm:p-3 animate-float">
                <div className="text-xs sm:text-sm text-white/80">
                  Predicted Reach
                </div>
                <div className="text-xs text-white/60 flex items-center gap-1">
                  <TrendingUp
                    size={10}
                    className="text-green-400 sm:w-3 sm:h-3"
                  />
                  2.5K+ impressions
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 glass-card rounded-lg sm:rounded-xl p-2 sm:p-3 animate-float-delayed">
                <div className="text-xs sm:text-sm text-white/80">
                  Engagement Score
                </div>
                <div className="text-xs text-white/60">🔥 High Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
