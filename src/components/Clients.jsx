import React, { useState } from 'react';

// Example testimonials array; swap out image1, image2, etc. for real imports or URLs
const testimonials = [
  {
    image: "assets/client.png",
    quote:
      "We extend our heartfelt gratitude to Mr. Rajive for his unwavering commitment, exceptional guidance, and the lasting impact he has made on Skyline Builders. His legacy of digital excellence will continue to inspire and guide us in our future endeavours.",
    name: "MOHAMED FARUQU K A",
    title: "Head - Sales and Marketing, Skyline Builders",
  },
  {
    image: "assets/client.png",
    quote:
      "Rajive’s expertise transformed our business digitally. His leadership and vision set a new benchmark for excellence.",
    name: "ANITA MENON",
    title: "Director, VisionCorp",
  },
  {
    image: "assets/client.png",
    quote:
      "Thanks to Rajive, our team achieved goals we once thought impossible. His dedication is truly inspiring.",
    name: "RAHUL NAIR",
    title: "Project Manager, Innovatech",
  },
];

const styles = {
  container: {
    width: '100%',
    minHeight: '100%',
    margin: 0,
    padding: 0,
    fontFamily: 'inherit',
    backgroundColor: '#8B0000',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '3rem',
    marginBottom: 40,
    paddingTop: 40,
    color: 'white',
  },
  carouselWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  arrowButton: {
    background: 'none',
    border: 'none',
    fontSize: 36,
    cursor: 'pointer',
    outline: 'none',
    color: 'white',
    margin: '0 16px',
  },
  card: {
    display: 'flex',
    background: '#fff',
    borderRadius: 24,
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    padding: 32,
    alignItems: 'center',
    minWidth: 320,
    maxWidth: 900,
    width: '100%',
    transition: 'all 0.3s',
    gap: 36,
  },
  imageSection: {
    backgroundColor: '#8B0000',
    borderRadius: 24,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
    minHeight: 170,
    width: 150,
    height: 170,
    flexShrink: 0,
  },
  image: {
    width: 130,
    height: 150,
    objectFit: 'cover',
    borderRadius: 24,
  },
  quoteIcon: {
    color: '#8B0000',
    fontSize: 40,
    marginBottom: 10,
  },
  quote: {
    fontSize: 18,
    color: '#23262F',
    fontWeight: 400,
    lineHeight: 1.5,
    marginBottom: 24,
    marginTop: 0,
    maxWidth: 440,
  },
  name: {
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: 0.3,
    color: '#23262F',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 15,
    color: '#555',
    fontWeight: 400,
  },
  // Responsive styles below
  '@media (max-width: 900px)': {
    card: {
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: 0,
      maxWidth: 500,
      width: '90%',
      padding: 20,
      gap: 18,
    },
    imageSection: {
      width: 120,
      height: 135,
      minWidth: 120,
      minHeight: 135,
    },
    image: {
      width: 100,
      height: 115,
    },
    quote: {
      fontSize: 16,
      maxWidth: 340,
    },
    name: {
      fontSize: 16,
    },
    title: {
      fontSize: 13,
    },
    heading: {
      fontSize: '2rem',
      paddingTop: 24,
    },
  },
  '@media (max-width: 600px)': {
    carouselWrapper: {
      flexDirection: 'column',
      gap: 16,
      paddingBottom: 24,
    },
    card: {
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: 0,
      maxWidth: '95vw',
      width: '95vw',
      padding: 16,
      gap: 10,
    },
    heading: {
      fontSize: '1.4rem',
      paddingTop: 16,
    },
    imageSection: {
      width: 80,
      height: 90,
      minWidth: 80,
      minHeight: 90,
      padding: 3,
    },
    image: {
      width: 70,
      height: 80,
    },
    quote: {
      fontSize: 14,
      maxWidth: 260,
    },
    name: {
      fontSize: 13,
    },
    title: {
      fontSize: 11,
    },
  },
};

function applyResponsiveStyles(styleObj) {
  // Filter out media queries, apply basics only
  const style = { ...styleObj };
  Object.keys(style).forEach(k => {
    if (k.startsWith('@media')) delete style[k];
  });
  return style;
}

const Clients = () => {
  const [index, setIndex] = useState(0);

  const prevCard = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Inline responsive tweaks via window width (JS-based, for frameworks like Next.js/CRA)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Choose style variants based on breakpoints
  let cardStyle = { ...styles.card };
  let imageSectionStyle = { ...styles.imageSection };
  let imageStyle = { ...styles.image };
  let quoteStyle = { ...styles.quote };
  let nameStyle = { ...styles.name };
  let titleStyle = { ...styles.title };
  let headingStyle = { ...styles.heading };
  let carouselWrapper = { ...styles.carouselWrapper };

  if (windowWidth <= 600) {
    cardStyle = { ...cardStyle, ...styles['@media (max-width: 600px)'].card };
    imageSectionStyle = { ...imageSectionStyle, ...styles['@media (max-width: 600px)'].imageSection };
    imageStyle = { ...imageStyle, ...styles['@media (max-width: 600px)'].image };
    quoteStyle = { ...quoteStyle, ...styles['@media (max-width: 600px)'].quote };
    nameStyle = { ...nameStyle, ...styles['@media (max-width: 600px)'].name };
    titleStyle = { ...titleStyle, ...styles['@media (max-width: 600px)'].title };
    headingStyle = { ...headingStyle, ...styles['@media (max-width: 600px)'].heading };
    carouselWrapper = { ...carouselWrapper, ...styles['@media (max-width: 600px)'].carouselWrapper };
  } else if (windowWidth <= 900) {
    cardStyle = { ...cardStyle, ...styles['@media (max-width: 900px)'].card };
    imageSectionStyle = { ...imageSectionStyle, ...styles['@media (max-width: 900px)'].imageSection };
    imageStyle = { ...imageStyle, ...styles['@media (max-width: 900px)'].image };
    quoteStyle = { ...quoteStyle, ...styles['@media (max-width: 900px)'].quote };
    nameStyle = { ...nameStyle, ...styles['@media (max-width: 900px)'].name };
    titleStyle = { ...titleStyle, ...styles['@media (max-width: 900px)'].title };
    headingStyle = { ...headingStyle, ...styles['@media (max-width: 900px)'].heading };
  }

  return (
    <div style={applyResponsiveStyles(styles.container)}>
      <h1 style={headingStyle}>
        What our clients are saying
      </h1>
      <div style={carouselWrapper}>
        {/* Left Arrow */}
        <button
          style={styles.arrowButton}
          aria-label="Previous"
          onClick={prevCard}
        >
          &#8592;
        </button>

        {/* Card */}
        <div style={cardStyle}>
          {/* Image Section */}
          <div style={imageSectionStyle}>
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              style={imageStyle}
            />
          </div>

          {/* Testimonial Text */}
          <div>
            {/* Quote Icon */}
            <div style={styles.quoteIcon}>
              &ldquo;
            </div>
            <p style={quoteStyle}>
              {testimonials[index].quote}
            </p>
            <div>
              <div style={nameStyle}>
                {testimonials[index].name}
              </div>
              <div style={titleStyle}>
                {testimonials[index].title}
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          style={styles.arrowButton}
          aria-label="Next"
          onClick={nextCard}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Clients;