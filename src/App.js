import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import TitleRegion from './TitleRegion';
import Schedule from './Schedule';
import SearchBar from './SearchBar';
import {ScheduleData} from './ScheduleData.js';
import './animate.css';


class App extends Component {
  constructor(){
    super();
    this.state= {
      schedule_data: ScheduleData,
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
      this.setState({searchfield:event.target.value});
  }
  render() {
    const filteredSchedule = this.state.schedule_data.filter((subject) => {
        return subject.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="App">
          <Navbar />
          <TitleRegion />
          <Schedule sd = {filteredSchedule}/>
          <SearchBar searchChange={this.onSearchChange}/>
      </div>
    );
  }
}

export default App;
