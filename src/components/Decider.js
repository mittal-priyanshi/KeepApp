import React, {Component} from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import LoginPlate from './LoginPlate';
import NoteTaker from './NoteTaker';
import NoteList from './NoteList';

class Decider extends Component{

    constructor(props){
        super(props);
        this.handleForSignIn = this.handleForSignIn.bind(this);
        this.handleForSignUp = this.handleForSignUp.bind(this);
        this.handleForTodoApp = this.handleForTodoApp.bind(this);
        this.removeTodoFromList = this.removeTodoFromList.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
    }
    handleForSignIn(id, password){
        this.props.handleForSignIn(id, password);
    }
    handleForSignUp(id, password){
        this.props.handleForSignUp(id, password);
    }

    handleForTodoApp(task, title, id){
        this.props.handleForTodoApp(task,title,id);
    }

    removeTodoFromList(key, id){
        this.props.removeTodoFromList(key, id);
    }

    loggedIn(logState){
        console.log("State", logState);
        
        this.props.loggedIn(logState);
      }

render(){
    if(this.props.isLoggedIn === "false" || this.props.isLoggedIn === 0){
        return(<div>
            <PrimarySearchAppBar isLoggedIn = {this.props.isLoggedIn} loggedIn = {this.loggedIn}/><br/>
            <LoginPlate handleForSignUp = {this.handleForSignUp} handleForSignIn = {this.handleForSignIn} />
        </div>)
    }
    else if(this.props.isLoggedIn === "true" || this.props.isLoggedIn === 1){
        return(<div>
             <PrimarySearchAppBar isLoggedIn = {this.props.isLoggedIn} id = {this.props.id} loggedIn = {this.loggedIn}/><br/>
             <NoteTaker handleForTodoApp = {this.handleForTodoApp} id = {this.props.id}/>
             <br/><br/>
             <NoteList tasks = {this.props.notes} removeTodoFromList = {this.removeTodoFromList} id = {this.props.id}/>
        </div>)
    }
}
}

export default Decider;