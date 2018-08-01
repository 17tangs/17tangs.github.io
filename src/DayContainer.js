import React, { Component } from 'react';
import Day from './Day'
import './DayContainer.css'

class DayContainer extends Component{
    generateDays = () => {
        let days = [];
        for(let i = 0; i < 5; i++){
            days.push(<Day slots={1}/>);
        }
    }
    render(){
        return(
            <div className="dayContainer">
                {this.generateDays()}
            </div>
        );
    }
}

export default DayContainer;
