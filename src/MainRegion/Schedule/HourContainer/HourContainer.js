import React, { Component } from 'react';
import Hour from './Hour/Hour'
import './HourContainer.css'

class HourContainer extends Component{
  generateHour = () =>{
      const Hours = [];
      Hours.push(<Hour key = {131} time={-1} numHours = {this.props.num}/>);
      for(let i = 0; i<this.props.num; i++){
        Hours.push(<Hour key = {i} time={8+i} numHours = {this.props.num}/> );
      }
      return Hours;
  }
  render(){
    return(
        <div className="hourContainer">
          {this.generateHour()}
        </div>
    );
  }
}

export default HourContainer;
