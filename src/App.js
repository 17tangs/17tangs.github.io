import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import TitleRegion from './TitleRegion/TitleRegion';
import SearchBar from './TitleRegion/SearchBar/SearchBar';
import {ScheduleData, detailsData} from './ScheduleData.js';
import MainRegion from './MainRegion/MainRegion';



class App extends Component {
  constructor(){
    super();
    this.state= {
        detailsID: '',
        showDetails: false,
        day: '',
        schedule_data: ScheduleData,
        searchfield: '',
        showSearchBar: false,
    }
  }
    onClick = (event) =>{
        this.setState({
            detailsID: parseInt(event.target.id.substring(1),10),
            showDetails:true
        });
    }

    onNavClick = (event) => {
        this.setState({
            detailsID: parseInt(event.target.id, 10),
            showDetails:true
        });
    }
    onHomeClick = (event) =>{
        console.log('hi')
        this.setState({
            showDetails: false
        })
    }


  onSearchChange = (event) => {
      if(event.target.value === ''){
          this.setState({searchfield:'', showSearchBar:false});
      }
      else{
          this.setState({searchfield:event.target.value});
      }
  }
  handleSearchBar = (event) =>{
      if("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".includes(event.key)){
          this.setState({showSearchBar:true});
      }
      else if (event.keyCode === 27){
          this.setState({searchfield: '', showSearchBar:false});
      }
  }
  onBlur = (event) =>{
      if(event.type === 'blur'){
          this.setState({searchfield: '', showSearchBar:false});
      }
  }
  hoverDay = (event) =>{
      this.setState({day:event.target.innerHTML});
  }
  resetDay = () =>{
      console.log('noHovered');
      this.setState({day:''});
  }
  genSearchBar = () =>{
      if (this.state.showSearchBar === true){
          return <SearchBar blur = {this.onBlur} searchChange={this.onSearchChange}/>;
      }
      else{
          return '';
      }
  }
  componentWillMount(){
      document.addEventListener("keydown", this.handleSearchBar);
  }



  render() {
      let days = ['M','T','W','R','F'];
      let filteredSchedule = this.state.schedule_data.filter((subject) => {
          return subject.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
      let filteredSchedule2 = filteredSchedule.map((subject,i) => {
          let s = Object.assign({}, subject);
          s.slots = s.slots.filter((slot) =>{
              return this.state.day === '' || days.indexOf(this.state.day)+1 === slot.day
          });
          return s;
      });
      return (
          <div className="App" tabIndex={0} >
              <Navbar onHomeClick = {this.onHomeClick} onNavClick = {this.onNavClick} sd = {this.state.schedule_data}/>
              <div className="main">
              <TitleRegion onBlur = {this.onBlur} onSearchChange = {this.onSearchChange} showSearchBar = {this.state.showSearchBar} />
              <MainRegion onClick={this.onClick} detailsID = {this.state.detailsID} showDetails = {this.state.showDetails} resetDay = {this.resetDay}  hoverDay = {this.hoverDay} sd = {filteredSchedule2} dd = {detailsData}/>
          </div>
          </div>

        );
  }
}

export default App;
