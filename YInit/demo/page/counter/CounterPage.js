import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "demo/component/Button";
import T from "src/style/T";
import PropTypes from "prop-types";

export default class CounterPage extends Component {
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
        console.log('counter');
        console.log(this.props);
        const { decrementFn, incrementFn, counter } = this.props;
        return (
            <View style={styles.container}>
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
        width : 200,
        height : 50,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 1,
    },
    label : {
        width : 40,
        textAlign : 'center',
    }
});
