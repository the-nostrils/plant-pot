import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const moreButton = (props) => {
  const { name, onPress, width } = props;
  return (
    <TouchableOpacity
      style={[styles.button, { width }]}
      plant={name}
      onPress={onPress}
    >
      <Text style={styles.text}>More</Text>
    </TouchableOpacity>
    // <TouchableOpacity onPress={() => alert("Pressed")}>
    //   <TextInput pointerEvents="none" />
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 26.75,
    backgroundColor: '#4EBC7C',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#4EBC7C',
    borderWidth: 2
  },
  text: {
    color: 'white',
    borderWidth: 2,
    borderColor: '#4EBC7C',
    backgroundColor: '#4EBC7C',
    fontSize: 15
  }
});

/* searchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired
}; */
moreButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
};
export default moreButton;
