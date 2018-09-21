import React, {Component} from 'react';
import SignIn from './SignIn/SignIn';
import './resources/animate.css';
import App from './App.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import store from 'store';


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
        console.log(store.get('loggedIn'));
        return(
            <div style={{height:'100%', weight:'100%'}}>
                <Router>
                    <Switch>
                    {/* <Route path="/login" render={
                        (props)=> <SignIn {...props} submit = {this.submit}/>
                    }/> */}
                        <Route path = '/login' component={SignIn}/>
                        {/* <Route exact path='/' component={App}/> */}
                        <PrivateRoute exact path="/" component={App} auth={this.state.isAuth}/>

                    </Switch>
                </Router>
            </div>
        );
    }
}

const PrivateRoute = ({ component: Component, auth}) => {
    return(
      <Route
        render={props => {
            return(store.get('loggedIn')===true ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{pathname: "/login",
                state: {from: props.location}
                }}
              />
          ))

      }
        }
      />
    );
}


export default Main;
