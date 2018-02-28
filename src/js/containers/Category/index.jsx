import React, { Component, Fragment } from 'react';
import Header from 'components/Header';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CategoryList from 'components/CategoryList';

class Category extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.loadCategory();
  }
  
  render() {
    const { dog } = this.props;
    return (
      <main>
        <Header title="category list view" />
        <List>
          <Subheader>{`category type is ${dog.length}`}</Subheader>
          {dog.map(item => <CategoryList data={item} key={uuid.v4()} />)}
        </List>
      </main>
    );
  }
}

const mapStateToProps = state => ({dog: state.dog});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);