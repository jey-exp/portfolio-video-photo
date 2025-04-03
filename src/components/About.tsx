
import React from "react";
import { Button } from "@/components/ui/button";
import { Award, Users, Video, Download } from "lucide-react";

const statsItems = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "14K+",
    label: "YouTube Subscribers"
  },
  {
    icon: <Video className="h-6 w-6" />,
    value: "120+",
    label: "Projects Completed"
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "5+",
    label: "Years Experience"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="bg-muted py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary/40 rounded-xl blur opacity-30"></div>
            <div className="relative bg-card rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Video Editing Setup"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {statsItems.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-secondary/50 rounded-lg w-12 h-12 mx-auto flex items-center justify-center mb-2 text-accent">
                        {item.icon}
                      </div>
                      <p className="text-2xl font-bold font-display">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground">
              I'm a 21-year-old visual artist from Asia with a passion for storytelling through video and photo editing. My journey began with a simple camera and a creative vision, which has now grown into a thriving YouTube channel with over 14,000 subscribers.
            </p>
            <p className="text-muted-foreground">
              What sets my work apart is attention to detail, understanding of pacing, and ability to evoke emotion through visual storytelling. Every project I undertake is approached with creativity and technical precision, ensuring that the final product exceeds expectations.
            </p>
            <p className="text-muted-foreground">
              From color correction to complex video editing, I bring years of self-taught expertise and a genuine passion for visual media to every project.
            </p>
            <div className="pt-2">
              <Button className="bg-accent hover:bg-accent/80">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
