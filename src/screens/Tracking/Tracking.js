import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlantCardList from '../../components/PlantCardList/PlantCardList';

export default class Tracking extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  state = {};

  buttonPressedHandler = () => alert('You pressed one of Plant List Buttons!');

  // plantCardPressedhandler = () => this.props.navigation.navigate('Details');

  render() {
    return (
      <View style={styles.container}>
        <PlantCardList {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  }
});
