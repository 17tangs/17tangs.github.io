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
            username: '',
            password: '',
        }
    }

    render(){
        return(
            <div style={{height:'100%', weight:'100%'}}>
                <App />
                {/* <Router>
                    <Switch>
                        <Route path="/login" render={
                            (props)=> <SignIn {...props} submit = {this.submit}/>
                        }/>
                        <PrivateRoute exact path="/" component={App}/>
                    </Switch>
                </Router> */}
            </div>
        );
    }
}

const PrivateRoute = ({ component: Component}) => {
    return(
      <Route
        render={props => {
            return(store.get('username') === 'samtang1430' ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{pathname: "/login",
                state: {from: props.location},
                error: true,
                }}
              />
          ))

      }
        }
      />
    );
}


export default Main;
