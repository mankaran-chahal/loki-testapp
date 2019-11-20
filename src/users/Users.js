import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import Assets from '../constants/Assets';
import AppBar from '../components/AppBar';
import User from '../components/User';
import {getAllUsers} from '../server/Server';

class Users extends Component {
  static navigationOptions = {title: 'Users', header: null};

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      users: [],
      usersToUse: [],
    };
  }

  componentDidMount() {
    getAllUsers().then(response => {
      this.setState({
        users: response,
        usersToUse: response,
      });
    });
  }

  doAction(text) {
    const searchText = text.toLowerCase();
    const {usersToUse} = this.state;
    const newArray = [];
    for (let index = 0; index < usersToUse.length; index++) {
      const arrayItem = usersToUse[index];
      if (arrayItem.user.username.toLowerCase().includes(searchText)) {
        newArray.push(arrayItem);
      }
    }
    this.setState({text, users: newArray});
  }

  render() {
    const {text, users} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={dashboardStyles.container}>
        <AppBar />
        <View style={dashboardStyles.searchBar}>
          <Image style={dashboardStyles.startDrawable} source={Assets.SEARCH} />
          <TextInput
            style={dashboardStyles.textInput}
            placeholder="Search Users"
            onChangeText={chars => this.doAction(chars)}
            value={text}
          />
        </View>
        {users.length === 0 && (
          <Text style={dashboardStyles.noUser}>
            No User Available With This Name!
          </Text>
        )}
        <FlatList
          data={users}
          style={dashboardStyles.flatList}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigate('UserDetails', {user: item});
                }}>
                <User username={item.user.username} source={item.urls.small} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  searchBar: {
    height: 35,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  startDrawable: {
    height: 16,
    width: 16,
    marginLeft: 10,
    marginRight: 5,
    tintColor: '#000000',
  },
  textInput: {
    width: '100%',
    fontSize: 14,
    marginBottom: -2,
  },
  flatList: {
    flex: 1,
  },
  noUser: {
    alignSelf: 'center',
  },
});

export default Users;
