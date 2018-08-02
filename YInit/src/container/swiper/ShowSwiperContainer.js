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
import { make_select_count } from "./selector_swiper";
import reducer_swiper from "./reducer_swiper";
import saga_swiper from "./saga_swiper";
import * as action_swiper from "./action_swiper";
import BaseComponent from "src/component/BaseComponent";
import ShowSwiperPage from "src/page/swiper/ShowSwiperPage";

class ShowSwiperContainer extends BaseComponent {

    static navigationOptions = {
        title : 'ShowSwiperContainer',
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
        console.log('ShowSwiperContainer.render', this.props);
        return (
            <ShowSwiperPage {...this.props}>
            </ShowSwiperPage>
        )
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        increment : () => dispatch(action_swiper.increment()),
        decrement : () => dispatch(action_swiper.decrement()),
        action_swiper : bindActionCreators(action_swiper, dispatch),

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

const withReducer = injectReducer({ key : TYPE_KEY.KEY_SWIPER, reducer : reducer_swiper });
const withSaga = injectSaga({ key : TYPE_KEY.KEY_SWIPER, saga : saga_swiper });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(ShowSwiperContainer);