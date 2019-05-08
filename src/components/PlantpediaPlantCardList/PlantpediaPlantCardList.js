import React, { Component } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import PlantpediaPlantCard from '../PlantpediaPlantCard/PlantpediaPlantCard';
import SearchBox from '../UI/SearchBox/SearchBox';

export default class PlantpediaPlantCardList extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  state = {
    plantList: [
      { id: 1, name: 'Onion', size: 'small' },
      { id: 2, name: 'Beet', size: 'medium' },
      { id: 3, name: 'Strawberry', size: 'large' },
      { id: 4, name: 'Onion', size: 'medium' },
      { id: 5, name: 'Beet', size: 'large' },
      { id: 6, name: 'Strawberry', size: 'small' }
    ],
    searchQuery: ''
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

  searchHandler = (val) => {
    this.setState({
      searchQuery: val
    });
  }
  // plantCardPressedhandler = () => this.  props.navigation.navigate('Details');

  render() {
    // const { listButtonMode } = this.props;
    const { plantList } = this.state;
    const { searchQuery } = this.state;

    const plantCardWidth = 340;

    return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.searchBoxContainer}>
              <SearchBox
                searchQuery={searchQuery}
                searchHandler={val => this.searchHandler(val)}
              />
            </View>
            <View style={styles.cardListContainer}>
              <FlatList
                data={plantList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.plantCardContainer}>
                    <PlantpediaPlantCard
                      name={item.name}
                      width={plantCardWidth}
                      size={item.size}
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
  searchBoxContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#F5F5F5',
    width: '86%',
    height: 50
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
