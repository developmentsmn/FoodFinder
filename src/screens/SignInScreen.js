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
      <Image style={styles.backgroundImg} source={require('./signInImage.jpg') } />
      <Text style={styles.title}>Hotel Buddy</Text>
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
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 80,
    fontStyle: 'italic',
    color: "white",

  },
});

export default App;