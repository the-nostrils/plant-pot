import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlantCardList from '../../components/PlantCardList/PlantCardList';

export default class RemovePlants extends Component {
  static navigationOptions = {
    title: 'Remove Plants',
    headerStyle: {
      backgroundColor: '#F5F5F5'
      // height: 0
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  state = {};

  // plantCardPressedhandler = () => this.props.navigation.navigate('Details');

  render() {
    return (
      <View style={styles.container}>
        <PlantCardList listButtonMode={1} {...this.props} />
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
