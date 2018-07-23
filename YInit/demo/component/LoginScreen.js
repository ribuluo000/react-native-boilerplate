/**
 * Created by nick on 2018/7/22.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import TYPE_ACTION from 'src/constant/TYPE_ACTION';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const LoginScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Screen A
        </Text>
        <Text style={styles.instructions}>
            This is great
        </Text>
        <Button
            onPress={() => navigation.dispatch({ type: TYPE_ACTION.LoginScreen })}
            title="Log in"
        />
    </View>
);

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
    title: 'Log In',
};

export default LoginScreen;