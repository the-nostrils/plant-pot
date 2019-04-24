import React from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View
} from 'react-native';
import PropTypes from 'prop-types';
import BaseText from '../BaseText/BaseText';

const plantListButton = (props) => {
  const { buttonText, onPressed } = props;
  let icon;
  let overrideButtonContainerStyle;
  let buttonMode;

  if (buttonText === 'Add Plants') {
    buttonMode = 0;
    icon = require('../../../assets/images/icon_add_plants.png');
    overrideButtonContainerStyle = { flexDirection: 'row' };
  } else {
    buttonMode = 1;
    icon = require('../../../assets/images/icon_remove_plants.png');
    overrideButtonContainerStyle = { flexDirection: 'row-reverse' };
  }

  return (
    <TouchableOpacity onPress={() => onPressed(buttonMode)}>
      <View style={styles.container}>
        <View style={[styles.buttonContainer, overrideButtonContainerStyle]}>
          <View>
            <Image source={icon} />
          </View>
          <View style={styles.buttonTextContainer}>
            <BaseText style={styles.buttonText}>{buttonText}</BaseText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 17,
    padding: 4,
    paddingLeft: 6,
    paddingRight: 6,
    color: '#145240',
    letterSpacing: -0.41,
    opacity: 0.57,
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 3 },
    shadowOpacity: 0.36,
    shadowRadius: 6
  }
});

plantListButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPressed: PropTypes.func.isRequired
};

export default plantListButton;
