import React, { Component } from 'react';
import Header from 'components/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.loadCategory()
  }
  
  render() {
    
    return (
      <main>
        <Header />
        {this.props.mainImage.map(item => <img src={item} />)}
        <div onClick={() => this.props.getMainImage()}>test</div>
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