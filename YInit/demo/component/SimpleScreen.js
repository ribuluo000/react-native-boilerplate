/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import T from "src/style/T";
import QRCode from 'react-native-qrcode';
const styles = StyleSheet.create({
    // container : {
    //     flex : 1,
    //     justifyContent : 'center',
    //     alignItems : 'center',
    //     backgroundColor : '#F5FCFF',
    // },
    welcome : {
        fontSize : 20,
        textAlign : 'center',
        margin : 10,
    },
});

class SimpleScreen extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={T.CS.container}>
                <ScrollView>
                    <Text style={styles.welcome}>
                        SimpleScreen
                    </Text>
                    <Text style={styles.welcome}>
                        --------react-native-qrcode--------
                    </Text>
                    <View>
                        <QRCode
                            value={'123'}
                            size={200}
                            bgColor='purple'
                            fgColor='white'/>
                        <QRCode
                            value={'123'}
                            size={200}
                            bgColor='black'
                            fgColor='white'/>
                    </View>

                    <Button
                    onPress={() => {
                    }}
                    title="  "
                />
                </ScrollView>
            </View>
        );
    }

}

SimpleScreen.propTypes = {
    navigation : PropTypes.object.isRequired,
};

SimpleScreen.navigationOptions = {
    title : 'SimpleScreen',
};

export default SimpleScreen;