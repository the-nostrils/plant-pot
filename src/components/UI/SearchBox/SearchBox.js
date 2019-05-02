import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../../../assets/images/icon_search.png';

const searchBox = (props) => {
  const { searchQuery, searchHandler } = props;
  return (
     <View
      style={styles.textInputContainer}
      onPress={() => alert("KURRRRRRWA")}
    >
      <TextInput
        pointerEvents="none"
        onChangeText={val => searchHandler(val)}
        value={searchQuery}
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor="#4EBC7C"
      />
    </View>
    // <TouchableOpacity onPress={() => alert("Pressed")}>
    //   <TextInput pointerEvents="none" />
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    flexDirection: "row"
    },
  textInput: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
    borderColor: "#4EBC7C",
    width: 155,
    height: 35
  }
});

searchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired
};

export default searchBox;
