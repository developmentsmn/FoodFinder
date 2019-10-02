import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { FirebaseContext } from '../components/Firebase';

class App extends React.Component {
  
  signInWithGoogle = () => {
      const firebase = this.context;
      firebase.signIn.Google();
  }

render() {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImg} source={require('./image.jpg') } />
      <Button title="Sign In with Google" onPress={this.signInWithGoogle}/>
    </View>
  );
}
}

App.contextType = FirebaseContext;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
  },
  backgroundImg: {
    position: 'absolute',
  
  }
});

export default App;