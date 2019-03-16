import React, { Component } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './NoteTaker.css';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
});

class NoteTaker extends Component{
    constructor(props){
        super(props);
        this.state = {
            description : "",
            title : "",
            opacity : true
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnSubmit(e){
        e.preventDefault();
        console.log(this.state.description, this.state.title);
        
        this.props.handleForTodoApp(this.state.description, this.state.title, this.props.id);
        this.setState({description : ""});
        this.setState({title : ""});
    }

    handleOnChange(e){
        console.log("e = ",e.target.value);
        this.setState ({
            description : e.target.value
        });
    }

    handleOnChangeTitle(e){
        console.log("e = ",e.target.value);
        this.setState ({
            title : e.target.value
        });
    }

    handleOnClick(e){
        console.log('hello');
        console.log(this.state.opacity);
        if(this.state.opacity===true){
        this.setState({
            opacity:!this.state.opacity
        })
    }
    }

    render(){
        let btn_id=this.state.opacity?"classop1":"classop2";
        const { classes } = this.props;
        return(<div className = "NoteTaker">
            <form className={classes.container} noValidate autoComplete="off">
            <TextField className={btn_id}
                id={btn_id}
                label="Title"
                type="title"
                name="title"
                variant="outlined"
                onChange = {this.handleOnChangeTitle}
                 value = {this.state.title}
            /><br/>
            <TextField className="classop2"
                label="Take your note..."
                type="note"
                name="note"
                variant="outlined"
                onChange = {this.handleOnChange}
                value = {this.state.description}
                onClick={this.handleOnClick} 
            /><br/>
            <IconButton variant="contained" color ='primary'
             onClick = {this.handleOnSubmit}><AddIcon/></IconButton>
             </form>
        </div>);
    }
}
NoteTaker.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NoteTaker);