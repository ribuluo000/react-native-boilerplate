/**
 * AppStateNetInfoCommon
 * 公共逻辑处理
 * @flow
 */
'use strict';

import React from "react";
import { AppState, NetInfo } from "react-native";
import y_view_util from "src/util/y_view_util";
import y_i18n_util from "src/util/y_i18n_util";

export default class AppStateNetInfoCommon {
    constructor() {
        this._handleAppStateChange = this._handleAppStateChange.bind(this);
        this._handleMemoryWarning = this._handleMemoryWarning.bind(this);
        this._handleConnectionInfoChange = this._handleConnectionInfoChange.bind(this);
        this._handleConnectivityChange = this._handleConnectivityChange.bind(this);

    }

    componentDidMount() {
        this.mounted = true; //flag

        AppState.addEventListener('change', this._handleAppStateChange);
        AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
        NetInfo.addEventListener(
            'connectionChange',
            this._handleConnectionInfoChange
        );

        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );
    }

    componentWillUnmount() {

        this.mounted = false; //flag

        AppState.removeEventListener('change', this._handleAppStateChange);
        AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
        NetInfo.removeEventListener(
            'connectionChange',
            this._handleConnectionInfoChange
        );
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );

    }

    _handleMemoryWarning() {
        y_tmp_data_util.memory_warnings += 1;
    }

    _handleAppStateChange(appState) {
        console.log('_handleAppStateChange', appState);
        y_tmp_data_util.m_app_state = appState;
    }

    _handleConnectionInfoChange(connectionInfo) {
        console.log('_handleConnectionInfoChange', connectionInfo);
        const { type, effectiveType } = connectionInfo;
        // alert('connectionInfo '+type)

        //none,wifi,cellular,unknown
        if (
            type === 'none' || type === 'unknown'
        ) {
            global.y_tmp_data_util.m_net_is_connected = false;
            y_view_util.show_toast(y_i18n_util.t('please_check_network_state'));
        } else {
            if (type === 'wifi') {
                global.y_tmp_data_util.m_net_is_wifi = true;
            } else {
                global.y_tmp_data_util.m_net_is_wifi = false;
            }
            global.y_tmp_data_util.m_net_is_connected = true;
        }

        console.log('global.y_tmp_data_util.m_net_is_connected', global.y_tmp_data_util.m_net_is_connected);

    }

    _handleConnectivityChange(isConnected) {
        console.log('_handleConnectivityChange', isConnected);

        global.y_tmp_data_util.m_net_is_connected = isConnected;
        // alert('isConnected '+isConnected)
        console.log('global.y_tmp_data_util.m_net_is_connected', global.y_tmp_data_util.m_net_is_connected);
        if (!isConnected) {
            y_view_util.show_toast(y_i18n_util.t('please_check_network_state'));
        }

    }

}

