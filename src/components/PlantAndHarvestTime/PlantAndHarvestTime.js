/* eslint-disable no-fallthrough */
import React from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';


const PlantAndHarvestTime = (props) => {
  const { plantTime, harvestTime, iconSize } = props;
  // console.log(plantTime.length);
  //   const time = plantTime.length > 0 ? plantTime : harvestTime;
  // const time = plantTime;
  const CustomTag = () => (
    <Text style={[styles.plantAndHarvestTimeText, iconSize]} />
  );
  const CustomTagBold = () => (
    <Text style={[styles.plantAndHarvestTimeTextBold, iconSize]} />
  );
  // const monthsObj = {
  //   1: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>J</Text>,
  //   2: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>F</Text>,
  //   3: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>M</Text>,
  //   4: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>A</Text>,
  //   5: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>M</Text>,
  //   6: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>J</Text>,
  //   7: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>J</Text>,
  //   8: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>A</Text>,
  //   9: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>S</Text>,
  //   10: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>O</Text>,
  //   11: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>N</Text>,
  //   12: <Text style={[styles.plantAndHarvestTimeText, iconSize]}>D</Text>,
  // };

  // const monthsArr = [1,2,3,4,5,6,7,8,9,10,11,12];
  // const toBeBoldMonths = monthsArr.filter(
  //   function(val){
  //     return this.indexOf(val) < 0
  //   },
  //   plantTime
  // );
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
    }, plantTime
  );
  console.log(timeField);
  // const months = plantTime.map((val, i) => {
  //   switch (i) {
  //     case 1:
  //       timeField = [<CustomTag>J</CustomTag>];
  //     case 2:
  //       timeField = [...timeField, <CustomTag>F</CustomTag>];
  //     case 3:
  //       timeField = [...timeField, <CustomTag>M</CustomTag>];
  //     case 4:
  //       timeField = [...timeField, <CustomTag>A</CustomTag>];
  //     case 5:
  //       timeField = [...timeField, <CustomTag>M</CustomTag>];
  //     case 6:
  //       timeField = [...timeField, <CustomTag>J</CustomTag>];
  //     case 7:
  //       timeField = [...timeField, <CustomTag>J</CustomTag>];
  //     case 8:
  //       timeField = [...timeField, <CustomTag>A</CustomTag>];
  //     case 9:
  //       timeField = [...timeField, <CustomTag>S</CustomTag>];
  //     case 10:
  //       timeField = [...timeField, <CustomTag>O</CustomTag>];
  //     case 11:
  //       timeField = [...timeField, <CustomTag>N</CustomTag>];
  //     case 12:
  //       timeField = [...timeField, <CustomTag>D</CustomTag>];
  //     default:
  //       timeField = [...timeField, <CustomTag>N/A</CustomTag>];
  //       break;
  //   }
  //   return timeField;
  // });


  return (
    <View style={styles.waterNeedLevelContainer}>
      <Text style={styles.textContainer}>Plant/HarvestTime</Text>
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
