import React, { useState } from "react";
import "../css/SBServices.css";

const cards = [
  {
    background: "linear-gradient(45deg, #8B0000, rgba(0, 0, 0, 0.8))",
    text: "Getting that throwback in the post"
  },
  {
    background: "linear-gradient(90deg, #8B0000, rgba(0, 0, 0, 0.8))",
    text: "Selected projects from the last month"
  },
  {
    background: "linear-gradient(135deg, #8B0000, rgba(0, 0, 0, 0.8))",
    text: "Otherworldly places located on Earth"
  },
  {
    background: "linear-gradient(180deg, #8B0000, rgba(0, 0, 0, 0.8))",
    text: "Visualizing distorted sound mixes"
  },
  {
    background: "linear-gradient(225deg, #8B0000, rgba(0, 0, 0, 0.8))",
    text: "Future visual art experiments"
  },
  {
    background: "linear-gradient(270deg, #8B0000, rgba(0, 0, 0, 0.8))",
    text: "Earthly Wonders"
  },
  {
    background: "linear-gradient(315deg, #8B0000, rgba(0, 0, 0, 0.8))",
    text: "Audio Visual Journeys"
  },
  {
    background: "linear-gradient(360deg, #8B0000, rgba(0, 0, 0, 0.8))",
    text: "Experimental Futures"
  }
];

const CARD_POSITIONS = [-2, -1, 0, 1, 2];

const positionStyles = [
  {
    transform: "translateX(-180%) scale(0.7)",
    zIndex: 1,
    filter: "brightness(0.6)",
    opacity: 0.5,
    boxShadow: "0 0 10px 5px #8B0000"
  },
  {
    transform: "translateX(-90%) scale(0.85)",
    zIndex: 2,
    filter: "brightness(0.8)",
    opacity: 0.8,
    boxShadow: "0 0 13px 8px #8B0000"
  },
  {
    transform: "translateX(0%) scale(1)",
    zIndex: 3,
    filter: "brightness(1)",
    opacity: 1,
    boxShadow: "0 0 15px 10px #8B0000"
  },
  {
    transform: "translateX(90%) scale(0.85)",
    zIndex: 2,
    filter: "brightness(0.8)",
    opacity: 0.8,
    boxShadow: "0 0 13px 8px #8B0000"
  },
  {
    transform: "translateX(180%) scale(0.7)",
    zIndex: 1,
    filter: "brightness(0.6)",
    opacity: 0.5,
    boxShadow: "0 0 30px 25px #8B0000"
  },
];

const SBServices = () => {
  const [centerIdx, setCenterIdx] = useState(2);

  const getCard = (pos) => {
    const idx = (centerIdx + pos + cards.length) % cards.length;
    return cards[idx];
  };

  const slideLeft = () =>
    setCenterIdx((prev) => (prev - 1 + cards.length) % cards.length);
  const slideRight = () =>
    setCenterIdx((prev) => (prev + 1) % cards.length);

  return (
    <>
      <h4 className="carousel-subheading">SocialBureau Services</h4>
      <div className="carousel-root">
        <button className="carousel-arrow left" onClick={slideLeft}>&#8592;</button>
        <div className="carousel-cards-frame">
          {CARD_POSITIONS.map((pos, i) => {
            const card = getCard(pos);
            return (
              <div
                className="gallery-card carousel-card"
                key={i}
                style={{
                  ...positionStyles[i],
                  position: "absolute",
                  top: "40%",
                  left: "45%",
                  height: pos === 0 ? "56vh" : pos === -1 || pos === 1 ? "44vh" : "32vh",
                  margin: "-16vh ",
                  transition:
                    "transform 0.5s cubic-bezier(.4,2,.5,1), z-index 0.5s, filter 0.5s, opacity 0.5s, height 0.5s",
                  pointerEvents: pos === 0 ? "auto" : "none",
                }}
              >
                <div 
                  className="gallery-card-img" 
                  style={{ background: card.background }} 
                />
                <div className="gallery-card-text">{card.text}</div>
              </div>
            );
          })}
        </div>
        <button className="carousel-arrow right" onClick={slideRight}>&#8594;</button>
      </div>
    </>
  );
};

export default SBServices;