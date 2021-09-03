import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import INITIAL_STATE from './initialState'

export const WeatherAppContext = createContext(null)
export const WeatherAppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    return <WeatherAppContext.Provider value={{ state, dispatch }}>
        {children}
    </WeatherAppContext.Provider>    
}
