import React, { Component } from 'react';
import './Details.css';

class Details extends Component{
    render(){
        return (
            <div className = {`detailsContainer ${this.props.cn}`}>
                <div className = "details" style = {{backgroundColor: `var(--c${this.props.subjectData.id})`}}>
                    <div className = "headerText" >
                        <h1> {this.props.subjectData.name} </h1>
                    </div>
                </div>
                <div className = "text">
                </div>
            </div>
        );
    }
}

export default Details;
