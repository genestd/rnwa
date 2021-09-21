import React from 'react';
import AppLoading from 'expo-app-loading'
import { WeatherAppProvider } from './src/store/WeatherAppContext'
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter'
import Home from './src/components/Home'

export default function App() {
  let [fontsLoaded] = useFonts({
    'WeatherIcons': require('./assets/fonts/WeatherIcons.ttf'),
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black  
  })

  return fontsLoaded ? (
    <WeatherAppProvider>
      <Home />
    </WeatherAppProvider>
  ) : <AppLoading />
}
