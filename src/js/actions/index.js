export const initAction = payload => ({
  type: 'INIT_ACTION',
  payload
})

export const loadCategory = () => ({
  type: 'LOAD_CATEGORY'
})

export const getMainImage = () => ({
  type: 'MAIN_RANDOM_IMAGE'
})

export const saveMainImage = payload => ({
  type: 'SAVE_MAIN_IMAGE',
  payload
})