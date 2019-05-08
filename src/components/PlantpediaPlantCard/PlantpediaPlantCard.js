/* eslint-disable no-alert, no-undef */
import React, { Component } from 'react';
import {
 StyleSheet, TouchableOpacity, View, Text, Image 
} from 'react-native';
import PropTypes from 'prop-types';
import PlantImage from '../PlantImage/PlantImage';
import BaseText from '../UI/BaseText/BaseText';

export default class PlantCard extends Component {
  state = {
  };

  plantCardTouchedHandler = () => {
    /* fix navigation, it crashes
    const { navigation } = this.props;
    return navigation.navigate('Plant'); */
    alert('Plant clicked!');
  };

  toggleSwitchHandler = () => {
    const { isTrackingModeAuto } = this.state;
    this.setState({ isTrackingModeAuto: !isTrackingModeAuto });
  };

  render() {
    const { name, width, size } = this.props;

    const sizeOfPlant =
      size === "small" ? (
        <View style={styles.sizeImagesContainer}>
          <View
            style={[styles.circleSmall, { backgroundColor: "#145240" }]}
          />
          <View style={[styles.circleMedium]} />
          <View style={[styles.circleLarge]} />
        </View>
      ) : size === "medium" ? (
        <View style={styles.sizeImagesContainer}>
          <View style={[styles.circleSmall]} />
          <View
            style={[styles.circleMedium, , { backgroundColor: "#145240" }]}
          />
          <View style={[styles.circleLarge]} />
        </View>
      ) : (
        <View style={styles.sizeImagesContainer}>
          <View style={[styles.circleSmall]} />
          <View style={[styles.circleMedium]} />
          <View
            style={[styles.circleLarge, { backgroundColor: "#145240" }]}
          />
        </View>
      );
    return (
      <TouchableOpacity onPress={this.plantCardTouchedHandler}>
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
            <PlantImage />
          </View>
          <View style={styles.plantInfoContainer}>
            <View style={styles.sizeContainer}>
              <Text style={styles.textContainer}>Size</Text>
              {/* <View style={styles.sizeImagesContainer}>
                <View style={styles.circleSmall} />
                <View style={styles.circleMedium} />
                <View style={styles.circleLarge} />
              </View> */}
              {sizeOfPlant}
            </View>
            <View style={styles.levelOfExpertiseContainer}>
              <Text style={styles.textContainer}>Level Of Expertise</Text>
              <View style={styles.expertiseImagesContainer}>
                <Image
                  style={styles.expertiseImages}
                  source={require('../../assets/images/icon_expertise_full.png')}
                />
                <Image
                  style={styles.expertiseImages}
                  source={require('../../assets/images/icon_expertise_full.png')}
                />
                <Image
                  style={styles.expertiseImages}
                  source={require('../../assets/images/icon_expertise.png')}
                />
                <Image
                  style={styles.expertiseImages}
                  source={require('../../assets/images/icon_expertise.png')}
                />
                <Image
                  style={styles.expertiseImages}
                  source={require('../../assets/images/icon_expertise.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // width: '100%',
    // width: 330.13,
    height: 118.01,
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 45,
    margin: 21,
    marginBottom: 20,
    marginRight: 25,
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
    width: '92.5%'
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
  levelOfExpertiseContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 36.54,
    top: 70.77
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
  expertiseImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 135
  },
  expertiseImages: {
    width: 25,
    height: 35
  },
  moreInfoButtonContainer: {}
});

PlantCard.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};
