/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logo from './assets/pics/home_icon.png';
import {CommonActions} from '@react-navigation/native';

class SideDrawer extends Component {
  navigateToScreen = route => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image source={Logo} style={{width: 40, height: 40}} />
            </View>
            <Text>Section 1</Text>
            <View>
              <Text onPress={this.navigateToScreen('Home')}>Home</Text>
              <Text onPress={this.navigateToScreen('User')}>User</Text>
              <Text onPress={this.navigateToScreen('Home')}>Help</Text>
              <Text onPress={this.navigateToScreen('Home')}>Info</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingLeft: 10, paddingBottom: 30}}>
          <Text>Copyright @ mnwise</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
});

export default SideDrawer;
