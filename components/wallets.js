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
    >
      <Entypo
        name="wallet"
        size={35}
        color={Colors.gold}
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

export default function Wallets() {
  const maxWalletDisplayCount = 4;
  const [height, setHeight] = useState(60 * maxWalletDisplayCount);
  const allWallets = [1, 2, 3, 4, 5];
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 15,
        margin: 5,
        border: 'none',
        ...elevationShadowStyle(3),
        backgroundColor: Colors.white
      }}
    >
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
          height: allWallets.length > maxWalletDisplayCount ? height : -1,
          overflow: 'hidden',
          padding: 0,
          margin: 0
        }}
      >
        {allWallets.map((w, i) => (
          <Wallet key={i.toString()} title="Savings Account" amount={5425} />
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
        <Button color={Colors.gold} title="ADD WALLET" />
      </View>
    </View>
  );
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({});
