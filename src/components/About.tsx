
import React, { useEffect, useRef } from "react";
import { ThreeDCardDemo } from "./ThreeDComponent";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-fade-in');
            } 
            if (entry.target === textRef.current) {
              entry.target.classList.add('animate-fade-up');
            }
          }
        });
      },
      { threshold: 1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://example.com/resume.pdf'; 
    link.download = 'Jey';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="bg-muted py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ThreeDCardDemo />
          </div>

          <div className="space-y-6 opacity-0" ref={textRef}>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground">
              I'm a 21-year-old visual artist from Asia with a passion for
              storytelling through video and photo editing. My journey began
              with a simple camera and a creative vision, which has now grown
              into a thriving YouTube channel with over 14,000 subscribers.
            </p>
            <p className="text-muted-foreground">
              What sets my work apart is attention to detail, understanding of
              pacing, and ability to evoke emotion through visual storytelling.
              Every project I undertake is approached with creativity and
              technical precision, ensuring that the final product exceeds
              expectations.
            </p>
            <p className="text-muted-foreground">
              From color correction to complex video editing, I bring years of
              self-taught expertise and a genuine passion for visual media to
              every project.
            </p>
            <div className="pt-2 flex justify-start gap-4">
              <div className="bg-accent rounded-xl px-4 py-1">
                <h1 className="font-semibold montserrat-font">Workaholic</h1>
              </div>
              <div className="bg-accent rounded-xl px-4 py-1">
                <h1 className="font-semibold montserrat-font">Deterministic</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
