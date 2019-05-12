/* eslint-disable no-fallthrough */
import React from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';


const PlantAndHarvestTime = (props) => {
  const { plantTime, harvestTime, iconSize } = props;
  const time = typeof plantTime !== 'undefined' ? plantTime : harvestTime;

  const monthsObj = {
    1: 'J',
    2: 'F',
    3: 'M',
    4: 'A',
    5: 'M',
    6: 'J',
    7: 'J',
    8: 'A',
    9: 'S',
    10: 'O',
    11: 'N',
    12: 'D'
  };
  const monthsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const timeField = monthsArr.map(
    function (month, i) {
      return this.indexOf(month) < 0 ? (
        <Text
          style={[styles.plantAndHarvestTimeText, iconSize]}
          key={i}
        >
          {`${monthsObj[month]} `}
        </Text>
      )
        : (
          <Text
            style={[styles.plantAndHarvestTimeTextBold, iconSize]}
            key={i}
          >
            {`${monthsObj[month]} `}
          </Text>
        );
    }, time
  );
  console.log(timeField);


  return (
    <View style={styles.plantAndHarvestTimeContainer}>
      <View style={styles.description}>
        <Text style={styles.textContainer}>{typeof plantTime !== 'undefined' ? 'Plant' : 'Harvest'}</Text>
      </View>
      <View style={styles.months}>
        {timeField}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plantAndHarvestTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  textContainer: {
    fontFamily: 'SFCompactDisplay-Bold',
    fontSize: 16,
    color: '#004734'
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 76
  },
  months: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  waterNeedLevelImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 135
  },
  plantAndHarvestTimeText: {
    fontSize: 16,
    color: '#004734',
    opacity: 0.5
  },
  plantAndHarvestTimeTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004734'
  }
});

export default PlantAndHarvestTime;
