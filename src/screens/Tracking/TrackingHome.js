import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import PlantCardList from '../../components/PlantCardList/PlantCardList';
import ModalWindow from '../../components/UI/Modal/ModalWindow';


export default class TrackingHome extends Component {
  // static navigationOptions = {

  // };

  state = {
    isModalVisible: false
  };

  toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={styles.container}>
        <ModalWindow title="Add Plant" isVisible={isModalVisible} onToggleModalPressed={this.toggleModal} />
        <PlantCardList listButtonMode={0} {...this.props} onAddPlantsPressed={this.toggleModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  
});
