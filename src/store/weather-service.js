export const getGridPoints = async (latitude, longitude) => {
  const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`, {
    method: 'GET',
    headers: {
      'User-Agent': '(rnwa, dave@genest.io)'
    }
  })
  if (response.ok) {
    const data = await response.json()
    return data
  }
    
  // TODO: Error handling
  return false
}

export const getForecastByUrl = async url => {
  const response = await fetch(url, {
    headers: {
      'User-Agent': '(rnwa, dave@genest.io)'
    }
  })
  if (response.ok) {
    const data = response.json()
    return data
  }

  // TODO: Error handling
  return false
}