
//https://www.kirupa.com/react/setting_up_react_environment.htm
import React, { Component } from 'react';
import './helloWorld.css';

class HelloWorld extends Component {
  render() {
    return (
      <div className="helloContainer">
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default HelloWorld;
