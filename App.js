import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Button} from 'react-native'

import SearchScreen from './src/screens/SearchScreen';
import ShowMoreInfoScreen from './src/screens/ShowMoreInfoScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import SignInScreen from './src/screens/SignInScreen';
import { FirebaseContext, Firebase } from './src/components/Firebase';



const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen 
});


const AppStack = createStackNavigator({
  
  Search: SearchScreen,
  MoreInfoScreen: ShowMoreInfoScreen,
  Settings: SettingsScreen

}, {
  initialRouteName: 'Search',
  
  defaultNavigationOptions: {
    title: "Hotel Buddy",
    headerTitleStyle: {
      textAlign:'center', 
      alignSelf:'center',
      color: 'white',
      flex:1
    }, 
    headerStyle: {
      backgroundColor: '#0099ff',
    },
    headerRightContainerStyle: {
      paddingRight: 10,
      
    },
  }
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    }
  )
);

class App extends React.Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
          <AppContainer/>
      </FirebaseContext.Provider>      
    );
  }
}

export default App;

// const navigator = createStackNavigator({

//   // SignIn: SignInScreen,
//   Search: SearchScreen,
//   MoreInfoScreen: ShowMoreInfoScreen

// }, {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: "Hotel Buddy",
//     headerTitleStyle: {
//       textAlign:'center', 
//       alignSelf:'center',
//       color: 'white',
//       flex:1}, 
//       headerStyle: {
//         backgroundColor: '#0099ff',
//       }
//   }
// });

// export default createAppContainer(navigator);