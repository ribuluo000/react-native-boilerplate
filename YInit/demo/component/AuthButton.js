/**
 * Created by nick on 2018/7/22.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import TYPE_KEY from 'src/constant/TYPE_KEY';

const AuthButton = ({ logout, loginScreen, is_logged_in }) => (
    <Button
        title={is_logged_in ? 'Log Out' : 'Open Login Screen'}
        onPress={is_logged_in ? logout : loginScreen}
    />
);

AuthButton.propTypes = {
    is_logged_in: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    loginScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    is_logged_in : state.get(TYPE_KEY.KEY_AUTH).get(TYPE_KEY.KEY_is_logged_in),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: 'Logout' }),
    loginScreen: () =>
        dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);