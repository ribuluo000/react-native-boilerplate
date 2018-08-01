/**
 * Created by nick on 2018/7/22.
 */
import React from "react";
import { connect } from "react-redux";
import { Button } from "react-native";
import TYPE_ACTION from "src/constant/TYPE_ACTION";
const AuthButton = ({ onPress }) => (
    <Button
        title={'Open ShowWebViewScreen'}
        onPress={onPress}
    />
);

AuthButton.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onPress : () => dispatch({ type : TYPE_ACTION.ShowWebViewContainer,payload:{
        uri : 'https://www.baidu.com',
        header_title : 'https://www.baidu.com',
    } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);