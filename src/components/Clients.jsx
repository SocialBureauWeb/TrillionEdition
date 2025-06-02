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

const Clients = () => {
  const [index, setIndex] = useState(0);

  const prevCard = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ width: '100%', height:'100%',margin: '0',padding:'0', fontFamily: 'inherit',backgroundColor:'#8B0000' }}>
      <h1 style={{
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '3rem',
        marginBottom: 40,
        paddingTop: 40,
        color: 'white'
      }}>
        What our clients are saying
      </h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:40,
      }}>
        {/* Left Arrow */}
        <button
          style={{
            background: 'none',
            border: 'none',
            fontSize: 36,
            cursor: 'pointer',
            outline: 'none',
            marginRight: 16,
            color: 'white'
          }}
          aria-label="Previous"
          onClick={prevCard}
        >
          &#8592;
        </button>

        {/* Card */}
        <div style={{
          display: 'flex',
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
          padding: 32,
          alignItems: 'center',
          minWidth: 900,
          transition: 'all 0.3s',
        }}>
          {/* Image Section */}
          <div style={{
            backgroundColor: '#8B0000',
            borderRadius: 24,
            padding: 10,
            marginRight: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 330,
            minHeight: 380
          }}>
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              style={{
                width: 330,
                height: 380,
                objectFit: 'cover',
                borderRadius: 24
              }}
            />
          </div>

          {/* Testimonial Text */}
          <div>
            {/* Quote Icon */}
            <div style={{ color: '#8B0000', fontSize: 48, marginBottom: 10 }}>
              &ldquo;
            </div>
            <p style={{
              fontSize: 22,
              color: '#23262F',
              fontWeight: 400,
              lineHeight: 1.5,
              marginBottom: 38,
              marginTop: 0,
              maxWidth: 580
            }}>
              {testimonials[index].quote}
            </p>
            <div>
              <div style={{
                fontWeight: 700,
                fontSize: 24,
                letterSpacing: 0.3,
                color: '#23262F',
                marginBottom: 2,
                textTransform: 'uppercase'
              }}>
                {testimonials[index].name}
              </div>
              <div style={{
                fontSize: 18,
                color: '#555',
                fontWeight: 400
              }}>
                {testimonials[index].title}
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          style={{
            background: 'none',
            border: 'none',
            fontSize: 36,
            cursor: 'pointer',
            outline: 'none',
            marginLeft: 16,
            color: 'white'
          }}
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