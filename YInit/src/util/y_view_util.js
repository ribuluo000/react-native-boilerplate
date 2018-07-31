/**
 * 视图显示工具类
 */
import React from "react";
import { BackHandler, Keyboard, StatusBar, Text, View } from "react-native";
// import Toast from "teaset/components/Toast/Toast";
import y_loading_util from "./y_loading_util";
// import * as action_nav from "src/app/action_nav";
// import * as action_auth from "src/app/action_auth";

let y_view_util = {

    show_toast_should_not_come_here(){
        this.show_toast('...');
    },

    //Toase
    show_toast(str) {
        // Toast.message(str);
    },

    show_toast_short(str) {
        // Toast.info(str, 1);
    },

    show_toast_long(str) {
        // Toast.info(str, 3);
    },

    show_toast_loading(timeOut = 10000){
        y_loading_util.show_loading(timeOut);
    },
    dismiss_toast_loading(){
        y_loading_util.dismiss_loading();

    },

    get_view_StatusBar(){

        let oldStatusBar = (
            <StatusBar
                animated={true}
                hidden={false}
                backgroundColor={Theme.backgroundColorHeader}
                translucent={false}
                barStyle={'dark-content'}
                showHideTransition={'fade'}
                // networkActivityIndicatorVisible={true}
            />
        );
        return (
            <View >
                {oldStatusBar}
            </View>
        );
    },

    get_view_Badge(badgeText = '', badgeBackgroundColor = 'red'){
        if (badgeText.length == 0) {
            return null;
        }
        return (
            <View style={{
                backgroundColor : badgeBackgroundColor,
                paddingHorizontal : 10,
                paddingVertical : 2,
                borderRadius : 10,
            }}>
                <Text style={{
                    color : 'white',
                    fontSize : 10,
                }}>
                    {badgeText}
                </Text>
            </View>
        );
    },

    get_view_BadgeRightTop(badgeText = ''){
        if (badgeText.length == 0) {
            return null;
        }
        return (

            <View style={{ height : 42, marginLeft : -10, }}>
                {this.get_view_Badge(badgeText)}
            </View>


        );
    },

    navigate_2_Screen : (navigation,
        action) => {

        navigation.dispatch(action);
    },
    pop_all_and_2_Login(screen_props) {
        if (
            screen_props
            && screen_props.navigation
        ) {

            let navigation = screen_props.navigation;

            // navigation.dispatch(action_auth.reset_app_user_logoff_or_access_token_expired());
            // navigation.dispatch(action_nav.reset2main_screen());
        }
        return;//todo need change
    },

    dismiss_keyboard() {
        Keyboard.dismiss();
    },
    exit_app() {
        BackHandler.exitApp();
    },
};

export default y_view_util;