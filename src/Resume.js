import React from 'react';
import ResumeAnimation from './components/ResumeAnimation';
import ResumeAnimation2 from './components/ResumeAnimation2';
import logo from './assets/JB.png';

const Resume = () => {
  return (
    <main>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <div className="resume">
        <h1>Resume</h1>
        <div className="doc-wrapper">
          <iframe className='ResumeFrame' src="https://docs.google.com/document/d/e/2PACX-1vRwwSTszAuytFMP45UAQGC-_vtwmflJoVtyXxh337i2ztR_fBKvGRsw14Okis5BujNu1-kX0wcsb5Bv/pub?embedded=true"></iframe>
        </div>
        <ResumeAnimation />
        <ResumeAnimation2 />
      </div>
    </main>
  );
};

export default Resume;