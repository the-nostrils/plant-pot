import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Plantpedia extends Component {
  state = {};

  buttonPressedHandler = () => alert('You pressed one of Plant List Buttons!');

  // plantCardPressedhandler = () => this.props.navigation.navigate('Details');

  render() {
    return (
      <View style={styles.container}>
        <Text>Plantpedia Page!</Text>
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
