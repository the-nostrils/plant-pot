/* eslint-disable no-alert, no-undef */
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import PlantImage from '../PlantImage/PlantImage';
import TrackingModeSwitch from '../TrackingModeSwitch/TrackingModeSwitch';
import BaseText from '../UI/BaseText/BaseText';

export default class PlantCard extends Component {
  state = {
    isTrackingModeAuto: true
  };

  plantCardTouchedHandler = () => {
    const { navigation } = this.props;

    return navigation.navigate('Plant');
  };

  toggleSwitchHandler = () => {
    const { isTrackingModeAuto } = this.state;
    this.setState({ isTrackingModeAuto: !isTrackingModeAuto });
  };

  render() {
    const { name, width, style } = this.props;
    const { isTrackingModeAuto } = this.state;

    return (
      <TouchableOpacity onPress={this.plantCardTouchedHandler}>
        <View style={[styles.container, { width }, style]}>
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
          <View style={styles.trackingModeSwitchContainer}>
            <TrackingModeSwitch
              isAuto={isTrackingModeAuto}
              onToggleSwitch={this.toggleSwitchHandler}
            />
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
    height: 81.67,
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 45,
    margin: 21,
    marginBottom: 36,
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
  trackingModeSwitchContainer: {
    position: 'absolute',
    width: '92.5%',
    height: 24,
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    bottom: 0,
    right: 0
  }
});

PlantCard.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};
