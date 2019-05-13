import React from 'react';
import {
  StyleSheet, View, Text, Image
} from 'react-native';
import PropTypes from 'prop-types';
import iconWaterNeedLevelFull from '../../assets/images/icon_waterNeedLevel_full.png';
import iconWaterNeedLevelNull from '../../assets/images/icon_waterNeedLevel.png';


const WaterNeedLevel = (props) => {
  const { waterNeedLevel, iconSize, style, styleImage } = props;
  let waterNeedLevelField;
  const CustomTagFull = () => (
    <Image
      style={[styles.waterNeedLevelImages, iconSize]}
      source={iconWaterNeedLevelFull}
    />
  );
  const CustomTagNull = () => (
    <Image
      style={[styles.waterNeedLevelImages, iconSize]}
      source={iconWaterNeedLevelNull}
    />
  );


  switch (waterNeedLevel) {
    case 'low':
      waterNeedLevelField = (
        <View style={[styles.waterNeedLevelImagesContainer, styleImage]}>
          <CustomTagFull />
          <CustomTagNull />
          <CustomTagNull />
        </View>
      );
      break;
    case 'medium':
      waterNeedLevelField = (
        <View style={[styles.waterNeedLevelImagesContainer, styleImage]}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagNull />
        </View>
      );
      break;
    case 'high':
      waterNeedLevelField = (
        <View style={[styles.waterNeedLevelImagesContainer, styleImage]}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
        </View>
      );
      break;
    default:
      waterNeedLevelField = (
        <View style={[styles.waterNeedLevelImagesContainer, styleImage]}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
        </View>
      );
      break;
  }

  return (
    <View style={[styles.waterNeedLevelContainer, style]}>
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
