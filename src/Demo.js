import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  onClick() {
    alert('hello world!')
  }

  render() {
    console.log('this.props', this.props)
    console.log('this.state', this.state)
    return (
      <h1 onClick={this.onClick}>Hello, world!</h1>
    );
  }
};

export default Demo
