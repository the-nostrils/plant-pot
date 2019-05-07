import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
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
        <ModalWindow contentType="adding-plants" title="Add Plant" isVisible={isModalVisible} onDiscardModal={this.toggleModal} onConfirmPressed={() => Alert.alert('DDAENG!')} />
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
