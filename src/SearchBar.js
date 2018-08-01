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
    render(){
        return(
            <div className='searchBarContainer'>
                <input className= 'searchBar' onFocus={this.focus} onBlur={this.focus} onChange={this.props.searchChange} type='text' placeholder = 'search class' />
			    <div id = "bord1" style  = {{transform:`${this.state.transform}`}}></div>
            </div>
        );
    }
}

export default SearchBar;
