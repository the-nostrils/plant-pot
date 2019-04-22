import React, { Component } from 'react';
import {
  Alert, FlatList, ScrollView, StyleSheet, View, Image
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PlantCard from '../PlantCard/PlantCard';
import PlantListButton from '../UI/PlantListButton/PlantListButton';

export default class PlantCardList extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  state = {
    plantList: [
      { id: 1, name: 'Onion' },
      { id: 2, name: 'Beet' },
      { id: 3, name: 'Strawberry' },
      { id: 4, name: 'Onion' },
      { id: 5, name: 'Beet' },
      { id: 6, name: 'Strawberry' }
    ]
  };

  plantButtonPressedHandler = (buttonMode) => {
    const { navigation } = this.props;

    switch (buttonMode) {
      case 0:
        Alert.alert('Add Plants modal will open.');
        // navigation.navigate('AddPlants');
        break;
      case 1:
        // Alert.alert('Go to Remove Plants Screen!');
        navigation.navigate('RemovePlants');
        break;
      default:
        Alert.alert('TrackingHome');
    }
  };

  removeButtonPressedHandler = () => {
    Alert.alert('Remove button pressed!');
  };

  // plantCardPressedhandler = () => this.  props.navigation.navigate('Details');

  render() {
    const { listButtonMode } = this.props;
    const { plantList } = this.state;

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

    const plantCardWidth = listButtonMode === 0 ? 330 : 312;
    const plantCardContainerOverride = listButtonMode === 1 ? { opacity: 0.61 } : null;
    const removePlantsIcon = listButtonMode === 1 ? (
      <TouchableOpacity onPress={this.removeButtonPressedHandler}>
        <Image
          style={styles.removePlantsIcon}
          source={require('../../assets/images/icon_remove_plants.png')}
        />
      </TouchableOpacity>
    ) : null;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.listButtonsContainer}>
            <View style={styles.buttonContainer}>
              <PlantListButton buttonText="Add Plants" onPressed={this.plantButtonPressedHandler} />
              <PlantListButton
                buttonText="Remove Plants"
                onPressed={this.plantButtonPressedHandler}
              />
            </View>
            {horizontalLine}
          </View>
          <View style={styles.cardListContainer}>
            <FlatList
              data={plantList}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.plantCardContainer}>
                  {removePlantsIcon}
                  <PlantCard
                    name={item.name}
                    width={plantCardWidth}
                    style={plantCardContainerOverride}
                    {...this.props}
                  />
                </View>
              )}
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
  },
  plantCardContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  removePlantsIcon: {
    marginBottom: 10
  }
});

PlantCardList.propTypes = {
  listButtonMode: PropTypes.number.isRequired
};
