import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import './LoginPlate.css';
import SignOn from './SignOn';

class LoginPlate extends Component{
    constructor(props){
        super(props);
        this.state = {
            val : 'signUp'
        }
        this.handleOnClickIn = this.handleOnClickIn.bind(this);
        this.handleOnClickUp = this.handleOnClickUp.bind(this);
        this.handleForSignIn = this.handleForSignIn.bind(this);
        this.handleForSignUp = this.handleForSignUp.bind(this);
    }
    handleOnClickIn(e){
        this.setState({
            val: 'signIn'
        })
        console.log("Value ",this.state.val);
        
    }
    handleOnClickUp(e){
        this.setState({
            val: 'signUp'
        })
        console.log("Value ",this.state.val);
        
    }
    handleForSignIn(id, password){
        this.props.handleForSignIn(id, password);
    }
    handleForSignUp(id, password){
        this.props.handleForSignUp(id, password);
    }
    render(){
        return(<div className = "plate" >
            <Button variant='outlined' colour = 'primary' value = 'signUp' onClick ={this.handleOnClickUp}>SIGNUP</Button>
            <Button variant='outlined' colour = 'primary' value = 'signIn' onClick ={this.handleOnClickIn}>SIGNIN</Button>
            <SignOn val={this.state.val} handleForSignUp = {this.handleForSignUp} handleForSignIn = {this.handleForSignIn}/>
        </div>)
    }
}

export default LoginPlate;
