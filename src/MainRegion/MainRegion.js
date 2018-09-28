import React, { Component } from 'react';
import './MainRegion.css';
import Schedule from './Schedule/Schedule';
import Details from './Details/Details';
// import DependencyGraph from './DependencyGraph/DependencyGraph'

class MainRegion extends Component {
    constructor(){
      super();
      this.state = {
        detailsID: '',
        showDetails : false,
      }
    }
    clickBackground = (event) => {
        if(event.target.className === 'mainRegion'){
          this.setState({showDetails:false});
        }
    }
    handleKeyDetail = (event) => {
      if(event.keyCode === 27){
        this.setState({showDetails:false});
      }
    }
    handleDetails = () => {
        let data = this.props.dd.filter((subject)=>subject.id===this.props.detailsID)[0];
        if(this.props.showDetails === true){
            return <Details cn = '' subjectData = {data}/>;
        }
        else{
            return '';
        }
    }
    render(){
        return(
            <div onClick ={this.clickBackground} className = "mainRegion">
                {/* <DependencyGraph/> */}
                <Schedule hoverDay = {this.props.hoverDay} resetDay = {this.props.resetDay}  onClick = {this.props.onClick} sd = {this.props.sd}/>
                {this.handleDetails()}
            </div>
        );
    }
}

export default MainRegion;
