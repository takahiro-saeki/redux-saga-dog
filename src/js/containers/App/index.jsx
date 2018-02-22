import React, { Component } from 'react';
import Header from 'components/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import uuid from 'uuid';
import { ImageWrap, ImageContainer, ResponsiveImg } from './style';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCategory()
    this.props.getMainImage()
  }

  render() {

    return (
      <main>
        <Header />
        <ImageContainer>
          {this.props.mainImage.map(item => (
            <ImageWrap key={uuid.v4()}>
              <ResponsiveImg src={item} />
            </ImageWrap>
          ))}
        </ImageContainer>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  dog: state.dog,
  mainImage: state.mainImage
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
