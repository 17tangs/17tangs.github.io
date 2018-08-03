import React, { Component } from 'react';
import Class from './Class'
import './Day.css';

class Day extends Component {
    genClasses = () => {
        return this.props.slots.map((c, i) => <Class key ={i} onClick = {this.props.onClick} classData = {c}/>)
    }
    render(){
        return(
            <div className="day">
                <div className="dayTextContainer">
                    <div className="dayText">
                        {this.props.dayText}
                    </div>
                </div>
                {this.genClasses()}
            </div>
        );
    }
}
export default Day;
