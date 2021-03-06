/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import TrackingHome from './src/screens/Tracking/TrackingHome';
import Plant from './src/screens/Tracking/Plant';
import PlantTracker from './src/screens/Tracking/PlantTracker';
import RemovePlants from './src/screens/Tracking/RemovePlants';
import CommunityHome from './src/screens/Community/CommunityHome';
import NewPost from './src/screens/Community/NewPost';
import Entrance from './src/screens/Auth/Entrance';
import SignUp from './src/screens/Auth/SignUp';
import TabBar from './src/components/UI/TabBar/TabBar';
import PlantpediaHome from './src/screens/Plantpedia/PlantpediaHome';
import PlantInfo from './src/screens/Plantpedia/PlantInfo';

const defaultNavStyle = {
  backgroundColor: '#F5F5F5',
  headerTransparent: true,
  headerBackTitle: null,
  headerTruncatedBackTitle: null,
  headerTintColor: '#3C9568',
  headerLeftContainerStyle: {
    left: 50
  }
};

const TrackingStack = createStackNavigator(
  {
    TrackingHome: { screen: TrackingHome },
    RemovePlants: { screen: RemovePlants },
    Plant: { screen: Plant },
    PlantTracker: { screen: PlantTracker }
  },
  {
    initialRouteName: 'TrackingHome',
    defaultNavigationOptions: defaultNavStyle
  }
);

const CommunityStack = createStackNavigator(
  {
    Home: { screen: CommunityHome },
    NewPost: { screen: NewPost },
    Posted: { screen: CommunityHome }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: defaultNavStyle
  }
);

const PlantpediaStack = createStackNavigator(
  {
    PlantpediaHome,
    PlantInfo
  },
  {
    initialRouteName: 'PlantpediaHome',
    defaultNavigationOptions: defaultNavStyle
  }
);

const AuthStack = createStackNavigator(
  {
    Home: Entrance,
    Register: SignUp
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: defaultNavStyle
  }
);

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    Tracking: { screen: TrackingStack },
    Community: { screen: CommunityStack },
    Plantpedia: { screen: PlantpediaStack }
  },
  {
    tabBarComponent: TabBar
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    App: AppTabNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
);

export default createAppContainer(SwitchNavigator);
