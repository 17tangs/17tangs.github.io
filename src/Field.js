import React, {Component} from 'react';
import './Field.css';

class Field extends Component{
    constructor(){
        super();
        this.state = {
            linkAnimation: '',
            linkAnimations: ['','','','','','','',''],
        }
    }
    handleHover = (event) =>{
        let s = this.state.linkAnimations;
        s[event.target.id] = 'animated pulse';
        this.setState({linkAnimations:s, linkAnimation: 'animated pulse'});
    }
    resetHover = (event) => {
        let s = this.state.linkAnimations;
        s[event.target.id] = '';
        this.setState({linkAnimations: s, linkAnimation: ''});
    }
    render(){
        if(typeof this.props.link === 'undefined'){
            if (Array.isArray(this.props.text) && this.props.text.length > 1){
                return(
                    <div className = "field">
                        <div className = "fieldRegion">
                            <span className = "title"><b>{this.props.title}: </b></span>
                        </div>
                        <div className = "textRegion fieldText">
                            <ul style = {{margin:0, paddingLeft:0,listStylePosition:`inside`}}> {this.props.text.map((item,i) => <li key={i} >{item}</li>)} </ul>
                        </div>
                    </div>
                )
            }
            return(
                <div className = "field">
                    <div className = "fieldRegion">
                        <span className = "title"><b>{this.props.title}: </b></span>
                    </div>
                    <div className = "textRegion">
                        <span className = "fieldText"> {this.props.text} </span>
                    </div>
                </div>
            );
        }
        else{
            if (Array.isArray(this.props.text) && this.props.text.length > 1){
                return(
                    <div className = "field">
                        <div className = "fieldRegion">
                            <span className = "title"><b>{this.props.title}: </b></span>
                        </div>
                        <div className = "textRegion fieldText">
                            <ul style = {{margin:0, paddingLeft:0,listStylePosition:`inside`}}>
                                {this.props.text.map((item,i) =>
                                    <li>
                                        <div key = {i} className = {this.state.linkAnimations[i]} onMouseLeave = {this.resetHover} onMouseEnter = {this.handleHover} style={{display:"inline-block"}}>
                                            <a id = {i} className = "linkText" href = {this.props.link[i]} target="_blank">{item}</a>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                )
            }
            return(
                <div className = "field">
                    <div className = "fieldRegion">
                        <span className = "title"><b>{this.props.title}: </b></span>
                    </div>
                    <div className = "textRegion fieldText" >
                        <div onMouseEnter = {this.handleHover} onMouseLeave = {this.resetHover} className = {this.state.linkAnimation} style={{display:"inline-block"}}><a className = "linkText" href={this.props.link} target="_blank">{this.props.text}</a></div>
                    </div>
                </div>
            );
        }

    }
}

export default Field;
