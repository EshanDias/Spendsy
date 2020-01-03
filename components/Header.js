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
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import Colors from '../constants/Colors';

const DateRangeSelector = () => {
  return (
    <View style={{ backgroundColor: Colors.green, padding: 5 }}>
      {/* <ScrollView horizontal >
          {getMonthList().map((buttonName, index) => (
            <View
              key={index.toString()}
              style={{ color: '#f9c2ff', width: '10%' }}
            >
              {console.log(buttonName)}
              <Button color={Colors.green} title={buttonName} />
            </View>
          ))}
        </ScrollView> */}
      <FlatList
        horizontal
        data={getMonthList()}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => (
          <View style={{ color: '#f9c2ff' }}>
            <Button color={Colors.green} title={item} />
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          backgroundColor: Colors.green
        }}
      >
        <Entypo.Button
          style={styles.headerIconButton}
          size={30}
          name="wallet"
        ></Entypo.Button>
        <Entypo.Button
          style={styles.headerIconButton}
          size={30}
          name="calendar"
        ></Entypo.Button>
        <MaterialIcons.Button
          style={styles.headerIconButton}
          size={30}
          name="search"
        ></MaterialIcons.Button>
      </View>
    );
  }
  return false;
}

class Header extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.notificationBar}></View>
        {/* Header */}
        <View
          style={{
            backgroundColor: Colors.green,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          {/* Left */}
          <View style={{ backgroundColor: Colors.green }}>
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
          <HeaderIconButtons screen={this.props.screen} />
        </View>
        {/* Date Picker */}
        {this.props.dateRangeSelector ? <DateRangeSelector /> : false}
      </View>
    );
  }
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
    backgroundColor: Colors.green,
    width: '100%',
    height: 24
  },
  headerIconButton: {
    padding: 0,
    paddingTop: 10,
    paddingLeft: 5,
    margin: 0,
    marginBottom: -1,
    backgroundColor: Colors.green
  }
});

export default Header;
