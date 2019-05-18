/* eslint-disable global-require */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  const { containerStyle, pictureStyle, username } = props;
  let avatar;

  switch (username) {
    case 'Alex Boyd':
      avatar = (
        <Image
          source={require('../../assets/images/avatars/alex_boyd.jpg')}
          style={[styles.profilePicture, pictureStyle]}
        />
      );
      break;
    case 'Benjamin Watkins':
      avatar = (
        <Image
          source={require('../../assets/images/avatars/benjamin_watkins.jpeg')}
          style={[styles.profilePicture, pictureStyle]}
        />
      );
      break;
    case 'Joan Mendoza':
      avatar = (
        <Image
          source={require('../../assets/images/avatars/joan_mendoza.jpg')}
          style={[styles.profilePicture, pictureStyle]}
        />
      );
      break;
    case 'Lori Elliot':
      avatar = (
        <Image
          source={require('../../assets/images/avatars/lori_elliot.jpg')}
          style={[styles.profilePicture, pictureStyle]}
        />
      );
      break;
    case 'Nancy Murphy':
      avatar = (
        <Image
          source={require('../../assets/images/avatars/nancy_murphy.jpg')}
          style={[styles.profilePicture, pictureStyle]}
        />
      );
      break;
    case 'Will Collins':
      avatar = (
        <Image
          source={require('../../assets/images/avatars/will_collins.jpg')}
          style={[styles.profilePicture, pictureStyle]}
        />
      );
      break;
    default:
      avatar = (
        <Image
          source={require('../../assets/images/george-bohunicky-118985-unsplash.jpg')}
          style={[styles.profilePicture, pictureStyle]}
        />
      );
  }

  return <View style={[styles.container, containerStyle]}>{avatar}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderColor: '#C2D7CB',
    borderBottomLeftRadius: 240,
    borderTopLeftRadius: 240,
    borderBottomRightRadius: 240,
    borderTopRightRadius: 240,
    borderWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.16,
    shadowRadius: 5,
    overflow: 'hidden'
  },
  profilePicture: {
    height: '100%',
    width: '100%',
    resizeMode: 'center'
  }
});

Avatar.propTypes = {
  containerStyle: PropTypes.object,
  pictureStyle: PropTypes.object
};

Avatar.defaultProps = {
  containerStyle: null,
  pictureStyle: { resizeMode: 'cover' },
  username: PropTypes.string.isRequired
};

export default Avatar;
