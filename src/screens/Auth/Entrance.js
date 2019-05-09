import React, { Component } from 'react';
import {
  Alert, StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

import AppLogo from '../../components/UI/AppLogo/AppLogo';
import BaseText from '../../components/UI/BaseText/BaseText';

export default class Entrance extends Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <AppLogo />
        </View>
        <Swiper
          autoplay
          autoplayTimeout={4}
          style={styles.swiperContainer}
          paginationStyle={{ margin: 45 }}
          dotStyle={{
            backgroundColor: 'rgba(43, 109, 85, 0.5)',
            width: 12,
            height: 12,
            borderRadius: 8
          }}
          activeDotStyle={{
            backgroundColor: 'rgba(43, 109, 85, 1)',
            width: 12,
            height: 12,
            borderRadius: 8
          }}
        >
          <View style={styles.slide1}>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 20,
                color: '#145240',
                letterSpacing: 1.0,
                textAlign: 'center'
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Track</Text>
              {' '}
Your Plant
            </BaseText>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 20,
                color: '#145240',
                letterSpacing: 1.0,
                textAlign: 'center'
              }}
            >
              Control them better
            </BaseText>
          </View>
          <View style={styles.slide2}>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 20,
                color: '#145240',
                letterSpacing: 1.0,
                textAlign: 'center'
              }}
            >
              Be part of the
              {' '}
              <Text style={{ fontWeight: 'bold' }}>community</Text>
            </BaseText>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 20,
                color: '#145240',
                letterSpacing: 1.0,
                textAlign: 'center'
              }}
            >
              Share your idea
            </BaseText>
          </View>
          <View style={styles.slide3}>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 20,
                color: '#145240',
                letterSpacing: 1.0,
                textAlign: 'center'
              }}
            >
              Get
              {' '}
              <Text style={{ fontWeight: 'bold' }}>information</Text>
            </BaseText>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 20,
                color: '#145240',
                letterSpacing: 3.0,
                textAlign: 'center'
              }}
            >
              about plants and
            </BaseText>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 20,
                color: '#145240',
                letterSpacing: 1.0,
                textAlign: 'center'
              }}
            >
              learn more
            </BaseText>
          </View>
        </Swiper>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register', { phase: 0 })}
          >
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 17,
                color: '#F5F5F5',
                letterSpacing: -0.41,
                textAlign: 'left'
              }}
            >
              Sign Up
            </BaseText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register', { phase: 2 })}
          >
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Regular',
                fontSize: 17,
                color: 'rgba(245, 245, 245, 0.57)',
                letterSpacing: -0.41,
                textAlign: 'left'
              }}
            >
              Log In
            </BaseText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  logoContainer: {
    flex: 1,
    marginTop: 125
  },
  swiperContainer: {
    paddingTop: 30
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    backgroundColor: '#4EBC7C',
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6
  }
});
