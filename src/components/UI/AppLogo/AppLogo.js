import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import BaseText from '../BaseText/BaseText';

const AppLogo = (props) => {
  const { style } = props;

  return (
    <View style={[styles.container, style]}>
      {/* eslint-disable-next-line global-require */}
      <Image
        // eslint-disable-next-line global-require
        source={require('../../../assets/images/app_logo.png')}
        style={[styles.logo, style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {}
});

export default AppLogo;
