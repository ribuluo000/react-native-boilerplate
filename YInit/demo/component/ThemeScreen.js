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
                        minHeight:10,
                        minWidth:2,
                        backgroundColor:T.B.backgroundColor.red,

                    }
                ]}
            />
        );

        let sXXL = [
            T.CS.iconSizeXXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sXL = [
            T.CS.iconSizeXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sL = [
            T.CS.iconSizeL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sM = [
            T.CS.iconSizeM,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sS = [
            T.CS.iconSizeS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let sXS = [
            T.CS.iconSizeXS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let sXXS = [
            T.CS.iconSizeXXS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];

        let s_btn_XXL = [
            T.CS.btnSizeXXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_btn_XL = [
            T.CS.btnSizeXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_btn_L = [
            T.CS.btnSizeL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_btn_M = [
            T.CS.btnSizeM,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_btn_S = [
            T.CS.btnSizeS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_btn_XS = [
            T.CS.btnSizeXS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_btn_XXS = [
            T.CS.btnSizeXXS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];


        let s_padding_XXL = [
            T.CS.paddingSizeXXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_padding_XL = [
            T.CS.paddingSizeXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_padding_L = [
            T.CS.paddingSizeL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_padding_M = [
            T.CS.paddingSizeM,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_padding_S = [
            T.CS.paddingSizeS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_padding_XS = [
            T.CS.paddingSizeXS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_padding_XXS = [
            T.CS.paddingSizeXXS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];



        let s_margin_XXL = [
            T.CS.marginSizeXXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_margin_XL = [
            T.CS.marginSizeXL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_margin_L = [
            T.CS.marginSizeL,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_margin_M = [
            T.CS.marginSizeM,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_margin_S = [
            T.CS.marginSizeS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_margin_XS = [
            T.CS.marginSizeXS,
            {
                backgroundColor:T.B.backgroundColor.blue,
            }
        ];
        let s_margin_XXS = [
            T.CS.marginSizeXXS,
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
                    btnSize

                </Text>
                    <View
                        style={[
                            T.CS.flexDirectionColumn,
                        ]}
                    >

                        <View
                            style={s_btn_XXL}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_btn_XL}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_btn_L}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_btn_M}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_btn_S}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_btn_XS}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_btn_XXS}
                        >
                            {v_content}
                        </View>

                    </View>

                <Text style={styles.instructions}>
                    iconSize

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

                    <Text style={styles.instructions}>
                        paddingSize

                    </Text>
                    <View
                        style={[
                            T.CS.flexDirectionColumn,
                        ]}
                    >

                        <View
                            style={s_padding_XXL}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_padding_XL}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_padding_L}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_padding_M}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_padding_S}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_padding_XS}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_padding_XXS}
                        >
                            {v_content}
                        </View>

                    </View>

                    <Text style={styles.instructions}>
                        marginSize

                    </Text>
                    <View
                        style={[
                            T.CS.flexDirectionColumn,
                        ]}
                    >

                        <View
                            style={s_margin_XXL}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_margin_XL}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_margin_L}
                        >
                            {v_content}
                        </View>
                        <View
                            style={s_margin_M}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_margin_S}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_margin_XS}
                        >
                            {v_content}
                        </View>

                        <View
                            style={s_margin_XXS}
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