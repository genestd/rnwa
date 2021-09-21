import { isPast, parseISO } from 'date-fns'
import iconMap from '../../assets/iconMap'

export const setForecast = (state, action) => {
  return {
    ...state,
    forecast: { 
      ...action.payload.properties,
      periods: action.payload.properties.periods
        .filter(period => !isPast(parseISO(period.endTime)))
        .map(period => ({ ...period, icon: getIconFromUrl(period.icon)}))
    },
    forecastIsSet: true,
  }
}

export const setCoordinates = (state, action) => {
  return {
    ...state,
    locationIsSet: true,
    message: '',
    coordinates: action.payload
  }
}

const getIconFromUrl = url => {
  //icon: "https://api.weather.gov/icons/land/day/rain_showers,60/tsra_sct,60?size=medium"
  const [domain, path, area, timeOfDay, icon1Data, icon2Data ] = url.split('//')[1].split('/')
  const primary = icon1Data.split(',')[0].split('?')[0]
  console.log({url, timeOfDay, primary})
  return iconMap[primary][timeOfDay]
}