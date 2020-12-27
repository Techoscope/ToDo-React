import React from 'react';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'rgb(0,0,0)'
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  randomNumber() {
    return Math.floor(Math.random() * 255) + 1;
  }
  
  buttonClicked() {
    const redColor = this.randomNumber();
    const greenColor = this.randomNumber();
    const blueColor = this.randomNumber();
    const rgbCode = `rgb(${redColor},${greenColor},${blueColor})`;
    // document.getElementById('header').style.color = rgbCode;
    // document.getElementById('header').innerText = rgbCode;
    this.setState({color: rgbCode});
  }

  render() {
    return (
      <div>
        <h1 id='header' style={{color: this.state.color}}>{this.state.color}</h1>
        <Button title="Click me!" onClick={this.buttonClicked}/>
      </div>
    );
  }
}

export default App;
