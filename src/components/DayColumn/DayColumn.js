import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import BaseText from '../UI/BaseText/BaseText';

const DayColumn = (props) => {
  const { dayNumber, dayNameInitial, isDayTracked, style } = props;
  const trackingCircleStyle = isDayTracked ? styles.trackingCircle : null;

  return (
    <View style={[styles.container, style]}>
      {/* <ImageBackground source={require('../../assets/images/icon_today.png')} width="100%"> */}
      <View style={trackingCircleStyle} />
      <BaseText
        style={{
          fontFamily: 'SFCompactDisplay-Medium',
          fontSize: 19,
          color: '#004734',
          letterSpacing: 1,
          textAlign: 'center',
          padding: 5
        }}
      >
        {dayNameInitial}
      </BaseText>
      <BaseText
        style={{
          fontFamily: 'SFCompactDisplay-Medium',
          fontSize: 19,
          color: '#004734',
          letterSpacing: 1,
          textAlign: 'center',
          opacity: 0.5
        }}
      >
        {dayNumber}
      </BaseText>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  trackingCircle: {
    width: 10,
    height: 10,
    backgroundColor: '#C7F4AA',
    borderRadius: 50
  }
});

DayColumn.propTypes = {
  dayNumber: PropTypes.number.isRequired,
  dayNameInitial: PropTypes.string.isRequired,
  isDayTracked: PropTypes.bool.isRequired
};

export default DayColumn;
