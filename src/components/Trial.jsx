import React, { useEffect, useRef, useState } from 'react';

const Trial = () => {
  const [textPosition, setTextPosition] = useState(100); // Start at 90% (bottom)
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          // Accelerate progress to reach center earlier
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height) * 1.5));
          const newPosition = 90 - (progress * 70); // Move from 90% to 50%
          setTextPosition(newPosition);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .image-container {
            position: relative;
            width: 100%;
            height: 100vh;
            background:#8B0000
          }

          .background-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;
            z-index: 2; /* Image in front */
          }

          .background-text {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 2rem;
            font-weight: bold;
            opacity: 0;
            animation: fadeIn 1.8s ease-in forwards;
            transition: top 0.5s ease-out;
            z-index: 1; /* Text behind image */
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="image-container">
        <div
          className="background-text"
          style={{ top: `${textPosition}%` }}
        >
          Precision-driven strategy. Enterprise-grade solutions. Measurable growth.
        </div>
        <img
          ref={imageRef}
          src="assets/bg.png"
          alt="bg"
          className="background-image"
        />
      </div>
    </>
  );
};

export default Trial;