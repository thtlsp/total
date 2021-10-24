/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from './src/home';
import StackHomeScreen from './src/home';
import UserScreen from './src/user';
import {thisExpression} from '@babel/types';
import {headerBackImageSource} from '@react-navigation/native-stack';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import SideDrawer from './src/my_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarLabel: route.name,
        tabBarIcon: ({focused, color, size}) => {
          return BarIcon(focused, route.name);
          //console.warn(route.name);
        },
        // initialRouteName: 'Home',
        tabBarActiveTintColor: 'blue',
        tabBarinActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: 'skyblue',
      })}>
      <Tab.Screen name="Home" component={TabHomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
      <Tab.Screen name="Message" component={TabMessageScreen} />
    </Tab.Navigator>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        initialRouteName: 'Home',
        drawerType: 'front',
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerActiveTintColor: 'red',
        drawerActiveBackgroundColor: 'skyblue',
      }}
      drawerContent={props => <SideDrawer {...props} />}>
      <Drawer.Screen name="Route" component={TabComponent} />
    </Drawer.Navigator>
  );
};

// const MainScreen = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         // tabBarLabel: route.name,
//         tabBarIcon: ({focused, color, size}) => {
//           return BarIcon(focused, route.name);
//           //console.warn(route.name);
//         },
//         // initialRouteName: 'Home',
//         tabBarActiveTintColor: 'blue',
//         tabBarinActiveTintColor: '#fff',
//         tabBarActiveBackgroundColor: 'skyblue',
//       })}>
//       <Tab.Screen name="Home" component={TabHomeScreen} />
//       <Tab.Screen name="User" component={TabUserScreen} />
//       <Tab.Screen name="Message" component={TabMessageScreen} />
//     </Tab.Navigator>
//   );
// };

const BarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize;

  if (name == 'Home') {
    iconName = 'home-outline';
    // iconImagePath = require('./src/assets/pics/home_icon.png');
  } else if (name == 'User') {
    iconName = 'people-outline';
    // iconImagePath = require('./src/assets/pics/user.png');
  } else if (name == 'Message') {
    iconName = 'mail-outline';
    // iconImagePath = require('./src/assets/pics/message.png');
  }
  iconSize = focused ? 30 : 20;
  return (
    <Ionicons name={iconName} size={iconSize} />
    // <Image
    //   style={{
    //     width: focused ? 24 : 20,
    //     height: focused ? 24 : 20,
    //   }}
    //   source={iconImagePath}
    // />
  );
};

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('http://google.com')}
//       />
//     </DrawerContentScrollView>
//   );
// }

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', paddingRight: 15}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  );
};

class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{width: 40, height: 40}}
  //       source={require('./src/assets/pics/home_icon.png')}
  //     />
  //   );
  // };

  render() {
    return (
      <NavigationContainer>
        {/* <Tab.Navigator
          screenOptions={({route}) => ({
            // tabBarLabel: route.name,
            tabBarIcon: ({focused, color, size}) => {
              return BarIcon(focused, route.name);
              //console.warn(route.name);
            },
            // initialRouteName: 'Home',
            tabBarActiveTintColor: 'blue',
            tabBarinActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: 'skyblue',
          })}>
          <Tab.Screen name="Home" component={TabHomeScreen} />
          <Tab.Screen name="User" component={TabUserScreen} />
          <Tab.Screen name="Message" component={TabMessageScreen} />
        </Tab.Navigator> */}
        <Stack.Navigator>
          {/* <Stack.Screen name="Main" component={MainScreen} /> */}
          <Stack.Screen
            name="Main"
            component={DrawerComponent}
            options={{
              headerRight: ({}) => <HeaderRight />,
            }}
          />
          <Stack.Screen name="Home_Stack" component={StackHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <Drawer.Navigator
      //     screenOptions={{
      //       initialRouteName: 'Home',
      //       drawerType: 'front',
      //       drawerPosition: 'right',
      //       drawerStyle: {
      //         backgroundColor: '#c6cbef',
      //         width: 240,
      //       },
      //       drawerActiveTintColor: 'red',
      //       drawerActiveBackgroundColor: 'skyblue',
      //     }}
      //     drawerContent={props => <SideDrawer {...props} />}>
      //     <Drawer.Screen name="Home" component={DrawerHomeScreen} />
      //     <Drawer.Screen name="User" component={DrawerUserScreen} />
      //   </Drawer.Navigator>
      // </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#a4511e',
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#f3d632',
      //       },
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         // title: 'Home Screen',
      //         headerTitle: props => <this.logoTitle {...props} />,
      //       }}
      //       // options={{
      //       //   title: 'aa',
      //       //   headerBackTitle: 'bb',
      //       //   headerBackTitleVisible: false,
      //       //   headerTitle: props => <this.logoTitle {...props} />,
      //       //   headerBackImage: this.logoTitle,
      //       // }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'ki',
      //         userLastName: 'kim',
      //       }}
      //       options={{
      //         title: 'User Screen',
      //         headerStyle: {
      //           backgroundColor: 'pink',
      //         },
      //         headerTintColor: 'red',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: 'purple',
      //         },
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
