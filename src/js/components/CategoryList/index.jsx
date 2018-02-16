import React, { Fragment } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import uuid from 'uuid';
import { any } from 'prop-types';

const CategoryList = ({data}) => {
  if(data.hasChild) {
    return (
      <Fragment key={uuid.v4()}>
        <ListItem 
          primaryText={data.name} 
          primaryTogglesNestedList={true}
          initiallyOpen={true}
          nestedItems={data.hasChild.map(childName => (
            <Fragment key={uuid.v4()}>
              <Divider />
              <ListItem primaryText={childName} />
            </Fragment>
          ))} 
        />
        <Divider />
      </Fragment>
    )
  }
  return (
    <Fragment key={uuid.v4()}>
      <ListItem primaryText={data.name} />
      <Divider />
    </Fragment>
  )
}

CategoryList.defaultProps = {
  data: []
}

CategoryList.propTypes = {
  data: any
}

export default CategoryList;