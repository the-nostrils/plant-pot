import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlantpediaPlantCardList from '../../components/PlantpediaPlantCardList/PlantpediaPlantCardList';
// import ModalWindow from '../../components/UI/Modal/ModalWindow';

export default class TrackingHome extends Component {
  static navigationOptions = {

  };

  state = {
    // isModalVisible: false
  };

  // hideModalHandler = () => this.setState({ isModalVisible: false });

  render() {
    // const { isModalVisible } = this.state;
    return (
      <View style={styles.container}>
        <PlantpediaPlantCardList />
        {/* <ModalWindow isVisible={isModalVisible} onHideModalPressed={this.hideModalHandler} /> */}
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
  }
});
