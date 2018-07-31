import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import TitleRegion from './TitleRegion';
import Schedule from './Schedule';
import './animate.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <TitleRegion />
          <Schedule />
      </div>
    );
  }
}

export default App;
