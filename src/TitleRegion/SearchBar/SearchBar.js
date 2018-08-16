import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {transform:''};
    }
    focus = (event) => {
        let t = event.type === 'focus' ? 'scaleX(1)' : 'scaleX(0)';
        this.setState({transform:`${t}`});
    }
    handleBlur = (event) =>{
        this.focus(event);
        this.props.blur(event);
    }
    componentDidMount(){
        this.nameInput.focus();
    }
    render(){
        return(
            <div className='searchBarContainer'>
                <input ref={(input) => {this.nameInput = input; }} value = {this.state.init} className= 'searchBar' onFocus={this.focus} onBlur={this.handleBlur} onChange={this.props.searchChange} type='text' placeholder = 'search' />
			    <div id = "bord1" style  = {{transform:`${this.state.transform}`}}></div>
            </div>
        );
    }
}

export default SearchBar;
