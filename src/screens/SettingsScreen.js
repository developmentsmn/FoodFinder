import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image
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
      <View style = {styles.container}>
        <Image style={styles.backgroundImg} source={require('./signOutImage.jpg') } />
        <Button title="Sign Out" onPress={this.signOutWithGoogle}/>
      </View>
    );
  }
}

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

App.contextType = FirebaseContext;

export default App;