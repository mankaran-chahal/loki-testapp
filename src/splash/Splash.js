import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Colors from '../constants/Colors';
import Assets from '../constants/Assets';

class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.textLogo} source={Assets.TEXT_LOGO} />
        <Text style={styles.text}>TEST REACT NATIVE APP</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  textLogo: {
    width: 150,
    height: 75,
    resizeMode: 'center',
  },
  text: {
    fontSize: 18,
    color: Colors.TEXT_APP_PRIMARY,
  },
};

export default Splash;
