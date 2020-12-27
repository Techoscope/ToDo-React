import React from 'react';

class Button extends React.Component{

  render() {
    return <button onClick={this.buttonClicked}>{this.props.title}</button>
  }
}

export default Button;