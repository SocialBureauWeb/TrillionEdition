import React, { useState } from "react";

const teamMembers = [
  {
    name: "JOSÉPHINE",
    title: "Director",
    image: "assets/team.jpg", // Replace with your actual image path
    alt: "Joséphine, Account Director",
    message: "At TrillionEdition, we believe in transforming ideas into impact. Together, we’re building a future where creativity meets community",
  },
  {
    name: "PRISCILLA",
    title: "CEO",
    image: "assets/team.jpg", // Replace with your actual image path
    alt: "Priscilla, Senior Account Manager",
    message: "At TrillionEdition, we believe in transforming ideas into impact. Together, we’re building a future where creativity meets community",
  },
  {
    name: "MAXIMILIENNE",
    title: "Admin",
    image: "assets/team.jpg", // Replace with your actual image path
    alt: "Maximilienne, Senior Account Manager",
    message: "At TrillionEdition, we believe in transforming ideas into impact. Together, we’re building a future where creativity meets community",
  },
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="team-single-page">
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div
              className="team-card"
              key={member.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="team-photo-wrapper">
                <img src={member.image} alt={member.alt} className="team-photo" />
                {hoveredIndex === idx && (
                  <div className="hover-gradient">
                    <div className="hover-message">{member.message}</div>
                  </div>
                )}
              </div>
              <div className="team-info">
                <span className="team-name">{member.name}</span>
                <span className="team-title">{member.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
        .team-single-page {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg,rgb(255, 255, 255) 0%, #8B0000 50%,rgb(0, 0, 0) 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
        }

        .team-grid {
          width:100%;
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: flex-start;
        }

        .team-card {
          background: rgba(0, 0, 0, 0.97);
          color: #fff;
          width: 400px;
          text-align: left;
          padding: 2rem;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.25);
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        .team-photo-wrapper {
          position: relative;
        }

        .team-photo {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
          background: #ccc;
          transition: filter 0.3s;
          border-radius: 8px;
        }

        .hover-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: linear-gradient(135deg, rgb(0, 0, 0) 10%, #8B0000 60%, rgb(255, 255, 255) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          animation: fadeIn 0.24s;
          pointer-events: none;
        }

        .hover-message {
          color: #fff;
          padding: 1.5rem 1rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 500;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.22);
          background: transparent;
  width: 100%;
  max-width: 90%;
  line-height: 1.55;
  letter-spacing: 0.01em;
        }

        .team-info {
          padding: 1.5rem 1.2rem 0.5rem 1.2rem;
        }

        .team-name {
          display: block;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .team-title {
          display: block;
          font-size: 1.05rem;
          color: #bdbdbd;
          font-weight: 400;
        }
        `}
      </style>
    </>
  );
}