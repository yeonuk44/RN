import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class Body extends Component {
  render() {
    return(
      <View style={styles.Body}>
        <Text style={styles.BodyText}>
          study calm
        </Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  Body: {
    height: 800,
    backgroundColor: '#81D4FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BodyText: {
    fontSize: 20,
    color: 'black',
  },

})
