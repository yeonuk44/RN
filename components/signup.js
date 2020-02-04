import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Body from './body.js';
import Taps from './taps.js';

export default class signup extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Body />
        <Taps />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height : 600,
    flexDirection: 'column',
  }
})
