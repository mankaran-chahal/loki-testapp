import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import AppBar from '../components/AppBar';
import UserDetailsUser from '../components/UserDetailsUser';
import Colors from '../constants/Colors';
import Assets from '../constants/Assets';
import {getUserAllPhotos} from '../server/Server';
const {width} = Dimensions.get('window');
const itemWidth = (width - 40) / 2;

class UserDetails extends Component {
  static navigationOptions = {title: 'User details', header: null};

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const user = this.props.navigation.getParam('user', '');
    getUserAllPhotos(user.user.username).then(response => {
      this.setState({
        userPhotos: response,
      });
    });
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    const {userPhotos} = this.state;
    const {navigate} = this.props.navigation;
    const user = this.props.navigation.getParam('user', '');
    return (
      <View style={dashboardStyles.container}>
        <AppBar showBack funToExecute={this.goBack.bind(this)} />
        <UserDetailsUser
          username={user.user.name}
          shortDescription={user.user.username}
          source={user.urls.small}
        />
        <View>
          <View style={dashboardStyles.seperator} />
          <View style={dashboardStyles.uploadsContainer}>
            <Image
              style={dashboardStyles.imageSymbol}
              source={Assets.IMAGE_SYMBOL}
            />
            <Text style={dashboardStyles.uploadText}>Uploads</Text>
          </View>
          <View style={dashboardStyles.seperator} />
        </View>
        <FlatList
          data={userPhotos}
          numColumns={2}
          style={dashboardStyles.flatList}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={dashboardStyles.listContentViewStyle}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigate('UserPics', {
                    user: user,
                    uri: item.urls.regular,
                  });
                }}>
                <Image
                  style={dashboardStyles.listRow}
                  source={{uri: item.urls.thumb}}
                />
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
  uploadsContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    height: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  imageSymbol: {
    height: 18,
    width: 18,
  },
  uploadText: {
    marginLeft: 10,
    fontSize: 18,
    color: Colors.SECONDARY_TEXT_COLOR,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  listContentViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listRow: {
    width: itemWidth,
    height: itemWidth,
    borderRadius: 10,
    margin: 5,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
});

export default UserDetails;
