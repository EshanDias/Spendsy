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

class DashBoadScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Header */}
        {/* <Header screen="dashboard" dateRangeSelector /> */}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Wallets navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

// DashBoadScreen.navigationOptions = {
//   header: null
// };

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.backgroundColor,
    width: '100%',
    height: '100%'
  },
  notificationBar: {
    backgroundColor: Colors.header,
    width: '100%',
    height: 24
  },
  headerIconButton: {
    padding: 0,
    margin: 0,
    paddingLeft: 5,
    backgroundColor: Colors.header,
    paddingTop: 10
  }
});

export default DashBoadScreen;
