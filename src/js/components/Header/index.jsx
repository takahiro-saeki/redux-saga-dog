import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import msg from 'logic/msg';

const linkStyle = {
  textDecoration: 'none'
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  
  handleChange = () => {
    this.setState(({open}) => ({ open: !open }));
  }
  
  render() {
    const { title, lang } = this.props;
    return (
      <header>
        <AppBar
          title={title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleChange}
          titleStyle={{textAlign: 'center'}}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={this.handleChange}
        >
          <Link to="/" style={linkStyle}>
            <MenuItem onClick={this.handleChange}>{msg(lang).mainView}</MenuItem>
          </Link>
          <Link to="/category" style={linkStyle}>
            <MenuItem onClick={this.handleChange}>{msg(lang).categoryListView}</MenuItem>
          </Link>
          <Link to="/setting" style={linkStyle}>
            <MenuItem onClick={this.handleChange}>{msg(lang).settingView}</MenuItem>
          </Link>
        </Drawer>
      </header>
    );
  }
}