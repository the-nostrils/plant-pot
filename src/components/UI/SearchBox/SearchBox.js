import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';

const searchBox = (props) => {
  const { searchQuery, searchHandler } = props;
  return (
    <View
      style={styles.textInputContainer}
    >
      <TextInput
        pointerEvents="none"
        onChangeText={val => searchHandler(val)}
        value={searchQuery}
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor="#D0E8DA"
      />
      <Image
        style={styles.image}
        source={require('../../../assets/images/icon_search.png')}
      />
    </View>
    // <TouchableOpacity onPress={() => alert("Pressed")}>
    //   <TextInput pointerEvents="none" />
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    width: 155,
    marginRight: 10
  },
  textInput: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
    borderColor: '#4EBC7C',
    height: 35,
    flex: 1
  },
  image: {
    marginLeft: -25
  }
});

searchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired
};

export default searchBox;
