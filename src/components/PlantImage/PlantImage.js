import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';

const plantImage = props => (
  <View style={[styles.container, props.style]}>
    {/* eslint-disable-next-line global-require */}
    <Image
      // eslint-disable-next-line global-require
      source={require('../../assets/images/beet.png')}
      style={styles.plantImage}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 71.36,
    width: 71.36,
    borderColor: '#F5F5F5',
    borderBottomLeftRadius: 240,
    borderTopLeftRadius: 240,
    borderBottomRightRadius: 240,
    borderTopRightRadius: 240,
    borderWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.16,
    shadowRadius: 5
  },
  plantImage: {
    height: '100%',
    width: '100%'
  }
});

// plantImage.propTypes = {
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired
// }

export default plantImage;
