import Button from './Button';

function randomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}

function buttonClicked() {
  const redColor = randomNumber();
  const greenColor = randomNumber();
  const blueColor = randomNumber();
  const rgbCode = `rgb(${redColor},${greenColor},${blueColor})`;
  document.getElementById('header').style.color = rgbCode;
  document.getElementById('header').innerText = rgbCode;
}

function App (props) {
  return (
    <div>
      <h1 id='header'>{props.appName}</h1>
      <Button title="Click me!" onClick={buttonClicked}/>
    </div>
  );
}

export default App;
