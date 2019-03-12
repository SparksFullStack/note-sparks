import React, { Component } from 'react';
import './App.css';

import Header from './containers/Header';

import Lander from './containers/Lander';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Lander />
      </div>
    );
  }
}

export default App;
