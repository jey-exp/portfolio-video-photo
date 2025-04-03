
import React from "react";
import { Instagram, Youtube, Twitter, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="font-display font-bold text-2xl gradient-text">Jey's portfolio</span>
            </a>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional video and photo editing services, specializing in creating 
              visually stunning content that helps you stand out.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-muted text-accent hover:text-accent/80 rounded-full p-2 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-muted text-accent hover:text-accent/80 rounded-full p-2 transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="#" 
                className="bg-muted text-accent hover:text-accent/80 rounded-full p-2 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-muted text-accent hover:text-accent/80 rounded-full p-2 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Video Editing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Color Grading</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Photo Retouching</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Motion Graphics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Event Coverage</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} JeyGR. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
