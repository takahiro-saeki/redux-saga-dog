import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  
  handleChange = () => {
    this.setState(({open}) => ({ open: !open }))
  }
  
  render() {
    return (
      <header>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleChange}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={this.handleChange}
        >
          <MenuItem onClick={this.handleChange}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleChange}>Menu Item 2</MenuItem>
        </Drawer>
      </header>
    )
  }
}