import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Assets from '../constants/Assets';
import Colors from '../constants/Colors';

class User extends Component {
  static navigationOptions = {title: '', header: null};

  render() {
    const {username, source} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.userFields}>
          <View style={styles.image_text}>
            <Image style={styles.userImage} source={{uri: source}} />
            <Text style={styles.username}>{username}</Text>
          </View>
          <Image style={styles.arrow} source={Assets.ARROW} />
        </View>
        <View style={styles.seperator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
  },
  userFields: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image_text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    color: 'black',
  },
  userImage: {
    height: 48,
    width: 48,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  arrow: {
    height: 14,
    width: 14,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'center',
  },
  seperator: {
    height: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
});

export default User;
