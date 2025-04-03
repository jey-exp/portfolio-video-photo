
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium">
              <span className="text-accent">14K+</span> YouTube Subscribers
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turning <span className="gradient-text">Moments</span> Into <span className="gradient-text">Masterpieces</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg">
              Video & photo editing professional specializing in cinematic edits, 
              color grading, and visual storytelling that captures attention.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-6">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 px-6 py-6">
                <Play className="mr-2 h-4 w-4" />
                Watch Showreel
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary/40 rounded-xl blur opacity-30"></div>
            <div className="relative bg-card rounded-xl overflow-hidden aspect-video shadow-2xl animate-slide-in-right">
              <video 
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://cdn.coverr.co/videos/coverr-a-man-editing-a-video-2633/1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium">My Latest Video Edit</p>
                <div className="mt-2 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-accent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
