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
import Plantpedia from './src/screens/Plantpedia/Plantpedia';
import Entrance from './src/screens/Auth/Entrance';
import SignUp from './src/screens/Auth/SignUp';
import PlantImage from './src/components/PlantImage/PlantImage';
import TabBar from './src/components/UI/TabBar/TabBar';

const TrackingStack = createStackNavigator(
  {
    TrackingHome,
    RemovePlants,
    Plant,
    PlantTracker
  },
  {
    initialRouteName: 'TrackingHome',
    headerMode: 'none'
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
    defaultNavigationOptions: {
      backgroundColor: '#F5F5F5',
      headerTransparent: true
    }
  }
);

const PlantpediaStack = createStackNavigator(
  {
    Home: Plantpedia,
    Details: PlantImage
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      backgroundColor: '#F5F5F5',
      headerTransparent: true
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Home: Entrance,
    Register: SignUp
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      backgroundColor: '#F5F5F5',
      headerTransparent: true
    }
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
