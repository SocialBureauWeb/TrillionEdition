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
          <span>Trillion Edition LLP is a dynamic parent company and strategic hub founded to ideate, invest in, and launch high-impact ventures that drive innovation and growth. Guided by our core values—Innovation, Collaboration, Integrity, Excellence, and Accountability—we partner with ambitious enterprises to achieve unprecedented success through bold ideas and global collaboration.</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: full;
    height: 60vh;;
    background: #8B0000;
    transition: all 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
    font-size: 1.3rem;
    font-weight: 900;
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
    background: rgb(0, 0, 0);
    font-weight: 90;
    font-size:1.3rem;
  }

  .first-content {
    height: 100%;
    color:white;
    width: 100%;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    border-radius: 15px;
    font-family: 'Times New Roman';
  }

  .card:hover .first-content {
    height: 0px;
    opacity: 0;
  }

  .second-content {
    height: 0%;
    padding-left:30vh;
    padding-right:30vh;
    width: 100%;
    opacity: 0;
    display: flex;
    line-height:5vh;
    justify-content: center;
    align-items: center;
    color:white;
    border-radius: 15px;
    transition: all 1s;
    font-size:1rem;
    font-family: 'Playfair';
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 1.3rem;
    transform: rotate(0deg);
  }
    @media (max-width: 768px) {
  
  .card {
    padding: 60px 15px;
  }
}`;
  

export default About;
