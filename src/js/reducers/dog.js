const init = []

const dog = (state = init, action) => {
  if(action.type === 'DOG_INIT') {
    return state
  }
  return state
}

export default dog