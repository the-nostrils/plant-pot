import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import OnionImage from '../../assets/images/image_onion.jpeg';
import SpinachImage from '../../assets/images/image_spinach.jpeg';
import GarlicImage from '../../assets/images/image_garlic.jpeg';
import LettuceImage from '../../assets/images/image_lettuce.jpeg';
import BrusselSproutsImage from '../../assets/images/image_brussel_sprouts.jpeg';
import ParsleyImage from '../../assets/images/image_parsley.jpeg';


const plantpediaPlantImage = (props) => {
  const { style, name } = props;
  let plantImage;

  switch (name) {
    case 'Onion':
      plantImage = <Image style={[styles.plantImage, style]} source={OnionImage} />;
      break;
    case 'Spinach':
      plantImage = <Image style={[styles.plantImage, style]} source={SpinachImage} />;
      break;
    case 'Garlic':
      plantImage = <Image style={[styles.plantImage, style]} source={GarlicImage} />;
      break;
    case 'Lettuce':
      plantImage = <Image style={[styles.plantImage, style]} source={LettuceImage} />;
      break;
    case 'Brussel Sprouts':
      plantImage = <Image style={[styles.plantImage, style]} source={BrusselSproutsImage} />;
      break;
    case 'Parsley':
      plantImage = <Image style={[styles.plantImage, style]} source={ParsleyImage} />;
      break;
    default:
      plantImage = <View style={[styles.plantImage, style]} />;
      break;
  }

  return (
    <View style={[styles.container, style]}>
      {plantImage}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 71.36,
    width: 71.36,
    borderColor: '#F5F5F5',
    borderBottomLeftRadius: 240,
    borderTopLeftRadius: 240,
    borderBottomRightRadius: 240,
    borderTopRightRadius: 240,
    borderWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.16,
    shadowRadius: 5,
    overflow: 'hidden'
  },
  plantImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  }
});

export default plantpediaPlantImage;
