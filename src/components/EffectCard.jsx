import React, { useState } from "react";

// Card data (unchanged)
const cards = [
  {
    image: "assets/socialbureaulogo.png",
    text: "Tap to Explore"
  },
  {
    image: "assets/revobureaulogo.png",
    text: "Tap to Explore"
  },
  {
    image: "assets/fulllogo.png",
    text: ""
  }
];

const cards2 = [
  {
    text: "Mission",
    body: "To empower communities through innovative social solutions and creative revitalization of public spaces, fostering meaningful connections and measurable impact.",
    isTextCard: true
  },
  {
    image: "assets/socialbureaulogo.png",
    text: "Go Back",
    isTextCard: false,
    type: "social"
  },
  {
    text: "Vision",
    body: "A world where every community thrives through collaborative action, inclusive spaces, and inspired possibilities.",
    isTextCard: true
  }
];

const cards3 = [
  {
    text: "Mission",
    body: "To reimagine and revitalize urban environments through creative, sustainable, and community-driven interventions, making every place more vibrant and inclusive.",
    isTextCard: true
  },
  {
    image: "assets/revobureaulogo.png",
    text: "Go Back",
    isTextCard: false,
    type: "revo"
  },
  {
    text: "Vision",
    body: "Cities transformed into living canvases where innovation, art, and social engagement redefine public spaces for all.",
    isTextCard: true
  }
];

const CARD_POSITIONS = [-1, 0, 1];

const positionStyles = [
  {
    transform: "translateX(-90%) scale(0.9)",
    zIndex: 2,
    filter: "brightness(0.9)",
    opacity: 0.75,
    // boxShadow: "0 0 5px 3px #E94057"
  },
  {
    transform: "translateX(0%) scale(1)",
    zIndex: 3,
    filter: "brightness(1)",
    opacity: 1,
  },
  {
    transform: "translateX(90%) scale(0.9)",
    zIndex: 2,
    filter: "brightness(0.9)",
    opacity: 0.75,
    // boxShadow: "0 0 5px 3px #E94057"
  }
];

// Updated CSS with hover text styles
const borderAndShadowAnimationStyle = `
// @keyframes animated-gradient {
//   0% { border-image-source: linear-gradient(0deg, #E94057, #7D3C98); }
//   25% { border-image-source: linear-gradient(90deg, #7D3C98, #E94057); }
//   50% { border-image-source: linear-gradient(180deg, #E94057, #7D3C98); }
//   75% { border-image-source: linear-gradient(270deg, #7D3C98, #E94057); }
//   100% { border-image-source: linear-gradient(360deg, #E94057, #7D3C98); }
// }
// .animated-gradient-border {
//   border: 3px solid transparent;
//   border-radius: 22px;
//   border-image-slice: 2;
//   border-width: 3px;
//   animation: animated-gradient 2.5s linear infinite;
// }

// @keyframes animated-box-shadow {
//   0% { box-shadow: 0 0 8px 3px #E94057, 0 0 20px 8px #7D3C9833; }
//   25% { box-shadow: 0 0 12px 5px #7D3C98, 0 0 25px 10px #; }
//   50% { box-shadow: 0 0 8px 3px #E94057, 0 0 20px 8px #7D3C9833; }
//   75% { box-shadow: 0 0 15px 4px #E94057, 0 0 30px 12px #7D3C9844; }
//   100% { box-shadow: 0 0 8px 3px #E94057, 0 0 20px 8px #7D3C9833; }
// }
// .animated-box-shadow {
//   animation: animated-box-shadow 2.5s linear infinite;
// }

@keyframes fadeOutCards {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.7); }
}
@keyframes fadeInCards {
  0% { opacity: 0; transform: scale(0.7); }
  100% { opacity: 1; transform: scale(1); }
}
.card-fade-out {
  animation: fadeOutCards 1s forwards cubic-bezier(.4,2,.5,1);
  pointer-events: none !important;
}
.card-fade-in {
  animation: fadeInCards 1s forwards cubic-bezier(.4,2,.5,1);
}

/* New hover text styles */
.hover-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 1.2vw;
  font-weight: 400;
  opacity: 0;
  transition: opacity 0.3s ease;
  // border-radius: 0 0 18px 18px; /* Match card bottom corners */
}

.carousel-card:hover .hover-text {
  opacity: 1;
}
`;

