import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlantCardList from '../../components/PlantCardList/PlantCardList';
// import ModalWindow from '../../components/UI/Modal/ModalWindow';

export default class TrackingHome extends Component {
  static navigationOptions = {
    title: 'Tracking Home',
    headerStyle: {
      backgroundColor: '#F5F5F5'
      // height: 0
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  state = {
    // isModalVisible: false
  };

  // hideModalHandler = () => this.setState({ isModalVisible: false });

  render() {
    // const { isModalVisible } = this.state;
    return (
      <View style={styles.container}>
        <PlantCardList listButtonMode={0} {...this.props} />
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
