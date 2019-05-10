import React from 'react';
import {
  StyleSheet, View, Text, Image
} from 'react-native';
import PropTypes from 'prop-types';
import iconExpertiseFull from '../../assets/images/icon_expertise_full.png';
import iconExpertiseNull from '../../assets/images/icon_expertise.png';


const WaterNeedLevel = (props) => {
  const { waterNeedLevel, iconSize } = props;
  let waterNeedLevelField;
  const CustomTagFull = () => (
    <Image
      style={[styles.waterNeedLevelImages, iconSize]}
      source={iconExpertiseFull}
    />
  );
  const CustomTagNull = () => (
    <Image
      style={[styles.waterNeedLevelImages, iconSize]}
      source={iconExpertiseNull}
    />
  );


  switch (waterNeedLevel) {
    case 'low':
      waterNeedLevelField = (
        <View style={styles.waterNeedLevelImagesContainer}>
          <CustomTagFull />
          <CustomTagNull />
          <CustomTagNull />
        </View>
      );
      break;
    case 'medium':
      waterNeedLevelField = (
        <View style={styles.waterNeedLevelImagesContainer}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagNull />
        </View>
      );
      break;
    case 'high':
      waterNeedLevelField = (
        <View style={styles.waterNeedLevelImagesContainer}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
        </View>
      );
      break;
    default:
      waterNeedLevelField = (
        <View style={styles.waterNeedLevelImagesContainer}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
        </View>
      );
      break;
  }

  return (
    <View style={styles.waterNeedLevelContainer}>
      <Text style={styles.textContainer}>Water Need Level</Text>
      {waterNeedLevelField}
    </View>
  );
};

const styles = StyleSheet.create({
  waterNeedLevelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 36.54,
    top: 70.77
  },
  textContainer: {
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 15,
    color: '#4AA972'
  },
  waterNeedLevelImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 135
  },
  waterNeedLevelImages: {
    width: 21,
    height: 35
  }
});

WaterNeedLevel.propTypes = {
  waterNeedLevel: PropTypes.string.isRequired
};

export default WaterNeedLevel;
