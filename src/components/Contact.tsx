
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to bring your vision to life? Let's collaborate on your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold">Let's discuss your project</h3>
            <p className="text-muted-foreground">
              Whether you need video editing, color grading, or photo retouching, 
              I'm here to help you create stunning visual content that captures your audience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contact@pixelcraft.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (234) 567-8901</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary/40 rounded-xl blur opacity-20"></div>
              <div className="relative bg-card rounded-xl p-6 md:p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-muted border-none focus-visible:ring-accent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-muted border-none focus-visible:ring-accent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Project type" 
                      className="bg-muted border-none focus-visible:ring-accent"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      className="bg-muted border-none focus-visible:ring-accent min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/80">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
