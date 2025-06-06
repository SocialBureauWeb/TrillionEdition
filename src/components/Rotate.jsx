import React, { useState, useEffect } from "react";

const cards = [
  "assets/s1.jpeg",
  "assets/s2.jpeg",
  "assets/s3.jpeg",
  "assets/s4.jpeg",
  "assets/s1.jpeg",
  "assets/s2.jpeg",
  "assets/s3.jpeg",
  "assets/s4.jpeg",
];

export default function RotatingCards() {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 40);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ ...styles.wrapper, flexDirection: isMobile ? "column" : "row" }}>
      {/* Left content */}
      <div style={{ ...styles.leftContent, alignItems: isMobile ? "center" : "flex-start", textAlign: isMobile ? "center" : "left" }}>
        <h1 style={{ ...styles.title, fontSize: isMobile ? "2rem" : "3rem" }}>Creative Designs</h1>
        <p style={{ ...styles.description, fontSize: isMobile ? "1rem" : "1.2rem" }}>
          Explore our curated collection of visual identities, brand assets,
          and motion graphics. Stay inspired as new ideas revolve.
        </p>
      </div>

      {/* Right rotating cards */}
      <div style={styles.rightContent}>
        <div style={styles.circle}>
          {cards.map((src, index) => {
            const angle = ((360 / cards.length) * index + rotation) % 360;
            const rad = (angle * Math.PI) / 180;
            const radius = isMobile ? 80 : 160;

            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);
            const fade = Math.cos(rad);
            const opacity = 0.3 - 0.7 * fade;

            return (
              <div
                key={index}
                style={{
                  ...styles.card,
                  width: isMobile ? 70 : 120,
                  height: isMobile ? 70 : 120,
                  margin: isMobile ? "-35px" : "-60px",
                  transform: `translate(${x}px, ${y}px)`,
                  opacity,
                }}
              >
                <img src={src} alt={`card-${index}`} style={styles.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    height: "100vh",
    width: "100%",
    background: "black",
    padding: "20px",
    boxSizing: "border-box",
    flexWrap: "wrap",
  },
  leftContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
    backgroundImage: "linear-gradient(160deg,rgb(255, 5, 226), rgb(5, 184, 255))",
    WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  },
  description: {
    color: "white",
    lineHeight: "1.6",
  },
  rightContent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: "300px",
  },
  circle: {
    position: "relative",
    width: "0px",
    height: "0px",
  },
  card: {
    position: "absolute",
    borderRadius: "20px",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "opacity 0.5s ease",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
