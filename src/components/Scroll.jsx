import React, { useEffect, useRef, useState } from "react";

// Utility to split a string into spans for per-word color effect
function splitText(text) {
  return text.split(" ").map((word, idx, arr) => (
    <span key={idx} className="scrollword">
      {word + (idx !== arr.length - 1 ? " " : "")}
    </span>
  ));
}

export default function Scroll() {
  const [scale, setScale] = useState(0); // GIF starts as a dot
  const [translate, setTranslate] = useState(0); // For x translation
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  // Add scroll effect for GIF
  useEffect(() => {
    function handleScroll() {
      if (imgRef.current && titleRef.current) {
        const imgRect = imgRef.current.getBoundingClientRect();
        const titleRect = titleRef.current.getBoundingClientRect();

        if (imgRect.top < window.innerHeight && imgRect.bottom > 0) {
          const viewportHeight = window.innerHeight;
          const centerY = imgRect.top + imgRect.height / 2;
          const distToCenter = Math.abs(centerY - viewportHeight / 2);
          const norm = Math.max(0, 1 - distToCenter / (viewportHeight / 2));
          const minScale = 0;
          const maxScale = 1.2;
          const newScale = minScale + (maxScale - minScale) * norm;
          setScale(newScale);

          // Horizontal translation for emerging from title
          const titleCenterX = titleRect.left + titleRect.width / 2;
          const imgFinalX = imgRect.left;
          const imgStartX = titleCenterX - imgRect.width / 2;
          const translateX = (1 - norm) * (imgStartX - imgFinalX);
          setTranslate(translateX);
        } else {
          setScale(0);
          setTranslate(0);
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    setTimeout(handleScroll, 10);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Add scroll color effect for text
  useEffect(() => {
    function handleScroll() {
      if (!textRef.current) return;
      const words = textRef.current.querySelectorAll(".scrollword");
      const bounding = textRef.current.getBoundingClientRect();
      const windowCenter = window.innerHeight / 2;
      const start = bounding.top;
      // Adjust scroll progress for each word
      words.forEach((word, i) => {
        // Progress: 0 (not yet) -> 1 (fully colored)
        const progress = Math.min(
          1,
          Math.max(0, (windowCenter - start + i * 24) / (words.length * 28))
        );
        // Lerp between #333 and #d72660 (pink)
        // #333 = rgb(51,51,51), #d72660 = rgb(215,38,96)
        const from = [51, 51, 51];
        const to = [215, 38, 96];
        const r = Math.round(from[0] + (to[0] - from[0]) * progress);
        const g = Math.round(from[1] + (to[1] - from[1]) * progress);
        const b = Math.round(from[2] + (to[2] - from[2]) * progress);
        word.style.color = `rgb(${r},${g},${b})`;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    setTimeout(handleScroll, 10);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // The text for color effect
  const colorText = [
    "We believe in a world where technology fosters your everyday experiences. And our mission is to make it happen!"
  ];

  return (
    <div className="butterfly-container">
      <div className="butterfly-center">
        <h1 className="title" ref={titleRef}>
          Scroll Demo
        </h1>
        <div className="scroll-color-text" ref={textRef}>
          {colorText.map((line, idx) => (
            <div className="scroll-line" key={idx}>
              {splitText(line)}
            </div>
          ))}
        </div>
      </div>
      <div className="butterfly-right">
        <img
          ref={imgRef}
          src="assets/butterfly.gif"
          alt="Butterfly gif"
          className="butterfly-gif"
          style={{
            transform: `translateX(${translate}px) scale(${scale})`,
            opacity: scale === 0 ? 0 : 1,
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            transition:
              "transform 0.7s cubic-bezier(0.23,1,0.32,1), opacity 0.4s cubic-bezier(0.23,1,0.32,1)",
            background: "#fff"
          }}
        />
      </div>
      <style>{`
        .butterfly-container {
          display: flex;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
          padding: 60px 8vw;
          box-sizing: border-box;
          background: #fff;
        }
        .butterfly-center {
          z-index:5;
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .butterfly-right {
          top:0;
          z-index:1;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-width: 200px;
        }
        .butterfly-gif {
          display: block;
          will-change: transform, opacity;
          pointer-events: none;
          z-index: 2;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 24px;
          color: #d72660;
          z-index: 1;
          position: relative;
        }
        .scroll-color-text {
          font-family: 'Montserrat', Arial, sans-serif;
          font-size: 2rem;
          font-weight: 300;
          line-height: 1.12;
          letter-spacing: 0;
          text-align: left;
          width: 100%;
          color: #333;
          margin: 36px 0 0 0;
        }
        .scrollword {
          transition: color 0.25s cubic-bezier(0.4,0.2,0.2,1);
          will-change: color;
        }
        .data {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #333;
        }
        @media (max-width: 900px) {
          .butterfly-container {
            flex-direction: column;
            align-items: stretch;
          }
          .butterfly-right {
            justify-content: center;
            margin-top: 32px;
            min-width: unset;
          }
          .butterfly-center {
            align-items: center;
            margin-bottom: 32px;
          }
          .scroll-color-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}