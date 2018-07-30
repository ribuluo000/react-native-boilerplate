/**
 * BaseCommon
 * 公共逻辑处理
 * @flow
 */
'use strict';

import React from "react";
import { BackHandler } from "react-native";
import SplashScreen from "react-native-splash-screen";

import y_orientation_util from "src/util/y_orientation_util";

export default class BaseCommon {
    constructor(props) {
        this._onHardwareBackPress = this.onHardwareBackPress.bind(this);
        this._orientationDidChange = this._orientationDidChange.bind(this);
        this.props = props || {};
    }

    componentWillMount() {
        y_orientation_util.screenLockToPortrait();

    }

    componentDidMount() {
        this.mounted = true;
        if (this.props.backPress) {
            BackHandler.addEventListener('hardwareBackPress', this._onHardwareBackPress);
        }
        if (this.props._orientationDidChange) {
            y_orientation_util.addOrientationListener(this._orientationDidChange);
        }

        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();

    }

    componentWillUnmount() {
        if (this.props.backPress) {
            BackHandler.removeEventListener('hardwareBackPress', this._onHardwareBackPress);
        }

        if (this.props._orientationDidChange) {
            y_orientation_util.removeOrientationListener(this._orientationDidChange);
        }

        this.mounted = false;

    }

    //todo im
    onHardwareBackPress(e) {
        return this.props.backPress(e);
    }

    //todo orientation Start
    _orientationDidChange(orientation) {
        return this.props._orientationDidChange(orientation);
    }

    //todo orientation end

}

