import React, { Component } from 'react';
import './Hours.css'

class Hours extends Component{
  generateHour = () =>{
      console.log(this.props);
      const Hours = [];
      for(let i = 0; i<this.props.num; i++){
        Hours.push(<Hour time={i}/> );
      }
      return Hours;
  }
  render(){
    return(
        <div className = "HourContainer">
          {this.generateHour()}
        </div>
    );
  }
}

export default Hours;
