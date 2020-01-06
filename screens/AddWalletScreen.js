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
  FlatList,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import Colors from '../constants/Colors';

import CustomTextInput from '../components/TextInput/TextInput';
import CustomButton from '../components/CustomButton';
import Card from '../components/Card';

export default class AddWalletcSreen extends React.Component {
  static navigationOptions = {
    title: 'Add new wallet'
  };

  save = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <Header /> */}
        <ScrollView
          style={styles.mainContainer}
          contentContainerStyle={styles.mainContainer}
        >
          <Card>
            <CustomTextInput
              iconType="icon"
              iconName="wallet"
              iconOwner="Entypo"
              iconColor={Colors.customTextBoxIcon}
              placeHolder="Wallet Name"
              containerStyle={{ marginBottom: 20, marginTop: 20 }}
            />
            <CustomTextInput
              iconType="icon"
              iconName="cash-multiple"
              iconOwner="MaterialCommunityIcons"
              iconColor={Colors.customTextBoxIcon}
              placeHolder="Initial Balance"
              containerStyle={{ marginBottom: 20 }}
            />
            <CustomTextInput
              iconType="icon"
              iconName="currency-usd"
              iconOwner="MaterialCommunityIcons"
              iconColor={Colors.customTextBoxIcon}
              placeHolder="Currency"
              containerStyle={{ marginBottom: 20 }}
            />
          </Card>
        </ScrollView>
        <CustomButton name="SAVE WALLET" onPress={() => this.save()} />
      </View>
    );
  }
}

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
