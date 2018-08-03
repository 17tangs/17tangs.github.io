import React, { Component } from 'react';
import './MainRegion.css';
import Schedule from './Schedule';
import Details from './Details';

class MainRegion extends Component {
    onClick = (event) =>{
        console.log(event.target.id);
    }
    render(){
        return(
            <div className = "mainRegion">
                <Details />
                <Schedule onClick = {this.onClick} sd = {this.props.sd}/>
            </div>
        );
    }
}

export default MainRegion;
