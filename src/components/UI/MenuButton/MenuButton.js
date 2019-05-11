import React from 'react';
import {
  Image, StyleSheet, View, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import BaseText from '../BaseText/BaseText';

import CommentIcon from '../../../assets/images/icon_comment.png';
import OffsetCommentIcon from '../../../assets/images/icon_comment_with_offset.png';
import FertilizeIcon from '../../../assets/images/icon_fertilize.png';
import EditNameIcon from '../../../assets/images/icon_edit_name.png';
import EmptyHeartIcon from '../../../assets/images/icon_heart_empty.png';
import FilledHeartIcon from '../../../assets/images/icon_heart_filled.png';
import IrrigateIcon from '../../../assets/images/icon_irrigate.png';
import MissionDoneIcon from '../../../assets/images/icon_mission_done.png';
import MissionPostponeIcon from '../../../assets/images/icon_mission_postpone.png';
import PhotoIcon from '../../../assets/images/icon_photo.png';
import PlantpediaIcon from '../../../assets/images/icon_plantpedia.png';
import PruneIcon from '../../../assets/images/icon_prune.png';
import TrackingSettingsIcon from '../../../assets/images/icon_tracking_settings.png';
import ProfileSettingsIcon from '../../../assets/images/icon_profile_settings.png';

const MenuButton = (props) => {
  const {
    circleStyle, iconName, iconStyle, onPressed, buttonText, textStyle
  } = props;
  let icon;

  switch (iconName) {
    case 'comment':
      icon = <Image style={[styles.icon, iconStyle]} source={CommentIcon} />;
      break;
    case 'comment-offset':
      icon = <Image style={[styles.icon, iconStyle]} source={OffsetCommentIcon} />;
      break;
    case 'tracking-settings':
      icon = <Image style={[styles.icon, iconStyle]} source={TrackingSettingsIcon} />;
      break;
    case 'profile-settings':
      icon = <Image style={[styles.icon, iconStyle]} source={ProfileSettingsIcon} />;
      break;
    case 'fertilize':
      icon = <Image style={[styles.icon, iconStyle]} source={FertilizeIcon} />;
      break;
    case 'edit-name':
      icon = <Image style={[styles.icon, iconStyle]} source={EditNameIcon} />;
      break;
    case 'heart-empty':
      icon = <Image style={[styles.icon, iconStyle]} source={EmptyHeartIcon} />;
      break;
    case 'heart-filled':
      icon = <Image style={[styles.icon, iconStyle]} source={FilledHeartIcon} />;
      break;
    case 'irrigate':
      icon = <Image style={[styles.icon, iconStyle]} source={IrrigateIcon} />;
      break;
    case 'mission-done':
      icon = <Image style={[styles.icon, iconStyle]} source={MissionDoneIcon} />;
      break;
    case 'mission-postpone':
      icon = <Image style={[styles.icon, iconStyle]} source={MissionPostponeIcon} />;
      break;
    case 'photo':
      icon = <Image style={[styles.icon, iconStyle]} source={PhotoIcon} />;
      break;
    case 'plantpedia':
      icon = <Image style={[styles.icon, iconStyle]} source={PlantpediaIcon} />;
      break;
    case 'prune':
      icon = <Image style={[styles.icon, iconStyle]} source={PruneIcon} />;
      break;
    case 'text':
      icon = (
        <View style={[styles.icon, iconStyle]}>
          <BaseText style={textStyle}>{buttonText}</BaseText>
        </View>
      );
      break;
    default:
      icon = <View style={[styles.icon, iconStyle]} />;
      break;
  }

  return (
    <TouchableOpacity style={[styles.container, circleStyle]} onPress={() => onPressed()}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 6
  },
  icon: {
    height: 38.39,
    width: 38.39
  }
});

MenuButton.propTypes = {
  iconName: PropTypes.string,
  buttonText: PropTypes.string,
  circleStyle: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  iconStyle: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  // eslint-disable-next-line react/forbid-prop-types
  textStyle: PropTypes.object,
  onPressed: PropTypes.func.isRequired
};

MenuButton.defaultProps = {
  iconName: null,
  buttonText: null,
  circleStyle: PropTypes.shape({
    width: 54.93,
    height: 54.93
  }),
  textStyle: {
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 1,
    textAlign: 'left'
  },
  iconStyle: PropTypes.shape({
    width: 38.39,
    height: 38.39
  })
};

export default MenuButton;
