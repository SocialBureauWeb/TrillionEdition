import React, { useState, useEffect } from "react";

// Responsive helper: determine current window width
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const cb = () => setWidth(window.innerWidth);
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);
  return width;
}

const baseStyles = {
  eventPage: {
    background: "#111",
    padding: "40px 0",
    fontFamily: "'Inter', Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  cardSlider: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
    color: "#8B0000",
    maxWidth: "950px",
    minWidth: 0,
    justifyContent: "center",
  },
  navButton: {
    background: "#222",
    border: "1px solid #444",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    cursor: "pointer",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ececec",
    boxShadow: "0 1px 5px rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
    zIndex: 2,
    margin: "0 12px",
    userSelect: "none"
  },
  navButtonDisabled: {
    opacity: 0.35,
    cursor: "not-allowed",
    pointerEvents: "none"
  },
  eventCard: {
    display: "flex",
    alignItems: "flex-start",
    border: "1px solid #8B0000",
    padding: "32px",
    background: "linear-gradient(135deg, #1d1d1d 0%, #232332 100%)",
    width: "95%",
    margin: "0 0",
    boxSizing: "border-box",
    transition: "box-shadow 0.2s",
    boxShadow: "0 2px 16px #8B0000",
    flexDirection: "column",
    position: "relative",
    maxWidth: "760px",
    minWidth: "0"
  },
  eventMainRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  eventCardDate: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80px",
    marginRight: "32px",
    color: "#bdbdbd",
    fontWeight: 600,
    borderRight: "1px solid #222",
    paddingRight: "24px",
    flexShrink: 0,
  },
  eventCardMonth: {
    fontSize: "18px",
    letterSpacing: "1.5px",
    marginBottom: "4px",
    color: "#aaa",
  },
  eventCardDay: {
    fontSize: "48px",
    color: "#8B0000",
    fontWeight: "bold",
    lineHeight: 1,
  },
  eventCardImage: {
    marginRight: "32px",
    minWidth: "260px",
    maxWidth: "260px",
    height: "170px",
    overflow: "hidden",
    borderRadius: "8px",
    background: "#222",
    flexShrink: 0,
    border: "1px solid #333",
    boxShadow: "0 2px 12px #000a"
  },
  eventCardImageImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  eventCardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0
  },
  eventCardTitle: {
    fontSize: "28px",
    color: "#8B0000",
    margin: "0 0 12px 0",
    wordBreak: "break-word",
  },
  eventCardMeta: {
    color: "#bbb",
    fontSize: "16px",
    marginBottom: "16px",
    wordBreak: "break-word",
  },
  eventCardDesc: {
    color: "#e0e0e0",
    fontSize: "16px",
    marginBottom: "20px",
    maxWidth: "450px",
    wordBreak: "break-word",
  },
  eventCardDetails: {
    color: "#8B0000",
    fontWeight: 600,
    textDecoration: "none",
    borderBottom: "1px solid #8B0000",
    transition: "border 0.2s, color 0.2s",
    width: "fit-content",
    cursor: "pointer",
    outline: "none",
    background: "none",
    border: "none",
    padding: 0,
    fontFamily: "inherit",
    fontSize: "inherit"
  },
  detailsSection: {
    marginTop: "18px",
    background: "#181823",
    color: "#fffbe2",
    padding: "18px 28px",
    borderRadius: "8px",
    boxShadow: "0 1px 8px rgba(0,0,0,0.22)",
    fontSize: "16px",
    width: "100%",
    animation: "fadeIn 0.35s",
    alignSelf: "stretch",
    maxWidth: "100%",
    boxSizing: "border-box"
  }
};

// Responsive style variants
const variants = [
  {
    breakpoint: 900,
    styles: {
      cardSlider: { maxWidth: '99vw' },
      eventCard: { maxWidth: '99vw', padding: "20px" },
      eventMainRow: { flexDirection: "column", alignItems: "stretch" },
      eventCardDate: { flexDirection: "row", width: "auto", borderRight: "none", borderBottom: "1px solid #222", padding: "0 0 14px 0", marginRight: 0, marginBottom: "18px" },
      eventCardImage: { marginRight: 0, minWidth: "100%", maxWidth: "100%", height: "180px", marginBottom: "18px" },
      eventCardContent: { minWidth: 0 },
      eventCardTitle: { fontSize: "22px" },
      eventCardMeta: { fontSize: "15px" },
      eventCardDesc: { fontSize: "14px", maxWidth: "100%" },
      navButton: { width: "38px", height: "38px", fontSize: "1.5rem", margin: "0 7px" },
      detailsSection: { padding: "12px 10px", fontSize: "15px" }
    }
  },
  {
    breakpoint: 600,
    styles: {
      eventPage: { padding: "15px 0" },
      cardSlider: { maxWidth: '100vw' },
      eventCard: { maxWidth: "99vw", padding: "7vw 0.5vw", boxShadow: "0 1px 8px #8B0000" },
      eventMainRow: { flexDirection: "column", alignItems: "stretch" },
      eventCardDate: { flexDirection: "row", width: "auto", borderRight: "none", borderBottom: "1px solid #222", padding: "0 0 8px 0", marginRight: 0, marginBottom: "11px", fontSize: "15px" },
      eventCardImage: { marginRight: 0, minWidth: "100%", maxWidth: "100%", height: "120px", marginBottom: "10px" },
      eventCardContent: { minWidth: 0 },
      eventCardTitle: { fontSize: "18px" },
      eventCardMeta: { fontSize: "13px" },
      eventCardDesc: { fontSize: "12px", maxWidth: "100%" },
      navButton: { width: "30px", height: "30px", fontSize: "1.1rem", margin: "0 4px" },
      detailsSection: { padding: "7px 5px", fontSize: "12px" }
    }
  }
];

