import React, { Component } from 'react';
import Logout from './Logout/Logout';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return(
      <div className="Navbar">
          <Logout />
      </div>
    );
  }
}


export default Navbar;
