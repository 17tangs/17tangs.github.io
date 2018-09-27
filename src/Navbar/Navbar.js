import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Logout from './Logout/Logout';
import './Navbar.css';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            dotHover: props.sd.map((s) => 'dotShrink')
        }
    }

    handleHover = (e)=>{
        let cp = this.state.dotHover;
        cp[e.target.id-1] = e.type === 'mouseover' ? 'dotGrow' : 'dotShrink';
        this.setState({
            dotHover: cp,
        })
    }

    generateNav = () =>{
        let s = []
        this.props.sd.forEach((c,i) => {
            s.push(<div className="navC" >
                        <div className="dotContainer">
                            <div id = {c.id} onMouseOver={this.handleHover} onMouseOut = {this.handleHover} className={`dot ${this.state.dotHover[i]}`} style={{backgroundColor:`var(--c${c.id})`}}/>
                        </div>
                        <Fade left>
                        <div className="navText" style={{display: this.state.dotHover[i] ==='dotGrow' ? 'block' : 'none'}}>
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
