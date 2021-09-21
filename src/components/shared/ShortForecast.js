import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import GlyphMap from '../../../assets/fonts/glyphmap'
import Icon from './Icon'

const ShortForecast = ({ data, isMobile }) => (
  <View style={styles.flexRow}>
    <View style={styles.flexRow}>
      <Text style={isMobile ? styles.large : styles.extraLarge}>{data.temperature}</Text>
      <Icon name={GlyphMap['wi_fahrenheit']} size={84} color='white' style={styles.icon} />
    </View>
    <Icon name={GlyphMap[data.icon]} size={72} color='white' style={styles.iconOffset} />
  </View>
)
  

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  extraLarge: {
    fontFamily: 'Inter_400Regular, Sans Serif',
    color: '#fff',
    fontSize: 72,
  },
  large: {
    fontFamily: 'Inter_400Regular, Sans Serif',
    color: '#fff',
    fontSize: 60,
  },
  icon: {
    paddingRight: 20
  },
  iconOffset: {
    alignSelf: 'center'
  }
});

export default ShortForecast
