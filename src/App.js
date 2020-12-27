import Button from './Button';

function buttonClicked() {
  alert('You clicked on the button!');
}

function App (props) {
  return (
    <div>
      <h1>{props.appName}</h1>
      <Button title="Click me!" onClick={buttonClicked}/>
    </div>
  );
}

export default App;
