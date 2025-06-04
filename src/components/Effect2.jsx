import React, { useState } from "react";

const cards = [
  {
    img: "assets/socialbureaulogo.png",
    mission: "Preserve the Yosemite's natural wonders.",
    vision: "Inspire visitors to value wild places."
  },
  {
    img: "assets/fulllogo.png",
    mission: "Safeguard Cappadocia’s historic landscapes.",
    vision: "Offer immersive cultural experiences."
  },
  {
    img: "assets/revobureaulogo.png",
    mission: "Promote clean and safe beaches.",
    vision: "Be a model for coastal conservation."
  }
];

export default function Effect2() {
  const [selectedCard, setSelectedCard] = useState(0);

  const card = cards[selectedCard];

  return (
    <div className="travel-slider-split">
      <div className="split-bg">
        {/* Left: Image */}
        <div
          className="split-bg-img"
          style={{
            backgroundImage: `url(${card.img})`
          }}
        />
        {/* Right: Mission/Vision */}
        <div className="split-bg-info">
          <div className="mv-panel">
            <h3>Mission</h3>
            <p>{card.mission}</p>
            <h3>Vision</h3>
            <p>{card.vision}</p>
          </div>
        </div>
      </div>
      <div className="split-content">
        <div className="split-cards">
          {cards.map((c, idx) => (
            <div
              className={`slider-card${selectedCard === idx ? " selected" : ""}`}
              key={idx}
              onClick={() => setSelectedCard(idx)}
            >
              <img
                src={c.img}
                alt=""
                draggable={false}
                style={{
                  pointerEvents: "none",
                  filter: selectedCard === idx ? "brightness(0.65) blur(2px) scale(1.04)" : "none"
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
.travel-slider-split {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  background: #181818;
  /* Prevent horizontal scroll on mobile */
  box-sizing: border-box;
}

.split-bg {
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 1;
}

.split-bg-img {
  flex: 1 1 0%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.74) blur(0.5px);
  min-width: 0;
  transition: background-image 0.5s;
}

.split-bg-info {
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.mv-panel {
  color: #fff;
  border-radius: 24px;
  padding: 48px 40px;
  min-width: 320px;
  max-width: 440px;
  box-shadow: 0 10px 44px 0 rgba(30,30,30,0.18);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(24,24,24,0.83);
  backdrop-filter: blur(2px);
}
.mv-panel h3 {
  margin: 0 0 8px 0;
  font-size: 1.28rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.mv-panel p {
  margin: 0 0 20px 0;
  font-size: 1.07rem;
  opacity: 0.96;
}
.split-content {
  position: absolute;
  left: 0; right: 0; top: 0;
  width: 100vw;
  padding: 40px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 4;
  pointer-events: none;
}
.split-cards {
  display: flex;
  gap: 28px;
  pointer-events: all;
  background: rgba(24,24,24,0.32);
  border-radius: 24px;
  padding: 24px 40px;
  box-shadow: 0 6px 32px 0 rgba(30,30,30,0.08);
  overflow-x: auto;
  max-width: 98vw;
}
.slider-card {
  border-radius: 22px;
  box-shadow: 0 6px 32px 0 rgba(30,30,30,0.13);
  overflow: hidden;
  width: 160px;
  min-width: 160px;
  height: 90px;
  position: relative;
  transition: transform 0.35s cubic-bezier(.7,.21,.44,1.01), box-shadow 0.25s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  background: #222;
}
.slider-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  top: 0; left: 0;
  z-index: 1;
  transition: 0.4s;
  border-radius: 22px;
}
.slider-card.selected img {
  filter: brightness(0.65) blur(2px) scale(1.04);
}
.slider-card.selected {
  transform: scale(1.07) translateY(-10px);
  z-index: 4;
  box-shadow: 0 12px 48px 0 rgba(30,30,30,0.22);
}
.slider-card:not(.selected):hover {
  transform: scale(1.045) translateY(-7px);
  z-index: 3;
}

@media (max-width: 1024px) {
  .split-bg {
    flex-direction: column;
  }
  .split-bg-img, .split-bg-info {
    width: 100vw;
    min-width: unset;
    min-height: 40vh;
    flex: unset;
    height: 40vh;
  }
  .split-bg-info {
    height: 60vh;
    padding-top: 30px;
    padding-bottom: 24px;
  }
  .mv-panel {
    min-width: unset;
    width: 98%;
    max-width: unset;
    align-items: center;
    padding: 24px 10px;
  }
  .split-content {
    position: static;
    margin-top: 0;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 0 0 0;
  }
  .split-cards {
    gap: 12px;
    padding: 18px 8px;
  }
  .slider-card {
    width: 90px;
    min-width: 90px;
    height: 55px;
  }
}

/* --- Mobile styles --- */
@media (max-width: 600px) {
  .travel-slider-split {
    width: 100vw;
    height: 100dvh;
    min-height: 100svh;
    box-sizing: border-box;
  }
  .split-bg {
    flex-direction: column;
    width: 100vw;
    height: 100dvh;
    min-height: 100svh;
  }
  .split-bg-img, .split-bg-info {
    width: 100vw;
    min-width: unset;
    height: 35vh;
    min-height: 140px;
    flex: unset;
    padding: 0;
  }
  .split-bg-info {
    height: 52vh;
    min-height: 220px;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: flex-start;
  }
  .mv-panel {
    width: 96vw;
    max-width: 96vw;
    padding: 18px 8px;
    min-width: 0;
    border-radius: 14px;
    font-size: 1rem;
    align-items: center;
  }
  .mv-panel h3 {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  .mv-panel p {
    font-size: 0.97rem;
    margin-bottom: 12px;
  }
  .split-content {
    position: static;
    padding: 2vw 0 0 0;
    margin: 0 auto;
    width: 100vw;
    justify-content: center;
    align-items: flex-start;
  }
  .split-cards {
    flex-wrap: nowrap;
    gap: 10px;
    padding: 7px 4px;
    border-radius: 13px;
    box-shadow: 0 2px 10px 0 rgba(30,30,30,0.13);
    max-width: 99vw;
    overflow-x: auto;
  }
  .slider-card {
    width: 56px;
    min-width: 56px;
    height: 34px;
    border-radius: 10px;
    box-shadow: 0 2px 10px 0 rgba(30,30,30,0.13);
  }
  .slider-card.selected {
    transform: scale(1.04) translateY(-4px);
    box-shadow: 0 6px 22px 0 rgba(30,30,30,0.18);
  }
  .slider-card img {
    border-radius: 10px;
  }
}
      `}</style>
    </div>
  );
}