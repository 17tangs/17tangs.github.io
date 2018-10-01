import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Logout from './Logout/Logout';
import './Navbar.css';

class Navbar extends Component{
    constructor(props){
        super(props);
        let s = props.sd.map((s) => 'dotShrink');
        s.push('dotShrink');
        this.state = {
            dotHover: s
        }
    }

    handleHover = (e)=>{
        let cp = this.state.dotHover;
        cp[e.target.id] = e.type === 'mouseover' ? 'dotGrow' : 'dotShrink';
        this.setState({
            dotHover: cp,
        })
    }

    generateNav = () =>{
        let s = []
        s.push(<div className="navC" >
                    <div className="dotContainer">
                        <div id = '0' onClick = {this.props.onHomeClick} onMouseOver={this.handleHover} onMouseOut = {this.handleHover} className={`dot ${this.state.dotHover[0]}`} style={{backgroundColor:`#555`}}/>
                    </div>
                    <Fade left>
                    <div className="navText" style={{color:'white', display: this.state.dotHover[0] ==='dotGrow' ? 'block' : 'none'}}>
                        Home
                    </div>
                </Fade>
                </div>)
        this.props.sd.forEach((c,i) => {
            s.push(<div className="navC" >
                        <div className="dotContainer">
                            <div id = {c.id} onClick = {this.props.onNavClick} onMouseOver={this.handleHover} onMouseOut = {this.handleHover} className={`dot ${this.state.dotHover[i+1]}`} style={{backgroundColor:`var(--c${c.id})`}}/>
                        </div>
                        <Fade left>
                        <div className="navText" style={{display: this.state.dotHover[i+1] ==='dotGrow' ? 'block' : 'none'}}>
                            {c.name}
                        </div>
                    </Fade>
                    </div>);
        })
        return s;
    }
  render(){
    return(
      <div className="Navbar">
          {this.generateNav()}
          {/* <Logout /> */}
      </div>
    );
  }
}


export default Navbar;
