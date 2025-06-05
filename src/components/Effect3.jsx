import React, { useState, useEffect } from "react";

// Add titles for each card (same order as images)
const cards = [
  { img: "assets/marketinggif1.gif", title: "Brand Awareness" },
  { img: "assets/marketinggif2.gif", title: "Digital Strategy" },
  { img: "assets/marketinggif3.gif", title: "Content Creation" },
  { img: "assets/marketinggif4.gif", title: "SEO Optimization" },
  { img: "assets/marketinggif5.gif", title: "Analytics" },
  { img: "assets/marketinggif6.gif", title: "Media Planning" },
  { img: "assets/marketinggif1.gif", title: "Brand Awareness" },
  { img: "assets/marketinggif2.gif", title: "Digital Strategy" },
  { img: "assets/marketinggif3.gif", title: "Content Creation" },
  { img: "assets/marketinggif4.gif", title: "SEO Optimization" },
];

// Responsive values
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

function CircleCarousel({ radius, cardSize, onCardHover, hoveredIdx }) {
  const [offset, setOffset] = useState(0);
  const angleStep = (2 * Math.PI) / cards.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: `${radius * 2 + cardSize}px`,
        height: `${radius * 0.6 + cardSize}px`,
        margin: "auto",
      }}
    >
      {cards.map((card, i) => {
        const angle = angleStep * (i + offset);
        const x = Math.cos(angle - Math.PI / 2) * radius + radius;
        const y = Math.sin(angle - Math.PI / 2) * radius + radius * 0.4;
        return (
          <img
            key={i}
            src={card.img}
            alt=""
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: cardSize,
              height: cardSize,
              borderRadius: 24,
              objectFit: "cover",
              boxShadow: "0 4px 24px #8B0000",
              transform: `rotate(${(angle * 180) / Math.PI - 90}deg)`,
              transition: "all 0.7s cubic-bezier(.45,.05,.55,.95)",
              background: "#222",
              border: hoveredIdx === i ? "3px solid #fff" : "2px solid rgba(255,255,255,0.12)",
              zIndex: hoveredIdx === i ? 2 : 1,
              cursor: "pointer",
            }}
            onMouseEnter={() => onCardHover(i)}
            onMouseLeave={() => onCardHover(null)}
          />
        );
      })}
    </div>
  );
}

export default function Effect3() {
  const isMobile = useResponsive();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Adjust radius and cardSize for mobile
  const radius = isMobile ? 110 : 250;
  const cardSize = isMobile ? 48 : 100;

  // Center position for the circle
  const centerStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: cardSize * 1.7,
    height: cardSize * 1.7,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    background: hoveredIdx !== null ? "rgba(20,20,20,0.92)" : "transparent",
    color: "#fff",
    fontWeight: 700,
    fontSize: isMobile ? 15 : 23,
    textAlign: "center",
    boxShadow: hoveredIdx !== null ? "0 0 20px 2px #8B000055" : undefined,
    transition: "background 0.2s, box-shadow 0.2s",
    opacity: hoveredIdx !== null ? 1 : 0,
    pointerEvents: "none",
    userSelect: "none",
  };

  return (
    <section
      style={{
        background: "#0a0d0f",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        minHeight: "120vh",
        width: "100%",
        padding: isMobile ? "28px 0" : "0",
        boxSizing: "border-box",
      }}
    >
      {/* Left: Carousel */}
      <div
        style={{
          flex: isMobile ? "unset" : "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: isMobile ? "unset" : `${radius * 2 + cardSize}px`,
          marginBottom: isMobile ? 40 : 0,
          width: isMobile ? "100vw" : "unset",
          maxWidth: isMobile ? 340 : "unset",
          overflow: isMobile ? "hidden" : "unset",
          position: "relative",
        }}
      >
        {/* Centered Title */}
        <div style={centerStyle}>
          {hoveredIdx !== null ? cards[hoveredIdx].title : ""}
        </div>
        <CircleCarousel
          radius={radius}
          cardSize={cardSize}
          onCardHover={setHoveredIdx}
          hoveredIdx={hoveredIdx}
        />
      </div>
      {/* Right: Content */}
      <div
        style={{
          flex: isMobile ? "unset" : "1 1 0",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-start",
          justifyContent: "center",
          height: isMobile ? "unset" : "100%",
          minWidth: isMobile ? "unset" : 320,
          maxWidth: isMobile ? "90vw" : 480,
          marginLeft: isMobile ? 0 : 40,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            fontSize: isMobile ? "1.4rem" : "2.2rem",
            marginBottom: 16,
          }}
        >
          Our Services
        </h1>
        <p
          style={{
            color: "#aaa",
            maxWidth: 400,
            marginBottom: 24,
            lineHeight: 1.6,
            fontSize: isMobile ? 15 : 17,
          }}
        >
          Our platform is currently in beta and invite-only.<br />
          Request an invite now to receive a link to create your account.
        </p>
        <button
          style={{
            marginTop: 8,
            background: "#8B0000",
            color: "white",
            border: "none",
            borderRadius: 24,
            padding: isMobile ? "8px 20px" : "10px 32px",
            fontWeight: 600,
            fontSize: isMobile ? 15 : 16,
            cursor: "pointer",
          }}
        >
          Collaborate with us
        </button>
      </div>
    </section>
  );
}