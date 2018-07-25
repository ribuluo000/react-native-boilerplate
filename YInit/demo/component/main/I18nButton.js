/**
 * Created by nick on 2018/7/22.
 */
import React from "react";
import { connect } from "react-redux";
import { Button } from "react-native";
import TYPE_ACTION from "src/constant/TYPE_ACTION";
const AuthButton = ({ onPress }) => (
    <Button
        title={'Open I18nScreen'}
        onPress={onPress}
    />
);

AuthButton.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onPress : () => dispatch({ type : TYPE_ACTION.I18nScreen }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);