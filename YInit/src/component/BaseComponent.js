/**
 * Created by nick on 2017/4/20.
 */
import React, { Component, PureComponent } from "react";
import y_view_util from "src/util/y_view_util";
import BaseCommon from "src/common/BaseCommon";

export default class BaseComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.baseCommon = new BaseCommon();
        console.log('BaseComponent.this', this);
    }

    onBackPress = () => {
        y_view_util.dismiss_keyboard();
        const { navigate, goBack, state } = this.props.navigation;
        goBack(); //点击POP上一个页面得方法
    };

    componentWillMount() {
        console.log('Component WILL MOUNT!');
        this.baseCommon.componentWillMount();

    }

    componentDidMount() {
        console.log('Component DID MOUNT!');
        this.baseCommon.componentDidMount();

    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!');

    }

    // shouldComponentUpdate(newProps, newState) {
    //   return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!');
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!');
        this.baseCommon.componentWillUnmount();

    }

    render() {
        return null;
    }
}

