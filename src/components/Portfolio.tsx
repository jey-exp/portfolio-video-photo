import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Modal from "./Modal";

const categories = ["All", "Video Editing", "Color Grading", "Reels", "Photography"];

const portfolioItems = [
  {
    type: "video",
    category: "Video Editing",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    title: "Cinematic Travel Feature",
    description: "A scenic travel documentary featuring stunning landscapes and cultural experiences."
  },
  {
    type: "photo",
    category: "Photography",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Tech Product Shoot",
    description: "Professional product photography with detailed retouching for a tech company."
  },
  {
    type: "video",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Social Media Ad Campaign",
    description: "Quick-paced and engaging social media content for brand marketing."
  },
  {
    type: "photo",
    category: "Color Grading",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Fashion Collection",
    description: "Color-graded fashion photography with consistent brand aesthetic."
  },
  {
    type: "video",
    category: "Video Editing",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    title: "Tech Review Series",
    description: "Edited series of tech reviews with custom graphics and transitions."
  },
  {
    type: "video",
    category: "Color Grading",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    title: "Music Video",
    description: "Color graded music video with atmospheric visual storytelling."
  }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<String>("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<String>("");
  const [modalType, setModalType] = useState<String>("");
  const [modalContent, setModalContent] = useState<String>("");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Animation observer for portfolio items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredItems]);

  const handleModalOpen =(type, title, content)=>{
    setModalContent(content);
    setModalTitle(title)
    setModalType(type);
    setModalOpen(true);
    return 
  }
  const handleModalClose = ()=>{
    setModalContent("");
    setModalTitle("");
    setModalType("");
    setModalOpen(false);
  }

  return (
    <section id="portfolio" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground">
            Browse through a selection of my best work across various formats and styles.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={cn(
                "rounded-full transform transition-all duration-300 hover:scale-105",
                activeCategory === category 
                  ? "bg-accent hover:bg-accent/80 scale-105"
                  : "text-foreground hover:-translate-y-1"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              ref={el => itemRefs.current[index] = el}
              className="bg-card rounded-xl overflow-hidden shadow-md card-hover 
                opacity-0 transform transition-all duration-500 hover:scale-[1.02] 
                hover:shadow-xl"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                    hover:scale-105"
                />
                <div className={cn(
                  "absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
                  hoveredItem === index ? "opacity-100" : "opacity-0"
                )}>
                  {item.type === "video" && (
                    <Button 
                      size="icon" 
                      className="rounded-full bg-accent hover:bg-accent/80 w-14 h-14
                        transition-transform duration-300 hover:scale-110"
                        onClick={()=>{handleModalOpen("video", "Sample", "This")}}
                    >
                      <Play className="h-6 w-6 transition-transform duration-300 hover:translate-x-0.5" />
                    </Button>
                  )}
                  {item.type === "photo" && (
                    <Button 
                      className="bg-accent hover:bg-accent/80 transition-transform duration-300 
                        hover:translate-y-[-2px]"
                        onClick={()=>handleModalOpen("image", "Sample", "This")}
                    >
                      View Full Size
                    </Button>
                  )}
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-accent/90 text-white text-xs font-medium px-2.5 py-1 rounded
                    transition-transform duration-300 hover:scale-105">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-lg transition-colors duration-300 
                  hover:text-accent">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent/10 
              transition-transform duration-300 hover:-translate-y-1"
          >
            View More Work
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <Modal title={modalTitle} content={modalContent} type={modalType} close={handleModalClose}/>
      )}
    </section>
  );
};

export default Portfolio;