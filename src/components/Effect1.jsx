import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Effect1.css";

const cards = [
  {
    title: "AI-POWERED ANALYTICS",
    location: "Tech Industry",
    description: "Leverage machine learning to uncover actionable insights from big data.",
    image: "assets/bg3.jpeg",
  },
  {
    title: "DIGITAL MARKETING STRATEGY",
    location: "Global Markets",
    description: "Boost brand visibility with targeted campaigns and SEO optimization.",
    image: "assets/bg2.jpg",
  },
  {
    title: "CLOUD COMPUTING SOLUTIONS",
    location: "Enterprise Tech",
    description: "Scalable infrastructure for seamless business operations.",
    image: "assets/bg3.jpeg",
  },
  {
    title: "SOCIAL MEDIA ADVERTISING",
    location: "Online Platforms",
    description: "Engage audiences with creative ads on major social networks.",
    image: "assets/bg2.jpg",
  },
];

export default function Effect1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleArrowClick = (dir) => {
    if (isTransitioning) return;
    setDirection(dir);
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => {
        if (dir === 1) return (prev + 1) % cards.length;
        if (dir === -1) return (prev - 1 + cards.length) % cards.length;
        return prev;
      });
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <div className="carousel-bg" style={{ backgroundImage: `url(${cards[activeIndex].image})` }}>
      <div className="carousel-overlay" />
      <div className="carousel-content">
        <div className="carousel-left">
          <span className="carousel-location">{cards[activeIndex].location}</span>
          <h1 className="carousel-title">{cards[activeIndex].title}</h1>
          <p className="carousel-desc">{cards[activeIndex].description}</p>
        </div>
        <div className="carousel-cards">
          <button
            className="carousel-arrow left"
            onClick={() => handleArrowClick(-1)}
            disabled={isTransitioning}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="carousel-card">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                className="carousel-image-wrapper"
                initial={{ scale: 1, opacity: 1 }}
                animate={isTransitioning ? { scale: 1.18, opacity: 0 } : { scale: 1, opacity: 1 }}
                exit={{
                  scale: 0.85,
                  opacity: 0,
                  x: direction === 1 ? -120 : 120,
                  transition: { duration: 1.5, ease: "easeInOut" }
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundImage: `url(${cards[activeIndex].image})`,
                }}
              />
            </AnimatePresence>
            {/* Card info overlays the image */}
            <div className="card-info">
              <span className="card-location">{cards[activeIndex].location}</span><br />
              <span className="card-title">{cards[activeIndex].title}</span>
            </div>
          </div>
          <button
            className="carousel-arrow right"
            onClick={() => handleArrowClick(1)}
            disabled={isTransitioning}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
      <div className="carousel-pagination">
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>
      </div>
    </div>
  );
}