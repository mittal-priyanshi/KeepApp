import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

class HeaderButton extends Component{
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        open: false,
      };

      handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
      handleMenuClose = (e) => {
        this.setState({ anchorEl: null });
        console.log(e.target.value);
        this.props.loggedIn(e.target.value);
      };
    render(){
        const { anchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem value='false' onClick={this.handleMenuClose}>Logout</MenuItem>
            </Menu>
          );
        if(this.props.isLoggedIn === "false" || this.props.isLoggedIn === 0){
        return(<div>
            <Button variant = "outlined" color = 'inherit' 
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                >SIGNIN</Button>
        </div>);
        }
        else if(this.props.isLoggedIn === "true"){
            return(<div>
                <Button variant = "outlined" color = 'inherit' 
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                >{this.props.id}</Button>
                <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> 
              {renderMenu}
            </div>);
        }
    }
}

export default HeaderButton;