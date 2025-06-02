import React from "react";

const Sample = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "80vh",
        background: "#f8f8f8",
        padding: "4rem 2rem",
        fontFamily: "serif",
      }}
    >
      {/* Left: Text Content */}
      <div style={{ maxWidth: 440 }}>
        <p style={{ color: "#444", fontSize: "1.1rem", marginBottom: "2.5rem" }}>
          We’re building a world where everyone has the power to shape their lives.
        </p>
      </div>

      {/* Right: Image with shapes */}
      <div
        style={{
          position: "relative",
          width: 520,
          height: 520,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Decorative colored dots */}
        <span style={{
          position: "absolute", left: -38, top: 180, width: 14, height: 14, borderRadius: "50%",
          background: "#5ec2e2",
        }} />
        <span style={{
          position: "absolute", right: -28, top: 100, width: 14, height: 14, borderRadius: "50%",
          background: "#70cb51",
        }} />
        <span style={{
          position: "absolute", right: -28, bottom: 100, width: 14, height: 14, borderRadius: "50%",
          background: "#f15d2f",
        }} />

        {/* Main image with mask */}
        <svg height={520} viewBox="0 0 520 520" style={{ display: "block",width:"100%" }}>
          <defs>
            <clipPath id="hero-clip">
              {/* Diagonal pill-shaped mask */}
              <rect x="20" y="60" rx="90" ry="90" width="100%" height="110" transform="rotate(25 260 260)"/>
              <rect x="40" y="170" rx="90" ry="90" width="440" height="110" transform="rotate(25 260 260)" />
              <rect x="60" y="280" rx="90" ry="90" width="400" height="110" transform="rotate(25 260 260)" />
            </clipPath>
          </defs>
          <image
            href="assets/client.png"
            width="100%"
            height="100%"
            clipPath="url(#hero-clip)"
            style={{ objectFit: "cover" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Sample;