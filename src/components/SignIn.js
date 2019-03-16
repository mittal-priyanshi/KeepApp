import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './SignIn.css';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
});
const emailRegex = require('email-regex');
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            password : "",
            email : ""
        }
        this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    }
    
    handleOnSubmit(e){
        e.preventDefault();
        if(this.state.email !== '' && this.state.password !== '' && emailRegex().test(this.state.email)){
            this.props.handleForSignIn(this.state.email, this.state.password);
        }
        else if(emailRegex().test(this.state.email) === false){
            alert("Email should be like abc@xyz.com")
        }
        else
            alert("All fields are required");
            this.setState({password : ""})
            this.setState({email : ""})
    }

    handleOnChangePassword(e){
        console.log("e = ",e.target.value);
        this.setState ({
            password : e.target.value
        });
    }

    handleOnChangeEmail(e){
        console.log("e = ",e.target.value);
        this.setState ({
            email : e.target.value
        });
    }

    render(){
        const { classes } = this.props;
        return(<div>
            <form >
            <TextField
                id="outlined-title-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                margin="normal"
                variant="outlined"
                required
                onChange = {this.handleOnChangeEmail}
                 value = {this.state.email}
            /><br/>
            <TextField
                id="outlined-title-input"
                label="Password"
                className={classes.textField}
                type="password"
                name="password"
                margin="normal"
                variant="outlined"
                required
                onChange = {this.handleOnChangePassword}
                value = {this.state.password}
            /><br/>
            <Button variant="contained" color ='primary'
            onClick = {this.handleOnSubmit}>Sign In</Button>
            </form>
        </div>);
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SignIn);