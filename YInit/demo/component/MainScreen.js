import React from "react";
import { StyleSheet, View } from "react-native";

import LoginStatusMessage from "./LoginStatusMessage";
import AuthButton from "./AuthButton";
import StorageButton from "./main/StorageButton";
import ThemeButton from "./main/ThemeButton";
import CounterButton from "./main/CounterButton";
import I18nButton from "./main/I18nButton";
import ImageButton from "./main/ImageButton";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F5FCFF',
    },
});

const MainScreen = () => (
    <View style={styles.container}>
        <LoginStatusMessage />
        <AuthButton />
        <StorageButton />
        <ThemeButton />
        <CounterButton />
        <I18nButton />
        <ImageButton />

    </View>
);

MainScreen.navigationOptions = {
    title : 'Home Screen',
};

export default MainScreen;
