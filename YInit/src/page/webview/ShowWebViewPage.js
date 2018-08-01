'use strict';

import React, { PureComponent } from "react";
import { View, WebView } from "react-native";
import PropTypes from "prop-types";
import YHeaderNormalWithRightButtonComponent from "src/component/YHeaderNormalWithRightButtonComponent";
import BaseComponent from "src/component/BaseComponent";
const REF_WEBVIEW = 'webview';

export default class ShowWebViewPage extends BaseComponent {

    static propTypes = {
        uri : PropTypes.string,       //
        header_title : PropTypes.string,       //

    };

    static defaultProps = {
        uri : 'http://www.baidu.com',
        header_title : 'http://www.baidu.com',
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            canGoBack : false,
        };
    }

    onBackPress = (e) => {
        if (this.state.canGoBack) {
            this.refs[ REF_WEBVIEW ].goBack();
        } else {
            const { navigate, goBack, state } = this.props.navigation;
            goBack(); //点击POP上一个页面得方法
        }
        return true;
    }

    onNavigationStateChange(navState) {
        this.baseCommon.mounted && this.setState({
            canGoBack : navState.canGoBack,
            uri : navState.url,
        });
    }

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

        const { state } = this.props.navigation;
        const uri = state.params.uri;
        const header_title = state.params.header_title;

        return (
            <View style={{ flex : 1, backgroundColor : 'white' }}>
                <YHeaderNormalWithRightButtonComponent
                    textCenter={header_title}
                    onBackPress={() => {
                        this.onBackPress();
                    }}
                />

                <WebView source={{ uri : uri }}
                         ref={REF_WEBVIEW}
                         onNavigationStateChange={(e) => this.onNavigationStateChange(e)}
                         startInLoadingState={true}
                         domStorageEnabled={true}
                         javaScriptEnabled={true}
                />
            </View>
        );
    }
}




