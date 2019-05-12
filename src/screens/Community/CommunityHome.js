/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { addPost } from '../../store/actions/index';

import Avatar from '../../components/Avatar/Avatar';
import BaseText from '../../components/UI/BaseText/BaseText';
import MenuButton from '../../components/UI/MenuButton/MenuButton';
import PostCard from '../../components/PostCard/PostCard';

class CommunityHome extends Component {
  state = {
    phase: 0,
    newPost: {
      id: 0,
      username: 'Daris Calinor',
      textContent: null,
      isNewPost: false,
      isJustPosted: false
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const newPostTextContent = nextProps.navigation.getParam('textContent');
    const isNewPost = nextProps.navigation.getParam('isNewPost');
    const updatedState = { ...prevState };

    if (newPostTextContent !== undefined && newPostTextContent !== null) {
      const updatedNewPost = { ...prevState.newPost };
      updatedNewPost.textContent = newPostTextContent;
      updatedNewPost.isNewPost = isNewPost;

      updatedState.newPost = updatedNewPost;
    }

    return updatedState;
  }

  newPostInputTouchHandler = () => {
    const { navigation } = this.props;
    const { newPost } = this.state;
    const { username, textContent } = newPost;

    navigation.navigate('NewPost', { username, textContent });
  };

  postSendButtonHandler = (textContent, username) => {
    const { navigation, onAddPost } = this.props;
    const { newPost } = this.state;

    if (newPost.textContent === null) {
      navigation.navigate('NewPost', { username });
    } else {
      // Adding new post to post list container in Redux store
      onAddPost(textContent, username);

      // Clear content and state of new post card
      navigation.reset(
        [
          NavigationActions.navigate({
            routeName: 'Home'
          })
        ],
        0
      );
      // const updatedNewPost = { ...newPost };
      // console.log(newPost);
      // updatedNewPost.textContent = null;
      // updatedNewPost.isNewPost = false;
      // updatedNewPost.username = 'M.J.';
      // console.log(updatedNewPost);

      // this.setState({ newPost: updatedNewPost });
    }
  };

  drawHorizontalLine = (isBold) => {
    let horizontalLine;

    if (isBold) {
      horizontalLine = <View style={[styles.horizontalLine, { borderWidth: 2 }]} />;
    } else {
      horizontalLine = <View style={[styles.horizontalLine, { borderWidth: 1, opacity: 0.5 }]} />;
    }

    return horizontalLine;
  };

  render() {
    const { postList } = this.props;
    const { phase, newPost } = this.state;

    const backgroundImage = phase === 0
      ? require('../../assets/images/background_community_home.png')
      : require('../../assets/images/background_community_profile.png');

    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={{
              width: '100%',
              height: '23%',
              flex: 1
            }}
            imageStyle={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              left: -5
            }}
            source={backgroundImage}
          >
            <View style={styles.upperPart}>
              <View style={styles.avatarAndMenuContainer}>
                <TouchableOpacity onPress={() => this.setState({ phase: 0 })}>
                  <View style={[styles.menuButtonContainer]}>
                    <BaseText
                      style={{
                        fontFamily: 'SFCompactDisplay-Regular',
                        fontSize: 17,
                        color: '#25604E',
                        letterSpacing: -0.41,
                        textAlign: 'center',
                        paddingBottom: 6
                      }}
                    >
                      Home
                    </BaseText>
                    {this.drawHorizontalLine(phase === 0)}
                  </View>
                </TouchableOpacity>

                <Avatar />

                <TouchableOpacity onPress={() => this.setState({ phase: 1 })}>
                  <View style={[styles.menuButtonContainer, { alignItems: 'flex-end' }]}>
                    <BaseText
                      style={{
                        fontFamily: 'SFCompactDisplay-Regular',
                        fontSize: 17,
                        color: '#25604E',
                        letterSpacing: -0.41,
                        textAlign: 'center',
                        paddingBottom: 6
                      }}
                    >
                      Profile
                    </BaseText>
                    {this.drawHorizontalLine(phase === 1)}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.settingsContainer}>
                <MenuButton
                  iconName="profile-settings"
                  circleStyle={{ width: 32, height: 32, backgroundColor: '#FFFFFF' }}
                  iconStyle={{ width: 22, height: 22 }}
                  onPressed={() => Alert.alert('Ooops, I did it again!')}
                />
              </View>
            </View>
          </ImageBackground>

          <View style={styles.lowerPart}>
            <PostCard
              username={newPost.username}
              textContent={newPost.textContent}
              isNewPost={newPost.isNewPost}
              isJustPosted={newPost.isJustPosted}
              onSendPressed={this.postSendButtonHandler}
              onNewPostInputTouched={this.newPostInputTouchHandler}
              {...this.props}
            />
            <FlatList
              data={postList}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <PostCard
                  username={item.username}
                  contentType={item.contentType}
                  likeCount={item.likeCount}
                  textContent={item.textContent}
                  isNewPost={item.isNewPost}
                  onSendPressed={this.postSendButtonHandler}
                  {...this.props}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  upperPart: {
    marginTop: 32,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  avatarAndMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuButtonContainer: {
    flex: 0,
    width: 60,
    height: 38,
    marginTop: 6,
    alignItems: 'flex-start'
  },
  horizontalLine: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#145240'
  },
  settingsContainer: {
    top: -16
  },
  lowerPart: {
    width: '100%',
    flex: 0.77,
    alignItems: 'center',
    marginTop: 20
  }
});

const mapStateToProps = state => ({
  postList: state.posts.postList
});

const mapDispatchToProps = dispatch => ({
  onAddPost: (textContent, username) => dispatch(addPost(textContent, username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityHome);
