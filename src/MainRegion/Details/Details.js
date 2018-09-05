import React, { Component } from 'react';
import './Details.css';
import Field from './Field/Field';

class Details extends Component{
    generateFields = () => {
        let fieldNames = ["ClassWebsite", "Professor", "TA", "Description", "Textbook"];
        let data = Object.entries(this.props.subjectData).filter(pair => fieldNames.includes(pair[0]) && (!Array.isArray(pair[1]) || pair[1].length > 0));
        let array = [null, null, null, null, null];
        for(let i = 0; i<data.length; i++){
            switch(data[i][0]){
                case "Professor":
                    array[fieldNames.indexOf("Professor")] = <Field key = {i} title={data[i][0]} text = {data[i][1].map(obj => obj.name)} link = {data[i][1].map(obj => obj.email)}/>;
                    break;
                case "TA":
                    array[fieldNames.indexOf("TA")] = <Field key = {i} title={data[i][0]} text = {data[i][1].map(obj => obj.name)} link = {data[i][1].map(obj => obj.email)}/>;
                    break;
                case "ClassWebsite":
                    array[fieldNames.indexOf("ClassWebsite")] = <Field key = {i} title="Class Website" text = "CCLE" link = {data[i][1]}/>;
                    break;
                default:
                    array[fieldNames.indexOf(data[i][0])] = <Field key = {i} title={data[i][0]} text = {data[i][1]}/>;
                    break;
            }
        }
        return array;
    }
    render(){
        return (
            <div className = {`detailsContainer ${this.props.cn}`}>
                {/* <div className = "details" style = {{backgroundColor: `var(--c${this.props.subjectData.id})`}}>
                    <div className = "headerText" >
                        <h1> {this.props.subjectData.name} </h1>
                    </div>
                </div> */}
                <div className = "text">
                    <h1 style={{color:`var(--c${this.props.subjectData.id})`}}> {this.props.subjectData.name}</h1>
                    <h2 className="h2Text"> {this.props.subjectData.fullName}</h2>
                    {this.generateFields()}
                </div>
            </div>
        );
    }
}

export default Details;
