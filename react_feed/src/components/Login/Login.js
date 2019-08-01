import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';


class Login extends Component {

    constructor(){
        super();
        this.state = {
        username: '',
        password: '',
        redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if(this.state.username && this.state.password){
            PostData('login',this.state).then((result) => {
            let responseJson = result;
            if(responseJson.userData){
                sessionStorage.setItem('userData',JSON.stringify(responseJson));
                this.setState({redirectToReferrer: true});
            }
            else
            alert(result.error);
            });
        }
    }

    onChange(e){
    this.setState({[e.target.name]:e.target.value});
    }

    render() {
    if (this.state.redirectToReferrer) {
        return (<Redirect to={'/home'}/>)
    }
    if(sessionStorage.getItem('userData')){
        return (<Redirect to={'/home'}/>)
    }
    return (
    <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
        <input type="submit" className="button" value="Login" onClick={this.login}/>
        <a href="/signup">Registration</a>
        </div>
    </div>
    );
    }
}
export default Login;