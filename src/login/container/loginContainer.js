import React, { Component } from 'react';
import LoginContainer from '../component/loginComponent';

class loginComponent extends Component {

    state = {
        username : "",
        password : "",
        error:false
    }
    changeUsername = (event) =>{
        const currState = {...this.state};
        currState.username = event.target.value;
        this.setState({username : currState.username})
    }
    changePassword = (event) =>{
        const currState = {...this.state};
        currState.password = event.target.value;
        this.setState({password : currState.password})
    }
    onLogin = async() =>{
        
    }
    render() {
        return (<LoginContainer 
            username = {this.state.username}
            password = {this.state.password}
            error = {this.state.error}
            changeUsername = {this.changeUsername}
            changePassword = {this.changePassword}
            onLogin = {this.onLogin}
        />);
    }
}

export default loginComponent;