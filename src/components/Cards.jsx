import React, { useState } from "react";

export default function Cards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardStyle = {
    width: "300px",
    height: "400px",
    padding: "20px",
    borderRadius: "16px",
    color: "#fff",
    backgroundImage: `url(assets/bg4.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  };

  const getHoverStyle = (index) => {
    if (hoveredCard === index) {
      return {
        transform: "translateY(-12px) scale(1.05)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.9)",
        filter: "brightness(1.1)",
      };
    }
    return {};
  };

  const imageStyle = {
    width: "100%",
    minHeight: "200px",
    objectFit: "contain",
    padding: 3,
    transition: "all 0.4s ease",
  };

  const getImageHoverStyle = (index) => {
    if (hoveredCard === index) {
      return {
        transform: "scale(1.1) rotate(2deg)",
        filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))",
      };
    }
    return {};
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
    opacity: 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
  };

  const getOverlayHoverStyle = (index) => {
    if (hoveredCard === index) {
      return { opacity: 1 };
    }
    return {};
  };

  const containerStyle = {
    backgroundImage: `url(assets/bg4.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "40px",
    flexWrap: "wrap",
  };

  const cards = [
    { src: "assets/socialbureaulogo.png", alt: "Social Bureau Logo" },
    { src: "assets/fulllogo.png", alt: "Full Logo" },
    { src: "assets/revobureaulogo.png", alt: "Revo Bureau Logo" },
  ];

  return (
    <div style={containerStyle}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            ...cardStyle,
            ...getHoverStyle(index),
          }}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ ...overlayStyle, ...getOverlayHoverStyle(index) }} />
          <img
            src={card.src}
            alt={card.alt}
            style={{
              ...imageStyle,
              ...getImageHoverStyle(index),
            }}
          />
        </div>
      ))}
    </div>
  );
}