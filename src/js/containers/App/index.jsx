import React, { Component } from 'react';
import Header from 'components/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import uuid from 'uuid';
import msg from 'logic/msg';
import { ImageWrap, ImageContainer, ResponsiveImg } from './style';

const reduce = (data, flag) => data.filter((item, i) => i < flag);

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadCategory, getMainImage, setting } = this.props;
    getMainImage(setting.count);
  }

  render() {
    const { lang } = this.props;
    return (
      <main>
        <Header title={msg(lang).mainView} lang={lang} />
        <ImageContainer>
          {this.props.mainImage.map(item => (
            <ImageWrap key={uuid.v4()}>
              <ResponsiveImg src={item} />
            </ImageWrap>
          ))}
        </ImageContainer>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  dog: state.dog,
  mainImage: reduce(state.mainImage, state.setting.count),
  setting: state.setting,
  lang: state.lang
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
