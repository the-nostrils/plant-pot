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
import { addPost, deletePost } from '../../store/actions/index';

import Avatar from '../../components/Avatar/Avatar';
import BaseText from '../../components/UI/BaseText/BaseText';
import MenuButton from '../../components/UI/MenuButton/MenuButton';
import PostCard from '../../components/PostCard/PostCard';

class CommunityHome extends Component {
  state = {
    phase: 0,
    newPost: {
      id: null,
      username: null,
      textContent: null,
      isNewPost: false,
      isJustPosted: false
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const newPostTextContent = nextProps.navigation.getParam('textContent');
    const isNewPost = nextProps.navigation.getParam('isNewPost');
    const phase = nextProps.navigation.getParam('phase');
    const updatedState = { ...prevState };

    if (newPostTextContent !== undefined && newPostTextContent !== null) {
      const updatedNewPost = { ...prevState.newPost };
      updatedNewPost.textContent = newPostTextContent;
      updatedNewPost.isNewPost = isNewPost;

      updatedState.newPost = updatedNewPost;
      updatedState.phase = phase;
    }

    return updatedState;
  }

  componentDidMount() {
    const { currentUsername } = this.props;
    const currentUser = this.fetchCurrentUser(currentUsername);

    this.setState({
      newPost: {
        id: currentUser.id,
        username: currentUsername
      }
    });
  }

  newPostInputTouchHandler = () => {
    const { navigation } = this.props;
    const { newPost, phase } = this.state;
    const { username, textContent } = newPost;

    navigation.navigate('NewPost', { username, textContent, phase });
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
    }
  };

  fetchCurrentUser = (username) => {
    const { userList } = this.props;
    const [currentUser] = userList.filter(user => user.username === username);

    return currentUser;
  };

  deletePostButtonHandler = (id) => {
    const { navigation, onDeletePost } = this.props;

    onDeletePost(id);

    // Clear content and state of new post card
    navigation.reset(
      [
        NavigationActions.navigate({
          routeName: 'Home',
          params: { phase: 1 }
        })
      ],
      0
    );
  };

  renderLowerPartContent = (phase) => {
    const { currentUsername, postList } = this.props;
    const { newPost } = this.state;
    const {
      id, username, textContent, isNewPost
    } = newPost;
    const currentUser = this.fetchCurrentUser(currentUsername);
    const { bio } = currentUser;

    let lowerPartContent;

    if (phase === 0) {
      lowerPartContent = (
        <View style={styles.lowerPart}>
          <PostCard
            id={id}
            username={username}
            currentUsername={currentUsername}
            textContent={textContent}
            isNewPost={isNewPost}
            onSendPressed={this.postSendButtonHandler}
            onNewPostInputTouched={this.newPostInputTouchHandler}
            {...this.props}
          />
          <FlatList
            data={postList}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <PostCard
                id={item.id}
                username={item.username}
                currentUsername={currentUsername}
                contentType={item.contentType}
                phase={phase}
                likeCount={item.likeCount}
                textContent={item.textContent}
                isNewPost={item.isNewPost}
                onSendPressed={this.postSendButtonHandler}
                onDeletePostPressed={this.deletePostButtonHandler}
                {...this.props}
              />
            )}
            extraData={this.state}
          />
        </View>
      );
    } else if (phase === 1) {
      const currentUserPosts = postList.filter(post => post.username === currentUsername);

      lowerPartContent = (
        <View style={[styles.lowerPart, { marginTop: -5, minHeight: 440 }]}>
          <BaseText
            style={{
              fontFamily: 'SFCompactDisplay-Bold',
              fontSize: 17,
              color: '#225F4E',
              letterSpacing: -0.41,
              textAlign: 'left',
              marginBottom: 8
            }}
          >
            {currentUsername}
          </BaseText>
          <BaseText
            style={{
              fontFamily: 'SFCompactDisplay-Regular',
              fontSize: 13,
              color: '#225F4E',
              letterSpacing: -0.08,
              textAlign: 'center',
              maxWidth: 310,
              marginBottom: 45
            }}
          >
            {bio}
          </BaseText>
          <PostCard
            id={id}
            username={username}
            currentUsername={currentUsername}
            textContent={textContent}
            isNewPost={isNewPost}
            onSendPressed={this.postSendButtonHandler}
            onNewPostInputTouched={this.newPostInputTouchHandler}
            {...this.props}
          />
          <FlatList
            data={currentUserPosts}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <PostCard
                id={item.id}
                username={item.username}
                currentUsername={currentUsername}
                contentType={item.contentType}
                likeCount={item.likeCount}
                textContent={item.textContent}
                isNewPost={item.isNewPost}
                onSendPressed={this.postSendButtonHandler}
                onDeletePostPressed={this.deletePostButtonHandler}
                {...this.props}
              />
            )}
          />
        </View>
      );
    }

    return lowerPartContent;
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
    const { phase } = this.state;
    const { currentUsername } = this.props;

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

                <Avatar username={currentUsername} />

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
                  onPressed={() => Alert.alert('Open Profile Settings Screen')}
                />
              </View>
            </View>
          </ImageBackground>
          {this.renderLowerPartContent(phase === 0 ? 0 : 1)}
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
    marginTop: 20,
    backgroundColor: '#F5F5F5'
  }
});

const mapStateToProps = state => ({
  currentUsername: state.users.currentUsername,
  postList: state.posts.postList,
  userList: state.users.userList
});

const mapDispatchToProps = dispatch => ({
  onAddPost: (textContent, username) => dispatch(addPost(textContent, username)),
  onDeletePost: id => dispatch(deletePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityHome);
