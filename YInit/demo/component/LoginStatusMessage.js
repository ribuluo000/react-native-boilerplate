import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationActions } from "react-navigation";
import TYPE_KEY from 'src/constant/TYPE_KEY';

const styles = StyleSheet.create({
    welcome : {
        fontSize : 20,
        textAlign : 'center',
        margin : 10,
    },
});

const LoginStatusMessage = ({ is_logged_in, dispatch }) => {
    if (!is_logged_in) {
        return <Text>Please log in</Text>;
    }
    return (
        <View>
            <Text style={styles.welcome}>
                {'You are "logged in" right now'}
            </Text>
            <Button
                onPress={() =>
                    dispatch(NavigationActions.navigate({ routeName : 'Profile' }))}
                title="Profile"
            />
        </View>
    );
};

LoginStatusMessage.propTypes = {
    is_logged_in : PropTypes.bool.isRequired,
    dispatch : PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    is_logged_in : state.get(TYPE_KEY.KEY_AUTH).get(TYPE_KEY.KEY_is_logged_in),
});

export default connect(mapStateToProps)(LoginStatusMessage);
