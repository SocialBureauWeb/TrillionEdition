import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="first-content">
          <span>About Us</span>
        </div>
        <div className="second-content">
          <span>
            Trillion Edition LLP is a dynamic parent company and strategic hub founded to ideate, invest in, and launch high-impact ventures that drive innovation and growth.
          </span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
  background: #8B0000;

  .card {
    width: 100%;
    max-width: 96vw;
    min-width: 0;
    height: 60vh;
    min-height: 260px;
    
    transition: all 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    font-size: 1.3rem;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 0 2vw;
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.04);
    background: #000;
  }

  .first-content {
    height: 100%;
    width: 100%;
    color: white;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    border-radius: 15px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 2rem;
    font-weight: 700;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 2;
  }

  .card:hover .first-content {
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  .second-content {
    height: 0;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 15px;
    transition: all 0.5s;
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
    padding: 40px 24px;
    text-align: center;
    background: transparent;
    z-index: 3;
    line-height: 1.6;
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 1.18rem;
  }

  @media (max-width: 768px) {
    .card {
      width: 97vw;
      min-height: 200px;
      max-width: 99vw;
      height: 40vh;
      padding: 0 5vw;
      font-size: 1.05rem;
    }
    .first-content,
    .second-content {
      font-size: 1.25rem;
      padding: 24px 6vw;
    }
    .second-content {
      font-size: 1.02rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 99vw;
      height: 32vh;
      min-height: 160px;
      padding: 0 2vw;
      font-size: 1rem;
    }
    .first-content,
    .second-content {
      font-size: 1.09rem;
      padding: 16px 5vw;
    }
    .second-content {
      font-size: 0.94rem;
    }
  }
`;

export default About;