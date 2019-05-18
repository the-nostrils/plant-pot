import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
// import { addPost, deletePost } from '../../store/actions/index';

import PlantCardList from '../../components/PlantCardList/PlantCardList';
import ModalWindow from '../../components/UI/Modal/ModalWindow';

class TrackingHome extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    isModalVisible: false,
    listButtonMode: 0
  };

  toggleModal = () => {
    const { isModalVisible } = this.state;

    this.setState({ isModalVisible: !isModalVisible });
  };

  addPlantButtonHandler = () => {
    const { isModalVisible } = this.state;

    this.setState({ listButtonMode: 0, isModalVisible: !isModalVisible });
  };

  removePlantButtonHandler = () => {
    this.setState({ listButtonMode: 1 });
  };

  render() {
    const { isModalVisible, listButtonMode } = this.state;
    const { plantList } = this.props;
    return (
      <View style={styles.container}>
        <ModalWindow
          contentType="adding-plants"
          title="Add Plant"
          isVisible={isModalVisible}
          onDiscardModal={this.toggleModal}
          onConfirmPressed={() => Alert.alert('DDAENG!')}
          plantList={plantList}
        />
        <PlantCardList
          listButtonMode={listButtonMode}
          addPlantButtonPressed={this.addPlantButtonHandler}
          removePlantButtonPressed={this.removePlantButtonHandler}
          plantList={plantList}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 42
  }
});

const mapStateToProps = state => ({
  plantList: state.plants.plantList
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(TrackingHome);
