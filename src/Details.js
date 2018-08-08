import React, { Component } from 'react';
import './Details.css';

class Details extends Component{
    render(){
        return (
            <div className = {`detailsContainer ${this.props.cn}`}>
                <div className = "details" style = {{backgroundColor: `var(--${this.props.id})`}}>
                    <div className = "headerText" >
                        <h1> MATH </h1>
                    </div>7
                </div>
                <div className = "text">
                </div>
            </div>
        );
    }
}

export default Details;
