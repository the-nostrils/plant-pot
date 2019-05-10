/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  const { containerStyle, pictureStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        // eslint-disable-next-line global-require
        source={require('../../assets/images/george-bohunicky-118985-unsplash.jpg')}
        style={[styles.profilePicture, pictureStyle]}
      />
    </View>
  );
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
  pictureStyle: { resizeMode: 'cover' }
};

export default Avatar;
