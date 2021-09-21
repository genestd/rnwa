import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import GlyphMap from '../../assets/fonts/glyphmap'
import Icon from '../components/shared/Icon'

const ExtendedForecast = () => (
  <View style={styles.main}>
    <Text>Goodbye</Text>
  </View>
)

const styles = StyleSheet.create({
  main: {
    height: '50%',
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default ExtendedForecast