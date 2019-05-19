/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import {
  Alert, StyleSheet, TouchableOpacity, View
} from 'react-native';
import Modal from 'react-native-modal';
import SearchableDropdown from 'react-native-searchable-dropdown';
import PropTypes from 'prop-types';

import BaseText from '../BaseText/BaseText';
import MagnifierIcon from '../../../assets/images/icon_magnifier.png';

export default class ModalWindow extends Component {
  state = {
    selected: null
  };

  render() {
    const {
      contentType,
      isVisible,
      onDiscardModal,
      onConfirmPressed,
      title,
      plantList
    } = this.props;
    const { selected } = this.state;

    const addingPlants = (
      <SearchableDropdown
        onTextChange={() => {}}
        onItemSelect={plant => this.setState({ selected: plant })}
        containerStyle={styles.searchableDropdownContainer}
        textInputStyle={styles.searchableDropdownTextInput}
        itemStyle={{
          padding: 10,
          backgroundColor: 'rgba(97, 162, 136, 0.2)',
          borderColor: 'rgba(97, 162, 136, 0.2)',
          borderWidth: 1
        }}
        itemTextStyle={{ color: '#222' }}
        itemsContainerStyle={styles.searchableDropdownItemsContainer}
        items={plantList}
        placeholder="Let's find your plant"
        resetValue={false}
        underlineColorAndroid="transparent"
      />
    );

    let content;

    switch (contentType) {
      case 'adding-plants':
        content = addingPlants;
        break;
      default:
        content = <BaseText>Content type is missing!</BaseText>;
        break;
    }

    return (
      <Modal isVisible={isVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.titleContainer}>
            <BaseText
              style={{
                fontFamily: 'SFCompactDisplay-Heavy',
                fontSize: 34,
                color: '#004734',
                letterSpacing: 0.41,
                textAlign: 'left'
              }}
            >
              {title}
            </BaseText>
          </View>
          <View style={styles.contentContainer}>{content}</View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={onDiscardModal}>
              <BaseText
                style={{
                  fontFamily: 'SFCompactDisplay-Regular',
                  fontSize: 15,
                  color: '#E9EFED',
                  letterSpacing: -0.24,
                  textAlign: 'center'
                }}
              >
                Cancel
              </BaseText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#4EBC7C' }]}
              onPress={() => onConfirmPressed(selected)}
            >
              <BaseText
                style={{
                  fontFamily: 'SFCompactDisplay-Regular',
                  fontSize: 15,
                  color: '#E9EFED',
                  letterSpacing: -0.24,
                  textAlign: 'center'
                }}
              >
                Add
              </BaseText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    top: -80
  },
  modalContainer: {
    width: 342,
    height: 410,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 80,
    backgroundColor: '#61A288',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 6
  },
  titleContainer: {
    top: 32,
    alignItems: 'center'
  },
  contentContainer: {
    alignItems: 'center'
  },
  searchableDropdownContainer: {
    width: 270,
    minHeight: 45,
    maxHeight: 220,
    borderBottomLeftRadius: 23,
    borderTopLeftRadius: 23,
    borderBottomRightRadius: 23,
    borderTopRightRadius: 23,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  searchableDropdownTextInput: {
    width: '80%',
    padding: 16,
    paddingLeft: 27,
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 13,
    color: '#225F4E',
    letterSpacing: -0.08,
    textAlign: 'left'
  },
  searchableDropdownItemsContainer: {
    maxHeight: 175
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    bottom: 26.5,
    right: 20
  },
  button: {
    width: 77,
    height: 51,
    marginRight: 14,
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80,
    borderTopRightRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

ModalWindow.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onDiscardModal: PropTypes.func.isRequired,
  onConfirmPressed: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  plantList: PropTypes.array,
  onAddPlantSubmit: PropTypes.func
};

ModalWindow.defaultProps = {
  plantList: [
    {
      id: 17,
      name: 'Broccoli',
      season: 'Sow',
      plantTime: [4, 5, 6, 7],
      harvestTime: [2, 3, 4, 7, 8, 9, 10],
      levelOfExpertise: 2,
      family: 'Brassicaceae',
      size: 'medium',
      waterNeedLevel: 'high',
      commonProblems: ['Birds', 'Caterpillars', 'Club Root'],
      exposure: 'High',
      climate: '13°C'
    }
  ],
  onAddPlantSubmit: () => {}
};
