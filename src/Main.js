import React, {Component} from 'react';
import SignIn from './SignIn/SignIn';
import './resources/animate.css';
import App from './App.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";



class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            isAuth: false
        }
    }
    submit = (r) =>{
        this.setState({
            isAuth: r
        })
    }

    render(){
        console.log(this.state.isAuth);
        return(
          <Router>
              <div style={{height:'100%', weight:'100%'}}>
                <Route path="/login" render={
                    (props)=> <SignIn {...props} submit = {this.submit}/>
                }/>
                <PrivateRoute exact path="/" component={App} auth={this.state.isAuth}/>

              </div>
            </Router>
        );
    }
}

const PrivateRoute = ({ component: Component, auth}) => {
    return(
      <Route
        render={props => {
            return(auth ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{pathname: "/login",
                }}
              />
          ))

      }
        }
      />
    );
}


export default Main;
