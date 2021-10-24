/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import Contacts from 'react-native-contacts';

class App extends Component {
  // state = {
  //   avatar: '',
  // };
  state = {
    myContacts: [],
  };
  // // addImage = () => {
  // //   launchCamera({}, response => {
  // //     console.warn(response);
  // //     this.setState({
  // //       avatar: response.assets[0].uri,
  // //     });
  // //   });
  // // };
  // addImage = () => {
  //   launchImageLibrary({}, response => {
  //     console.warn(response);
  //     this.setState({
  //       avatar: response.assets[0].uri,
  //     });
  //   });
  // };

  async requestContactPermission() {
    if (Platform.OS === 'ios') {
      console.warn('IOS');
      return true;
    } else {
      console.warn('Android');

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]);

      if (
        granted['android.permission.READ_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  getContacts = () => {
    this.requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll()
          .then(contacts => {
            this.setState({
              myContacts: contacts,
            });
          })
          .catch(e => {});
      } else {
        alert('no permission');
      }
    });
  };
  addContacts = () => {
    this.requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        const newContact = {
          emailAddress: [
            {
              label: 'work',
              email: 'ttt@ttt.com',
            },
          ],
          familyName: 'gogo',
          givenName: 'come',
          phoneNumbers: [
            {
              label: 'mobile',
              number: '(010) 1111-1111',
            },
          ],
        };

        Contacts.addContact(newContact)
          .then(() => {
            this.getContacts();
          })
          .catch(e => {});
      } else {
        alert('no permission');
      }
    });
  };

  openForm = () => {
    const newContact = {
      emailAddress: [
        {
          label: 'work',
          email: 'ttt@ttt.com',
        },
      ],
      familyName: 'ccc',
      givenName: 'ddd',
      phoneNumbers: [
        {
          label: 'mobile',
          number: '(010) 1111-1111',
        },
      ],
    }; // ios만

    Contacts.openContactForm(newContact)
      .then(() => {
        console.warn('ok');
      })
      .catch(e => {});
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.myContacts.map((item, idx) => (
          <Text key={idx}>
            {item.givenName}
            {item.familyName}
          </Text>
        ))}
        {/* <Image source={{uri: this.state.avatar}} style={styles.avatar} />
        <Button title="Add An Image" onPress={() => this.addImage()} /> */}
        <Button title="Load Contacts" onPress={() => this.getContacts()} />
        <Button title="Add Contacts" onPress={() => this.addContacts()} />
        <Button title="Open Form" onPress={() => this.openForm()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
