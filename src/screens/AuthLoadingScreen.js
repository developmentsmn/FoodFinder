import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { FirebaseContext } from '../components/Firebase';



class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.checkLoggedIn();
  }

  // Fetch the token from firebase then navigate to our appropriate place
  checkLoggedIn = () => {
    var firebase = this.context;
    firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        if (user){
            this.props.navigation.navigate('App');
        }
        else {
            this.props.navigation.navigate('Auth');
        }
    })    
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

AuthLoadingScreen.contextType = FirebaseContext;

export default AuthLoadingScreen;