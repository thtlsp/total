/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Animated, Easing, StyleSheet, Text, View, Button} from 'react-native';

class AnimOne extends Component {
  constructor() {
    super();
    this.state = {
      //   mySquare: new Animated.ValueXY(0, 0),
      mySquare: new Animated.Value(1),
    };
  }
  //   componentDidMount() {
  runAnimation = () => {
    // Animated.spring(this.mySquare, {
    //   toValue: {x: 50, y: 300},
    // }).start();
    Animated.timing(this.state.mySquare, {
      //   toValue: {x: 50, y: 300},
      toValue: 0,
      duration: 2000,
      delay: 1500,
      //   easing: Easing.bounce,
    }).start();
  };

  render() {
    return (
      <View>
        <Animated.View
          style={{
            opacity: this.state.mySquare,
            transform: [
              {
                // translateY: this.state.mySquare.interpolate({
                rotateX: this.state.mySquare.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '180deg', '360deg'],
                }),
              },
              {
                // translateY: this.state.mySquare.interpolate({
                translateX: this.state.mySquare.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [300, 150, 0],
                }),
              },
            ],
            // top: this.state.mySquare.interpolate({
            //   inputRange: [0, 1],
            //   outputRange: [700, 0],
            // }),
          }}>
          {/* <Animated.View style={this.state.mySquare.getLayout()}> */}
          <View style={styles.square}></View>
        </Animated.View>
        <Animated.Text
          style={{
            fontSize: this.state.mySquare.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [40, 30, 20],
            }),
            color: this.state.mySquare.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: ['red', 'blue', 'green'],
            }),
          }}>
          <Text>Anima</Text>
        </Animated.Text>

        <Button title="Animation Start" onPress={this.runAnimation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});

export default AnimOne;
