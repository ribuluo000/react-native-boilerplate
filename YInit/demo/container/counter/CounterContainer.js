/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CounterPage from "demo/page/counter/CounterPage";
import { connect } from "react-redux"; // 引入connect函数
import { bindActionCreators, compose } from "redux";
import TYPE_KEY from "src/constant/TYPE_KEY";
import { createStructuredSelector } from "reselect";

import injectReducer from "src/util/injectReducer";
import injectSaga from "src/util/injectSaga";
import { make_select_is_logged_in, select_auth, select_nav } from "src/app/selector";
import { make_select_count } from "./selector_counter";
import reducer_counter from "./reducer_counter";
import saga_counter from "./saga_counter";
import * as action_counter from "./action_counter";
import { api_login } from "src/app/action_auth";
import BaseComponent from "src/component/BaseComponent";

class CounterContainer extends BaseComponent {

    static navigationOptions = {
        title : 'CounterContainer',
    };

    componentDidMount() {
        super.componentDidMount();

    }

    componentWillMount() {
        super.componentWillMount();
    }

    componentWillUnmount() {
        super.componentWillUnmount();

    }

    render() {
        console.log('CounterContainer.render',this.props);
        const { count, increment, decrement, onPress_login } = this.props;
        return (
            <View style={styles.container}>
                <CounterPage incrementFn={increment} decrementFn={decrement} counter={count} {...this.props}>
                </CounterPage>
                <TouchableOpacity onPress={onPress_login} style={{ marginTop : 50 }}>
                    <View>
                        <Text>登录
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#F5FFFF'
    }
});

export function mapDispatchToProps(dispatch) {
    return {
        increment : () => dispatch(action_counter.increment()),
        decrement : () => dispatch(action_counter.decrement()),
        action_counter : bindActionCreators(action_counter, dispatch),

        onPress_login : evt => {
            console.log(evt);
            if (evt !== undefined && evt.preventDefault) {
                evt.preventDefault();
            }
            alert('login');
            dispatch(api_login());
        },
    };
}

const mapStateToProps = createStructuredSelector({
    count : make_select_count(),
    is_logged_in : make_select_is_logged_in(),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const withReducer = injectReducer({ key : TYPE_KEY.KEY_COUNTER, reducer : reducer_counter });
const withSaga = injectSaga({ key : TYPE_KEY.KEY_COUNTER, saga : saga_counter });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(CounterContainer);