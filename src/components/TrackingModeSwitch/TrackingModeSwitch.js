import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import BaseText from '../UI/BaseText/BaseText';

const trackingModeSwitch = (props) => {
  const { isAuto, onToggleSwitch } = props;
  const mode = isAuto ? 'Automatic' : 'Manual';

  const containerStyle = isAuto ? styles.container : [styles.container, styles.containerOverwrite];
  const switchAreaStyle = isAuto
    ? styles.selectedModeArea
    : [styles.selectedModeArea, styles.switchOverwrite];

  return (
    <TouchableOpacity onPress={onToggleSwitch}>
      <View style={containerStyle}>
        <View style={switchAreaStyle}>
          <BaseText
            style={{
              fontFamily: 'SFCompactDisplay-Medium',
              fontSize: 13,
              color: '#004734',
              letterSpacing: -0.08,
              textAlign: 'center'
            }}
          >
            {mode}
          </BaseText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    width: 305.81,
    height: 24.16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    shadowColor: '#CFCFCF',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.61,
    shadowRadius: 13
  },
  selectedModeArea: {
    width: 144.96,
    height: 24.16,
    paddingTop: 4,
    paddingLeft: 41,
    paddingBottom: 5.16,
    paddingRight: 41.96,
    backgroundColor: 'rgba(199, 244, 170, 0.61)',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    shadowColor: '#CFCFCF',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.61,
    shadowRadius: 13
  },
  containerOverwrite: {
    justifyContent: 'flex-end'
  },
  switchOverwrite: {
    paddingLeft: 51,
    paddingRight: 51.96,
    flex: 0
  }
};

trackingModeSwitch.propTypes = {
  isAuto: PropTypes.bool.isRequired,
  onToggleSwitch: PropTypes.func.isRequired
};

export default trackingModeSwitch;
