import React from 'react';
import moment from 'moment';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  Button,
  FlatList
} from 'react-native';

import Colors from '../constants/Colors';

import Header from '../components/Header';

export default class ProfileSreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
      <View>
        {/* <Header /> */}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text>Profile SCREEN</Text>
          <Button
            color={Colors.gold[1]}
            title="dashboard"
            onPress={() => this.props.navigation.navigate('Dashboard')}
          />
        </ScrollView>
      </View>
    );
  }
}

// ProfileSreen.navigationOptions = {
//   header: null
// };

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
