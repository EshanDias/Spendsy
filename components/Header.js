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
import { Ionicons, Entypo } from '@expo/vector-icons';
import moment from 'moment';
import Colors from '../constants/Colors';

const DateRangeSelector = () => {
  return (
    <View style={{ backgroundColor: 'green', padding: 5 }}>
      {/* <ScrollView horizontal >
          {getMonthList().map((buttonName, index) => (
            <View
              key={index.toString()}
              style={{ color: '#f9c2ff', width: '10%' }}
            >
              {console.log(buttonName)}
              <Button color="green" title={buttonName} />
            </View>
          ))}
        </ScrollView> */}
      <FlatList
        horizontal
        data={getMonthList()}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => (
          <View style={{ color: '#f9c2ff' }}>
            <Button color="green" title={item} />
          </View>
        )}
        contentContainerStyle={{}}
        style={{}}
      />
    </View>
  );
};

function HeaderIconButtons(props) {
  if (props.screen === 'dashboard') {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Entypo.Button
          style={styles.headerIconButton}
          size={35}
          name="wallet"
        ></Entypo.Button>
        <Ionicons.Button
          style={styles.headerIconButton}
          size={35}
          name="md-calendar"
        ></Ionicons.Button>
        <Ionicons.Button
          style={styles.headerIconButton}
          size={35}
          name="md-search"
        ></Ionicons.Button>
      </View>
    );
  }
  return false;
}

export default function Header(props) {
  return (
    <View>
      <View style={styles.notificationBar}></View>
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
              color: Colors.white,
              fontSize: 25,
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10
            }}
          >
            Dashboard
          </Text>
        </View>
        {/* Right */}
        <HeaderIconButtons screen={props.screen} />
      </View>
      {/* Date Picker */}
      {props.dateRangeSelector ? <DateRangeSelector /> : false}
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
