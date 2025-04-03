
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine which section is in view
      const sections = ["home", "services", "portfolio", "about", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
    
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="flex items-center">
          <span className="font-display font-bold text-2xl gradient-text">Jey's artifact..</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={cn(
                "font-medium text-sm transition-all duration-300 relative",
                activeSection === item.id 
                  ? "text-accent" 
                  : "hover:text-accent/80",
                "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300",
                activeSection === item.id && "after:scale-x-100 after:origin-bottom-left"
              )}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/80 transition-all duration-300"
            onClick={handleHireMe}
          >
            Hire Me
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-display font-medium text-xl transition-all duration-300",
                activeSection === item.id ? "text-accent" : "hover:text-accent/80",
                "animate-fade-up",
                `animate-stagger-${index + 1}`
              )}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/80 mt-4 animate-fade-up animate-stagger-3" 
            onClick={handleHireMe}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
