/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import PlantCardList from './src/components/PlantCardList/PlantCardList';

export default class App extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <PlantCardList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderWidth: 5,
    borderColor: 'purple'
  }
});
