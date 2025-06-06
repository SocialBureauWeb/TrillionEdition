import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrillionEdition() {
  const [scrolled, setScrolled] = useState(false);
  const [showMissionVision, setShowMissionVision] = useState({
    left: false,
    right: false,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setScrolled(rect.top < window.innerHeight * 0.65);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inject responsive styles
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
  @media (max-width: 768px) {
    .central-container {
      width: 100% !important;
      height: auto !important;
      flex-direction: column !important;
      margin: 60px 0 !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .pop-image {
      width: 160px !important;
      height: 160px !important;
      position: relative !important;
      left: unset !important;
      right: unset !important;
      top: unset !important;
      bottom: unset !important;
      transform: none !important;
      margin: 20px 0 !important;
    }
    .center-image {
      width: 220px !important;
      height: 220px !important;
      margin-top: 30px;
    }
    .overlay-left,
    .overlay-right {
      position: static !important;
      width: 90% !important;
      margin: 20px auto;
      top: unset !important;
      right: unset !important;
      left: unset !important;
      transform: none !important;
    }
  }
`;

    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  const popData = {
    left: {
      image: "assets/socialbureaulogo.png",
      mission: "Empower creativity through technology and design. We aim to inspire innovative solutions.",
      vision: "A world where imagination meets practicality to solve real-world challenges.",
    },
    right: {
      image: "assets/revobureaulogo.png",
      mission: "Foster global collaboration and growth. We strive for inclusivity and diversity.",
      vision: "To connect people everywhere and enable positive, lasting impact.",
    },
  };

  const popImageVariant = (side) => ({
    initial: {
      x: side === "left" ? -80 : 80,
      opacity: 0,
      scale: 0.7,
      filter: "blur(10px)",
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 300, damping: 18, delay: side === "left" ? 0.2 : 0.4 },
    },
    exit: {
      x: side === "left" ? -80 : 80,
      opacity: 0,
      scale: 0.7,
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.12,
      boxShadow: "0 0 32px #1976d255",
    },
  });

  const overlayVariant = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.85, y: 40, transition: { duration: 0.3 } },
  };

  return (
    <div
      ref={containerRef}
      style={{
        color: "white",
        minHeight: "150vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
        background: "linear-gradient(120deg,rgb(0, 0, 0) 60%, #193157 100%)",
      }}
    >
      <div
        className="central-container"
        style={{
          position: "relative",
          width: "340px",
          height: "340px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "120px 0",
        }}
      >
        <motion.div
          initial={{ scale: 0.2, opacity: 0.3 }}
          animate={scrolled ? { scale: 1.25, opacity: 0.6 } : { scale: 0.2, opacity: 0.3 }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 180,
            height: 180,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, #1976d2 0%, #21243d 75%)",
            borderRadius: "50%",
            zIndex: 1,
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* Left Pop Image */}
        <AnimatePresence>
          {scrolled && (
            <motion.img
              key="pop-left"
              className="pop-image"
              src={popData.left.image}
              alt="Left Pop"
              variants={popImageVariant("left")}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              style={{
                position: "absolute",
                left: "-50%",
                top: "65%",
                transform: "translateY(-50%)",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                objectFit: "cover",
                zIndex: 3,
                cursor: "pointer",
                boxShadow: "0 8px 32px #193157",
                border: showMissionVision.left ? "1px solid rgb(30, 142, 255)" : "none",
              }}
              onClick={() =>
                setShowMissionVision((prev) => ({
                  ...prev,
                  left: !prev.left,
                }))
              }
            />
          )}
        </AnimatePresence>

        {/* Right Pop Image */}
        <AnimatePresence>
          {scrolled && (
            <motion.img
              key="pop-right"
              className="pop-image"
              src={popData.right.image}
              alt="Right Pop"
              variants={popImageVariant("right")}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              style={{
                position: "absolute",
                right: "-50%",
                top: "65%",
                transform: "translateY(-50%)",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                objectFit: "cover",
                zIndex: 3,
                cursor: "pointer",
                boxShadow: "0 8px 32px #193157",
                border: showMissionVision.right ? "1px solid rgb(30, 142, 255)" : "none",
              }}
              onClick={() =>
                setShowMissionVision((prev) => ({
                  ...prev,
                  right: !prev.right,
                }))
              }
            />
          )}
        </AnimatePresence>

        {/* Center Image */}
        <motion.img
          className="center-image"
          src="assets/fulllogo.png"
          alt="Center"
          initial={{ scale: 0.85, opacity: 0.3, filter: "blur(6px)" }}
          animate={
            scrolled
              ? { scale: 1, opacity: 1, filter: "blur(0px)", transition: { delay: 0.2, duration: 0.7 } }
              : { scale: 0.85, opacity: 0.3, filter: "blur(6px)" }
          }
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 8px 32px #193157",
            zIndex: 2,
            position: "relative",
            transition: "box-shadow 0.3s",
          }}
        />

        {/* Left Overlay */}
        <AnimatePresence>
          {showMissionVision.left && (
            <motion.div
              key="overlay-left"
              className="overlay-left"
              variants={overlayVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: "absolute",
                left: "-350px",
                top: "150%",
                transform: "translateY(-50%)",
                background: "#21243d",
                borderRadius: "18px",
                boxShadow: "0 4px 24px #1976d2cc",
                padding: "24px 20px",
                width: "100%",
                minHeight: "130px",
                zIndex: 10,
                color: "#fff",
                border: "2px solid #1976d2",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontWeight: 700, color: "#1976d2", fontSize: "1.1rem" }}>Mission</span>
              <span style={{ marginBottom: 10 }}>{popData.left.mission}</span>
              <span style={{ fontWeight: 700, color: "#1976d2", fontSize: "1.1rem" }}>Vision</span>
              <span>{popData.left.vision}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Overlay */}
        <AnimatePresence>
          {showMissionVision.right && (
            <motion.div
              key="overlay-right"
              className="overlay-right"
              variants={overlayVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: "absolute",
                right: "-450px",
                top: "10%",
                transform: "translateY(-50%)",
                background: "#21243d",
                borderRadius: "18px",
                boxShadow: "0 4px 24px #1976d2cc",
                padding: "24px 20px",
                width: "100%",
                minHeight: "130px",
                zIndex: 10,
                color: "#fff",
                border: "2px solid #1976d2",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontWeight: 700, color: "#1976d2", fontSize: "1.1rem" }}>Mission</span>
              <span style={{ marginBottom: 10 }}>{popData.right.mission}</span>
              <span style={{ fontWeight: 700, color: "#1976d2", fontSize: "1.1rem" }}>Vision</span>
              <span>{popData.right.vision}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
