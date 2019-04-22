/* eslint-disable no-alert, no-undef */
import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import PlantImage from '../../components/PlantImage/PlantImage';
import MenuButton from '../../components/UI/MenuButton/MenuButton';

export default class Plant extends Component {
  static navigationOptions = {
    title: 'Onion',
    headerStyle: {
      backgroundColor: '#F5F5F5'
    },
    headerTitleStyle: {
      fontFamily: 'SFCompactDisplay-Semibold',
      fontSize: 34,
      color: '#112300',
      letterSpacing: -0.41,
      marginBottom: 8
    }
  };

  state = {
    isSettingsMenuOpen: false,
    isTrackingMenuOpen: false
  };

  trackingSettingsPressedHandler = () => {
    const { isSettingsMenuOpen } = this.state;
    this.setState({ isSettingsMenuOpen: !isSettingsMenuOpen });
  };

  trackingMenuPressedHandler = () => {
    const { isTrackingMenuOpen } = this.state;
    this.setState({ isTrackingMenuOpen: !isTrackingMenuOpen });
  };

  menuButtonPressedHandler = () => {
    Alert.alert('Menu button pressed!');
  };

  render() {
    const { isSettingsMenuOpen, isTrackingMenuOpen } = this.state;

    const settingsMenu = isSettingsMenuOpen ? (
      <View style={styles.menuContainer}>
        <View style={styles.mainButtonContainer}>
          <MenuButton
            iconName="tracking-settings"
            circleStyle={{ width: 52.93, height: 52.93, backgroundColor: '#FFFFFF' }}
            iconStyle={{ width: 36.39, height: 36.39 }}
            onPressed={this.trackingSettingsPressedHandler}
          />
        </View>
        <View style={styles.nestedButtonsContainer}>
          <MenuButton
            iconName="edit-name"
            circleStyle={{ width: 38, height: 38, backgroundColor: '#FFFFFF' }}
            iconStyle={{ width: 21, height: 21 }}
            onPressed={this.menuButtonPressedHandler}
          />
          <MenuButton
            iconName="photo"
            circleStyle={{ width: 38, height: 38, backgroundColor: '#FFFFFF' }}
            iconStyle={{ width: 21, height: 21 }}
            onPressed={this.menuButtonPressedHandler}
          />
        </View>
      </View>
    ) : (
      <View style={styles.menuContainer}>
        <View style={styles.mainButtonContainer}>
          <MenuButton
            iconName="tracking-settings"
            circleStyle={{ width: 54.93, height: 54.93, backgroundColor: '#FFFFFF' }}
            iconStyle={{ width: 38.39, height: 38.39 }}
            onPressed={this.trackingSettingsPressedHandler}
          />
        </View>
      </View>
    );

    const trackingMenu = isTrackingMenuOpen ? (
      <View style={[styles.menuContainer, styles.trackingMenuContainer]}>
        <View style={styles.mainButtonContainer}>
          <MenuButton
            circleStyle={{ width: 54, height: 54, backgroundColor: '#FFFFFF' }}
            iconStyle={{
              width: 19,
              height: 19,
              borderBottomLeftRadius: 240,
              borderTopLeftRadius: 240,
              borderBottomRightRadius: 240,
              borderTopRightRadius: 240,
              backgroundColor: '#4DAD75'
            }}
            onPressed={this.trackingMenuPressedHandler}
          />
        </View>
        <View style={[styles.nestedButtonsContainer, styles.trackingButtonsNesting]}>
          <MenuButton
            iconName="irrigate"
            circleStyle={{ width: 56, height: 56, backgroundColor: '#FFFFFF' }}
            iconStyle={{ width: 23, height: 34 }}
            onPressed={this.menuButtonPressedHandler}
          />
          <MenuButton
            iconName="fertilize"
            circleStyle={{
              width: 56, height: 56, backgroundColor: '#FFFFFF', top: 50
            }}
            iconStyle={{ width: 36, height: 36 }}
            onPressed={this.menuButtonPressedHandler}
          />
          <MenuButton
            iconName="prune"
            circleStyle={{ width: 56, height: 56, backgroundColor: '#FFFFFF' }}
            iconStyle={{ width: 36, height: 36 }}
            onPressed={this.menuButtonPressedHandler}
          />
        </View>
      </View>
    ) : (
      <View style={[styles.menuContainer, styles.trackingMenuContainer]}>
        <View style={styles.mainButtonContainer}>
          <MenuButton
            circleStyle={{ width: 87.06, height: 87.06, backgroundColor: '#FFFFFF' }}
            iconStyle={{
              width: 31.57,
              height: 31.57,
              borderBottomLeftRadius: 240,
              borderTopLeftRadius: 240,
              borderBottomRightRadius: 240,
              borderTopRightRadius: 240,
              backgroundColor: '#4DAD75'
            }}
            onPressed={this.trackingMenuPressedHandler}
          />
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.upperPart}>
          <PlantImage style={styles.plantImage} />
          {settingsMenu}
        </View>
        <View style={styles.lowerPart}>{trackingMenu}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  upperPart: {
    flex: 0.6,
    alignItems: 'center',
    borderColor: 'red',
    borderBottomWidth: 1,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingBottom: 45
  },
  lowerPart: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContainer: {
    width: '40%',
    marginTop: 40
  },
  trackingMenuContainer: {
    width: '50%',
    marginTop: 0
  },
  mainButtonContainer: {
    alignItems: 'center'
  },
  nestedButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -10
  },
  trackingButtonsNesting: {
    top: -30
  },
  plantImage: {
    width: 153.36,
    height: 153.36,
    shadowColor: '#000000',
    shadowOffset: { width: -10, height: 15 },
    shadowOpacity: 0.16,
    shadowRadius: 11
  }
});

Plant.propTypes = {};
