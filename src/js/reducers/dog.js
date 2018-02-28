import { isEmpty } from 'lodash';

const init = [];

const dog = (state = init, action) => {
  switch(action.type) {
  case 'INIT_ACTION': {
    const box = [];
    for(let item in action.message) {
      const param = {
        name: item,
        hasChild: isEmpty(action.message[item]) ? false : action.message[item]
      };
      box.push(param);
    }
      
    const merge = [...state, ...box];
    return merge;
  }
  default: return state;
  }
};

export default dog;