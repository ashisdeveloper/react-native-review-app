import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Homes: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="GameZone" />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        // headerTitleAlign: 'center',
        headerTintColor: '#444',
        // gestureEnabled: true,
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});
export default HomeStack;
// export default createAppContainer(HomeStack);