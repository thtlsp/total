/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

class TabHomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screen</Text>

        <Button
          title="Go to Home Stack Screen"
          onPress={() => {
            this.props.navigation.navigate('Home_Stack');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default TabHomeScreen;
