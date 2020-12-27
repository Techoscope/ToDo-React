import React from 'react';
import Button from './Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.appName}</h1>
        <Button title="Click me!"/>
      </div>
    );
  }
}

export default App;
