import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    ...elevationShadowStyle(2),
    backgroundColor: Colors.cardBackground
  }
});

export default function Card(props) {
  return <View style={styles.card}>{props.children}</View>;
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}
