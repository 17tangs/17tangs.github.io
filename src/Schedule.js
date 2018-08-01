import React, { Component } from  'react';
import HourContainer from './HourContainer';
import DayContainer from './DayContainer';
import './Schedule.css'

class Schedule extends Component{
  hourBounds = () =>{
    let et = 0;
    this.props.sd.forEach((subject) => {
      subject.slots.forEach((meeting) => {
        if(meeting.end > et){
          et = meeting.end;
        }
      })
    });
    return et;
  }
  render(){
    let et = this.hourBounds();
    let numHours = et-8>7 ? et-8 : 7;
    let height = (numHours+1)*50;
    let {sd} = this.props;
    return(
      <div className="scheduleContainer">
        <div className="schedule" style = {{height: `${height}px`}}>
          <HourContainer num = {numHours} />
          <DayContainer schedule = {sd}/>
        </div>
      </div>
    );
  }
}

export default Schedule;
