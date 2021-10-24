/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Animated, Easing, StyleSheet, Text, View, Button} from 'react-native';

const SuperText = props => {
  return (
    // <Text style={styles.supertext} {...props}>
    <Text style={[styles.supertext, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  supertext: {
    backgroundColor: 'skyblue',
    fontSize: 25,
    color: 'blue',
    padding: 15,
    width: 300,
  },
});

export default SuperText;
