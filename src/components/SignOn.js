import React, {Component} from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

class SignOn extends Component{
    constructor(props){
        super(props);
        this.handleForSignIn = this.handleForSignIn.bind(this);
        this.handleForSignUp = this.handleForSignUp.bind(this);
    }
    handleForSignIn(id, password){
        this.props.handleForSignIn(id, password);
    }
    handleForSignUp(id, password){
        this.props.handleForSignUp(id, password);
    }
    render(){
        console.log("HELO",this.props.val);
        
        if(this.props.val==='signUp'){
            return (
                <SignUp handleForSignUp = {this.handleForSignUp}/>
            )
        }
        else{
            return(
                <SignIn handleForSignIn = {this.handleForSignIn}/>
            )
        }
    }
}
export default SignOn;