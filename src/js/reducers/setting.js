const init = {
  count: 3
};

const setting = (state = init, action) => {
  switch(action.type) {
  case 'CHANGE_SETTING': {
    const createParam = {
      count: action.payload
    };
    return createParam;
  }
  default: return state;
  }
};

export default setting;