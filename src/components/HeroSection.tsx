import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Star, Sparkles, Zap, Play } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ParticleField = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; delay: number; left: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
      left: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mrbqonej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description:
            "You've secured your early access. We'll be in touch soon!",
        });
        setEmail("");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background pt-20 md:pt-28 lg:pt-30 overflow-hidden morph-bg">
      {/* Animated Background Elements */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />
      <ParticleField />

      {/* Glassmorphic Container */}
      <div className="glass-hero rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 relative order-2 lg:order-1">
            {/* Floating Icon */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center animate-float">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-card rounded-full text-xs sm:text-sm text-white/80 animate-pulse-glow">
                <Zap size={14} className="text-white sm:w-4 sm:h-4" />
                <span>AI-Powered Resume Revolution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-white">
                Turn Everyday Victories Into{" "}
                <span className="gradient-text">Job-Winning Resumes</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                Never let your achievements go unnoticed again. EZREZ AI
                captures your professional wins and transforms them into
                tailored, interview-landing resumes.
              </p>
            </div>

            {/* Glassmorphic Email Form */}
            <div className="space-y-3 sm:space-y-4">
              <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-xl text-sm sm:text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    type="submit"
                    className="glow-button bg-white text-black hover:bg-white/90 font-semibold px-4 sm:px-6 text-sm sm:text-base whitespace-nowrap"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get Early Access"}
                  </Button>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Gift size={14} className="animate-pulse flex-shrink-0" />
                  <span>
                    Limited opportunity: First 50 members receive one month of
                    Pro access free
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Social Proof */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border-2 border-white/20 backdrop-blur-xl animate-float"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-yellow-400 text-yellow-400 sm:w-4 sm:h-4"
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-white/70">
                      Trusted by 1,000+ professionals
                    </span>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    98%
                  </div>
                  <div className="text-xs text-white/60">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Video (Hidden on Mobile) */}
          <div className="relative order-1 lg:order-2 hidden lg:block">
            {/* Animated Border Container */}
            <div className="video-glass">
              <div className="aspect-video relative overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 animate-float">
              <div className="text-sm text-white/80">Live Demo</div>
              <div className="text-xs text-white/60">● Recording</div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3 animate-float-delayed">
              <div className="text-sm text-white/80">AI Processing</div>
              <div className="text-xs text-white/60">⚡ 0.3s</div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute top-1/4 -left-8 w-6 h-6 bg-white/10 rotate-45 animate-spin-slow" />
            <div className="absolute bottom-1/3 -right-6 w-4 h-4 bg-white/20 rounded-full animate-pulse-glow" />
          </div>

          {/* Mobile Video Placeholder - Shows only on mobile */}
          {/* <div className="lg:hidden order-1 lg:order-2">
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                  <Play className="w-8 h-8 text-white/80" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Watch Demo Video
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    See EZREZ AI in action - available on desktop
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-white/50">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                    <span>Interactive demo available</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
