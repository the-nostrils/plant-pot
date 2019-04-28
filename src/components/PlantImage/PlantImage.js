import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const plantImage = (props) => {
  const { style } = props;

  return (
    <View style={[styles.container, style]}>
      {/* eslint-disable-next-line global-require */}
      <Image
        // eslint-disable-next-line global-require
        source={require('../../assets/images/image_beet.jpeg')}
        style={[styles.plantImage, style]}
      />
    </View>
  );
};

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
    shadowRadius: 5,
    overflow: 'hidden'
  },
  plantImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'center'
  }
});

export default plantImage;
