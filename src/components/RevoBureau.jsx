import React from 'react';
import styled from 'styled-components';

const RevoBureau = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="border" />
        <div className="content">
          <div className="logo">
            <div className="logo1">
  <img src='assets/revobureaulogo.png' id='logo-main' alt='logo'/>
</div>
            
            <span className="trail2" />
          </div>
          <p className="logo-bottom-text">SocialBureau, a strategic subsidiary of Trillion Edition LLP, is a specialized B2B digital marketing and development firm committed to driving measurable, sustainable growth for forward-thinking businesses. We operate at the intersection of data, design, and development—empowering our clients to achieve their digital ambitions through precision-driven strategy and enterprise-grade execution.</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: full;
    height: 550px;
    background:rgb(0, 0, 0);
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  #logo-main{
    height: 300px;
    width:300px;
  }

  #logo-main {
    fill:rgb(32, 120, 236);
  }


  .border {
    position: absolute;
    inset: 0px;
    border: 2px solid rgb(32, 120, 236);
    opacity: 0;
    transform: rotate(10deg);
    transition: all 0.5s ease-in-out;
    width:full;
  }

  .bottom-text {
    position: absolute;
    left: 50%;
    bottom: 13px;
    transform: translateX(-50%);
    font-size: 6px;
    text-transform: uppercase;
    padding: 0px 5px 0px 8px;
    color:rgb(255, 255, 255);
    background:rgb(255, 255, 255);
    opacity: 0;
    letter-spacing: 7px;
    transition: all 0.5s ease-in-out;
  }

  .content {
    transition: all 0.5s ease-in-out;
    background:rgb(0, 0, 0);
  }

  .content .logo {
    height: 400px;
    position: relative;
    width: 350px;
    overflow: hidden;
    transition: all 1s ease-in-out;
  }

  .content .logo .logo1 {
    height: 300px;
    width:300px;
    position: absolute;
    left: 0;
  }

  .content .logo .logo2 {
    height: 33px;
    position: absolute;
    left: 33px;
  }

  .content .logo .trail2 {
    position: absolute;
    right: 0;
    height: 300px;
    width: 100%;
    opacity: 0;
  }

  .content .logo-bottom-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 30px;
    color:rgb(255, 255, 255);
    padding-left: 8px;
    font-size: 25px;
    opacity: 0;
    letter-spacing: none;
    transition: all 0.5s ease-in-out 0.5s;
  }

  .card:hover {
    border-radius: 0;
    transform: scale(1.1);
  }

  .card:hover .logo {
    width: 100vh;
    animation: opacity 1s ease-in-out;
  }

  .card:hover .border {
    inset: 15px;
    opacity: 1;
    transform: rotate(0);
  }

  .card:hover .bottom-text {
    letter-spacing: 3px;
    opacity: 1;
    transform: translateX(-50%);
  }

  .card:hover .content .logo-bottom-text {
    opacity: 1;
    letter-spacing: 9.5px;
  }

  .logo-bottom-text {
  padding-bottom:30px;
  margin-left:150px;
  padding-right:30px;
  padding-bottom:50px;
  width:800px;
  font-family: 'Source Serif Pro', serif;
  line-height: 1.6; /* Comfortable for reading */
  letter-spacing: 0.03em; /* Subtle spacing for elegance */
  text-align: left;
}

  .card:hover .trail2 {
    animation: trail2 1s ease-in-out;
  }

 

  @keyframes trail2 {
    0% {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 90%, rgb(32, 120, 236) 100%);
      opacity: 0;
    }

    30% {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 70%, rgb(32, 120, 236) 100%);
      opacity: 1;
    }

    70% {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 70%, rgb(32, 120, 236) 100%);
      opacity: 1;
    }

    95% {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 90%, rgb(32, 120, 236) 100%);
      opacity: 0;
    }
  }`;

export default RevoBureau;
