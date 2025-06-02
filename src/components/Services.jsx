import React, { useState, useEffect, useRef } from 'react';

// Define service descriptions and optional GIFs
const serviceDetails = {
  'Narrow Marketing': {
    description: 'Advanced audience segmentation and targeting strategies that maximize relevance and minimize waste.',
    gif: 'assets/marketinggif2.gif', // Placeholder GIF
  },
  'Digital Marketing': {
    description: 'Comprehensive online marketing solutions to boost brand visibility and engagement.',
    gif: 'assets/marketinggif1.gif',
  },
  'Web Development': {
    description: 'Custom website design and development tailored to your business needs.',
    gif: 'assets/marketinggif3.gif',
  },
  'App Development': {
    description: 'Innovative mobile app solutions for iOS and Android platforms.',
    gif: 'assets/marketinggif4.gif',
  },
  'Software Development': {
    description: 'Bespoke software solutions to streamline operations and enhance productivity.',
    gif: 'assets/marketinggif5.gif',
  },
  'Real Estate': {
    description: 'Expert guidance in property investment, management, and market analysis.',
    gif: 'assets/marketinggif6.gif',
  },
};

const Services = () => {
  const services = [
    { name: 'Narrow Marketing', link: '#narrow-marketing' },
    { name: 'Digital Marketing', link: '#digital-marketing' },
    { name: 'Web Development', link: '#web-development' },
    { name: 'App Development', link: '#app-development' },
    { name: 'Software Development', link: '#software-development' },
    { name: 'Real Estate', link: '#real-estate' },
    { name: 'Narrow Marketing', link: '#narrow-marketing' },
    { name: 'Digital Marketing', link: '#digital-marketing' },
    { name: 'Web Development', link: '#web-development' },
    { name: 'App Development', link: '#app-development' },
    { name: 'Software Development', link: '#software-development' },
    { name: 'Real Estate', link: '#real-estate' },
  ];

  // State to track the selected service
  const [selectedService, setSelectedService] = useState(null);
  // Ref to the details section
  const detailsRef = useRef(null);

  // Scroll to the details section when a service is selected
  useEffect(() => {
    if (selectedService && detailsRef.current) {
      window.scrollBy({
        top: 200, // Adjust this value to control how far to scroll down
        behavior: 'smooth',
      });
    }
  }, [selectedService]);

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: '20px',
          backgroundColor: 'transparent',
          gap: '20px',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
        }}
        className="services-container"
      >
        <style>
          {`
            .services-container::-webkit-scrollbar {
              display: none;
              margin-right: 20px;
            }
          `}
        </style>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              color: 'black',
              fontFamily: 'Arial, sans-serif',
              fontSize: '3rem',
              marginBottom: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer', // Indicate clickable
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.5)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => setSelectedService(service.name)} // Set selected service on click
          >
            <a
              href={service.link}
              style={{
                padding: '20px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '30px',
              }}
              onClick={(e) => e.preventDefault()} // Prevent default link behavior
            >
              {service.name}
            </a>
          </div>
        ))}
      </div>
      {/* Display selected service details and GIF only when a service is selected */}
      {selectedService && (
        <div
          ref={detailsRef} // Attach ref to the details section
          style={{
            marginTop: '20px',
            backgroundColor: 'rgb(0, 0, 0)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontFamily: 'Arial, sans-serif',
            color: 'red',
          }}
        >
          {/* GIF Section */}
          <div
            style={{
              width: '100vh',
              height: '100%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
            }}
          >
            <img
              className="logo block max-w-[6vh] mx-auto mb-5"
              src={serviceDetails[selectedService].gif}
              alt={`${selectedService} GIF`}
              style={{ maxWidth: '50vh', width: '50vh', height: 'auto', margin: '5vh' }}
            />
          </div>
          {/* Description Section */}
          <div style={{ flex: 1, textAlign: 'left', fontSize: '1.5rem',color:'white' }}>
            <p>{serviceDetails[selectedService].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;