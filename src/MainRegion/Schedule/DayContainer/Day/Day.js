import React, { Component } from 'react';
import Class from './Class/Class'
import './Day.css';

class Day extends Component {
    genClasses = () => {
        return this.props.slots.map((c, i) => <Class key ={i} onClick = {this.props.onClick} classData = {c}/>)
    }
    render(){
        return(
            <div className="day">
                <div className="dayTextContainer">
                    <div className="dayText" onMouseLeave = {this.props.resetDay} onMouseEnter = {this.props.hoverDay}>
                        {this.props.dayText}
                    </div>
                </div>
                {this.genClasses()}
            </div>
        );
    }
}
export default Day;
