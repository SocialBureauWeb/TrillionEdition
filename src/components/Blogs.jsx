import React, { useRef, useState } from "react";

// Example data (same as before)
const featuredArticles = [
  {
    title: "Coinbase Flips The Coin On Would-Be Extortionists",
    author: "Joseph Blankenship",
    date: "May 16, 2025",
    summary:
      "In a recent example of why managing insider risk is critical, cryptocurrency exchange Coinbase announced that it was the target of an extortion scheme enabled by insiders. Learn more about the incident and how to protect against it in this blog.",
    content:
      "Full blog content for Coinbase Flips The Coin On Would-Be Extortionists. This is where the full article would be loaded, possibly fetched from an API or included in the data object.",
    link: "#",
  },
  {
    title: "Master Tech Mayhem: Technology & Innovation Summit APAC",
    author: "Frederic Giron",
    date: "May 15, 2025",
    summary:
      "For technology leaders in APAC, the pressing question is no longer about whether AI will transform your business but how you will leverage AI to lead your organization through global volatility and escalating costs. Learn how Technology & Innovation Summit APAC will equip you with the skills, practices, and platforms you need to master today’s tech mayhem and and navigate a volatile environment.",
    content:
      "Full blog content for Master Tech Mayhem: Technology & Innovation Summit APAC. This is the detailed article body.",
    link: "#",
  },
  {
    title: "AI In Security: Current Trends",
    author: "Alex Smith",
    date: "May 12, 2025",
    summary:
      "AI is changing the face of cybersecurity, enabling faster detection and remediation of threats. Explore the latest trends and what the future may hold.",
    content:
      "Full blog content for AI In Security: Current Trends. Insights into how AI is being used in cybersecurity.",
    link: "#",
  },
  {
    title: "The New Era Of Remote Work",
    author: "Samantha Lane",
    date: "May 10, 2025",
    summary:
      "Remote work is here to stay, but what does this mean for technology leaders and security teams? Dive into best practices for a distributed workforce.",
    content:
      "Full blog content for The New Era Of Remote Work. Tips and strategies for managing a remote workforce.",
    link: "#",
  },
  {
    title: "Quantum Computing & Cryptography",
    author: "Dr. Emily Wong",
    date: "May 8, 2025",
    summary:
      "Quantum computing promises to break current encryption standards. Learn how organizations can prepare for a post-quantum world.",
    content:
      "Full blog content for Quantum Computing & Cryptography. Understand what quantum computing means for cryptography.",
    link: "#",
  },
  // You can add more articles as needed
];

export default function Blogs() {
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  // Auto-scroll logic
  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    let paused = false;

    function startScroll() {
      if (scrollInterval.current) return;
      scrollInterval.current = setInterval(() => {
        if (!paused && scrollContainer) {
          const maxScroll =
            scrollContainer.scrollWidth - scrollContainer.clientWidth;
          if (
            scrollContainer.scrollLeft >= maxScroll - 1 ||
            maxScroll <= 0
          ) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1;
          }
        }
      }, 16); // ~60fps
    }
    function stopScroll() {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
    }
    function handleMouseEnter() {
      paused = true;
    }
    function handleMouseLeave() {
      paused = false;
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    startScroll();

    return () => {
      stopScroll();
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        background: "black",
        padding: 16,
        minHeight: "100vh",
      }}
    >
      {/* Section 1: Featured Articles */}
      <div
        ref={scrollRef}
        className="cards-scroll"
        style={{
          display: "flex",
          gap: "2vw",
          marginBottom: "3rem",
          overflowX: "auto",
          overflowY: "visible",
          paddingBottom: 20,
          scrollbarWidth: "none",
        }}
      >
        {featuredArticles.map((art, idx) => (
          <div
            key={art.title}
            className="card3d"
            style={{ animationDelay: `${idx * 120}ms`, position: "relative" }}
          >
            <h2
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                margin: "0 0 0.3rem 0",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                color: "white",
              }}
            >
              {art.title}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.85rem",
                gap: "0.9rem",
              }}
            >
              <a
                href={art.link}
                style={{
                  fontSize: "0.93rem",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 400,
                  marginRight: "0.7rem",
                  transition: "color 0.2s",
                }}
              >
                {art.author}
              </a>
              <span
                style={{
                  color: "white",
                  fontSize: "0.85rem",
                }}
              >
                {art.date}
              </span>
            </div>
            <div
              style={{
                width: 80,
                height: 4,
                background: "#222b3a",
                margin: "0 0 0.9rem 0",
                borderRadius: 2,
              }}
            />
            <p
              style={{
                fontSize: "0.98rem",
                color: "white",
                marginBottom: "1.2rem",
                lineHeight: 1.45,
              }}
            >
              {art.summary}
            </p>
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              style={{
                fontSize: "0.97rem",
                color: "#111",
                background: "none",
                border: "none",
                textDecoration: "none",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                cursor: "pointer",
                padding: 0,
                marginBottom: 0,
                transition: "color 0.2s",
              }}
            >
              {openIndex === idx ? "Hide" : "Read More"}{" "}
              <span
                style={{
                  display: "inline-block",
                  background: "white",
                  color: "#8B0000",
                  borderRadius: "50%",
                  width: "1.2rem",
                  height: "1.2rem",
                  textAlign: "center",
                  lineHeight: "1.2rem",
                  fontSize: "0.92rem",
                  marginLeft: "0.1rem",
                  fontWeight: 700,
                  transition: "background 0.2s",
                }}
              >
                {openIndex === idx ? "×" : "→"}
              </span>
            </button>
          </div>
        ))}
      </div>
      {/* Content below the cards */}
      {openIndex !== null && (
        <div
          style={{
            margin: "0 auto 2rem auto",
            padding: "1.3rem 1.3rem",
            background: "#8B0000",
            borderRadius: 6,
            color: "#222b3a",
            fontSize: "1.07rem",
            boxShadow: "0 2px 8px rgba(10,10,10,0.06)",
            animation: "fadeInUp 0.6s cubic-bezier(.17,.67,.83,.67)",
          }}
        >
          <h2 style={{ marginTop: 0, color: "white" }}>
            {featuredArticles[openIndex].title}
          </h2>
          <div
            style={{
              marginBottom: "0.7rem",
              color: "#6a6a7a",
              fontSize: "0.96rem",
            }}
          >
            By {featuredArticles[openIndex].author} &middot;{" "}
            {featuredArticles[openIndex].date}
          </div>
          <div>{featuredArticles[openIndex].content}</div>
        </div>
      )}
      {/* Keyframes and custom scrollbar hide in style tag */}
      <style>
        {`
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: none;
  }
}
.cards-scroll::-webkit-scrollbar {
  display: none;
}

.card3d {
  flex: 0 0 auto;
  background: linear-gradient(160deg, #8B0000 80%, white 20%);
  padding: 1.1rem;
  margin: 1rem;
  min-width: 260px;
  max-width: 300px;
  min-height: 150px;
  box-sizing: border-box;
  border-radius: 0.25rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  opacity: 0;
  transform: translateY(24px);
  animation: fadeInUp 0.8s cubic-bezier(.17,.67,.83,.67) forwards;
}

.card3d:hover {
  transform: perspective(1000px) rotateY(8deg) rotateX(4deg) scale(1.03);
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.2);
}

.card3d:hover::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 10px;
  background: linear-gradient(45deg, #fff, #8B0000, #fff);
  z-index: -1;
  filter: blur(10px);
  opacity: 0.2;
}
        `}
      </style>
    </div>
  );
}
