import React, { Fragment } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import uuid from 'uuid';
import { any } from 'prop-types';

const addPadding = {
  paddingLeft: '2rem'
};

const CategoryList = ({data}) => {
  if(data.hasChild) {
    return (
      <div>
        <ListItem 
          primaryText={data.name} 
          nestedItems={data.hasChild.map(childName => (
            <div style={addPadding} key={uuid.v4()}>
              <Divider />
              <ListItem primaryText={childName} />
            </div>
          ))}
        />
        <Divider />
      </div>
    );
  }
  return (
    <Fragment key={uuid.v4()}>
      <ListItem primaryText={data.name} />
      <Divider />
    </Fragment>
  );
};

CategoryList.defaultProps = {
  data: []
};

CategoryList.propTypes = {
  data: any
};

export default CategoryList;