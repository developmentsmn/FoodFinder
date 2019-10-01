import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import SearchScreen from './src/screens/SearchScreen';
import ShowMoreInfoScreen from './src/screens/ShowMoreInfoScreen';

const navigator = createStackNavigator({

  Search: SearchScreen,
  MoreInfoScreen: ShowMoreInfoScreen

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Hotel Buddy",
    headerTitleStyle: {
      textAlign:'center', 
      alignSelf:'center',
      flex:1}
  }

});

export default createAppContainer(navigator);