import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Assets from '../constants/Assets';
import AppBar from '../components/AppBar';
import Colors from '../constants/Colors';

class UsersPics extends Component {
  static navigationOptions = {title: 'Users', header: null};

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  onPrev = () => {};

  onNext = () => {};

  render() {
    const {navigation} = this.props;
    const user = navigation.getParam('user', '');
    const navUri = navigation.getParam('uri', '');
    return (
      <View style={styles.container}>
        <AppBar showBack funToExecute={this.goBack.bind(this)} />
        <View style={styles.image_text}>
          <Image style={styles.userImage} source={{uri: user.urls.small}} />
          <Text style={styles.username}>{user.user.username}</Text>
        </View>
        <View style={styles.seperator} />
        <Image style={styles.imageViewer} source={{uri: navUri}} />
        <View style={styles.sliderContainer}>
          <TouchableOpacity onPress={this.onPrev}>
            <Image style={styles.slideArrow} source={Assets.SLIDE_ARROW} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onNext}>
            <Image style={styles.slideArrowRight} source={Assets.SLIDE_ARROW} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  imageViewer: {
    width: '90%',
    height: '70%',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderRadius: 10,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  slideArrow: {
    width: 24,
    height: 24,
    backgroundColor: Colors.WHITE,
    margin: 10,
    resizeMode: 'center',
  },
  slideArrowRight: {
    width: 24,
    height: 24,
    backgroundColor: Colors.WHITE,
    margin: 10,
    resizeMode: 'center',
    transform: [{rotate: '180deg'}],
  },
  image_text: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
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
  seperator: {
    height: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
});

export default UsersPics;
