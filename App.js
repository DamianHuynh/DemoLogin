import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

import bgImage from './images/background.jpg';
import logo from './images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH} = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    };
  }

  showPass = () => {
    if (this.state.press === false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };

  _onPressButton = () => {
    Alert.alert('You pressed this button');
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.ImageBackground}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>React Native</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={'ios-person'}
            size={28}
            color={'rgba(255 , 255 , 255 , 0.7)'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="User name"
            placeholderTextColor={'rgba(255 , 255 , 255 , 0.7)'}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={'ios-lock'}
            size={28}
            color={'rgba(255 , 255 , 255 , 0.7)'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255 , 255 , 255 , 0.7)'}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPass.bind(this)}>
            <Icon
              name={this.state.press === false ? 'ios-eye' : 'ios-eye-off'}
              size={28}
              color={'rgba(255 , 255 , 255 , 0.7)'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={this._onPressButton}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    //opacity: 0.5,
  },
  logo: {
    width: 120,
    height: 120,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba( 0, 0 , 0 , 0.35)',
    color: 'rgba(255 , 255 , 255 , 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 300,
    height: 45,
    borderRadius: 45,
    justifyContent: 'center',
    backgroundColor: '#432577',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: 'rgba(255 , 255 , 255 , 0.7)',
    textAlign: 'center',
    fontSize: 16,
  },
});
