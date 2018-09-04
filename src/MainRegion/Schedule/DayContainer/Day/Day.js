import React, { Component } from 'react';
import Class from './Class/Class'
import Fade from 'react-reveal/Fade'
import './Day.css';

class Day extends Component {
    genClasses = () => {
        return this.props.slots.map((c, i) => <Class key ={i} onClick = {this.props.onClick} classData = {c}/>)
    }
    render(){
        return(
            <div className="day">
                <Fade>
                    <div className="dayTextContainer">
                        <div className="dayText" onMouseLeave = {this.props.resetDay} onMouseEnter = {this.props.hoverDay}>
                            {this.props.dayText}
                        </div>
                    </div>
                </Fade>
                {this.genClasses()}
            </div>
        );
    }
}
export default Day;
