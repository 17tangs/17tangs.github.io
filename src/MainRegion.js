import React, { Component } from 'react';
import './MainRegion.css';
import Schedule from './Schedule';
import Details from './Details';

class MainRegion extends Component {
    render(){
        return(
            <div className = "mainRegion">
                <Details />
                <Schedule sd = {this.props.sd}/>
            </div>
        );
    }
}

export default MainRegion;
