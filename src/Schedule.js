import React, { Component } from  'react';

class Schedule extends Component{
  hourBounds = () =>{
    let st = 24;
    let et = 0;
    this.props.sd.forEach((subject) => {
      subject.slots.forEach((time) => {
        if(time.start < st){
          st = time.start;
        }
        if(time.end > et){
          et = time.end;
        }
      })
    });
    return [st,et];
  }
  render(){
    let st = this.hourBounds()[0];
    let et = this.hourBounds()[1];
    let {sd} = this.props;
    console.log(st, et);
    return(
      <div className="Schedule-container">
        <div className="Schedule">


        </div>
      </div>
    );
  }
}

export default Schedule;
