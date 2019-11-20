import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Users from './src/users/Users';
import UserDetails from './src/user_details/UserDetails';
import UsersPics from './src/user_pics/UserPics';
import Splash from './src/splash/Splash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timePassed: true,
      });
    }, 2000);
  }

  render() {
    const {timePassed} = this.state;
    if (timePassed) {
      return <AppNavigator />;
    } else {
      return <Splash />;
    }
  }
}

const MainNavigator = createStackNavigator({
  Users: {screen: Users},
  UserDetails: {screen: UserDetails},
  UserPics: {screen: UsersPics},
});

const AppNavigator = createAppContainer(MainNavigator);

export default App;
