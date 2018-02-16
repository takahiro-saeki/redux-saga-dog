const init = []

const dog = (state = init, action) => {
  switch(action.type) {
    case 'INIT_ACTION': return state
    default: return state
  }
}

export default dog