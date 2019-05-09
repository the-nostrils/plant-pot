import React from 'react';
import {
  StyleSheet, View, Text, Image
} from 'react-native';
import PropTypes from 'prop-types';
import iconExpertiseFull from '../../assets/images/icon_expertise_full.png';
import iconExpertiseNull from '../../assets/images/icon_expertise.png';


const LevelOfExpertise = (props) => {
  const { levelOfExpertise, iconSize } = props;
  let expertiseField;
  const CustomTagFull = () => (
    <Image
      style={[styles.expertiseImages, iconSize]}
      source={iconExpertiseFull}
    />
  );
  const CustomTagNull = () => (
    <Image
      style={[styles.expertiseImages, iconSize]}
      source={iconExpertiseNull}
    />
  );


  switch (levelOfExpertise) {
    case 1:
      expertiseField = (
        <View style={styles.expertiseImagesContainer}>
          <CustomTagFull />
          <CustomTagNull />
          <CustomTagNull />
          <CustomTagNull />
          <CustomTagNull />
        </View>
      );
      break;
    case 2:
      expertiseField = (
        <View style={styles.expertiseImagesContainer}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagNull />
          <CustomTagNull />
          <CustomTagNull />
        </View>
      );
      break;
    case 3:
      expertiseField = (
        <View style={styles.expertiseImagesContainer}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagNull />
          <CustomTagNull />
        </View>
      );
      break;
    case 4:
      expertiseField = (
        <View style={styles.expertiseImagesContainer}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagNull />
        </View>
      );
      break;
    case 5:
      expertiseField = (
        <View style={styles.expertiseImagesContainer}>
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
          <CustomTagFull />
        </View>
      );
      break;
    default:
      expertiseField = (
        <View style={styles.expertiseImagesContainer}>
          <CustomTagFull />
          <CustomTagNull />
          <CustomTagNull />
          <CustomTagNull />
          <CustomTagNull />
        </View>
      );
      break;
  }

  return (
    <View style={styles.levelOfExpertiseContainer}>
      <Text style={styles.textContainer}>Level Of Expertise</Text>
      {expertiseField}
    </View>
  );
};

const styles = StyleSheet.create({
  levelOfExpertiseContainer: {
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
  expertiseImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 135
  },
  expertiseImages: {
    width: 21,
    height: 35
  }
});

LevelOfExpertise.propTypes = {
  levelOfExpertise: PropTypes.number.isRequired
};

export default LevelOfExpertise;
