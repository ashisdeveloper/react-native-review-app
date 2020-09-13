import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Abouts GameZone" />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        // headerTitleAlign: 'left',
        // headerTintColor: '#444',
        // gestureEnabled: true,
        headerStyle: { backgroundColor: 'red', height: 80 }
    }
});

export default AboutStack;