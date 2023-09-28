import React from 'react';

class ResumeAnimation extends React.Component {
  constructor() {
    super();
    this.changeColor = this.changeColor.bind(this);
  }

  randomColor() {
    const colorAllCharacters = '123456abcdef';
    let randomColor = '';
    for (let i = 0; i < 6; i++) {
      randomColor += colorAllCharacters[Math.floor(Math.random() * colorAllCharacters.length)];
    }
    return randomColor;
  }

  changeColor(event) {
    const color = this.randomColor();
    event.target.style.backgroundColor = '#' + color;
  }

  createDiv() {
    const divArray = [];
    for (let i = 0; i < 2000; i++) {
      divArray.push(i);
    }
    return divArray;
  }

  render() {
    return (
      <div className="container">
        {this.createDiv().map((i, key) => {
          return <div key={key} onMouseEnter={this.changeColor}></div>;
        })}
      </div>
    );
  }
}

export default ResumeAnimation;
