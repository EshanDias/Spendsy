import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  Button,
  FlatList
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import Colors from '../constants/Colors';

import Header from '../components/Header';
import Wallets from '../components/wallets';

export default function DashBoadScreen() {
  return (
    <View>
      {/* Header */}
      <Header screen="dashboard" dateRangeSelector />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Wallets />
      </ScrollView>
    </View>
  );
}

const getMonthList = () => {
  const buttonNames = [];
  for (let i = 0; i < 12; i++) {
    const name = moment()
      .set('M', i)
      .format('MMMM YYYY');
    buttonNames.push(name);
  }
  buttonNames.push('Future');
  return buttonNames;
};

DashBoadScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%'
  },
  notificationBar: {
    backgroundColor: 'green',
    width: '100%',
    height: 24
  },
  headerIconButton: {
    padding: 0,
    margin: 0,
    paddingLeft: 5,
    backgroundColor: 'green',
    paddingTop: 10
  }
});
