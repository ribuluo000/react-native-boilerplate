import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: 'headerTitle',
        header: null,
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
                <Button
                    title="Go to StorageScreen"
                    onPress={() => this.props.navigation.navigate('StorageScreen')}
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
});

const SettingsStack = createStackNavigator({
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
});

export default createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Settings: { screen: SettingsStack },

    },
    {
        navigationOptions: ({ navigation }) => ({
            header : null,
            headerMode : 'none',
            headerTitle:'aaaheaderTitle',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },

            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <View style={{
                    width:30,
                    height:30,
                    backgroundColor:tintColor,
                }} />;
            },
        }),
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);
