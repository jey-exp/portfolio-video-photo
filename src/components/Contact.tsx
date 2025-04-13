import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";


const Contact: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(import.meta.env.VITE_PUBLIC_FORM_BASE_URL);
  const [formSubmitUrl, setFormSubmitUrl] = useState(`https://formsubmit.co/${import.meta.env.VITE_PUBLIC_FORM_SUBMIT_KEY}`)  

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
                  <p className="font-medium">jeyshreemen.info@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center text-accent">
                  <FaDiscord className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Discord</p>
                  <p className="font-medium">#jey6690</p>
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
                {/* @ts-ignore */}
                <form className="space-y-5" action={formSubmitUrl} method="post" >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        name="name" 
                        placeholder="Your name" 
                        className="bg-muted border-none focus-visible:ring-accent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        name="email" 
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
                      name="subject" 
                      placeholder="Project type" 
                      className="bg-muted border-none focus-visible:ring-accent"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      className="bg-muted border-none focus-visible:ring-accent min-h-[120px]"
                      required
                    />
                  </div>
                  <input type="text" name="_next" value={currentPage} className="hidden" />
                  
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
