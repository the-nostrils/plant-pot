import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { addPlant, deletePlant } from '../../store/actions/index';

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

  addPlantSubmitHandler = (plant) => {
    const { onAddPost } = this.props;

    if (plant !== null) {
      onAddPost(plant);
    }

    this.setState({ isModalVisible: false });
  }

  removePlantButtonHandler = () => {
    const { listButtonMode } = this.state;

    if (listButtonMode === 0) {
      this.setState({ listButtonMode: 1 });
    } else {
      this.setState({ listButtonMode: 0 });
    }
  };

  removePlantSubmitHandler = (plant) => {
    const { onDeletePost } = this.props;

    onDeletePost(plant);
  }

  render() {
    const { isModalVisible, listButtonMode } = this.state;
    const { plantList, trackedPlantList } = this.props;
    return (
      <View style={styles.container}>
        <ModalWindow
          contentType="adding-plants"
          onAddPlantSubmit={this.addPlantSubmitHandler}
          title="Add Plant"
          isVisible={isModalVisible}
          onDiscardModal={this.toggleModal}
          onConfirmPressed={this.addPlantSubmitHandler}
          plantList={plantList}
        />
        <PlantCardList
          {...this.props}
          listButtonMode={listButtonMode}
          addPlantButtonPressed={this.addPlantButtonHandler}
          removePlantButtonPressed={this.removePlantButtonHandler}
          onRemovePlantSubmit={this.removePlantSubmitHandler}
          plantList={trackedPlantList}
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
  plantList: state.plants.plantList,
  trackedPlantList: state.plants.trackedPlantList
});

const mapDispatchToProps = dispatch => ({
  onAddPost: plant => dispatch(addPlant(plant)),
  onDeletePost: plant => dispatch(deletePlant(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackingHome);
