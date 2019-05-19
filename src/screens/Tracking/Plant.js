/* eslint-disable no-alert, no-undef */
import React, { Component } from 'react';
import {
  Alert, ImageBackground, StyleSheet, View
} from 'react-native';
import PropTypes from 'prop-types';

// import PlantImage from '../../components/PlantImage/PlantImage';
import PlantpediaPlantImage from '../../components/PlantpediaPlantImage/PlantpediaPlantImage';
import MenuButton from '../../components/UI/MenuButton/MenuButton';
import BaseText from '../../components/UI/BaseText/BaseText';

export default class Plant extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name'),
    headerStyle: {
      height: 55
    },
    headerTitleStyle: {
      fontFamily: 'SFCompactDisplay-Semibold',
      fontSize: 34,
      color: '#112300',
      letterSpacing: -0.41,
      marginBottom: 8
    },
    headerTransparent: true
  });

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

  menuButtonPressedHandler = (pageName) => {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const pageTitle = `${name} ${pageName} Time`;

    navigation.navigate('PlantTracker', { pageName, pageTitle });
  };

  render() {
    const { isSettingsMenuOpen, isTrackingMenuOpen } = this.state;
    const { navigation } = this.props;
    const name = navigation.getParam('name');

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
            iconStyle={{ width: 22, height: 22 }}
            onPressed={this.menuButtonPressedHandler}
          />
          <MenuButton
            iconName="photo"
            circleStyle={{ width: 38, height: 38, backgroundColor: '#FFFFFF' }}
            iconStyle={{ width: 22, height: 22 }}
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
          <View style={styles.button}>
            <MenuButton
              buttonName="Irrigate"
              iconName="irrigate"
              circleStyle={{ width: 56, height: 56, backgroundColor: '#FFFFFF' }}
              iconStyle={{ width: 23, height: 34 }}
              onPressed={() => this.menuButtonPressedHandler('Irrigation')}
            />
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 15,
                color: '#145240',
                letterSpacing: -0.24,
                textAlign: 'left',
                opacity: 0.44,
                marginTop: 7
              }}
            >
              Irrigate
            </BaseText>
          </View>
          <View style={styles.button}>
            <MenuButton
              buttonName="Fertilize"
              iconName="fertilize"
              circleStyle={{
                width: 56,
                height: 56,
                backgroundColor: '#FFFFFF',
                top: 50
              }}
              iconStyle={{ width: 23, height: 24 }}
              onPressed={() => this.menuButtonPressedHandler('Fertilization')}
            />
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 15,
                color: '#145240',
                letterSpacing: -0.24,
                textAlign: 'left',
                opacity: 0.44,
                top: 50,
                marginTop: 7
              }}
            >
              Fertilize
            </BaseText>
          </View>
          <View style={styles.button}>
            <MenuButton
              iconName="prune"
              circleStyle={{ width: 56, height: 56, backgroundColor: '#FFFFFF' }}
              iconStyle={{ width: 23, height: 35 }}
              onPressed={() => this.menuButtonPressedHandler('Pruning')}
            />
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 15,
                color: '#145240',
                letterSpacing: -0.24,
                textAlign: 'left',
                opacity: 0.44,
                marginTop: 7
              }}
            >
              Prune
            </BaseText>
          </View>
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
        <ImageBackground
          source={require('../../assets/images/background_plant.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <View style={styles.upperPart}>
            <PlantpediaPlantImage name={name} style={styles.plantImage} />
            {settingsMenu}
          </View>
          <View style={styles.lowerPart}>{trackingMenu}</View>
        </ImageBackground>
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
    marginTop: 65,
    paddingBottom: 45
  },
  lowerPart: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  menuContainer: {
    width: '40%',
    marginTop: 70
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
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Plant.propTypes = {};
