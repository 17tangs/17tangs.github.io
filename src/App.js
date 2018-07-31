import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import TitleRegion from './TitleRegion';
import Schedule from './Schedule';
import {ScheduleData} from './ScheduleData.js';
import './animate.css';


class App extends Component {
  constructor(){
    super();
    this.state= {
      schedule_data: ScheduleData
    }
  }
  render() {
    console.log(this.state.schedule_data);
    return (
      <div className="App">
          <Navbar />
          <TitleRegion />
          <Schedule sd = {this.state.schedule_data}/>
      </div>
    );
  }
}

export default App;
