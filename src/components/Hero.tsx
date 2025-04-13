
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero: React.FC = () => {
  const [showReel, setShowReel] = useState(false);
  const [showGenText, setShowGenText] = useState(false);
  
  const handleViewWork = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  setTimeout(() => {
    setShowGenText(true);
  }, 1500);
  
  const handleShowreel = () => {
    setShowReel(true);
  };
  const words = `Initiate Ideate Iterate`

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm font-medium animate-fade-up">
              <span className="text-accent">14K+</span> YouTube Subscribers
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up animate-stagger-1">
              Turning <span className="gradient-text">Moments</span> Into <span className="gradient-text">Masterpieces</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg animate-fade-up animate-stagger-2">
              Video & photo editing professional specializing in cinematic edits, 
              color grading, and visual storytelling that captures attention.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-up animate-stagger-3">
              <Button 
                onClick={handleViewWork}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-6 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={handleShowreel}
                className="border-accent text-accent hover:bg-accent/10 px-6 py-6 transition-all duration-300 hover:-translate-y-1"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Showreel
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block animate-slide-in">
            <div className="absolute rounded-xl blur opacity-30"></div>
            <div className="relative bg-card rounded-xl overflow-hidden aspect-video shadow-2xl">
              <video 
                className="w-full h-full object-cover"
                poster="/Thumbnail.jpg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium">Can spend sleepless nights!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white absolute bottom-8 flex justify-center items-end">
          {showGenText && (
            <TextGenerateEffect words={words} className="text-white" />
          )}
        </div>
      </div>

      {/* Showreel Dialog */}
      <Dialog open={showReel} onOpenChange={setShowReel}>
        <DialogContent className="sm:max-w-[900px] p-0 bg-black">
          <DialogClose className="absolute right-4 top-4 rounded-full bg-background/70 p-2 z-50">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
