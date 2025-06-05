import React, { useEffect, useRef } from 'react';
import '../css/Home.css';
import About from '../components/About';
import { Logo } from '../components/Logo';
import SocialBureau from '../components/SocialBureau';
import RevoBureau from '../components/RevoBureau';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Marquee from "react-fast-marquee";
import Company from '../components/Company';
import Mission from '../components/Mission';
import SBServices from '../components/SBServices';
import Trial from '../components/Trial';
import { RBServices } from '../components/RBServices';
import EffectCard from '../components/EffectCard';
import Search from '../components/Search';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Blog from '../components/Events';
import Events from '../components/Events';
import Blogs from '../components/Blogs';
import Review from '../components/Review';
import Fade from '../components/Fade';
import { Trial2 } from '../components/Trial2';
import Sample from '../components/Sample';
import Effect1 from '../components/Effect1';
import Effect2 from '../components/Effect2';
import Effect3 from '../components/Effect3';
import Effect4 from '../components/Effect4';
import OurTeam from '../components/OurTeam';

const Home = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   return (
    <div className="w-full">
      <Fade>
        <Navbar />
      </Fade>

      <header
        className="parallax"
        id="home"
        ref={headerRef}
        role="banner"
        aria-label="Intro video with parallax effect"
      >
        <video
          className="bg-video"
          src="assets/66978-521238762.mp4"
          poster="assets/fallback.jpg"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="overlay-content">
          <Logo/>
        </div>
      </header>

      <Fade delay={0.1}><Search/></Fade>
      {/* <Fade delay={0.1}><OurTeam/></Fade> */}
      
      <Fade delay={0.2}>
        <div className="macque">
          <Marquee /* ...props... */>
            <h5 className="px-4 py-2 bg-blue-600 rounded-md mx-2"> ⚡︎   News Updates   ⚡︎ </h5>
          </Marquee>
        </div>
      </Fade>
      <Fade delay={0.5}><div id="about"><About/></div></Fade>
      <Fade delay={0.6}>
        <section className="parallax mid" id="services" style={{ color: 'white'}}>
          <h4>Our Services</h4>
        </section>
      </Fade>
      <Fade delay={0.7}><section id='service'><Effect3/></section></Fade>
      <Fade delay={0.8}><Effect4/></Fade>
      <Fade delay={0.7}><section id='service'><Services/></section></Fade>
      <Fade delay={0.8}><Effect1/></Fade>
      <Fade delay={0.2}>
          <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 8vw 40px 8vw",
        color: "white",
        boxSizing: "border-box",
      }}
    >
      <h3 style={{ margin: 0, fontSize: 24, textAlign: "center" }}>Our Team</h3>
      <br />
      <img
        src="assets/teams.jpg"
        alt="team img"
        style={{
          width: "100%",
          maxWidth: 400,
          height: "auto",
          borderRadius: 12,
          marginTop: 16,
          boxShadow: "0 4px 18px #0008",
        }}
      />
    </div>
      </Fade>
      <Fade delay={1.0}><Clients/></Fade>
      <Fade delay={1.3}><Review/></Fade>
      <Fade delay={1.2}><Blogs/></Fade>
      <Fade delay={0.3}><Trial/></Fade>
      <Fade delay={0.8}><SBServices/></Fade>
      <Fade delay={0.9}><RBServices/></Fade>
      <Fade delay={0.95}><Trial2/></Fade>      
      <Fade delay={1.1}><Events/></Fade>
      <Fade delay={0.8}><Effect2/></Fade>
       <Fade delay={0.4}><div id="mission"><EffectCard /></div></Fade>
      
      <Fade delay={1.25}><Sample/></Fade>
      <Fade delay={1.4}><Team/></Fade>
      
      <Fade delay={1.5}><Company/></Fade>

      <footer>
        <p>&copy; 2025 TrillionEdition Website</p>
      </footer>
    </div>
  );
};

export default Home;
