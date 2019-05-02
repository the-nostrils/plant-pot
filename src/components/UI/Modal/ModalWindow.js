import React, { Component } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import BaseText from '../BaseText/BaseText';

export default class ModalWindow extends Component {
  state = {};

  // setModalVisible(visible) {
  //   this.setState({ modalVisible: visible });
  // }

  render() {
    const { isVisible, onToggleModalPressed, title } = this.props;

    return (
      <Modal isVisible={isVisible}>
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
          <View style={styles.contentContainer}>
            <BaseText>This is the content!</BaseText>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={onToggleModalPressed}>
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
              onPress={onToggleModalPressed}
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
  modalContainer: {
    width: 342,
    height: 250,
    alignItems: 'center',
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
  buttonsContainer: {
    flexDirection: 'row'
  },
  button: {
    width: 77,
    height: 51,
    backgroundColor: '#3B9A70',
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
  onToggleModalPressed: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
