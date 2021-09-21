export const SET_DEVICE_SIZE = 'SET_DEVICE_SIZE'
export const setDeviceSize = (dispatch, mobile) => dispatch({
  type: SET_DEVICE_SIZE,
  payload: mobile
})

export const SET_COORDINATES = 'SET_COORDINATES'
export const setCoordinates = (dispatch, coordinates) => dispatch({
  type: SET_COORDINATES,
  payload: coordinates
})

export const SET_MESSAGE = 'SET_MESSAGE'
export const setMessage = (dispatch, message) => dispatch({
  type: SET_MESSAGE,
  payload: message
})

export const SET_FORECAST = 'SET_FORECAST'
export const setForecast = (dispatch, forecast) => dispatch({
  type: SET_FORECAST,
  payload: forecast
})

export const SET_LOCATION = 'SET_LOCATION'
export const setLocation = (dispatch, location) => dispatch({
  type: SET_LOCATION,
  payload: location
})