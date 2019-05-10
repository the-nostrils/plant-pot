import React from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import PropTypes from 'prop-types';


const PlantAndHarvestTime = (props) => {
  const { plantTime, harvestTime, iconSize } = props;
  let timeField;
  console.log(plantTime.length);
//   const time = plantTime.length > 0 ? plantTime : harvestTime;
  const time = plantTime;
  const CustomTag = () => (
    <View>
      <Text style={[styles.waterNeedLevelText, iconSize]}>J</Text>
      <Text style={[styles.waterNeedLevelText, iconSize]}>J</Text>
      <Text style={[styles.waterNeedLevelText, iconSize]}>J</Text>
    </View>
  );
  const CustomTagBold = () => (
    <View>
      <Text style={[styles.waterNeedLevelTextBold, iconSize]}>J</Text>
      <Text style={[styles.waterNeedLevelTextBold, iconSize]}>J</Text>
      <Text style={[styles.waterNeedLevelTextBold, iconSize]}>J</Text>
    </View>
  );
  const months = {
    1: <Text style={[styles.waterNeedLevelText, iconSize]}>J</Text>,
    2: <Text style={[styles.waterNeedLevelText, iconSize]}>F</Text>,
    3: <Text style={[styles.waterNeedLevelText, iconSize]}>M</Text>,
    4: <Text style={[styles.waterNeedLevelText, iconSize]}>A</Text>,
    5: <Text style={[styles.waterNeedLevelText, iconSize]}>M</Text>,
    6: <Text style={[styles.waterNeedLevelText, iconSize]}>J</Text>,
    7: <Text style={[styles.waterNeedLevelText, iconSize]}>J</Text>,
    8: <Text style={[styles.waterNeedLevelText, iconSize]}>A</Text>,
    9: <Text style={[styles.waterNeedLevelText, iconSize]}>S</Text>,
    10: <Text style={[styles.waterNeedLevelText, iconSize]}>O</Text>,
    11: <Text style={[styles.waterNeedLevelText, iconSize]}>N</Text>,
    12: <Text style={[styles.waterNeedLevelText, iconSize]}>D</Text>,

  };

  switch (time) {
    case 'low':
      timeField = (
        <View style={styles.waterNeedLevelImagesContainer}>
          <CustomTag />
          <CustomTag />
          <CustomTag />
        </View>
      );
      break;
    case 'medium':
      timeField = (
        <View style={styles.waterNeedLevelImagesContainer}>
          <CustomTag />
          <CustomTag />
          <CustomTag />
        </View>
      );
      break;
    case 'high':
      timeField = (
        <View style={styles.waterNeedLevelImagesContainer}>
          <CustomTag />
          <CustomTag />
          <CustomTag />
        </View>
      );
      break;
    default:
      timeField = (
        <View style={styles.waterNeedLevelImagesContainer}>
          <CustomTagBold />
          <CustomTag />
          <CustomTag />
          <CustomTag />
        </View>
      );
      break;
  }

  return (
    <View style={styles.waterNeedLevelContainer}>
      <Text style={styles.textContainer}>Water Need Level</Text>
      {timeField}
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
  waterNeedLevelText: {
    fontSize: 17,
    color: '#4AA972'
  },
  waterNeedLevelTextBold: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4AA972'
  }
});

PlantAndHarvestTime.propTypes = {
  plantTime: PropTypes.array.isRequired,
  harvestTime: PropTypes.array.isRequired
};

export default PlantAndHarvestTime;
