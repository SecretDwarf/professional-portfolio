import React from 'react';
import ContactForm from './components/ContactForm';
import logo from './assets/JB.png';

const ContactPage = () => {
  return (
    <main className='contact-page'>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <ContactForm />
        <h2 className='clickMe'>Click Him<br />Press Space<br />To Start</h2>
        <h2 className='leaderboard'>Check out the leaderboard<br />at https://chromedino.com/</h2>
        <div className="right-arrow"></div>
        <div className="dino-container">
          <iframe className='dino' src="https://chromedino.com/black/" frameborder="0" scrolling="no" loading="lazy"></iframe>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
