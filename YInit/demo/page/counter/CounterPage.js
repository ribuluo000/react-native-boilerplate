import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "demo/component/Button";
import T from "src/style/T";
import PropTypes from "prop-types";
import BaseComponent from "src/component/BaseComponent";
import YHeaderNormalWithRightButtonComponent from "src/component/YHeaderNormalWithRightButtonComponent";
import TYPE_BUTTON from "../../../src/constant/TYPE_Button";

export default class CounterPage extends BaseComponent {

    static propTypes = {
        decrementFn : PropTypes.func.isRequired,
        incrementFn : PropTypes.func.isRequired,
    };

    static defaultProps = {
        decrementFn : () => {
        },
        incrementFn : () => {
        },
    };

    render() {
        const { decrementFn, incrementFn, counter } = this.props;
        return (
            <View style={styles.container}>
                <YHeaderNormalWithRightButtonComponent
                    textCenter={'title'}
                    onBackPress={this.onBackPress}
                    _rightBtnShouldShow={true}
                    _textBadge={'5'}
                    _rightBtnType={TYPE_BUTTON.TYPE_HEADER_RIGHT_BTN__MAIN_NO_BORDER}
                    _textBtn={'确 定'}
                    _onPressBtn={()=>{alert('_onPressBtn')}}
                />
                <Button onClick={decrementFn} text={'减'}/>
                <Text style={[styles.label,{fontSize:T.B.fontSize.XXL,color:T.B.textColor.Blue}]}>{counter}
                </Text>
                <Button onClick={incrementFn} text={'加'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        // width : 200,
        height : 50,
        // flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        // borderWidth : 1,
    },
    label : {
        width : 40,
        textAlign : 'center',
    }
});
