import React, { Component } from  'react';
import HourContainer from './HourContainer';
import DayContainer from './DayContainer';
import './Schedule.css'

class Schedule extends Component{
  hourBounds = () =>{
    let et = 0;
    this.props.sd.forEach((subject) => {
      subject.slots.forEach((time) => {
        if(time.end > et){
          et = time.end;
        }
      })
    });
    return et;
  }
  render(){
    let et = this.hourBounds();
    et = 18;
    let height = (et-8)*50;
    let numHours = et-8>7 ? et-8 : 7;
    let {sd} = this.props;
    return(
      <div className="scheduleContainer">
        <div className="schedule">
            {/* // style = {{height: `${height}px`}}> */}
          <HourContainer num = {numHours}/>
          {/* <DayContainer schedule = {sd}/> */}
        </div>
      </div>
    );
  }
}

export default Schedule;
