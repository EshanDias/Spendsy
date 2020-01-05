import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Button } from 'react-native';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import Card from '../components/Card';

function Wallet(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 5,
        height: 50
      }}
      onResponderRelease={() => props.navigation.navigate('Profile')}
    >
      <Entypo
        name="wallet"
        size={35}
        color={Colors.gold[1]}
        style={{ width: '10%' }}
      />
      <View
        style={{
          flexDirection: 'column',
          width: '85%'
        }}
      >
        <Text
          style={{
            fontSize: 18
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color:
              props.amount > 0 ? Colors.positiveNumber : Colors.negativeNumber
          }}
        >
          LKR {props.amount.toFixed(2)}
        </Text>
      </View>
      <View style={{ width: '5%', justifyContent: 'center' }}>
        <SimpleLineIcons
          name="arrow-right"
          size={20}
          color={Colors.lightGrey}
        />
      </View>
    </View>
  );
}

export default function Wallets(props) {
  const maxWalletDisplayCount = 5;
  const allWallets = [1, 2, 3, 4, 5, 6, 7];
  const [height, setHeight] = useState(
    allWallets.length > maxWalletDisplayCount ? 60 * maxWalletDisplayCount : -1
  );

  return (
    <Card>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: Colors.darkGrey,
          padding: 10
        }}
      >
        Wallets {'&'} Accounts
      </Text>
      <View
        style={{
          flexDirection: 'column',
          height: height,
          overflow: 'hidden',
          padding: 0,
          margin: 0
        }}
      >
        {allWallets.map((w, i) => (
          <Wallet
            key={i.toString()}
            title="Savings Account"
            amount={5425}
            {...props}
          />
        ))}
      </View>
      {height > 0 ? (
        <Text
          style={{
            color: Colors.greenColor,
            textAlign: 'center',
            margin: 5,
            padding: 10
          }}
          onPress={() => {
            setHeight(-1);
          }}
        >
          All Wallets({allWallets.length})
        </Text>
      ) : (
        false
      )}
      <View
        style={{
          justifyContent: 'center',
          margin: 5,
          width: '75%',
          // alignItems: 'center',
          alignSelf: 'center'
        }}
      >
        <Button
          color={Colors.gold[1]}
          title="ADD WALLET"
          onPress={() => props.navigation.navigate('AddWallet')}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({});