function useResponsiveStyles(base, width) {
  // Merge variants into base if width is below breakpoint.
  let merged = { ...base };
  for (let v of variants) {
    if (width <= v.breakpoint) {
      for (const k in v.styles) {
        merged[k] = { ...merged[k], ...v.styles[k] };
      }
    }
  }
  return merged;
}

const events = [
  {
    month: "JUN",
    day: "23",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    title: "Title of the Risen Event",
    location: "1015 California Ave, Los Angeles CA",
    time: "7:00 pm — 8:00 pm",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim eu turpis non hendrerit. Nunc nec luctus tellus.",
    details: "This event is a special gathering to celebrate the community's achievements over the past year. Expect guest speakers, refreshments, group activities, and networking opportunities. RSVP by June 15th to reserve your spot.",
  },
  {
    month: "JUL",
    day: "11",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Summer Beach Gathering",
    location: "Long Beach, CA",
    time: "1:00 pm — 6:00 pm",
    description: "Join us for a summer gathering with games and fun on the sand. Everyone is welcome!",
    details: "Bring your beach gear and sunscreen! We'll set up volleyball, frisbees, and a barbecue area. There will also be a sandcastle competition and group beach games for all ages.",
  },
  {
    month: "AUG",
    day: "05",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    title: "Sunset Yoga Session",
    location: "Santa Monica Pier",
    time: "6:30 pm — 8:00 pm",
    description: "Relax and unwind with a sunset yoga session by the ocean. Bring your own mat.",
    details: "Certified instructors will lead a gentle yoga flow suitable for all levels. After yoga, enjoy light refreshments and a group meditation as the sun sets.",
  },
  {
    month: "SEP",
    day: "15",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    title: "Live Music Night",
    location: "Downtown LA",
    time: "8:00 pm — 11:00 pm",
    description: "Enjoy live performances by local bands. Food and drinks available.",
    details: "Featured bands include The Moonlighters, Groove Theory, and DJ Nova. There will be food trucks, craft beverages, and a dance floor. All ages are welcome; ID required for bar service.",
  },
  {
    month: "OCT",
    day: "02",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a37b6",
    title: "Art Walk",
    location: "Venice Arts District",
    time: "5:00 pm — 9:00 pm",
    description: "Explore galleries and meet artists at the monthly Venice Art Walk.",
    details: "Take a self-guided tour of local galleries with meet-and-greet opportunities with artists. Free entry, with art for sale and food vendors stationed throughout the district.",
  },
];

const EventCard = ({
  month,
  day,
  image,
  title,
  location,
  time,
  description,
  details,
  showDetails,
  onViewDetails,
  styles
}) => (
  <div style={styles.eventCard}>
    <div style={styles.eventMainRow}>
      <div style={styles.eventCardDate}>
        <span style={styles.eventCardMonth}>{month}</span>
        <span style={styles.eventCardDay}>{day}</span>
      </div>
      <div style={styles.eventCardImage}>
        <img
          src={image}
          alt={title}
          style={styles.eventCardImageImg}
        />
      </div>
      <div style={styles.eventCardContent}>
        <h2 style={styles.eventCardTitle}>{title}</h2>
        <div style={styles.eventCardMeta}>
          <span>{location}</span>
          <br />
          <span>{time}</span>
        </div>
        <p style={styles.eventCardDesc}>{description}</p>
        <button
          style={styles.eventCardDetails}
          onClick={onViewDetails}
          tabIndex={0}
        >
          {showDetails ? "Hide Details" : "View More"}
        </button>
      </div>
    </div>
    {showDetails && (
      <div style={styles.detailsSection}>
        {details}
      </div>
    )}
  </div>
);

const Events = () => {
  const [current, setCurrent] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const width = useWindowWidth();
  const styles = useResponsiveStyles(baseStyles, width);

  const prev = () => {
    setCurrent(c => {
      setShowDetails(false);
      return Math.max(0, c - 1);
    });
  };
  const next = () => {
    setCurrent(c => {
      setShowDetails(false);
      return Math.min(events.length - 1, c + 1);
    });
  };

  const handleViewDetails = () => setShowDetails(s => !s);

  return (
    <div style={styles.eventPage}>
      <h1 style={{ marginBottom: "24px", color: "white", letterSpacing: "2px" }}>Events</h1>
      <div style={styles.cardSlider}>
        <button
          style={{
            ...styles.navButton,
            ...(current === 0 ? styles.navButtonDisabled : {})
          }}
          onClick={prev}
          aria-label="Previous event"
          disabled={current === 0}
        >
          &#8592;
        </button>
        <EventCard
          {...events[current]}
          showDetails={showDetails}
          onViewDetails={handleViewDetails}
          styles={styles}
        />
        <button
          style={{
            ...styles.navButton,
            ...(current === events.length - 1 ? styles.navButtonDisabled : {})
          }}
          onClick={next}
          aria-label="Next event"
          disabled={current === events.length - 1}
        >
          &#8594;
        </button>
      </div>
      <div style={{ marginTop: 24, color: "#8B0000", fontSize: 16, letterSpacing: 1 }}>
        {current + 1} / {events.length}
      </div>
    </div>
  );
};

export default Events;