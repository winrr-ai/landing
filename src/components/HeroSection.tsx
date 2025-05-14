import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
    <section className="pt-32 pb-24 px-4 relative overflow-hidden mesh-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-winrr-primary/5 to-winrr-secondary/10 animate-pulse-slow"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-winrr-primary to-winrr-secondary bg-clip-text text-transparent">
            Turn Everyday Victories Into Job-Winning Resumes
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Never let your achievements go unnoticed again. Winrr.ai captures
            your professional wins and transforms them into tailored,
            interview-landing resumes that showcase your true potential.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="glass-card border-winrr-accent/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Secure Early Access"}
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-winrr-dark/80 gap-2 mb-16 px-2">
            <Gift size={18} className="text-winrr-primary shrink-0" />
            <p className="text-center sm:text-left">
              Limited opportunity: First 50 members receive one month of Pro
              access free
            </p>
          </div>

          <div className="mt-12 glass-card p-1 rounded-xl overflow-hidden">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
