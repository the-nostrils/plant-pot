/* eslint-disable no-alert, no-undef */
import React, { Component } from 'react';
import {
  Alert, Image, ImageBackground, StyleSheet, View
} from 'react-native';
import PropTypes from 'prop-types';

import BaseText from '../../components/UI/BaseText/BaseText';
import MenuButton from '../../components/UI/MenuButton/MenuButton';
import TrackingCalendar from '../../components/TrackingCalendar/TrackingCalendar';

export default class PlantTracker extends Component {
  static navigationOptions = {
    title: 'Red Onion Irrigation Time',
    headerStyle: {
      height: 80
    },
    headerTitleStyle: {
      fontFamily: 'SFCompactDisplay-Bold',
      fontSize: 17,
      color: '#004734',
      letterSpacing: -0.41,
      marginBottom: 8
    }
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          source={require('../../assets/images/Tracktobedone.png')}
          style={[styles.container, { width: '100%', height: '100%', paddingBottom: 60 }]}
        > */}
        <BaseText
          style={{
            fontFamily: 'SFCompactDisplay-Regular',
            fontSize: 15,
            color: '#004734',
            letterSpacing: -0.24,
            textAlign: 'left'
          }}
        >
          You have 2 mission for this week
          {' '}
        </BaseText>
        {/* <View style={styles.animationContainer} /> */}
        <Image source={require('../../assets/animations/irrigate.gif')} />
        <View style={styles.missionButtonsContainer}>
          <View style={styles.missionButton}>
            <MenuButton
              iconName="mission-done"
              circleStyle={{
                width: 121.12,
                height: 87.39,
                backgroundColor: 'transparent',
                borderRadius: 0,
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0,
                shadowRadius: 0
              }}
              iconStyle={{ width: 121.12, height: 87.39 }}
              onPressed={() => Alert.alert('Pressed!')}
            />
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 15,
                color: '#004734',
                letterSpacing: -0.24,
                textAlign: 'left',
                marginTop: 7,
                position: 'absolute',
                top: 27,
                left: 35
              }}
            >
              Done
            </BaseText>
          </View>
          <View style={styles.missionButton}>
            <MenuButton
              iconName="mission-postpone"
              circleStyle={{
                width: 121.12,
                height: 87.39,
                backgroundColor: 'transparent',
                borderRadius: 0,
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0,
                shadowRadius: 0
              }}
              iconStyle={{ width: 121.12, height: 87.39 }}
              onPressed={() => Alert.alert('Pressed!')}
            />
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 15,
                color: '#004734',
                letterSpacing: -0.24,
                textAlign: 'left',
                marginTop: 7,
                position: 'absolute',
                top: 27,
                left: 35
              }}
            >
              Postpone
            </BaseText>
          </View>
        </View>
        <TrackingCalendar />
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 60
  },
  missionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350
  },
  missionButton: {}
});

PlantTracker.propTypes = {};