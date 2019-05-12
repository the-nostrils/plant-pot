/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  Alert, StyleSheet, View, Text
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import PostCard from '../../components/PostCard/PostCard';

export default class NewPost extends Component {
  state = {};

  newPostScreenSendPressedHandler = (textContent, isNewPost) => {
    const { navigation } = this.props;

    navigation.reset(
      [
        NavigationActions.navigate({
          routeName: 'Home',
          params: { textContent, isNewPost }
        })
      ],
      0
    );
  }

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username');
    const textContent = navigation.getParam('textContent');

    return (
      <View style={styles.container}>
        <PostCard
          username={username}
          contentType="new-post-screen"
          textContent={textContent !== undefined ? textContent : null}
          isNewPost
          onNewPostScreenSendPressed={this.newPostScreenSendPressedHandler}
          style={{
            width: 365,
            height: 200,
            shadowColor: '#4EBC7C',
            shadowOpacity: 0.61,
            marginTop: 80
          }}
          avatarContainerStyle={{
            top: -13,
            left: 11
          }}
          usernameContainer={{
            left: 75,
            top: 13
          }}
          contentContainer={{
            left: 75, top: 50, width: 290, height: 150
          }}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  }
});
