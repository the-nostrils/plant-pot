import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import BaseText from '../BaseText/BaseText';

const plantListButton = (props) => {
  const { buttonText, icon, onButtonPressed } = props;

  return (
    <TouchableOpacity onPress={onButtonPressed}>
      <View>
        <View>
          <BaseText>{icon}</BaseText>
        </View>
        <View>
          <BaseText>{buttonText}</BaseText>
        </View>
        <View>
          <BaseText>Line</BaseText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

plantListButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onButtonPressed: PropTypes.func.isRequired
};

export default plantListButton;
