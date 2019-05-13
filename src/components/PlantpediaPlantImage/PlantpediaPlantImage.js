import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import OnionImage from '../../assets/images/image_onion.jpg';
import SpinachImage from '../../assets/images/image_spinach.jpg';
import GarlicImage from '../../assets/images/image_garlic.jpg';
import LettuceImage from '../../assets/images/image_lettuce.jpg';
import BrusselSproutsImage from '../../assets/images/image_brussel_sprouts.jpg';
import ParsleyImage from '../../assets/images/image_parsley.jpg';
import CarrotImage from '../../assets/images/image_carrot.jpg';
import PeasImage from '../../assets/images/image_peas.jpg';
import RosemaryImage from '../../assets/images/image_rosemary.jpg';
import PeppersImage from '../../assets/images/image_peppers.jpg';
import TomatoesImage from '../../assets/images/image_tomatoes.jpg';
import BeetrootImage from '../../assets/images/image_beetroot.jpg';
import ZucchiniImage from '../../assets/images/image_zucchini.jpg';
import CornImage from '../../assets/images/image_corn.jpg';
import PotatoesImage from '../../assets/images/image_potatoes.jpg';
import WhiteHeadCabbageImage from '../../assets/images/image_white_head_cabbage.jpg';
import BroccoliImage from '../../assets/images/image_broccoli.jpg';
import OkraImage from '../../assets/images/image_okra.jpg';
import LeekImage from '../../assets/images/image_leek.jpg';
import CeleryRootImage from '../../assets/images/image_celery_root.jpg';
import WhiteRadishImage from '../../assets/images/image_white_radish.jpg';
import RadishImage from '../../assets/images/image_radish.jpg';
import YellowZucchiniImage from '../../assets/images/image_yellow_zucchini.jpeg';
import AubergineImage from '../../assets/images/image_aubergine.jpg';
import CucumberImage from '../../assets/images/image_cucumber.jpg';
import RoquetteImage from '../../assets/images/image_roquette.jpg';


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
    case 'Carrot':
      plantImage = <Image style={[styles.plantImage, style]} source={CarrotImage} />;
      break;
    case 'Peas':
      plantImage = <Image style={[styles.plantImage, style]} source={PeasImage} />;
      break;
    case 'Rosemary':
      plantImage = <Image style={[styles.plantImage, style]} source={RosemaryImage} />;
      break;
    case 'Peppers':
      plantImage = <Image style={[styles.plantImage, style]} source={PeppersImage} />;
      break;
    case 'Tomatoes':
      plantImage = <Image style={[styles.plantImage, style]} source={TomatoesImage} />;
      break;
    case 'Beetroot':
      plantImage = <Image style={[styles.plantImage, style]} source={BeetrootImage} />;
      break;
    case 'Zucchini':
      plantImage = <Image style={[styles.plantImage, style]} source={ZucchiniImage} />;
      break;
    case 'Corn':
      plantImage = <Image style={[styles.plantImage, style]} source={CornImage} />;
      break;
    case 'Potatoes':
      plantImage = <Image style={[styles.plantImage, style]} source={PotatoesImage} />;
      break;
    case 'White Head Cabbage':
      plantImage = <Image style={[styles.plantImage, style]} source={WhiteHeadCabbageImage} />;
      break;
    case 'Broccoli':
      plantImage = <Image style={[styles.plantImage, style]} source={BroccoliImage} />;
      break;
    case 'Okra':
      plantImage = <Image style={[styles.plantImage, style]} source={OkraImage} />;
      break;
    case 'Leek':
      plantImage = <Image style={[styles.plantImage, style]} source={LeekImage} />;
      break;
    case 'Celery Root':
      plantImage = <Image style={[styles.plantImage, style]} source={CeleryRootImage} />;
      break;
    case 'White Radish':
      plantImage = <Image style={[styles.plantImage, style]} source={WhiteRadishImage} />;
      break;
    case 'Radish':
      plantImage = <Image style={[styles.plantImage, style]} source={RadishImage} />;
      break;
    case 'Yellow Zucchini':
      plantImage = <Image style={[styles.plantImage, style]} source={YellowZucchiniImage} />;
      break;
    case 'Aubergine':
      plantImage = <Image style={[styles.plantImage, style]} source={AubergineImage} />;
      break;
    case 'Cucumber':
      plantImage = <Image style={[styles.plantImage, style]} source={CucumberImage} />;
      break;
    case 'Roquette':
      plantImage = <Image style={[styles.plantImage, style]} source={RoquetteImage} />;
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
    shadowColor: 'black',
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
