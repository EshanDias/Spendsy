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

export default function DashBoadScreen() {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View
        style={{
          backgroundColor: 'green',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {/* Left */}
        <View style={{}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              fontWeight: 'bold'
            }}
          >
            Dashboard
          </Text>
        </View>
        {/* Right */}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Ionicons.Button
            style={{
              padding: 0,
              margin: 0,
              paddingLeft: 5,
              backgroundColor: 'green'
            }}
            name="md-wallet"
          ></Ionicons.Button>
          <Ionicons.Button
            style={{
              padding: 0,
              margin: 0,
              paddingLeft: 5,
              backgroundColor: 'green'
            }}
            name="md-calendar"
          ></Ionicons.Button>
          <Ionicons.Button
            style={{
              padding: 0,
              margin: 0,
              paddingLeft: 5,
              backgroundColor: 'green'
            }}
            name="md-search"
          ></Ionicons.Button>
        </View>
      </View>
      {/* Date Picker */}
      <View style={{ backgroundColor: 'green', padding: 5 }}>
        <ScrollView horizontal>
          {getMonthList().map(buttonName => (
            <View
              key={Math.random().toString()}
              style={{ color: '#f9c2ff', width: '10%' }}
            >
              <Button color="green" title={buttonName} />
            </View>
          ))}
        </ScrollView>
        {/* <FlatList
          horizontal
          data={getMonthList()}
          keyExtractor={() => Math.random().toString()}
          renderItem={({ item }) => (
            <View style={{ color: '#f9c2ff' }}>
              <Button color="green" title={item} style={{ padding: 60 }} />
            </View>
          )}
        /> */}
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.mainContainer}>
          <Text>This is Dashboard</Text>
          <View>
            <Text>My Wallets</Text>
          </View>
          <View>
            <Text>Graphs</Text>
          </View>
        </View>
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
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingTop: 24
  }
  // container: {
  //   backgroundColor: '#fff',
  //   width: '100%'
  // },
  // developmentModeText: {
  //   marginBottom: 20,
  //   color: 'rgba(0,0,0,0.4)',
  //   fontSize: 14,
  //   lineHeight: 19,
  //   textAlign: 'center'
  // },
  // contentContainer: {
  //   padding: 10
  // },
  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20
  // },
  // welcomeImage: {
  //   width: 100,
  //   height: 80,
  //   resizeMode: 'contain',
  //   marginTop: 3,
  //   marginLeft: -10
  // },
  // getStartedContainer: {
  //   alignItems: 'center',
  //   marginHorizontal: 50
  // },
  // homeScreenFilename: {
  //   marginVertical: 7
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)'
  // },
  // codeHighlightContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.05)',
  //   borderRadius: 3,
  //   paddingHorizontal: 4
  // },
  // getStartedText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   lineHeight: 24,
  //   textAlign: 'center'
  // },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { width: 0, height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3
  //     },
  //     android: {
  //       elevation: 20
  //     },
  //     web: {
  //       shadowColor: 'black'
  //     }
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center'
  // },
  // navigationFilename: {
  //   marginTop: 5
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center'
  // },
  // helpLink: {
  //   paddingVertical: 15
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7'
  // }
});
