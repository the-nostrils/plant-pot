import React, { Component } from 'react';
import {
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
      {
        id: 1,
        name: 'Onion',
        size: 'small',
        levelOfExpertise: 1,
        season: 'sow',
        plantTime: [3, 4],
        harvestTime: [7, 8, 9],
        family: 'Liliaceae',
        waterNeedLevel: 'medium',
        commonProblems: [
          'Leek Rust',
          'Onion White Rot',
          'Onion Downy Mildew'
        ],
        exposure: 'High',
        climate: '16-24°C'
      },
      {
        id: 2,
        name: 'Spinach',
        size: 'medium',
        levelOfExpertise: 1,
        season: 'sow',
        plantTime: [3, 4, 5, 8, 9],
        harvestTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        family: 'Amaranthaceae',
        waterNeedLevel: 'high',
        commonProblems: [
          'Birds',
          'Bolting',
          'Spinach downy mildew'
        ],
        exposure: 'Winter cultivars need sunny position',
        climate: '16-18°C'
      },
      {
        id: 3,
        name: 'Garlic',
        size: 'small',
        levelOfExpertise: 1,
        season: 'sow',
        plantTime: [1, 2, 10, 11, 12],
        harvestTime: [6, 7, 8],
        family: 'Herbaceous',
        waterNeedLevel: 'medium',
        commonProblems: [
          'Onion white rot',
          'Leek rust',
          'Birds'
        ],
        exposure: 'High',
        climate: '13-24°C'
      },
      {
        id: 4,
        name: 'Lettuce',
        size: 'small',
        levelOfExpertise: 1,
        season: 'sow',
        plantTime: [3, 4, 5, 6, 7, 8, 9],
        harvestTime: [5, 6, 7, 8, 9, 10, 11, 12],
        family: 'Asteraceae',
        waterNeedLevel: 'medium',
        commonProblems: [
          'Slugs and snails',
          'Grey mould',
          'Bolting'
        ],
        exposure: 'High',
        climate: '2°C (Min.)'
      },
      {
        id: 5,
        name: 'Brussel Sprouts',
        size: 'medium',
        levelOfExpertise: 2,
        season: 'sow',
        plantTime: [2, 3, 4, 5],
        harvestTime: [1, 2, 3, 9, 10, 11, 12],
        family: 'Crucifers',
        waterNeedLevel: 'high',
        commonProblems: [
          'Birds',
          'Club Root',
          'Cabbage Root Fly'
        ],
        exposure: 'High',
        climate: '16-18°C'
      },
      {
        id: 6,
        name: 'Parsley',
        size: 'small',
        levelOfExpertise: 1,
        season: 'sow',
        plantTime: [3, 4, 5, 6],
        harvestTime: [6, 7, 8],
        family: 'Apiaceae',
        waterNeedLevel: 'high',
        commonProblems: [
          'Carrot Fly',
          'Celery Leaf Miner',
          'Carrot Motley Dwarf Virus'
        ],
        exposure: 'Winter cultivars need sunny position',
        climate: '7°C (Min.)'
      }
    ],
    searchQuery: ''
  };

  searchHandler = (val) => {
    this.setState({
      searchQuery: val
    });
  };

  render() {
    const { plantList, searchQuery } = this.state;
    const plantCardWidth = 340;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchBoxContainer}>
            <SearchBox
              searchQuery={searchQuery}
              searchHandler={val => this.searchHandler(val)
              }
            />
          </View>
          <View style={styles.cardListContainer}>
            <FlatList
              data={plantList}
              keyExtractor={item => item.id.toString()
              }
              renderItem={({ item }) => (
                <View
                  style={
                    styles.plantCardContainer
                  }
                >
                  <PlantpediaPlantCard
                    name={item.name}
                    width={plantCardWidth}
                    size={item.size}
                    levelOfExpertise={item.levelOfExpertise}
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
