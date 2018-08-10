import React, {Component} from 'react';
import './Field.css';

class Field extends Component{
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
                            <ul style = {{margin:0, paddingLeft:0,listStylePosition:`inside`}}> {this.props.text.map(item => <li>{item}</li>)} </ul>
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
                        <span className = "fieldText"><a onMouseEnter = {console.log("hovered")} className = "linkText" href={this.props.link} target="_blank">{this.props.text}</a></span>
                    </div>
                </div>
            );
        }

    }
}

export default Field;
