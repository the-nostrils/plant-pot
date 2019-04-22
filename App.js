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
// import ModalWindow from './src/components/UI/Modal/ModalWindow';
import Plant from './src/screens/Tracking/Plant';
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
    Details: PlantImage
  },
  {
    initialRouteName: 'TrackingHome'
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
