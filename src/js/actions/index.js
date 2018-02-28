export const initAction = payload => ({
  type: 'INIT_ACTION',
  payload
});

export const loadCategory = () => ({
  type: 'LOAD_CATEGORY'
});

export const getMainImage = count => ({
  type: 'MAIN_RANDOM_IMAGE',
  payload: count
});

export const saveMainImage = payload => ({
  type: 'SAVE_MAIN_IMAGE',
  payload
});

export const invokeChange = (count = 15) => ({
  type: 'INVOKE_CHANE_SETTING',
  payload: count
});