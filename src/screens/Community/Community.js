import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlantCardList from '../../components/PlantCardList/PlantCardList';

export default class Community extends Component {
  state = {};

  buttonPressedHandler = () => alert('You pressed one of Plant List Buttons!');

  // plantCardPressedhandler = () => this.props.navigation.navigate('Details');

  render() {
    return (
      <View style={styles.container}>
        <Text>Community Page!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  }
});
