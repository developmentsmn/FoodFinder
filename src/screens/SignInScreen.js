import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FirebaseContext } from '../components/Firebase';

class App extends React.Component {
  
  signInWithGoogle = () => {
      const firebase = this.context;
      firebase.signIn.Google();
  }

render() {
  return (
    <View>
      <Button title="Sign In with Google" onPress={this.signInWithGoogle}/>
    </View>
  );
}
}

App.contextType = FirebaseContext;

export default App;