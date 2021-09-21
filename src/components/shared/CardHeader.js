import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { format } from 'date-fns'

const CardHeader = ({ location }) => (
  <View style={styles.flex}>
    <Text style={styles.title}>{format(Date.now(), 'EEEE, LLLL do yyyy')}</Text>
    <Text style={styles.subtitle}>{location.city}, {location.state}</Text>
  </View>
)
  

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Inter_400Regular, Sans Serif',
    color: '#fff',
    fontSize: 24
  },
  subtitle: {
    fontFamily: 'Inter_400Regular, Sans Serif',
    color: '#fff',
    fontSize: 18,
    padding: 10
  },
});

export default CardHeader
