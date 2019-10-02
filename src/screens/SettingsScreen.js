import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FirebaseContext } from '../components/Firebase';

class App extends React.Component {
  
    signOutWithGoogle = () => {
        var firebase = this.context;
        firebase.auth().signOut()
        .then(() => {
          //console.log('success');
        })
        .catch(e => {
          //console.log(e.message);
        })
    }

  render() {
    return (
      <View>
        <Button title="Sign Out" onPress={this.signOutWithGoogle}/>
      </View>
    );
  }
}

App.contextType = FirebaseContext;

export default App;