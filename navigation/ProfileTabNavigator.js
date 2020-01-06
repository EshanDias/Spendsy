import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import ProfileSreen from '../screens/Profile';
import SettingsScreen from '../screens/SettingsScreen';

import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    defaultNavigationOptions: {
      headerMode: 'screen',
      headerStyle: {
        backgroundColor: Colors.header
      },
      headerTintColor: Colors.headerTint,
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerShown: true
    }
  }
});

const SLinksStack = createStackNavigator(
  {
    ProfilePage: ProfileSreen
  },
  config
);

SLinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};

SLinksStack.path = '';

const SSettingsStack = createStackNavigator(
  {
    SettingsPAGE: { screen: ProfileSreen }
  },
  config
);

SSettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
};

SSettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  SLinksStack,
  SSettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
