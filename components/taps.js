import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class Taps extends Component {
  render() {
    return(
      <View style={styles.Taps}>
        <Text style={styles.TapsText}>
          번호 입력
        </Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  Taps: {
    height: 100,
    backgroundColor: '#FFD54F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TapsText: {
    fontSize: 20,
    color: 'white',
  },

})
