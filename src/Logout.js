import React, { Component } from 'react';
import './Logout.css';

class Logout extends Component{
  constructor(){
    super();
    this.state={
        logoutHover:false
    }
  }
  onHover = (event) =>{
    event.type === "mouseover" ? this.setState({logoutHover:true}) : this.setState({logoutHover:false});
  }
  render(){
    return(
          <a className = {"logout " + (this.state.logoutHover ? 'animated rubberBand' : '')} href="login.html" onMouseOut={this.onHover} onMouseOver={this.onHover}>
            Log out
          </a>
    );
  }
}

export default Logout;
