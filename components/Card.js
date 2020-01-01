import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 15,
    margin: 5,
    ...elevationShadowStyle(3),
    backgroundColor: Colors.white
  }
});

export default function Card() {
  return <View style={styles.card}></View>;
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}
