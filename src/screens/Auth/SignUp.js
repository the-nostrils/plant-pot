import React, { Component } from 'react';
import {
  Alert, StyleSheet, View, TextInput, TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-check-box';

import AppLogo from '../../components/UI/AppLogo/AppLogo';
import BaseText from '../../components/UI/BaseText/BaseText';

export default class SignUp extends Component {
  state = {
    emailValue: '',
    nameValue: '',
    surnameValue: '',
    username: '',
    password: '',
    confirmedPassword: '',
    loginName: '',
    loginPassword: '',
    isTermsChecked: true,
    isPrivacyChecked: true,
    isRememberMeChecked: false,
    phase: 0
  };

  mockData = [
    {
      label: 'label1',
      value: 'one'
    },
    {
      label: 'label2',
      value: 'two'
    },
    {
      label: 'label3',
      value: 'three'
    }
  ];

  componentDidMount() {
    const { navigation } = this.props;
    const phaseFromParams = navigation.getParam('phase');

    this.setState({ phase: phaseFromParams });
  }

  buttonClickedHandler = () => {
    const { phase } = this.state;
    const { navigation } = this.props;

    switch (phase) {
      case 0:
        this.setState(prevState => ({ phase: prevState.phase + 1 }));
        break;
      case 1:
        navigation.navigate('App');
        break;
      case 2:
        navigation.navigate('App');
        break;
      default:
        this.setState({ phase: 0 });
        break;
    }
  };

  renderForm = () => {
    const { phase, navigation } = this.state;

    switch (phase) {
      case 0:
      case 1:
        this.setState(prevState => ({ phase: prevState.phase + 1 }));
        break;
      case 2:
        navigation.navigate('App');
        break;
      default:
        this.setState({ phase: 0 });
        break;
    }
  };

  renderFormContainer = () => {
    const {
      phase,
      emailValue,
      nameValue,
      surnameValue,
      username,
      password,
      confirmedPassword,
      loginName,
      loginPassword,
      isPrivacyChecked,
      isTermsChecked,
      isRememberMeChecked
    } = this.state;

    switch (phase) {
      case 0:
        return (
          <View style={styles.formContainer}>
            <View style={styles.formGroupContainer}>
              <View style={styles.formGroup}>
                <View style={styles.label}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                  >
                    Name
                  </BaseText>
                </View>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ nameValue: text })}
                    value={nameValue}
                  />
                </View>
              </View>
            </View>
            <View style={styles.formGroupContainer}>
              <View style={styles.formGroup}>
                <View style={styles.label}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                  >
                    Surname
                  </BaseText>
                </View>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ surnameValue: text })}
                    value={surnameValue}
                  />
                </View>
              </View>
            </View>
            <View style={styles.formGroupContainer}>
              <View style={styles.formGroup}>
                <View style={styles.label}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                  >
                    E-mail
                  </BaseText>
                </View>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ emailValue: text })}
                    value={emailValue}
                    textContentType="emailAddress"
                  />
                </View>
              </View>
            </View>
          </View>
        );
      case 1:
        return (
          <View style={styles.formContainer}>
            <View style={styles.formGroupContainer}>
              <View style={styles.formGroup}>
                <View style={styles.label}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                  >
                    Username
                  </BaseText>
                </View>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ username: text })}
                    value={username}
                  />
                </View>
              </View>
            </View>
            <View style={styles.formGroupContainer}>
              <View style={styles.formGroup}>
                <View style={styles.label}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                  >
                    Password
                  </BaseText>
                </View>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ password: text })}
                    value={password}
                    secureTextEntry
                  />
                </View>
              </View>
            </View>
            <View style={styles.formGroupContainer}>
              <View style={styles.formGroup}>
                <View style={styles.label}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                  >
                    Confirm Password
                  </BaseText>
                </View>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ confirmedPassword: text })}
                    value={confirmedPassword}
                    secureTextEntry
                  />
                </View>
              </View>
              <CheckBox
                style={{
                  padding: 10
                }}
                rightTextStyle={{
                  fontFamily: 'SFCompactDisplay-Regular',
                  fontSize: 15,
                  color: '#25604E',
                  letterSpacing: -0.24,
                  textAlign: 'left'
                }}
                checkBoxColor="#145240"
                checkedCheckBoxColor="#145240"
                onClick={() => {
                  this.setState({
                    isTermsChecked: !isTermsChecked
                  });
                }}
                isChecked={isTermsChecked}
                rightText="I have read and agree to the Terms and Conditions"
              />
              <CheckBox
                style={{
                  padding: 10
                }}
                rightTextStyle={{
                  fontFamily: 'SFCompactDisplay-Regular',
                  fontSize: 15,
                  color: '#25604E',
                  letterSpacing: -0.24,
                  textAlign: 'left'
                }}
                checkBoxColor="#145240"
                checkedCheckBoxColor="#145240"
                onClick={() => {
                  this.setState({
                    isPrivacyChecked: !isPrivacyChecked
                  });
                }}
                isChecked={isPrivacyChecked}
                rightText="I agree to the Privacy Policy"
              />
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.formContainer}>
            <View style={styles.formGroupContainer}>
              <View style={styles.formGroup}>
                <View style={styles.label}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                  >
                    Username or E-mail
                  </BaseText>
                </View>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ loginName: text })}
                    value={loginName}
                  />
                </View>
              </View>
            </View>
            <View style={styles.formGroupContainer}>
              <View style={styles.formGroup}>
                <View style={styles.label}>
                  <BaseText
                    style={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                  >
                    Password
                  </BaseText>
                </View>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ loginPassword: text })}
                    value={loginPassword}
                    secureTextEntry
                  />
                  <CheckBox
                    style={{
                      padding: 10
                    }}
                    rightTextStyle={{
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 15,
                      color: '#25604E',
                      letterSpacing: -0.24,
                      textAlign: 'left'
                    }}
                    checkBoxColor="#145240"
                    checkedCheckBoxColor="#145240"
                    onClick={() => {
                      this.setState({
                        isRememberMeChecked: !isRememberMeChecked
                      });
                    }}
                    isChecked={isRememberMeChecked}
                    rightText="Remember Me"
                  />
                </View>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  drawHorizontalLine = () => {
    const { phase } = this.state;

    let horizontalLine;

    switch (phase) {
      case 0:
        horizontalLine = (
          <View style={styles.horizontalLineContainer}>
            <View style={[styles.horizontalLine, { borderWidth: 3 }]} />
            <View style={[styles.horizontalLine, { marginTop: 1, opacity: 0.5 }]} />
            <View style={[styles.horizontalLine, { marginTop: 1, opacity: 0.5 }]} />
          </View>
        );
        break;
      case 1:
        horizontalLine = (
          <View style={styles.horizontalLineContainer}>
            <View style={[styles.horizontalLine, { marginTop: 1, opacity: 0.5 }]} />
            <View style={[styles.horizontalLine, { borderWidth: 3 }]} />
            <View style={[styles.horizontalLine, { marginTop: 1, opacity: 0.5 }]} />
          </View>
        );
        break;
      case 2:
        horizontalLine = (
          <View style={styles.horizontalLineContainer}>
            <View style={[styles.horizontalLine, { marginTop: 1, opacity: 0.5 }]} />
            <View style={[styles.horizontalLine, { marginTop: 1, opacity: 0.5 }]} />
            <View style={[styles.horizontalLine, { borderWidth: 3 }]} />
          </View>
        );
        break;
      default:
        horizontalLine = null;
    }

    return horizontalLine;
  };

  _onSelect = (item) => {
    Alert.alert(item);
  };

  renderButtonText = () => {
    const { phase } = this.state;

    if (phase === 0) {
      return 'Next';
    }
    if (phase === 1) {
      return 'Sign Up';
    }
    return 'Log In';
  };

  renderButtonStyle = () => {
    const { phase } = this.state;

    if (phase === 0) {
      return { bottom: -150 };
    }
    if (phase === 1) {
      return { bottom: -50 };
    }
    return { bottom: -150 };
  };

  render() {
    const { phase } = this.state;

    return (
      <View style={styles.container}>
        <AppLogo style={{ width: 92, height: 100, paddingTop: 100 }} />
        <View style={styles.menuContainer}>
          <View style={styles.menuTextContainer}>
            <TouchableOpacity onPress={() => this.setState({ phase: 0 })}>
              <BaseText
                style={{
                  fontSize: 17,
                  color: '#25604E',
                  letterSpacing: -0.24,
                  textAlign: 'left',
                  opacity: phase !== 2 ? 1 : 0.5
                }}
              >
                Sign Up
              </BaseText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ phase: 2 })}>
              <BaseText
                style={{
                  fontSize: 17,
                  color: '#25604E',
                  letterSpacing: -0.24,
                  textAlign: 'left',
                  opacity: phase !== 2 ? 0.5 : 1
                }}
              >
                Log In
              </BaseText>
            </TouchableOpacity>
          </View>
          {this.drawHorizontalLine()}
        </View>
        {this.renderFormContainer()}
        <TouchableOpacity
          style={[styles.button, this.renderButtonStyle()]}
          onPress={this.buttonClickedHandler}
        >
          <BaseText
            style={{
              fontFamily: 'SFCompactDisplay-Regular',
              fontSize: 17,
              color: '#FFFFFF',
              letterSpacing: -0.41,
              textAlign: 'left'
            }}
          >
            {this.renderButtonText()}
          </BaseText>
        </TouchableOpacity>
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
  },
  menuContainer: { width: 260, height: 80, marginTop: 100 },
  menuTextContainer: { flexDirection: 'row', justifyContent: 'space-between', width: 260 },
  formContainer: { width: 260, alignItems: 'flex-start' },
  formGroupContainer: { minWidth: 260 },
  formGroup: { alignItems: 'flex-start', marginBottom: 22 },
  label: {},
  textInputContainer: {},
  textInput: {
    width: 260,
    height: 30,
    borderBottomWidth: 1,
    borderColor: '#145240'
  },
  button: {
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    backgroundColor: '#4EBC7C',
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    bottom: -150
  },
  horizontalLineContainer: {
    width: '100%',
    height: 0,
    flexDirection: 'row',
    marginTop: 10
  },
  horizontalLine: {
    width: '33.33%',
    borderWidth: 1,
    borderColor: '#145240'
  }
});
