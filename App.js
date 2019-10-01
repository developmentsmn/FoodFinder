import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({

  Search: SearchScreen

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Restaurant Search",
    headerTitleStyle: {
      textAlign:'center', 
      alignSelf:'center',
      flex:1}
  }

});

export default createAppContainer(navigator);