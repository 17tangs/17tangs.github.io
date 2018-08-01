import React, { Component } from 'react';
import Class from './Class'
import './Day.css';

class Day extends Component {
    genClasses = () => {
        let classHTML = slots.map((class) => <Class classData = {class}/>)
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
