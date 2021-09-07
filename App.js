import React from 'react';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { WeatherAppProvider } from './src/store/WeatherAppContext'
import Home from './src/components/Home'

export default function App() {
  let [fontsLoaded] = useFonts({
    'WeatherIcons': require('./assets/fonts/WeatherIcons.ttf'),
  })
  return fontsLoaded ? (
    <WeatherAppProvider>
      <Home />
    </WeatherAppProvider>
  ) : <AppLoading />
}
