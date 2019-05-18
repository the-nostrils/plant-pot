import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import TrackingIcon from '../../../assets/images/icon_tracking.png';
import CommunityIcon from '../../../assets/images/icon_community.png';
import PlantpediaIcon from '../../../assets/images/icon_plantpedia.png';

const tabButton = (props) => {
  const { routeName } = props;
  let icon;

  switch (routeName) {
    case 'Tracking':
      icon = (
        <Image
          // eslint-disable-next-line global-require
          source={TrackingIcon}
          style={[
            styles.iconImage,
            {
              width: 44,
              height: 44,
              resizeMode: 'contain',
              left: 3
            }
          ]}
        />
      );
      break;
    case 'Community':
      icon = (
        <Image
          // eslint-disable-next-line global-require
          source={CommunityIcon}
          style={[
            styles.iconImage,
            {
              width: 44,
              height: 44,
              resizeMode: 'contain',
              left: 1
            }
          ]}
        />
      );
      break;
    case 'Plantpedia':
      icon = (
        <Image
          // eslint-disable-next-line global-require
          source={PlantpediaIcon}
          style={[
            styles.iconImage,
            {
              width: 44,
              height: 44,
              resizeMode: 'contain',
              left: 1,
              top: 2
            }
          ]}
        />
      );
      break;
    default:
      return null;
  }

  return (
    <View
      style={[
        styles.container,
        props.style,
        {
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 64,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.16,
          shadowRadius: 6,
          marginTop: 20,
          zIndex: 999
        }
      ]}
    >
      {/* eslint-disable-next-line global-require */}
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 64,
    borderColor: '#F5F5F5'
  },
  iconImage: {
    height: '100%',
    width: '100%'
  }
});

tabButton.propTypes = {
  routeName: PropTypes.string.isRequired
};

export default tabButton;
