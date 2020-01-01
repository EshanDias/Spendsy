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

export default function AddWalletcSreen() {
  return (
    <View>
      {/* Header */}
      <Header dateRangeSelector={true} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Wallets />
      </ScrollView>
    </View>
  );
}

AddWalletcSreen.navigationOptions = {
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
