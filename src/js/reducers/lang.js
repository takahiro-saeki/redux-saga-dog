const lang = (state = 'JA', action) => {
  switch(action.type) {
  case 'EN': {
    return 'EN'
  }
  case 'JA': {
    return 'JA'
  }
  default: return 'JA';
  }
};

export default lang;