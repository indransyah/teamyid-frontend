import * as types from '../types/user'

const initialState = {
  data: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_DATA_SET:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
