import React from 'react';
import { Link } from 'react-router-dom';
import FallingPixels from './components/FallingPixels';
import { TypeAnimation } from 'react-type-animation';
import Navigation from './components/Navigation';
import logo from './assets/JB.png';


const Home = () => {
  return (
    <main className='Home'>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <FallingPixels />
      <Navigation />
      <section className="main-info">
        <div className="main-text">
          <h1>JACOB BRIGGS</h1>
          <span style={{ fontSize: '2em' }}>
            <span> I am a</span> <br />
            <TypeAnimation
              sequence={[
                'software engineer',
                1000,
                'web designer',
                1000,
                'team lead',
                1000,
                'trumpet player',
                1000,
              ]}
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="buttons">
          <Link to="/resume" className="lvl3" id="nav-button">
            Resume
          </Link>
          <Link to="/portfolio" className="lvl3" id="nav-button">
            Portfolio
          </Link>
          <Link to="/contact" className="lvl3" id="nav-button">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
