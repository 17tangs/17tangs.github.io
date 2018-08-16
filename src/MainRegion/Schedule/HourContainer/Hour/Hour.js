import React, { Component } from 'react';
import './Hour.css';

class Hour extends Component{
    AmPm = () =>{
        if(this.props.time < 0 )        { return ``;}
        if(this.props.time > 12)        { return `${this.props.time-12}PM`; }
        else if (this.props.time === 12){ return `12PM`; }
        else                            { return `${this.props.time}AM`;}
    }
    render(){
        let time = this.AmPm();
        return(
            <div className="hour" style = {{height:`${100/(this.props.numHours+1)}%`}}>
                <div className="hourText">
                    {time}
                </div>
             </div>
        );
    }
}

export default Hour;
