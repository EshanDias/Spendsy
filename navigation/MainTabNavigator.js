import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AddWalletSreen from '../screens/AddWalletScreen';

import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    defaultNavigationOptions: {
      headerMode: 'screen',
      headerStyle: {
        backgroundColor: Colors.green
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerShown: true
    }
  }
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    ...config
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
};

SettingsStack.path = '';

const DashboardStack = createStackNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    AddWallet: { screen: AddWalletSreen }
  },
  {
    initialRouteName: 'Dashboard',

    ...config
    // navigationOptions: ({ navigation }) => {
    //   let tabBarVisible = true;
    //   if (navigation.state.index > 0) {
    //     tabBarVisible = false;
    //   }

    //   return {
    //     tabBarVisible: false
    //   };
    // }
  }
);

DashboardStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Dashboard',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-speedometer' : 'md-speedometer'}
      />
    ),
    tabBarVisible
  };
};

DashboardStack.path = '';

const tabNavigator = createBottomTabNavigator({
  DashboardStack,
  HomeStack,
  LinksStack,
  SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
