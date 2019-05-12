/* eslint-disable no-nested-ternary */
/* eslint-disable no-alert, no-undef */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
// import PropTypes from 'prop-types';
import PlantpediaPlantImage from '../../components/PlantpediaPlantImage/PlantpediaPlantImage';
import BaseText from '../../components/UI/BaseText/BaseText';
import LevelOfExpertise from '../../components/LevelOfExpertise/LevelOfExpertise';
import WaterNeedLevel from '../../components/WaterNeedLevel/WaterNeedLevel';
import PlantAndHarvestTime from '../../components/PlantAndHarvestTime/PlantAndHarvestTime';

export default class PlantCard extends Component {
  state = {
  };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const size = navigation.getParam('size');
    const levelOfExpertise = navigation.getParam('levelOfExpertise');
    const season = navigation.getParam('season');
    const plantTime = navigation.getParam('plantTime');
    const harvestTime = navigation.getParam('harvestTime');
    const family = navigation.getParam('family');
    const waterNeedLevel = navigation.getParam('waterNeedLevel');
    const commonProblems = navigation.getParam('commonProblems');
    const exposure = navigation.getParam('exposure');
    const climate = navigation.getParam('climate');
    const width = navigation.getParam('width');


    const sizeOfPlant = size === 'small' ? (
      <View style={styles.sizeImagesContainer}>
        <View
          style={[styles.circleSmall, { backgroundColor: '#145240' }]}
        />
        <View style={[styles.circleMedium]} />
        <View style={[styles.circleLarge]} />
      </View>
    ) : size === 'medium' ? (
      <View style={styles.sizeImagesContainer}>
        <View style={[styles.circleSmall]} />
        <View
          style={[styles.circleMedium, { backgroundColor: '#145240' }]}
        />
        <View style={[styles.circleLarge]} />
      </View>
    ) : (
      <View style={styles.sizeImagesContainer}>
        <View style={[styles.circleSmall]} />
        <View style={[styles.circleMedium]} />
        <View
          style={[styles.circleLarge, { backgroundColor: '#145240' }]}
        />
      </View>
    );

    const horizontalLine = (
      <View style={styles.horizontalLineContainer}>
        <View style={[styles.horizontalLine, { marginTop: 1 }]} />
      </View>
    );

    return (
      <View>
        <View style={[styles.container, { width }]}>
          <View style={styles.plantNameContainer}>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Bold',
                fontSize: 26,
                color: '#145240',
                letterSpacing: -0.41,
                textAlign: 'left'
              }}
            >
              {name}
            </BaseText>
          </View>
          {horizontalLine}
          <View style={styles.plantImageContainer}>
            <PlantpediaPlantImage name={name} style={{ width: 90.51, height: 90.51 }} />
          </View>
          <View style={styles.plantInfoContainer}>
            <Text style={[styles.textContainer, { marginTop: 25 }]}>Season</Text>
            <View style={styles.seasonContainer}>
              <View style={styles.seasonType}>
                <Text style={styles.textContainerBold}>{season}</Text>
                <Text style={[styles.textContainerBold, { textAlign: 'center' }]}>-</Text>
              </View>
              <PlantAndHarvestTime plantTime={plantTime} />
              <PlantAndHarvestTime harvestTime={harvestTime} />
            </View>
            <View style={styles.levelOfExpertiseContainer}>
              <LevelOfExpertise levelOfExpertise={levelOfExpertise} iconSize={{ width: 27, height: 50 }} />
            </View>
            <View style={styles.levelOfExpertiseContainer}>
              <Text>{family}</Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textContainer}>Size</Text>
              {sizeOfPlant}
            </View>
            <View style={styles.levelOfExpertiseContainer}>
              <WaterNeedLevel waterNeedLevel={waterNeedLevel} iconSize={{ width: 19.61, height: 29.39, marginRight: 10 }} />
            </View>
            <View style={styles.levelOfExpertiseContainer}>
              <Text>{commonProblems}</Text>
            </View>
            <View style={styles.levelOfExpertiseContainer}>
              <Text>{exposure}</Text>
            </View>
            <View style={styles.levelOfExpertiseContainer}>
              <Text>{climate}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 550.44,
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 45,
    margin: 21,
    marginBottom: 20,
    marginRight: 25,
    marginTop: 47.4,
    shadowColor: '#CFCFCF',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.61,
    shadowRadius: 13
  },
  plantNameContainer: {
    position: 'absolute',
    width: 240,
    height: 30,
    left: 36,
    top: 35.99,
    flex: 1
  },
  horizontalLineContainer: {
    width: '100%',
    height: 0
  },
  horizontalLine: {
    width: 81.16,
    borderWidth: 1,
    borderColor: '#145240',
    position: 'absolute',
    left: 41.88,
    top: 71.09
  },
  plantImageContainer: {
    position: 'absolute',
    top: -30,
    right: 0
  },
  plantInfoContainer: {
    marginTop: 65,
    width: '92.5%',
    marginLeft: 31
  },
  seasonContainer: {
    display: 'flex',
    marginLeft: 81,
    position: 'absolute',
    top: 25
  },
  seasonType: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  levelOfExpertiseContainer: {
    marginTop: 25
  },
  sizeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 16,
    color: '#4AA972'
  },
  textContainerBold: {
    fontFamily: 'SFCompactDisplay-Bold',
    fontSize: 16,
    color: '#004734'
  },
  sizeImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 155,
    alignItems: 'flex-end',
    width: 80
  },
  circleSmall: {
    width: 17,
    height: 17,
    borderRadius: 8.5,
    borderWidth: 2,
    borderColor: '#145240'
  },
  circleMedium: {
    width: 23,
    height: 23,
    borderRadius: 11.5,
    borderWidth: 2,
    borderColor: '#145240'
  },
  circleLarge: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 2,
    borderColor: '#145240'
  },
  moreButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
    bottom: 0
  }
});

// PlantCard.propTypes = {
//   navigation: PropTypes.func.isRequired
// };
