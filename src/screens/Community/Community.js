import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import Avatar from '../../components/Avatar/Avatar';
import BaseText from '../../components/UI/BaseText/BaseText';
import MenuButton from '../../components/UI/MenuButton/MenuButton';

export default class Community extends Component {
  state = {
    phase: 0
  };

  drawHorizontalLine = (isBold) => {
    let horizontalLine;

    if (isBold) {
      horizontalLine = <View style={[styles.horizontalLine, { borderWidth: 2 }]} />;
    } else {
      horizontalLine = <View style={[styles.horizontalLine, { borderWidth: 1, opacity: 0.5 }]} />;
    }

    return horizontalLine;
  };

  render() {
    const { phase } = this.state;

    const backgroundImage = phase === 0
      ? require('../../assets/images/background_community_home.png')
      : require('../../assets/images/background_community_profile.png');

    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            width: '100%',
            height: '23%',
            flex: 0
          }}
          imageStyle={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            left: -5
          }}
          source={backgroundImage}
        >
          <View style={styles.upperPart}>
            <View style={styles.avatarAndMenuContainer}>
              <TouchableOpacity onPress={() => this.setState({ phase: 0 })}>
                <View style={[styles.menuButtonContainer]}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 17,
                      color: '#25604E',
                      letterSpacing: -0.41,
                      textAlign: 'center',
                      paddingBottom: 6
                    }}
                  >
                    Home
                  </BaseText>
                  {this.drawHorizontalLine(phase === 0)}
                </View>
              </TouchableOpacity>

              <Avatar />

              <TouchableOpacity onPress={() => this.setState({ phase: 1 })}>
                <View style={[styles.menuButtonContainer, { alignItems: 'flex-end' }]}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 17,
                      color: '#25604E',
                      letterSpacing: -0.41,
                      textAlign: 'center',
                      paddingBottom: 6
                    }}
                  >
                    Profile
                  </BaseText>
                  {this.drawHorizontalLine(phase === 1)}
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsContainer}>
              <MenuButton
                iconName="profile-settings"
                circleStyle={{ width: 32, height: 32, backgroundColor: '#FFFFFF' }}
                iconStyle={{ width: 22, height: 22 }}
                onPressed={() => Alert.alert('Ooops, I did it again!')}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.lowerPart}>
          <Text>Content/Post List</Text>
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
  upperPart: {
    marginTop: 32,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  avatarAndMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuButtonContainer: {
    flex: 0,
    width: 60,
    height: 38,
    marginTop: 6,
    alignItems: 'flex-start'
  },
  horizontalLine: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#145240'
  },
  settingsContainer: {
    top: -16
  },
  lowerPart: {
    width: '100%',
    flex: 0.77,
    borderWidth: 1,
    borderColor: 'purple'
  }
});
