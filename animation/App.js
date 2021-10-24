/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
// import AnimOne from './src/Animation01';
// import AnimTwo from './src/Animation02';
import SuperText from './src/utils/supertext';
import DeviceInfo from 'react-native-device-info';

class App extends Component {
  functionA = () => {
    if (Dimensions.get('window').fontScale === 1) {
      console.warn('Good');
    } else {
      console.warn('Error');
    }
  };

  checkSupport = () => {
    if (Platform.OS === 'ios') {
      if (Platform.Version < 13.4) {
        return false;
      }
    } else {
      if (Platform.Version < 27) {
        return false;
      }
    }
  };

  render() {
    // console.warn(Dimensions.get('screen'));
    // console.warn(Dimensions.get('window'));
    console.warn(DeviceInfo.getBrand());
    return (
      <View style={styles.container}>
        {/* {this.checkSupport() ? (
          <SuperText style={{backgroundColor: 'red'}}>
            {Platform.OS === 'ios' ? 'This is my ios' : 'This is my android'}
          </SuperText>
        ) : (
          <Text>Sorry</Text>
        )} */}
        {this.functionA()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'red',
      },
    }),
  },
});

export default App;
