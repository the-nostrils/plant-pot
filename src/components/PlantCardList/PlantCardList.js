import React, { Component } from 'react';
import {
  FlatList, ScrollView, StyleSheet, View
} from 'react-native';
import PlantCard from '../PlantCard/PlantCard';
import PlantListButton from '../UI/PlantListButton/PlantListButton';

export default class PlantCardList extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  state = {
    listButtonMode: 0,
    plantList: [
      { id: 1, name: 'Onion' },
      { id: 2, name: 'Beet' },
      { id: 3, name: 'Strawberry' },
      { id: 4, name: 'Onion' },
      { id: 5, name: 'Beet' },
      { id: 6, name: 'Strawberry' }
    ]
  };

  listButtonPressedHandler = (buttonMode) => {
    const { listButtonMode } = this.state;

    if (buttonMode !== listButtonMode) {
      this.setState({ listButtonMode: buttonMode });
    }
  };

  // plantCardPressedhandler = () => this.  props.navigation.navigate('Details');

  render() {
    const { listButtonMode, plantList } = this.state;
    const horizontalLine = listButtonMode === 0 ? (
      <View style={styles.horizontalLineContainer}>
        <View style={[styles.horizontalLine, { borderWidth: 3 }]} />
        <View style={[styles.horizontalLine, { marginTop: 1 }]} />
      </View>
    ) : (
      <View style={styles.horizontalLineContainer}>
        <View style={[styles.horizontalLine, { marginTop: 1 }]} />
        <View style={[styles.horizontalLine, { borderWidth: 3 }]} />
      </View>
    );

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.listButtonsContainer}>
            <View style={styles.buttonContainer}>
              <PlantListButton buttonText="Add Plants" onPressed={this.listButtonPressedHandler} />
              <PlantListButton
                buttonText="Remove Plants"
                onPressed={this.listButtonPressedHandler}
              />
            </View>
            {horizontalLine}
          </View>
          <View style={styles.cardListContainer}>
            <FlatList
              data={plantList}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <PlantCard name={item.name} {...this.props} />}
            />
          </View>
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
  },
  listButtonsContainer: {
    width: 342,
    height: 49.17,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 56.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  horizontalLineContainer: {
    width: '100%',
    height: 0,
    flexDirection: 'row'
  },
  horizontalLine: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#145240'
  },
  cardListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  }
});
