import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { WeatherAppContext } from '../store/WeatherAppContext'
import CardHeader from './shared/CardHeader'
import CardFooter from './shared/CardFooter'
import ShortForecast from './shared/ShortForecast'

const Summary = () => {
  const { state, dispatch } = useContext(WeatherAppContext)
  console.log(state)

  return (
    <View style={styles.main}>
      <CardHeader location={state.location} isMobile={state.isMobile} />
      <ShortForecast data={state.forecast.periods[0]} />
      <CardFooter data={state.forecast.periods[0]} />
    </View>
  )
}
  
const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    padding: 15
  }
});

export default Summary
