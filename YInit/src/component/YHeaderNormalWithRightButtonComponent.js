/**
 * Created by nick on 2017/4/20.
 */
import React, { PureComponent } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import BaseCommon from "src/common/BaseCommon";
import T from "src/style/T";
import y_press_only_once_util from "src/util/y_press_only_once_util";
import y_icon_util from "src/util/y_icon_util";
import y_view_util from "src/util/y_view_util";
import TYPE_BUTTON from "../constant/TYPE_Button";

function getHeaderViewPaddingTop() {
    if (Platform.OS === 'ios') {
        return 20;
    } else {
        return 0;
    }
}

/**
 *
 *
 *使用示例
 *

 import YHeaderNormalWithRightButtonComponent from "src/custom/component/YHeaderNormalWithRightButtonComponent";

 <YHeaderNormalWithRightButtonComponent
 textCenter={I18n.t('my')}
 onBackPress={this.onBackPress}
 _rightBtnShouldShow={true}
 _textBadge={'5'}
 _rightBtnType={ConstantUtil.type_header_right_btn__main_no_border}
 _textBtn={'确 定'}
 _onPressBtn={()=>{alert('_onPressBtn')}}
 />
 */
export default class YHeaderNormalWithRightButtonComponent extends PureComponent {

    static propTypes = {
        backgroundColor : PropTypes.string, //backgroundColor
        textCenter : PropTypes.string.isRequired, //标题
        textColorCenter : PropTypes.string, //标题颜色
        textFontSizeCenter : PropTypes.number, //标题字体大小
        _leftBtnShouldShow : PropTypes.bool, //左侧按钮
        _rightBtnShouldShow : PropTypes.bool, //右侧按钮
        _rightBtnType : PropTypes.string, //按钮类型
        _textBtn : PropTypes.string, //按钮文字
        _textBtnFontSize : PropTypes.number, //标题字体大小

        _textBadge : PropTypes.string, //badge文字
        onBackPress : PropTypes.func,       //点击返回键或者返回按钮的回调方法
        _onPressBtn : PropTypes.func,       //点击右侧按钮的回调方法
    };

    static defaultProps = {
        backgroundColor : undefined,
        textColorCenter : undefined,
        textCenter : '',
        _textBtn : '',
        _textBadge : '',
        _leftBtnShouldShow : true,
        _rightBtnShouldShow : false,
        _rightBtnType : undefined,
        onBackPress : undefined,
        _onPressBtn : () => {

        },
    };

    initData() {
    }

    // 构造
    constructor(props) {
        super(props);
        this.initData();
        this.baseCommon = new BaseCommon({ onBackPress : (e) => this.onBackPress(e) });

        // 初始状态
        this.state = {};
    }

    onBackPress=(e)=> {
        if (this.props.onBackPress) {
            this.props.onBackPress();
            return true;
        }
        return true;
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
        this.baseCommon.componentDidMount();
    }

    componentWillMount() {
        this.baseCommon.componentWillMount();
    }

    componentWillUnmount() {
        this.baseCommon.componentWillUnmount();
    }

