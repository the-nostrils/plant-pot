/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BaseText = props => (
  <Text {...props} style={[styles.baseText, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 15,
    color: '#112300',
    letterSpacing: 0
  }
});

export default BaseText;
