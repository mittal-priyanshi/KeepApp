import React, { Component } from 'react';
import saveTask from '../routers/FetchCalls';
import fetchData from '../routers/GetData';
import postData from '../routers/PostData';
import Decider from './Decider';
class KeepApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : '',
            notes : [],
            title : "Keep-Application",
            myData : {},
            isLoggedIn : "false"
        }
        this.handleForTodoApp = this.handleForTodoApp.bind(this);
        this.removeTodoFromList = this.removeTodoFromList.bind(this);
        this.handleForSignIn = this.handleForSignIn.bind(this);
        this.handleForSignUp = this.handleForSignUp.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
    }
    async handleForTodoApp(task, title, id){
        
        console.log("from todo App", this.state.notes);
        this.state.myData = await fetchData(id);
        this.state.notes = this.state.myData.notes;
        const newState = [{
            id :Math.random()*340293842,
            title:title,
            description:task
        }];
        this.setState((currState) =>({
            notes:currState.notes.concat(newState)
        }));
        saveTask(this.state.myData.id,this.state.myData.password,this.state.notes);
        console.log("Notes", this.state.notes);
        
    }
    async removeTodoFromList(key, id){
        this.state.myData = await fetchData(id);
        this.state.notes = this.state.myData.notes;
        this.setState((currState) =>({
            notes:currState.notes.filter(task => task.id!==key)
        }));
        saveTask(this.state.myData.id,this.state.myData.password,this.state.notes);
    }
    
handleForSignUp(email,password){
    var notes = [];
    console.log("email, pass",email);
    console.log("email, pass",password);
    postData(email,password,notes);
    this.setState({
        isLoggedIn : "true",
        id : email,
        notes : []
     })
}

async handleForSignIn(email,password){
    this.state.myData = await fetchData(email);
    if(this.state.myData.id !== email){
        alert("User not exist");
    }
    else if(this.state.myData.password !== password){
        alert("Password Incorrect");
    }
    else if(this.state.myData.password === password && this.state.myData.id === email){
        // alert("Login Success");
        this.setState({
            isLoggedIn : "true",
            id : email,
            notes : this.state.myData.notes
        })
    }
    else{
        alert("Login failed");
    }
    console.log("email",this.state.myData.id);
    console.log("password",this.state.myData.password);
}

loggedIn(logState){
    this.setState({
        isLoggedIn : logState,
        myData : {}
    })
  }
    render(){
        
        console.log("here", this.state.notes);
        console.log("State keep", this.state.isLoggedIn);
        
        return(<div>
            <Decider isLoggedIn={this.state.isLoggedIn} id={this.state.id}
            handleForSignUp = {this.handleForSignUp} handleForSignIn = {this.handleForSignIn}
            handleForTodoApp = {this.handleForTodoApp}
            notes = {this.state.notes} removeTodoFromList = {this.removeTodoFromList}
            loggedIn = {this.loggedIn}
            />
        </div>);
    }
}
export default KeepApp;