import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
  } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Body from './components/body.js';
import Taps from './components/taps.js';
import Mypage from './components/mypage.js';
import Signup from './components/signup.js';

 export default class myfirstrn extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Body />
        <Taps />
      </View>
    );
  }
}

const App = createStackNavigator(
  {
    Home: {screen:Signup},
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height : 600,
    flexDirection: 'column',
  }
})
