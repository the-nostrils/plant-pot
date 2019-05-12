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
          {monthsObj[month]}
        </Text>
      )
        : (
          <Text
            style={[styles.plantAndHarvestTimeTextBold, iconSize]}
            key={i}
          >
            {monthsObj[month]}
          </Text>
        )
    }, time
  );
  console.log(timeField);


  return (
    <View style={styles.waterNeedLevelContainer}>
      <Text style={styles.textContainer}>{typeof plantTime !== 'undefined' ? 'Plant Time' : 'Harvest Time'}</Text>
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
  plantAndHarvestTimeText: {
    fontSize: 17,
    color: '#4AA972'
  },
  plantAndHarvestTimeTextBold: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4AA972'
  }
});

export default PlantAndHarvestTime;
