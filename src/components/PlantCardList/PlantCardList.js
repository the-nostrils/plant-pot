import React, { Component } from 'react';
import {
  Alert, FlatList, ScrollView, StyleSheet, View, Image
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

import PlantCard from '../PlantCard/PlantCard';
import PlantListButton from '../UI/PlantListButton/PlantListButton';
import BaseText from '../UI/BaseText/BaseText';

export default class PlantCardList extends Component {
  state = {};

  renderPlantCardList = () => {
    const { listButtonMode, plantList, onRemovePlantSubmit } = this.props;

    const plantCardWidth = listButtonMode === 0 ? 330 : 312;
    const plantCardContainerOverride = listButtonMode === 1 ? { opacity: 0.61 } : null;

    switch (listButtonMode) {
      case 0:
        return (
          <View style={styles.cardListContainer}>
            {typeof plantList !== 'undefined' && plantList.length > 0 ? (
              <FlatList
                data={plantList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.plantCardContainer}>
                    <PlantCard
                      name={item.name}
                      width={plantCardWidth}
                      style={plantCardContainerOverride}
                      {...this.props}
                    />
                  </View>
                )}
                extraData={this.props}
              />
            ) : (
              <BaseText
                style={{
                  fontFamily: 'SFCompactDisplay-Regular',
                  fontSize: 15,
                  color: '#004734',
                  letterSpacing: -0.24,
                  textAlign: 'left',
                  marginTop: 60
                }}
              >
                There is no plant in your tracking list.
                {'\n'}
                Click Add Plants button to select one.
                {' '}
              </BaseText>
            )}
          </View>
        );
      case 1:
        return (
          <View style={styles.cardListContainer}>
            <FlatList
              data={plantList}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onRemovePlantSubmit(item)}>
                  <View style={styles.plantCardContainer}>
                    <Image
                      style={styles.removePlantsIcon}
                      // eslint-disable-next-line global-require
                      source={require('../../assets/images/icon_remove_plants.png')}
                    />
                    <PlantCard
                      name={item.name}
                      width={plantCardWidth}
                      style={plantCardContainerOverride}
                      {...this.props}
                    />
                  </View>
                </TouchableOpacity>
              )}
              extraData={this.props}
            />
          </View>
        );
      default:
        return null;
    }
  };

  drawHorizontalLine = () => {
    const { listButtonMode } = this.props;

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

    return horizontalLine;
  };

  render() {
    const { addPlantButtonPressed, removePlantButtonPressed } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.listButtonsContainer}>
            <View style={styles.buttonContainer}>
              <PlantListButton buttonText="Add Plants" onPressed={addPlantButtonPressed} />
              <PlantListButton buttonText="Remove Plants" onPressed={removePlantButtonPressed} />
            </View>
            {this.drawHorizontalLine()}
          </View>
          {this.renderPlantCardList()}
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
    backgroundColor: '#F5F5F5',
    zIndex: 900
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
    backgroundColor: '#F5F5F5',
    paddingBottom: 20
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
    backgroundColor: '#F5F5F5',
    zIndex: 910
  },
  plantCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 920
  },
  removePlantsIcon: {
    marginBottom: 10
  }
});

PlantCardList.propTypes = {
  listButtonMode: PropTypes.number.isRequired,
  addPlantButtonPressed: PropTypes.func.isRequired,
  onRemovePlantSubmit: PropTypes.func.isRequired,
  removePlantButtonPressed: PropTypes.func.isRequired
};
