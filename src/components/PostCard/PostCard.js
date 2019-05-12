/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-alert, no-undef */
import React, { Component } from 'react';
import {
  Alert, StyleSheet, View, TouchableOpacity, ScrollView, TextInput
} from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import BaseText from '../UI/BaseText/BaseText';
import MenuBotton from '../UI/MenuButton/MenuButton';

export default class PostCard extends Component {
  state = {
    isLiked: false,
    likeCount: null,
    textContent: null,
    isNewPost: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.contentType === 'new-post' && nextProps.textContent === null) {
      const updatedState = { ...prevState, textContent: null, isNewPost: false };
      return updatedState;
    }
    return null;
  }

  componentDidMount() {
    const { likeCount, textContent, isNewPost } = this.props;

    if (likeCount) {
      this.setState({ isLiked: true, likeCount });
    }

    if (textContent) {
      this.setState({ textContent });
    }

    if (isNewPost) {
      this.setState({ isNewPost });
    }
  }

  likeCountHandler = () => {
    const { isLiked, likeCount } = this.state;

    if (isLiked) {
      if (likeCount === 1) {
        this.setState(prevState => ({
          isLiked: !prevState.isLiked,
          likeCount: null
        }));
      } else {
        this.setState(prevState => ({
          isLiked: !prevState.isLiked,
          likeCount: prevState.likeCount - 1
        }));
      }
    } else {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
        likeCount: prevState.likeCount + 1
      }));
    }
  };

  renderRemoveCardIcon = () => {
    const {
      id, currentUsername, username, onDeletePostPressed
    } = this.props;

    if (username === currentUsername) {
      return (
        <MenuBotton
          iconName="remove"
          onPressed={() => onDeletePostPressed(id)}
          circleStyle={{
            width: 28,
            height: 28,
            backgroundColor: 'transparent',
            paddingRight: 25,
            paddingBottom: 10
          }}
          iconStyle={{ width: 24, height: 24, resizeMode: 'cover' }}
        />
      );
    }

    return null;
  };

  chooseContentType = () => 'existing-post';

  renderContent = (contentType) => {
    const {
      isLiked, likeCount, textContent, isNewPost
    } = this.state;
    const {
      navigation,
      id,
      username,
      contentContainer,
      onSendPressed,
      onNewPostInputTouched,
      onNewPostScreenSendPressed,
      onDeletePostPressed,
      phase
    } = this.props;

    let contentTypeValue;
    if (contentType) {
      contentTypeValue = contentType;
    } else {
      contentTypeValue = this.chooseContentType();
    }

    switch (contentTypeValue) {
      case 'new-post':
        return (
          <View style={[{ position: 'absolute' }, contentContainer]}>
            <TouchableOpacity onPress={onNewPostInputTouched}>
              <View style={styles.textContainer}>
                <BaseText
                  style={{
                    fontFamily: 'SFCompactDisplay-Regular',
                    fontSize: 15,
                    color: '#112300',
                    letterSpacing: -0.41,
                    textAlign: 'left',
                    opacity: textContent === null ? 0.5 : 1
                  }}
                >
                  {textContent === null ? 'Touch here for your new post' : textContent}
                </BaseText>
              </View>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <MenuBotton
                iconName="photo"
                onPressed={() => Alert.alert('Photo Album')}
                circleStyle={{
                  width: 32,
                  height: 32,
                  backgroundColor: 'transparent',
                  paddingRight: 8
                }}
                iconStyle={{ width: 22, height: 22 }}
              />
              <MenuBotton
                iconName="text"
                buttonText="Send"
                onPressed={() => onSendPressed(textContent, username)}
                circleStyle={{
                  width: 90,
                  height: 30,
                  backgroundColor: '#4EBC7C',
                  borderBottomLeftRadius: 80,
                  borderTopLeftRadius: 80,
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 15
                }}
                iconStyle={{
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              />
            </View>
          </View>
        );
      case 'new-post-screen':
        return (
          <View style={[{ position: 'absolute' }, contentContainer]}>
            <TouchableOpacity onPress={() => navigation.replace('NewPost', { username })}>
              <View style={styles.textContainer}>
                <TextInput
                  onChangeText={text => this.setState({ textContent: text })}
                  value={textContent}
                  multiline
                  placeholder="Type your post here..."
                />
              </View>
            </TouchableOpacity>
            <View
              style={[styles.buttonContainer, { flexDirection: 'column', alignItems: 'center' }]}
            >
              <TouchableOpacity
                style={{
                  width: 64,
                  height: 64,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderColor: '#4AA972',
                  borderBottomLeftRadius: 19,
                  borderTopLeftRadius: 19,
                  borderBottomRightRadius: 19,
                  borderTopRightRadius: 19,
                  marginBottom: 14
                }}
                onPress={() => Alert.alert('Photo Album')}
              >
                <MenuBotton
                  iconName="photo"
                  onPressed={() => Alert.alert('Photo Album')}
                  circleStyle={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'transparent',
                    alignItems: 'center'
                  }}
                  iconStyle={{ width: 26, height: 26 }}
                />
              </TouchableOpacity>
              <MenuBotton
                iconName="text"
                buttonText="Send"
                onPressed={() => onNewPostScreenSendPressed(textContent, isNewPost)}
                circleStyle={{
                  width: 90,
                  height: 30,
                  backgroundColor: '#4EBC7C',
                  borderBottomLeftRadius: 80,
                  borderTopLeftRadius: 80,
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 15
                }}
                iconStyle={{
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              />
            </View>
          </View>
        );
      case 'existing-post':
        return (
          <View style={[{ position: 'absolute' }, contentContainer]}>
            <ScrollView>
              <View style={styles.textContainer}>
                <BaseText
                  style={{
                    fontFamily: 'SFCompactDisplay-Regular',
                    fontSize: 15,
                    color: '#112300',
                    letterSpacing: -0.41,
                    textAlign: 'left'
                  }}
                >
                  {textContent}
                </BaseText>
              </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
              {this.renderRemoveCardIcon()}
              <MenuBotton
                iconName={isLiked ? 'heart-filled' : 'heart-empty'}
                onPressed={this.likeCountHandler}
                circleStyle={{
                  width: 32,
                  height: 32,
                  backgroundColor: 'transparent',
                  paddingRight: 4
                }}
                iconStyle={{ width: 44, height: 38, resizeMode: 'cover' }}
              />
              <BaseText
                style={{
                  fontFamily: 'SFCompactDisplay-Regular',
                  fontSize: 12,
                  color: 'rgba(17, 35, 0, 0.47)',
                  letterSpacing: 1,
                  textAlign: 'center',
                  paddingRight: 16,
                  paddingBottom: 6
                }}
              >
                {likeCount}
              </BaseText>
              <MenuBotton
                iconName="comment-offset"
                onPressed={() => Alert.alert('Open/Close comments')}
                circleStyle={{
                  width: 32,
                  height: 32,
                  backgroundColor: 'transparent',
                  paddingRight: 4
                }}
                iconStyle={{ width: 28, height: 28 }}
              />
              <BaseText
                style={{
                  fontFamily: 'SFCompactDisplay-Regular',
                  fontSize: 12,
                  color: 'rgba(17, 35, 0, 0.47)',
                  letterSpacing: 1,
                  textAlign: 'center',
                  paddingRight: 2,
                  paddingBottom: 6
                }}
              />
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  render() {
    const {
      avatarContainerStyle, contentType, username, style, usernameContainer
    } = this.props;
    const { isNewPost } = this.state;

    return (
      <View
        style={[
          styles.container,
          style,
          isNewPost ? { shadowColor: '#4EBC7C', shadowOpacity: 0.61 } : null
        ]}
      >
        <View
          style={[
            {
              position: 'absolute',
              width: 240,
              height: 25,
              flex: 1
            },
            usernameContainer
          ]}
        >
          <BaseText
            style={{
              fontFamily: 'SFCompactDisplay-Regular',
              fontSize: 15,
              color: '#4EBC7C',
              letterSpacing: 0,
              textAlign: 'left'
            }}
          >
            {username}
          </BaseText>
        </View>
        <View style={[{ position: 'absolute' }, avatarContainerStyle]}>
          <Avatar username={username} containerStyle={{ width: 50, height: 50 }} />
        </View>
        {contentType ? this.renderContent(contentType) : this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: 340,
    height: 116,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 45,
    shadowColor: '#000000',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 13
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 272,
    height: 40
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  }
});

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  contentType: PropTypes.string,
  likeCount: PropTypes.number,
  avatarContainerStyle: PropTypes.object,
  usernameContainer: PropTypes.object,
  contentContainer: PropTypes.object,
  textContent: PropTypes.string,
  isNewPost: PropTypes.bool,
  onSendPressed: PropTypes.func,
  onNewPostInputTouched: PropTypes.func,
  onNewPostScreenSendPressed: PropTypes.func,
  onDeletePostPressed: PropTypes.func
};

PostCard.defaultProps = {
  contentType: 'new-post',
  likeCount: null,
  usernameContainer: {
    left: 48,
    top: 8
  },
  avatarContainerStyle: {
    top: 25,
    left: -12
  },
  contentContainer: {
    width: 292,
    height: 84,
    bottom: 0,
    right: 0
  },
  textContent: null,
  isNewPost: false,
  onNewPostInputTouched: () => {},
  onNewPostScreenSendPressed: () => {},
  onSendPressed: () => {},
  onDeletePostPressed: () => {}
};
