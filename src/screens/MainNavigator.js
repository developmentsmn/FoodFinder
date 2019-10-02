import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './SearchScreen';
import ShowMoreInfoScreen from './ShowMoreInfoScreen';

import React from 'react';
import { Button, Text } from 'react-native';

export default createAppContainer(
    createStackNavigator({
        Search: SearchScreen,
        MoreInfoScreen: ShowMoreInfoScreen
    }, {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: "Hotel Buddy",
            headerRight: (
                      <Button
                        onPress={() => this.navigation.navigate('Settings')}
                        title="Settings"
                        color = "#3366ff"
                    />
            ) 
        }
    })
);