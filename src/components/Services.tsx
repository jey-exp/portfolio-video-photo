
import React, { useEffect, useRef } from "react";
import { Camera, Film, Palette, Video, FastForward, Edit, ImagePlus } from "lucide-react";

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Improved intersection observer implementation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add a small delay before adding the class to ensure DOM is ready
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 100);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" // Trigger animation a bit earlier
      }
    );

    const titleSection = document.querySelector('.services-title-section');
    if (titleSection) {
      observer.observe(titleSection);
    }

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      // Add staggered animation delay
      (card as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      observer.observe(card);
    });

    return () => {
      if (titleSection) {
        observer.unobserve(titleSection);
      }
      serviceCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="bg-muted py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 services-title-section scroll-animate opacity-0 transform translate-y-8">
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
              className="bg-card rounded-xl p-6 shadow-md card-hover opacity-0 transform translate-y-8 service-card scroll-animate"
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
