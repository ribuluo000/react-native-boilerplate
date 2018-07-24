/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import T from "src/style/T";

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

class ThemeScreen extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    componentDidMount() {

    }

    render() {
        let v_content = (
            <View
                style={[
                    {
                        flex:1,
                        backgroundColor:T.B.backgroundColor.red,

                    }
                ]}
            />
        );

        let sXXL = [
            T.B.iconSize.XXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sXL = [
            T.B.iconSize.XL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sL = [
            T.B.iconSize.L,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sM = [
            T.B.iconSize.M,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sS = [
            T.B.iconSize.S,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sXS = [
            T.B.iconSize.XS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let sXXS = [
            T.B.iconSize.XXS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        return (
            <View style={T.CS.container}>
                <ScrollView>
                <Text style={styles.welcome}>
                    ThemeScreen
                </Text>
                <Text style={styles.instructions}>
                    This is great

                </Text>
                <View
                style={[
                    T.CS.flexDirectionRow,
                ]}
                >

                    <View
                        style={sXL}
                    >
                        {v_content}
                    </View>
                    <View
                        style={sL}
                    >
                        {v_content}
                    </View>
                    <View
                        style={sM}
                    >
                        {v_content}
                    </View>
                    <View
                        style={sS}
                    >
                        {v_content}
                    </View>
                    <View
                        style={sXS}
                    >
                        {v_content}
                    </View>
                    <View
                        style={sXXS}
                    >
                        {v_content}
                    </View>
                    <View
                        style={sXXL}
                    >
                        {v_content}
                    </View>
                </View>
                <View
                    style={[
                        T.CS.flexDirectionRow,
                        T.CS.justifyContentSpaceAround,
                    ]}
                >

                    <View
                        style={sXXL}
                    >
                        {v_content}
                    </View>

                    <View
                        style={sXXL}
                    >
                        {v_content}
                    </View>
                </View>
                <View
                    style={[
                        T.CS.flexDirectionRow,
                        T.CS.justifyContentSpaceAround,
                    ]}
                >

                    <View
                        style={sXL}
                    >
                        {v_content}
                    </View>

                    <View
                        style={sXL}
                    >
                        {v_content}
                    </View>

                    <View
                        style={sXL}
                    >
                        {v_content}
                    </View>

                </View>
                <View
                    style={[
                        T.CS.flexDirectionRow,
                        T.CS.justifyContentSpaceAround,
                    ]}
                >

                    <View
                        style={sL}
                    >
                        {v_content}
                    </View>

                    <View
                        style={sL}
                    >
                        {v_content}
                    </View>

                    <View
                        style={sL}
                    >
                        {v_content}
                    </View>

                    <View
                        style={sL}
                    >
                        {v_content}
                    </View>

                </View>
                <Button
                    onPress={() => {
                    }}
                    title="update data"
                />
                </ScrollView>
            </View>
        );
    }

}

ThemeScreen.propTypes = {
    navigation : PropTypes.object.isRequired,
};

ThemeScreen.navigationOptions = {
    title : 'ThemeScreen',
};

export default ThemeScreen;