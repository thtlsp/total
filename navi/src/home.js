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

class HomeScreen extends Component {
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
          title="to user screen"
          onPress={() => {
            this.props.navigation.navigate('User', {
              userIdx: 100,
              userName: 'ji',
              userLastName: 'so',
            });
          }}
        />
        <Button
          title="change the title"
          onPress={() =>
            this.props.navigation.setOptions({
              title: 'changed',
              headerStyle: {
                backgroundColor: 'pink',
              },
              headerTintColor: 'red',
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeScreen;
