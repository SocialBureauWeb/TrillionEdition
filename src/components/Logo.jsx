import React, { useState, useEffect } from 'react';
import '../css/Logo.css';

export const Logo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div className={`overlay-content ${isVisible ? 'visible' : 'hidden'}`}>
      <img
        src="assets/logo.png"
        alt="logo"
        className="logo block max-w-[6vh] mx-auto mb-5"
      />
    </div>
  );
};