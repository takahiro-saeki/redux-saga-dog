import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import RaisedButton from 'material-ui/RaisedButton';
import Header from 'components/Header';
import msg from 'logic/msg';

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
    const { invokeChange, lang } = this.props;
    return (
      <main>
        <Header title={msg(lang).settingView} lang={lang} />
        <div style={sliderStyle}>
          <div>{msg(lang).initView}: {count}</div>
          <Slider
            min={0}
            max={30}
            step={1}
            value={count}
            onChange={this.handleChange}
          />
          <RaisedButton 
            label={msg(lang).submit} 
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
  setting: state.setting,
  lang: state.lang
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingView);