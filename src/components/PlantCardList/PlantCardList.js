import React, { Component } from 'react';
import {
  FlatList, ScrollView, StyleSheet, View
} from 'react-native';
import PlantCard from '../PlantCard/PlantCard';
import PlantListButton from '../UI/PlantListButton/PlantListButton';

export default class App extends Component {
  state = {};

  buttonPressedHandler = () => alert('You pressed one of Plant List Buttons!');

  render() {
    return (
      <ScrollView>
        <View
          style={[
            styles.container,
            { flex: 1, flexDirection: 'row', justifyContent: 'space-around' }
          ]}
        >
          <PlantListButton
            buttonText="Add Plant"
            icon="Some icon"
            onButtonPressed={this.buttonPressedHandler}
          />
          <PlantListButton
            buttonText="Remove Plant"
            icon="Some icon"
            onButtonPressed={this.buttonPressedHandler}
          />
        </View>
        <View style={styles.container}>
          <PlantCard name="Onion" />
          <PlantCard name="Onion" />
          <PlantCard name="Onion" />
          <PlantCard name="Onion" />
          <PlantCard name="Onion" />
          <PlantCard name="Onion" />
        </View>
      </ScrollView>
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
