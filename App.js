import React from 'react';
import { WeatherAppProvider } from './src/store/WeatherAppContext'
import Home from './src/components/Home'

export default function App() {
  return (
    <WeatherAppProvider>
      <Home />
    </WeatherAppProvider>
  );
}
