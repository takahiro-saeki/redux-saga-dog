const init = [];

const mainImage = (state = init, action) => {
  switch(action.type) {
  case 'SAVE_MAIN_IMAGE': {
    return [...state, action.message];
  }
  default: return state;
  }
};

export default mainImage;