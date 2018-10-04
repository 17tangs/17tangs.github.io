import React, {Component} from 'react';
import './SignIn.css';
import Fade from 'react-reveal';
import store from 'store';
import {Redirect, Link} from 'react-router-dom';



class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            userFilled: '',
            passFilled: '',
            showButton: 'none',
            redirect: false,
            error:false,
        }
    }
    componentDidMount() {
      this._isMounted = true
    }
    componentWillUnmount() {
      this._isMounted = false
    }
    submit = () =>{
        this.setState({ error: true });
        fetch('http://localhost:5000/signin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(r => r.json())
        .then(data => {
            if(data === 'success'){
                store.set('loggedIn', true);
            }
            else{
                console.log('hi');
                store.set('loggedIn', false);
            }

        })

    }
    handleUsername = (e) =>{
        if(e.target.value.trim() !== '' && this.state.password.trim() !== ''){
            this.setState({
                showButton: 'block',
            })
        }
        else if(e.target.value.trim() === '' || this.state.password.trim() === ''){
            this.setState({
                showButton: 'none',
            })
        }
        store.set('username', e.target.value);
        this.setState({
            email: e.target.value,
        })
    }
    handlePassword = (e) =>{
        if(this.state.email.trim() !== '' && e.target.value.trim() !== ''){
            this.setState({
                showButton: 'block',
            })
        }
        else if(this.state.email.trim() === '' || e.target.value.trim() === ''){
            this.setState({
                showButton: 'none',
            })
        }
        store.set('password', e.target.value);
        this.setState({
            password: e.target.value,
        })
    }
    handleUserFocus = (e) =>{
        this.setState({
            userFilled: 'input--filled',
        })
    }
    handleUserBlur = (e) =>{
        if(this.state.email.trim() === ''){
            this.setState({
                userFilled: '',
            })
        }
    }
    handlePassFocus = (e) =>{
        this.setState({
            passFilled: 'input--filled',
        })
    }
    handlePassBlur = (e) =>{
        if(this.state.password.trim() === ''){
            this.setState({
                passFilled: '',
            })
        }

    }
    render(){
        const {error} = this.state;
        let show = 'none';
        console.log(this.props.location.error);
        if(this.props.location.error === true){
            console.log('hi')
            show = 'block';
        }
        // const { from } = this.props.location.state || { from: { pathname: "/" } };
        // if (this.state.redirect) {
        //   return <Redirect to={from} />;
        // }

        return(
            <div className="signIn">
                <div id="signIn">
                    <section className="content bgcolor-1">
                        <Fade>
                            <h1>Welcome</h1>
            				<span className={`input input--nao ${this.state.userFilled}`}>
            					<input value = {this.state.email} onFocus={this.handleUserFocus} onBlur={this.handleUserBlur} onChange = {this.handleUsername} className="input__field input__field--nao" tabIndex = "1" type="text" id="input-1" />
            					<label className="input__label input__label--nao" htmlFor="input-1">
            						<span className="input__label-content input__label-content--nao">Email</span>
            					</label>
            					<svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
            						<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            					</svg>
            				</span>
            				<span className={`input input--nao ${this.state.passFilled}`}>
            					<input value = {this.state.password} onFocus={this.handlePassFocus} onBlur={this.handlePassBlur} onChange = {this.handlePassword} className="input__field  input__field--nao" tabIndex = "2" type="password" id="input-2" />
            					<label className="input__label input__label--nao" htmlFor="input-2">
            						<span className="input__label-content input__label-content--nao">Password</span>
            					</label>
            					<svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
            						<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            					</svg>
            				</span>
                        </Fade>
        			</section>
                     <p style={{'display':`${show}`, 'color': 'red'}}> Invalid credentials </p>
                    <Fade up>
                        <div style = {{display:`${this.state.showButton}`}} >
                            {/* onClick={this.submit}> */}
                            <Link style={{color:'white', textDecoration: 'none'}} to="/" ><div id="logIn">Sign In </div></Link>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default SignIn;
