import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import RaisedButton from 'material-ui/RaisedButton';
import Header from 'components/Header';

const sliderStyle = {
  padding: '1rem 2rem'
};

class SettingView extends Component {
  state = {
    count: 30,
  };
  
  handleChange = (event, value) => {
    this.setState({count: value});
  };
  
  render() {
    const { count } = this.state;
    const { invokeChange } = this.props;
    return (
      <main>
        <Header title="setting view"/>
        <div style={sliderStyle}>
          <div>initial view size is: {count}</div>
          <Slider
            min={0}
            max={30}
            step={1}
            value={count}
            onChange={this.handleChange}
          />
          <RaisedButton 
            label="Submit" 
            primary 
            fullWidth 
            onClick={() => invokeChange(count)}
          />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  setting: state.setting
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingView);