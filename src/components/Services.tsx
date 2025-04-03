
import React from "react";
import { Camera, Film, Palette, Video, Play, FastForward, Edit, ImagePlus } from "lucide-react";

const services = [
  {
    icon: <Film className="h-8 w-8" />,
    title: "Longform Video Editing",
    description: "Professional editing for YouTube videos, documentaries and online courses with engaging storytelling techniques."
  },
  {
    icon: <FastForward className="h-8 w-8" />,
    title: "Reels & Short-form",
    description: "High-impact, attention-grabbing edits for Instagram Reels, TikTok and YouTube Shorts that drive engagement."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Color Correction & Grading",
    description: "Expert color grading for both video and photo content to achieve cinematic and consistent visual aesthetics."
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Event Coverage",
    description: "Professional editing of weddings, concerts, corporate events, and special occasions with quick turnaround time."
  },
  {
    icon: <ImagePlus className="h-8 w-8" />,
    title: "Photo Retouching",
    description: "Detailed photo enhancement, skin retouching, object removal and color correction for perfect images."
  },
  {
    icon: <Edit className="h-8 w-8" />,
    title: "Custom Graphics",
    description: "Motion graphics, lower thirds, transitions and custom animations to elevate your visual content."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-muted py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground">
            From cinematic video edits to stunning photo retouching, I offer a comprehensive
            range of creative services to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-md card-hover"
            >
              <div className="bg-secondary/50 rounded-lg w-16 h-16 flex items-center justify-center mb-4 text-accent">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
