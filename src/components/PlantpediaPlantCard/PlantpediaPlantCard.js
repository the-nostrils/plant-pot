/* eslint-disable no-nested-ternary */
/* eslint-disable no-alert, no-undef */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import PropTypes from 'prop-types';
import PlantpediaPlantImage from '../PlantpediaPlantImage/PlantpediaPlantImage';
import BaseText from '../UI/BaseText/BaseText';
import MoreButton from '../UI/MoreButton/MoreButton';
import LevelOfExpertise from '../LevelOfExpertise/LevelOfExpertise';

export default class PlantCard extends Component {
  state = {
  };

  buttonPressedHandler = () => {
    const { navigation, name, size, levelOfExpertise, season, plantTime, harvestTime, family, waterNeedLevel, commonProblems, exposure, climate } = this.props;
    return navigation.navigate('PlantInfo', { name, size, levelOfExpertise, season, plantTime, harvestTime, family, waterNeedLevel, commonProblems, exposure, climate, width: 368.7 });
  };

  render() {
    const {
      name, width, size, levelOfExpertise
    } = this.props;
    const moreButtonWidth = 82.57;

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
    return (
      <View>
        <View style={[styles.container, { width }]}>
          <View style={styles.plantNameContainer}>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Bold',
                fontSize: 18,
                color: '#145240',
                letterSpacing: -0.41,
                textAlign: 'left'
              }}
            >
              {name}
            </BaseText>
          </View>
          <View style={styles.plantImageContainer}>
            <PlantpediaPlantImage name={name} style={{ width: 80.67, height: 80.67 }} />
          </View>
          <View style={styles.plantInfoContainer}>
            <View style={styles.sizeContainer}>
              <Text style={styles.textContainer}>Size</Text>
              {sizeOfPlant}
            </View>
            <LevelOfExpertise levelOfExpertise={levelOfExpertise} />
          </View>
          <View style={styles.moreButtonContainer}>
            <MoreButton
              onPress={this.buttonPressedHandler}
              name={name}
              width={moreButtonWidth}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 118.01,
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 45,
    marginTop: 28,
    marginBottom: 13,
    marginRight: 25,
    marginLeft: 21,
    shadowColor: '#CFCFCF',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.61,
    shadowRadius: 13
  },
  plantNameContainer: {
    position: 'absolute',
    width: 240,
    height: 25,
    left: 36,
    top: 9,
    flex: 1
  },
  plantImageContainer: {
    position: 'absolute',
    top: -30,
    right: 0
  },
  plantInfoContainer: {
    width: '92.5%',
  },
  sizeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 36.54,
    top: 45.2
  },
  textContainer: {
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 15,
    color: '#4AA972'
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
    width: 14.10,
    height: 14.10,
    borderRadius: 7.05,
    borderWidth: 2,
    borderColor: '#145240'
  },
  circleMedium: {
    width: 19.10,
    height: 19.10,
    borderRadius: 9.55,
    borderWidth: 2,
    borderColor: '#145240'
  },
  circleLarge: {
    width: 22.44,
    height: 22.44,
    borderRadius: 11.22,
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

PlantCard.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};
