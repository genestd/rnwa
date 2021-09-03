import INITIAL_STATE from './initialState'
import { SET_LOCATION, SET_MESSAGE } from './actions'

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
        locationIsSet: true,
        message: ''
      }

    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }

    default:
      return { ...state }
  }
}

export default reducer
