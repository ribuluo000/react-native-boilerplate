/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux"; // 引入connect函数
import { bindActionCreators, compose } from "redux";
import TYPE_KEY from "src/constant/TYPE_KEY";
import { createStructuredSelector } from "reselect";

import injectReducer from "src/util/injectReducer";
import injectSaga from "src/util/injectSaga";
import { make_select_is_logged_in, select_auth, select_nav } from "src/app/selector";
import { make_select_count } from "./selector_webview";
import reducer_webview from "./reducer_webview";
import saga_webview from "./saga_webview";
import * as action_webview from "./action_webview";
import BaseComponent from "src/component/BaseComponent";
import ShowWebViewPage from "src/page/webview/ShowWebViewPage";

class ShowWebViewContainer extends BaseComponent {

    static navigationOptions = {
        title : 'ShowWebViewContainer',
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
        console.log('ShowWebViewContainer.render', this.props);
        return (
            <ShowWebViewPage {...this.props}>
            </ShowWebViewPage>
        )
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        increment : () => dispatch(action_webview.increment()),
        decrement : () => dispatch(action_webview.decrement()),
        action_webview : bindActionCreators(action_webview, dispatch),

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

const withReducer = injectReducer({ key : TYPE_KEY.KEY_WEB_VIEW, reducer : reducer_webview });
const withSaga = injectSaga({ key : TYPE_KEY.KEY_WEB_VIEW, saga : saga_webview });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(ShowWebViewContainer);