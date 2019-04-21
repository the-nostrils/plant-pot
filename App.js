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

import Tracking from './src/screens/Tracking/Tracking';
import Community from './src/screens/Community/Community';
import Plantpedia from './src/screens/Plantpedia/Plantpedia';
import PlantImage from './src/components/PlantImage/PlantImage';
import TabBar from './src/components/UI/TabBar/TabBar';

const TrackingStack = createStackNavigator(
  {
    Home: Tracking,
    Details: PlantImage
  },
  {
    initialRouteName: 'Home'
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
