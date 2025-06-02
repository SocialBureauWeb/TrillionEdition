import React from 'react';
import styled from 'styled-components';

const Mission = () => {
  return (
    <SplitWrapper>
      <div className="split left">
        <CardWrapper style={{ top: '-60px', left: '0' }}>
          <Card title="Vision" text="To pioneer a new era of marketing that is bold, creative, and effective—revolutionizing the landscape with forward-thinking strategies that expand the niche and unlock new worlds of marketing possibilities." />
        </CardWrapper>
      </div>
      <div className="split right">
        <CardWrapper style={{ top: '60px', right: '0' }}>
          <Card title="Mission" text="Empower businesses to reach their full potential through precise, personalized marketing strategies. Deliver targeted, data-driven solutions that drive measurable results and sustainable growth." />
        </CardWrapper>
      </div>
    </SplitWrapper>
  );
};

const Card = ({ title, text }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg">
          <h3 style={{fontFamily:'Times New Roman'}}>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="blob" />
      </div>
    </StyledWrapper>
  );
};

const SplitWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #1a1a1a; /* Dark background for contrast */

  .split {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    transition: 0.5s;

    &.left .card {
      transform: rotate(-10deg); /* Initial rotation for left card */
    }

    &.right .card {
      transform: rotate(10deg); /* Initial rotation for right card */
    }
  }

  &:hover .split .card {
    transform: rotate(0deg); /* Straighten on hover */
  }
`;

const CardWrapper = styled.div`
  position: relative;
`;

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 60vh; /* Increased width */
    height: 50vh; /* Increased height */
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family:'Arial';
    box-shadow: 4px 4px 12px #0F2347, -4px -4px 12px #0F2347;
    transition: 0.5s;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    z-index: 2;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05),
      transparent
    ); /* Gradient background */
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid #1C3F6E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  .bg h3 {
    color: #fff;
    font-size: 1.5em; /* Increased font size */
    margin-bottom: 15px;
  }

  .bg p {
    color: #fff;
    font-size: 1em; /* Increased font size */
    line-height: 1.4;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: calc(100% - 10px);
    height: calc(70% - 10px);
    border-radius: 50%;
    background-color:#1C3F6E;
    opacity: 0.5;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default Mission;