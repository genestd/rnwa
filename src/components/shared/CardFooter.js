import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const CardFooter = ({ data }) => (
  <View style={styles.flex}>
    <Text style={styles.bold}>{data.name}: </Text>
    <Text style={styles.footer}>{data.detailedForecast}</Text>
  </View>
)
  

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    color: '#fff',
    fontSize: 16
  },
  footer: {
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    fontSize: 16
  },
  bold: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 16
  }
});

export default CardFooter
