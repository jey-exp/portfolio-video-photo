
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const Hero: React.FC = () => {
  const [showReel, setShowReel] = useState(false);
  
  const handleViewWork = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };
  
  const handleShowreel = () => {
    setShowReel(true);
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 lg:h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <div className="container max-w-6xl mx-auto px-4 lg:h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:h-1/2">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium animate-fade-up">
              <span className="text-accent">14K+</span> YouTube Subscribers
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up animate-stagger-1">
              Turning <span className="gradient-text">Moments</span> Into{" "}
              <span className="gradient-text">Masterpieces</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg animate-fade-up animate-stagger-2">
              Video & photo editing professional specializing in cinematic
              edits, color grading, and visual storytelling that captures
              attention.
            </p>
            {/* <div className="flex flex-wrap gap-4 pt-2 animate-fade-up animate-stagger-3">
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
            </div> */}
          </div>
          <div className="relative hidden md:block animate-slide-in">
            <div className="absolute rounded-xl"></div>
            <div className="relative bg-card rounded-xl overflow-hidden aspect-video">
              <video
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
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
        <div className="lg:h-full flex items-center justify-end bottom-8 flex-col">
          <div className="flex gap-4 items-end pt-2 animate-fade-up animate-stagger-3 w-[60%] h-full pb-16 -mt-20">
            <Button
              onClick={handleViewWork}
              className="bg-accent hover:bg-accent/90 text-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 w-full"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={handleShowreel}
              className="border-accent text-accent hover:bg-accent/10 px-6 py-6 transition-all duration-300 hover:-translate-y-1 w-full"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Showreel
            </Button>
          </div>
          <div className="h-full mb-20">
            <p className="text-muted-foreground text-lg animate-fade-up animate-stagger-2 text-center">
              With a passion for storytelling through imagery, I specialize in
              crafting captivating videos and photos that bring your vision to
              life. Whether you're looking to enhance a special moment, elevate
              a brand, or create engaging content, my editing expertise ensures
              every detail is polished to perfection.
            </p>
          </div>
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
              src="https://www.youtube.com/embed/wz24S2SGguI?si=BpPBNNqRNCxmliFC"
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
