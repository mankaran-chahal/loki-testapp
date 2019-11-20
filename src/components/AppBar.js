import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Assets from '../constants/Assets';
import Colors from '../constants/Colors';

class AppBar extends Component {
  static navigationOptions = {title: '', header: null};

  render() {
    const {showBack, funToExecute} = this.props;
    return (
      <View style={styles.container}>
        {showBack ? (
          <TouchableOpacity
            onPress={() => {
              funToExecute();
            }}>
            <Image style={styles.logo} source={Assets.BACK_ARROW} />
          </TouchableOpacity>
        ) : (
          <Image style={styles.logo} />
        )}
        <Image style={styles.logo} source={Assets.LOGO} />
        <Image style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  logo: {
    height: 24,
    width: 24,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'center',
  },
});

export default AppBar;
