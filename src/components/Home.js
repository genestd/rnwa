import { StatusBar } from 'expo-status-bar';
import React, {useContext, useEffect} from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text } from 'react-native';
import { WeatherAppContext } from '../store/WeatherAppContext'
import { setForecast, setCoordinates, setMessage, setLocation } from '../store/actions'
import { getForecastByUrl, getGridPoints } from '../store/weather-service'
import Summary from './Summary'
import { LinearGradient } from 'expo-linear-gradient';
import ExtendedForecast from './ExtendedForecast';

export default function Home() {
  const { state, dispatch } = useContext(WeatherAppContext)
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setMessage(dispatch, 'Permission to access location was denied')
        return;
      }

      setMessage(dispatch, 'Finding location...')
      
      let location = await Location.getCurrentPositionAsync({});
      setCoordinates(dispatch, location.coords)
      
      const gridpoints = await getGridPoints(location.coords.latitude, location.coords.longitude)
      setLocation(dispatch, gridpoints)
      setMessage(dispatch, 'Getting forecast...')
      const forecast = await getForecastByUrl(gridpoints.properties.forecast)
      
      console.log({gridpoints, forecast})
      
      if (forecast) {
        setForecast(dispatch, forecast)
      } else {
        setMessage(dispatch, 'Forecast error, try refreshing...')
        console.log('Forecast error')
      }

    })();
  }, []);

  return (
    <LinearGradient colors={['#859398', '#283048']} style={styles.container}>
        {state.locationIsSet && state.forecastIsSet ?
          (<>
            <Summary />
            <ExtendedForecast />
          </>) :
          <Text style={{fontFamily: 'Inter_400Regular', fontSize: 24}}>{state.message}</Text>
        }
        <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
