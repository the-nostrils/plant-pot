import React, { Component } from 'react';
import {
  Modal, Text, TouchableHighlight, View, Alert
} from 'react-native';
import PropTypes from 'prop-types';

export default class ModalWindow extends Component {
  state = {};

  // setModalVisible(visible) {
  //   this.setState({ modalVisible: visible });
  // }

  render() {
    const { isVisible, onHideModalPressed } = this.props;

    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={isVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  onHideModalPressed();
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

ModalWindow.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onHideModalPressed: PropTypes.func.isRequired
};
