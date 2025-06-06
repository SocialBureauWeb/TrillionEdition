import React from "react";

const teamMembers = [
  {
    name: "Alice",
    img: "assets/teams.jpg",
  },
  {
    name: "Bob",
    img: "assets/teams1.jpg",
  },
  {
    name: "Charlie",
    img: "assets/teams2.jpg",
  },
];

const OurTeam = () => {
  return (
    <div style={{ background: "#222", padding: "40px 0" }}>
      <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "32px" }}>
        Our Team
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            style={{
              backgroundImage: `url(${member.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              padding: "24px",
              width: index === 1 ? "240px" : "200px", // Center card larger
              height: index === 1 ? "300px" : "260px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
              color: "#fff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
            }}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
