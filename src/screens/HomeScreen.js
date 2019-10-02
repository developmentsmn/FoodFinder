import React from 'react';
import { Button, Text } from 'react-native';
import MainNavigator from './MainNavigator';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: <Text>Hotel Buddy</Text>,
        headerRight: (
          <Button
            onPress={() => {}}
            title="Settings"
            color = "#3366ff"
        />
        ),
        headerTitleStyle: {
          // textAlign:'center', 
          alignSelf:'center',
          color: 'white',
          flex:1
        }, 
        headerStyle: {
          backgroundColor: '#ff5',
        },
        headerRightContainerStyle: {
          paddingRight: 10, 
        }
			};
		}
  
    componentDidMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    render() {
        return (
					<MainNavigator />
        );
    }
  
    /* later in the render function we display the count */
	}
	
export default HomeScreen;