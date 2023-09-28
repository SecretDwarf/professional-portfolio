// ResumeAnimation.js

import React from 'react';

const ResumeAnimation2 = () => {
  function changeText() {
    var clickMe = document.getElementById('clickMe');
    clickMe.innerHTML = 'Thank You';
    clickMe.classList.add('fadeOut');

    setTimeout(function () {
      clickMe.style.display = 'none';
    }, 1000);
  }

  return (
    <div id="clickMe" onClick={changeText}>
      Click Me!
    </div>
  );
};

export default ResumeAnimation2;
