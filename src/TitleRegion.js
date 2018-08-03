import React, { Component } from 'react';
import './TitleRegion.css';
import SearchBar from './SearchBar';

class TitleRegion extends Component{
  genSearchBar = () =>{
      if (this.props.showSearchBar === true){
          console.log("sup");
          return <SearchBar blur = {this.props.onBlur} searchChange={this.props.onSearchChange}/>;
      }
      else{
          return '';
      }
  }
  render(){
    return(
      <div className="titleRegion">
        <div className="titleRegionText"><h1>Schedule</h1></div>
        {this.genSearchBar()}
      </div>
    );
  }
}

export default TitleRegion;
