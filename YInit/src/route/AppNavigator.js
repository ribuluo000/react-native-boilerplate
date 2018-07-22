import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import app_route_config from './app_route_config';
import TYPE_KEY from 'src/constant/TYPE_KEY';


const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.get(TYPE_KEY.KEY_NAV)
);

const RootNavigator = createStackNavigator(app_route_config);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.get(TYPE_KEY.KEY_NAV),
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };