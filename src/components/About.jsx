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
  width: 100%;

  .card {
    width: 100%;
    max-width: 96vw;
    min-width: 0;
    min-height: 260px;
    transition: all 0.4s ease;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 0 2vw;
    background: #000;
  }

  .card:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  .first-content {
    width: 100%;
    text-align: center;
    color: white;
    transition: all 0.4s ease;
    font-family: 'Times New Roman', Times, serif;
    font-size: 3.5rem;
    font-weight: 700;
    margin-top: 0;
    padding-top: 20px;
    z-index: 2;
  }

  .card:hover .first-content {
    font-size: 1.4rem;
    margin-top: 10px;
  }

  .second-content {
    width: 100%;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.6s ease;
    text-align: center;
    color: white;
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    padding: 0 24px;
    z-index: 1;
    line-height: 1.6;
  }

  .card:hover .second-content {
    opacity: 1;
    max-height: 100vh;
    padding-top: 20px;
  }

  @media (max-width: 768px) {
    .card {
      height: 40vh;
    }
    .first-content {
      font-size: 2rem;
    }
    .card:hover .first-content {
      font-size: 1.2rem;
    }
    .second-content {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      height: 32vh;
    }
    .first-content {
      font-size: 1.5rem;
    }
    .card:hover .first-content {
      font-size: 1rem;
    }
    .second-content {
      font-size: 0.95rem;
    }
  }
`;


export default About;