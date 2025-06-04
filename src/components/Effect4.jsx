import React, { useRef, useState, useEffect } from "react";

const items = [
  { name: "Brand Strategy", data: "Comprehensive brand development, positioning, and messaging services to help your business stand out in the market.", image:"assets/s1.jpeg" },
  { name: "Social Media Management", data: "Creation, scheduling, and analysis of content across social platforms to maximize engagement and reach." , image:"assets/s2.jpeg"},
  { name: "Content Marketing", data: "Development of blogs, articles, and multimedia content to attract and retain your target audience.", image:"assets/s3.jpeg" },
  { name: "SEO Optimization", data: "Improvement of website ranking and visibility through keyword research, on-page and off-page SEO.", image:"assets/s4.jpeg" },
  { name: "Paid Advertising", data: "Strategic management of Google Ads and social media campaigns to drive targeted traffic and conversions.", image:"assets/s1.jpeg" },
  { name: "Email Campaigns", data: "Design and execution of personalized email marketing campaigns to nurture leads and increase retention.", image:"assets/s2.jpeg" },
  { name: "Influencer Marketing", data: "Collaboration with industry influencers to amplify your brand message and expand your reach.", image:"assets/s3.jpeg" },
  { name: "Market Research", data: "In-depth competitor and audience analysis to inform better marketing decisions.", image:"assets/s4.jpeg" },
  { name: "Creative Design", data: "Professional graphics, video, and animation services to elevate your brand’s visual identity.", image:"assets/s1.jpeg" },
  { name: "Analytics & Reporting", data: "Detailed marketing performance tracking and insights to optimize your campaigns for maximum ROI.", image:"assets/s2.jpeg" }
];

export default function Effect4() {
  const [highlightIdx, setHighlightIdx] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setHighlightIdx(prev =>
        prev < items.length - 1 ? prev + 1 : 0
      );
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(to right, rgba(10,10,20,0.92) 0%, rgba(30,30,40,0.5) 55%, rgba(255,255,255,0.04) 100%), url(${items[highlightIdx].image})` ,           backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#b8b8be",
        fontFamily: "'Inter', 'Arial', sans-serif",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      {/* Left: Animated vertical list */}
      <div
        style={{
          height: "80vh",
          width: "46vw",
          paddingLeft: 48,
          paddingRight: 32,
          position: "relative",
          background: "transparent",
          userSelect: "none"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            transition: "transform 0.65s cubic-bezier(.45,.05,.55,.95)"
          }}
        >
          <div style={{
            height: `calc(40vh - 40px)`
          }} />
          {items.map((item, idx) => {
            const isHighlight = idx === highlightIdx;
            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: isHighlight ? 600 : 400,
                  fontSize: isHighlight ? 56 : 40,
                  lineHeight: 1.13,
                  marginBottom: isHighlight ? 0 : 8,
                  marginTop: isHighlight ? 20 : 0,
                  color: isHighlight ? "#dadbe6" : "#545459",
                  letterSpacing: isHighlight ? "-0.02em" : "-0.01em",
                  position: "relative",
                  opacity: isHighlight ? 1 : 0.5,
                  transform: isHighlight
                    ? "translateY(0)"
                    : `translateY(${(idx - highlightIdx) * 48}px) scale(${isHighlight ? 1 : 0.98})`,
                  transition:
                    "all 0.65s cubic-bezier(.45,.05,.55,.95), opacity 0.4s"
                }}
              >
                <span>{item.name}</span>
                {isHighlight && (
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: 28,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      boxShadow: "0 0 0 4px #8B0000, 0 0 16px 8px #8B0000",
                      background: "white",
                      position: "relative",
                      top: 4
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Right: Data display with background image */}
      <div
        style={{
          flex: 1,
          padding: "0 60px 0 40px",
          minHeight: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          
        }}
      >
        <div
          style={{
            
            borderRadius: 24,
            height: '100%',
            width: '100%',
            padding: 32,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "background-image 0.4s"
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: 600,
              marginBottom: 18,
              letterSpacing: "-0.01em",
              textShadow: "0 2px 12px #101010, 0 1.5px 10px #0008"
            }}
          >
            {items[highlightIdx].name}
          </div>
          <div
            style={{
              color: "white",
              fontSize: 20,
              lineHeight: 1.5,
              maxWidth: 360,
              textShadow: "0 2px 12px #101010, 0 1.5px 10px #0008"
            }}
          >
            {items[highlightIdx].data}
          </div>
        </div>
      </div>
    </div>
  );
}