    render() {

        let {
            backgroundColor,
            textColorCenter,
            textFontSizeCenter,
            _textBtnFontSize,
        } = this.props;
        let mBackgroundColor = backgroundColor || T.backgroundColorHeader;
        let mTextColorCenter = textColorCenter || T.textColorHeaderCenter;
        let mTextFontSizeCenter = textFontSizeCenter || T.textFontSizeHeaderCenter;
        let mTextBtnFontSize = _textBtnFontSize || T.textBtnFontSizeHeaderRight;

        return (
            <View style={[ styles.gHeader, {
                justifyContent : 'space-between',
                backgroundColor : mBackgroundColor,
                left:0,
                right:0,
            } ]}>
                {y_view_util.get_view_StatusBar()}
                <View
                    style={[
                        styles.gHeaderLeftView,
                    ]}
                >
                    {
                        this.props._leftBtnShouldShow
                        &&
                        <TouchableOpacity
                            activeOpacity={T.customActiveOpacity}
                            onPress={() => {
                                this.onBackPress();
                                y_press_only_once_util.onPress(this.onBackPress);
                            }}
                        >
                            <View
                                style={[
                                    styles.gHeaderLeftView,
                                    {
                                        paddingRight : 40,

                                    }

                                ]}
                            >

                                {y_icon_util.getIcon(require('src/assets/svg/left.svg'), { width : 30, height : 30 })}
                            </View>

                        </TouchableOpacity>
                    }

                </View>

                <View style={[ styles.gHeaderCenterView, {} ]}>
                    <Text
                        numberOfLines={1}
                        style={[ styles.gHeaderCenterText,
                            {
                                color : mTextColorCenter,
                                fontSize : mTextFontSizeCenter,

                            }
                        ]}>
                        {this.props.textCenter}
                    </Text>
                </View>

                <View
                    style={[
                        styles.gHeaderRightView,

                    ]}
                >

                    {this.getRightBtn()}
                </View>

            </View>
        );
    }

    getRightBtn() {
        if (!this.props._rightBtnShouldShow) {
            return null;
        } else {

            let _viewBadge = null;
            if (this.props._textBadge > 0) {
                _viewBadge = y_view_util.get_view_BadgeRightTop(this.props._textBadge);
            }

            let {
                backgroundColor,
                textColorCenter,
                _rightBtnType,
                _textBtnFontSize
            } = this.props;
            let mBackgroundColor = backgroundColor || T.backgroundColorHeader;
            let mTextColorCenter = textColorCenter || T.textColorHeaderCenter;
            let mTextBtnFontSize = _textBtnFontSize || T.textBtnFontSizeHeaderRight;

            let text_style = {};
            if (_rightBtnType === TYPE_BUTTON.TYPE_HEADER_RIGHT_BTN__MAIN_NO_BORDER) {
                text_style = {
                    color : mTextColorCenter,
                    fontSize : T.B.fontSize.S,
                };
            } else if (_rightBtnType === TYPE_BUTTON.TYPE_HEADER_RIGHT_BTN__MAIN_WITH_BORDER) {

                text_style = {
                    color : mTextColorCenter,
                    fontSize : T.B.fontSize.S,

                    borderWidth : T.B.borderWidth.XS,
                    borderColor : mTextColorCenter,
                    padding : 5,
                    borderRadius : T.B.borderRadius.S,

                };
            } else {
                text_style = {
                    color : mTextColorCenter,
                    fontSize : T.B.fontSize.S,
                };
            }

            let _view = (
                <View style={[ T.CS.justifyContentCenter, {} ]}>

                    <TouchableOpacity
                        activeOpacity={T.customActiveOpacity}
                        onPress={() => {
                            y_press_only_once_util.onPress(() => {
                                this.props._onPressBtn();
                            });
                        }}
                    >
                        <Text
                            style={[
                                text_style,
                                {
                                    fontSize : mTextBtnFontSize,
                                }
                            ]}
                        >{this.props._textBtn}</Text>
                    </TouchableOpacity>

                </View>
            );

            return (

                <View style={{
                    flexDirection : 'row',
                    alignItems : 'center',
                    justifyContent : 'center',
                }}>
                    {_view}
                    {_viewBadge}
                </View>

            );
        }
    }
}

const styles = StyleSheet.create({
    gHeader : {
        flexDirection : 'row',
        height : 50 + getHeaderViewPaddingTop(),
        paddingTop : getHeaderViewPaddingTop(),
    },
    gHeaderLeftView : {
        width : 80,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center',
    },
    gHeaderRightView : {
        width : 80,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center',
    },
    gHeaderCenterView : {
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center',
        flex : 1,
        height : 50,
    },
    gHeaderCenterText : {
        textAlign : 'center',
        fontSize : 20,
    },
});

