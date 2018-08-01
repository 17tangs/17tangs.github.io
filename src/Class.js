import React, { Component } from 'react';
import './Class.css';

class Class extends Component{
    constructor(){
        super();
        this.state = {
            hover: "",
            showHidden:false
        }
    }
    onHover = (event) =>{
        let v = event.type === 'mouseover' ? true : false;
        let h = event.type === 'mouseover' ? 'classHover' : '';
        this.setState({showHidden:v, hover:h});
    }
    duration = () =>{
        return (this.props.classData.end - this.props.classData.start)*50;
    }
    render(){
        let classTextVisibility = this.state.showHidden ? 'hidden' : 'visible';
        let classHiddenTextVisibility = this.state.showHidden ? 'visible' : 'hidden';
        let bgc = this.state.showHidden ?  `var(--c${this.props.classData.id}Hover)` : `var(--c${this.props.classData.id})`;
        return(
            <div className={`class ${this.state.hover}`} onMouseOver={this.onHover} onMouseLeave={this.onHover} style = {{top: `${(this.props.classData.start-7)*50}px`, height:`${this.duration()}px`, backgroundColor:`${bgc}`}}>
                <div className="classText" style = {{visibility:`${classTextVisibility}`}}>
                    {this.props.classData.name}
                </div>
                <div className="classHidden" style = {{visibility:`${classHiddenTextVisibility}`}}>
                    {this.props.classData.prof} <br></br>
                    {this.props.classData.loc} <br></br>
                </div>
            </div>
        );
    }
}

export default Class;
