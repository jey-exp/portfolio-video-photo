
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Add a scroll-based animation effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-animate");
      
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          // Add a small delay to ensure proper rendering
          setTimeout(() => {
            element.classList.add('visible');
          }, 50);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initialize animations for elements already in viewport
    setTimeout(handleScroll, 200);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