const EffectCard = () => {
  const [centerIdx, setCenterIdx] = useState(2);
  const [showSecondSet, setShowSecondSet] = useState(false);
  const [showThirdSet, setShowThirdSet] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [centerIdx2, setCenterIdx2] = useState(1);
  const [centerIdx3, setCenterIdx3] = useState(1);

  React.useEffect(() => {
    if (!document.getElementById("animated-gradient-style")) {
      const style = document.createElement("style");
      style.id = "animated-gradient-style";
      style.innerHTML = borderAndShadowAnimationStyle;
      document.head.appendChild(style);
    }
  }, []);

  const getCard = (pos, setNum) => {
    if (setNum === 3) {
      const arr = cards3;
      const idx = (centerIdx3 + pos + arr.length) % arr.length;
      return arr[idx];
    } else if (setNum === 2) {
      const arr = cards2;
      const idx = (centerIdx2 + pos + arr.length) % arr.length;
      return arr[idx];
    } else {
      const arr = cards;
      const idx = (centerIdx + pos + arr.length) % arr.length;
      return arr[idx];
    }
  };

  const handleCardClick = (pos) => {
    if (transitioning) return;
    if (!showSecondSet && !showThirdSet) {
      if (pos === 0) {
        const card = getCard(0, 1);
        if (card.image && card.image.includes("socialbureaulogo")) {
          setTransitioning(true);
          setTimeout(() => {
            setShowSecondSet(true);
            setTimeout(() => setTransitioning(false), 750);
          }, 700);
        } else if (card.image && card.image.includes("revobureaulogo")) {
          setTransitioning(true);
          setTimeout(() => {
            setShowThirdSet(true);
            setTimeout(() => setTransitioning(false), 750);
          }, 700);
        }
        return;
      }
      setCenterIdx((prev) => (prev + pos + cards.length) % cards.length);
    }
  };

  const handleCardClick2 = (pos) => {
    if (transitioning) return;
    const card = getCard(pos, 2);
    if (pos === 0) {
      if (!card.isTextCard && card.type === "social") {
        setTransitioning(true);
        setTimeout(() => {
          setShowSecondSet(false);
          setTimeout(() => setTransitioning(false), 750);
        }, 700);
      }
      return;
    }
    setCenterIdx2((prev) => (prev + pos + cards2.length) % cards2.length);
  };

  const handleCardClick3 = (pos) => {
    if (transitioning) return;
    const card = getCard(pos, 3);
    if (pos === 0) {
      if (!card.isTextCard && card.type === "revo") {
        setTransitioning(true);
        setTimeout(() => {
          setShowThirdSet(false);
          setTimeout(() => setTransitioning(false), 750);
        }, 700);
      }
      return;
    }
    setCenterIdx3((prev) => (prev + pos + cards3.length) % cards3.length);
  };

  return (
    <>
      <div
        className="carousel-root"
        style={{
          position: "relative",
          backgroundColor: "black",
          minHeight: "130vh"
        }}
      >
        <div
          className="carousel-cards-frame"
          style={{
            position: "relative",
            height: "56vh",
            marginTop: "15vh",
            marginBottom: "60vh"
          }}
        >
          {/* First set of cards */}
          {!showSecondSet && !showThirdSet &&
            CARD_POSITIONS.map((pos, i) => {
              const card = getCard(pos, 1);
              const extraClass =
                pos === 0
                  ? "animated-gradient-border animated-box-shadow"
                  : "";
              return (
                <div
                  className={`gallery-card carousel-card ${extraClass} ${transitioning ? "card-fade-out" : ""}`}
                  key={`first-${i}`}
                  style={{
                    ...positionStyles[i],
                    position: "absolute",
                    top: "40%",
                    left: "45%",
                    height: pos === 0 ? "90vh" : "80vh",
                    width: "28vw",
                    margin: "-16vh",
                     background: "linear-gradient(135deg, #1E1E1E 80%, #D0D0D0 20%)",
                    borderRadius: "22px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    transition:
                      "transform 0.5s cubic-bezier(.4,2,.5,1), z-index 0.5s, filter 0.5s, opacity 0.5s, height 0.5s, border 0.5s, box-shadow 0.5s",
                    cursor: pos !== 0 ? "pointer" : "default",
                    pointerEvents: transitioning ? "none" : "auto",
                    border: pos === 0 ? undefined : "2px solid transparent"
                  }}
                  onClick={() => handleCardClick(pos)}
                >
                  <div
                    className="gallery-card-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px 18px 0 0",
                      background: `url(${card.image}) center/contain no-repeat`,
                      backgroundColor: "linear-gradient(to right, black, #E9405733)",
                      position: "relative" // For positioning hover text
                    }}
                  >
                    <div className="hover-text">{card.text}</div>
                  </div>
                </div>
              );
            })}
          {/* Second set of cards - Social Bureau */}
          {showSecondSet && !showThirdSet &&
            CARD_POSITIONS.map((pos, i) => {
              const card = getCard(pos, 2);
              const extraClass =
                pos === 0
                  ? "animated-gradient-border animated-box-shadow"
                  : "";
              return (
                <div
                  className={`gallery-card carousel-card ${extraClass}`}
                  key={`second-${i}`}
                  style={{
                    ...positionStyles[i],
                    position: "absolute",
                    top: "40%",
                    left: "45%",
                    height: pos === 0 ? "90vh" : "80vh",
                    width: "28vw",
                    margin: "-16vh",
                    background: "linear-gradient(135deg, #1E1E1E 20%, #D0D0D0 80%)",
                    borderRadius: "22px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    transition:
                      "transform 0.5s cubic-bezier(.4,2,.5,1), z-index 0.5s, filter 0.5s, opacity 0.5s, height 0.5s, border 0.5s, box-shadow 0.5s",
                    cursor: pos !== 0 ? "pointer" : "default",
                    border: pos === 0 ? undefined : "2px solid transparent"
                  }}
                  onClick={() => handleCardClick2(pos)}
                >
                  {card.isTextCard ? (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "18px 18px 0 0",
                        backgroundColor: "#181818",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2.5vw 1.5vw 2vw 1.5vw"
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "2.2vw",
                          fontWeight: 700,
                          letterSpacing: "0.03em",
                          marginBottom: "1.4vw",
                          color: "#BC430D"
                        }}
                      >
                        {card.text}
                      </h2>
                      <p
                        style={{
                          fontSize: "1.3vw",
                          fontWeight: 400,
                          color: "#fff",
                          lineHeight: 1.45,
                          textAlign: "center"
                        }}
                      >
                        {card.body}
                      </p>
                    </div>
                  ) : (
                    <div
                      className="gallery-card-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "18px 18px 0 0",
                        background: `url(${card.image}) center/contain no-repeat`,
                        backgroundColor: "black",
                        position: "relative" // For positioning hover text
                      }}
                    >
                      <div className="hover-text">{card.text}</div>
                    </div>
                  )}
                </div>
              );
            })}
          {/* Third set of cards - Revo Bureau */}
          {showThirdSet &&
            CARD_POSITIONS.map((pos, i) => {
              const card = getCard(pos, 3);
              const extraClass =
                pos === 0
                  ? "animated-gradient-border animated-box-shadow"
                  : "";
              return (
                <div
                  className={`gallery-card carousel-card ${extraClass}`}
                  key={`third-${i}`}
                  style={{
                    ...positionStyles[i],
                    position: "absolute",
                    top: "40%",
                    left: "45%",
                    height: pos === 0 ? "90vh" : "80vh",
                    width: "28vw",
                    margin: "-16vh",
                    background: "linear-gradient(135deg, #1E1E1E 20%, #D0D0D0 80%)",
                    borderRadius: "22px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    transition:
                      "transform 0.5s cubic-bezier(.4,2,.5,1), z-index 0.5s, filter 0.5s, opacity 0.5s, height 0.5s, border 0.5s, box-shadow 0.5s",
                    cursor: pos !== 0 ? "pointer" : "default",
                    border: pos === 0 ? undefined : "2px solid transparent"
                  }}
                  onClick={() => handleCardClick3(pos)}
                >
                  {card.isTextCard ? (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "18px 18px 0 0",
                        backgroundColor: "#181818",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2.5vw 1.5vw 2vw 1.5vw"
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "2.2vw",
                          fontWeight: 700,
                          letterSpacing: "0.03em",
                          marginBottom: "1.4vw",
                          color: "#BC430D"
                        }}
                      >
                        {card.text}
                      </h2>
                      <p
                        style={{
                          fontSize: "1.3vw",
                          fontWeight: 400,
                          color: "#fff",
                          lineHeight: 1.45,
                          textAlign: "center"
                        }}
                      >
                        {card.body}
                      </p>
                    </div>
                  ) : (
                    <div
                      className="gallery-card-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "18px 18px 0 0",
                        background: `url(${card.image}) center/contain no-repeat`,
                        backgroundColor: "black",
                        position: "relative" // For positioning hover text
                      }}
                    >
                      <div className="hover-text">{card.text}</div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default EffectCard;