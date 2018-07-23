/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";
import * as y_storage_util from "src/util/y_storage_util";

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

        this.state = {
            value : '1',
        };

    }

    componentDidMount() {

        this.get_value();
    }

    get_value = () => {
        let value = '';
        let callback = (ret) => {
            value = ret;
            this.setState({
                value
            });
        };
        y_storage_util.get_value_by_key('key', callback);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    StorageScreen
                </Text>
                <Text style={styles.instructions}>
                    This is great
                    {this.state.value}
                </Text>
                <Button
                    onPress={() => {
                        y_storage_util.set_key_value('key', 'value' + Math.random());
                        this.get_value();
                    }}
                    title="update data"
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