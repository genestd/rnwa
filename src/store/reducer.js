import INITIAL_STATE from './initialState'
import { SET_DEVICE_SIZE, SET_FORECAST, SET_COORDINATES, SET_MESSAGE,
  SET_LOCATION } from './actions'
import { setForecast, setCoordinates } from './operations'

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SET_DEVICE_SIZE:
      return {
        ...state,
        isMobile: action.payload
      }
      
    case SET_COORDINATES:
      return setCoordinates(state, action)

    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }

    case SET_FORECAST:
      return setForecast(state, action)

    case SET_LOCATION:
      return {
        ...state,
        location: {
          city: action.payload.properties.relativeLocation.properties.city,
          state: action.payload.properties.relativeLocation.properties.state
        }
      }

    default:
      return { ...state }
  }
}

export default reducer
