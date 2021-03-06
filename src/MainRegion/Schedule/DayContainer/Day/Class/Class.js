import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import './Class.css';

class Class extends Component{
    constructor(){
        super();
        this.state = {
            hover: '',
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
        let delay = Math.floor(Math.random() * 5);
        let classTextVisibility = this.state.showHidden ? 'hidden' : 'visible';
        let classHiddenTextVisibility = this.state.showHidden ? 'visible' : 'hidden';
        let bgc = this.state.showHidden ?  `var(--c${this.props.classData.id}Hover)` : `var(--c${this.props.classData.id})`;
        return(
            <Reveal effect="animated zoomIn" delay={delay*100} duration={500}>
            <div id = {`c${this.props.classData.id}`} className={`class ${this.state.hover}`} onClick = {this.props.onClick} onMouseOver={this.onHover} onMouseLeave={this.onHover} style = {{top: `${(this.props.classData.start-7)*50}px`, height:`${this.duration()}px`, backgroundColor:`${bgc}`}}>
                <div id = {`c${this.props.classData.id}`} className="classText" style = {{visibility:`${classTextVisibility}`}}>
                    {this.props.classData.name}
                </div>
                <div id = {`c${this.props.classData.id}`} className="classHidden" style = {{visibility:`${classHiddenTextVisibility}`}}>
                    {this.props.classData.prof} <br></br>
                    {this.props.classData.loc} <br></br>
                </div>
            </div>
        </Reveal>
        );
    }
}

export default Class;
