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
              containerStyle={{ margin: 10, marginTop: 20 }}
            />
            <CustomTextInput
              iconType="icon"
              iconName="cash-multiple"
              iconOwner="MaterialCommunityIcons"
              iconColor={Colors.customTextBoxIcon}
              placeHolder="Initial Balance"
              containerStyle={{ margin: 10 }}
            />
            <CustomTextInput
              iconType="icon"
              iconName="currency-usd"
              iconOwner="MaterialCommunityIcons"
              iconColor={Colors.customTextBoxIcon}
              placeHolder="Currency"
              containerStyle={{ margin: 10 }}
            />
          </Card>
        </ScrollView>
        <TouchableHighlight
          style={{
            height: 50,
            // top: 40,
            // bottom: 10,
            margin: 10,
            borderRadius: 10,
            backgroundColor: Colors.submitButton,
            justifyContent: 'center',
            alignItems: 'center',
            ...elevationShadowStyle(3)
          }}
          onPress={() => this.save()}
          underlayColor={Colors.customButtonOverlay}
        >
          <Text style={{ color: Colors.submitButtonText, padding: 25 }}>
            SAVE WALLET
          </Text>
          {/* SAVE WALLET */}
          {/* <Button
              color={Colors.submitButton}
              title="ADD WALLET"
              onPress={() => this.save()}
            /> */}
        </TouchableHighlight>
      </View>
    );
  }
}
function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}
// AddWalletcSreen.navigationOptions = {
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
