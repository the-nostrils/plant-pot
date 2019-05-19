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

    onAddPost(plant);
    this.setState({ isModalVisible: false });
  }

  removePlantButtonHandler = () => {
    this.setState({ listButtonMode: 1 });
  };

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
  onAddPost: plant => dispatch(addPlant(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackingHome);
