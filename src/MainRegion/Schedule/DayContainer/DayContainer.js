import React, { Component } from 'react';
import Day from './Day/Day'
import './DayContainer.css'

class DayContainer extends Component{

    genDayData = () => {
        let dayData = [1,2,3,4,5].map((day) => {
            let meeting = [];
            this.props.schedule.forEach((subject) => {
                subject.slots.forEach((slot) => {
                    if(slot.day === day){
                        meeting.push({
                                id:     `${subject.id}`,
                                name:   `${subject.name}`,
                                start:  `${slot.start}`,
                                end:    `${slot.end}`,
                                prof:   `${slot.professor}`,
                                loc:    `${slot.location}`
                        })
                    }
                })
            })
            return meeting;
        });
        return dayData;
    }

    generateDays = () => {
        let dayData = this.genDayData();
        let days = ['M', 'T', 'W', 'R', 'F'];
        let dayHTML = dayData.map((day,i) => <Day resetDay = {this.props.resetDay} hoverDay = {this.props.hoverDay} onClick = {this.props.onClick} key = {i} dayText = {days[i]} slots = {day}/>);
        return dayHTML;
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
