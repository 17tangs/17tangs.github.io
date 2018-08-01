import React, { Component } from 'react';
import Hour from './Hour'
import './HourContainer.css'

class HourContainer extends Component{
  generateHour = () =>{
      const Hours = [];
      Hours.push(<Hour time={-1}/>);
      for(let i = 0; i<this.props.num; i++){
        Hours.push(<Hour time={8+i}/> );
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
