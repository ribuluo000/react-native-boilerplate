/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";
import y_device_info_util from "src/util/y_device_info_util";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F5FCFF',
    },
    welcome : {
        fontSize : 20,
        textAlign : 'center',
        margin : 10,
    },
});

class StorageScreen extends PureComponent {

    constructor(props) {
        super(props);

        const device_info = y_device_info_util.test();
        this.state = {
            device_info,
        };

    }

    componentDidMount() {

    }

    get_value = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    StorageScreen
                </Text>
                <Text style={styles.instructions}>
                    device info
                    {this.state.device_info}
                </Text>

                <Button
                    onPress={() => {
                    }}
                    title=""
                />
            </View>
        );
    }

}

StorageScreen.propTypes = {
    navigation : PropTypes.object.isRequired,
};

StorageScreen.navigationOptions = {
    title : 'StorageScreen',
};

export default StorageScreen;