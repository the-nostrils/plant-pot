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
  createAppContainer
} from 'react-navigation';

import TrackingHome from './src/screens/Tracking/TrackingHome';
import Plant from './src/screens/Tracking/Plant';
import PlantTracker from './src/screens/Tracking/PlantTracker';
import AddPlants from './src/screens/Tracking/AddPlants';
import RemovePlants from './src/screens/Tracking/RemovePlants';
import Community from './src/screens/Community/Community';
import Plantpedia from './src/screens/Plantpedia/Plantpedia';
import PlantImage from './src/components/PlantImage/PlantImage';
import TabBar from './src/components/UI/TabBar/TabBar';

const TrackingStack = createStackNavigator(
  {
    TrackingHome,
    AddPlants,
    RemovePlants,
    Plant,
    PlantTracker
  },
  {
    initialRouteName: 'TrackingHome',
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#004734',
      backgroundColor: '#F5F5F5',
      // headerForceInset: { top: 'never', bottom: 'never' },
      headerTransparent: true
    }
  }
);

const CommunityStack = createStackNavigator(
  {
    Home: Community,
    Details: PlantImage
  },
  { initialRouteName: 'Home' }
);

const PlantpediaStack = createStackNavigator(
  {
    Home: Plantpedia,
    Details: PlantImage
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      Tracking: { screen: TrackingStack },
      Community: { screen: CommunityStack },
      Plantpedia: { screen: PlantpediaStack }
    },
    {
      tabBarComponent: TabBar
    }
  )
);
