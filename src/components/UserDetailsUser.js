import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Assets from '../constants/Assets';
import Colors from '../constants/Colors';

class UserDetailsUser extends Component {
  static navigationOptions = {title: '', header: null};

  render() {
    const {username, shortDescription, source} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.userFields}>
          <Image style={styles.userImage} source={{uri: source}} />
          <View style={styles.image_text}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.shortDescription}>{shortDescription}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  userFields: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_text: {
    flexDirection: 'column',
  },
  username: {
    fontSize: 18,
    color: 'black',
  },
  shortDescription: {
    fontSize: 16,
    color: Colors.SECONDARY_TEXT_COLOR,
  },
  userImage: {
    height: 72,
    width: 72,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
});

export default UserDetailsUser;
