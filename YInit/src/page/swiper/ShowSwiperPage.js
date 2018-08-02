'use strict';

import React, { PureComponent } from "react";
import { View } from "react-native";
import YHeaderNormalWithRightButtonComponent from "src/component/YHeaderNormalWithRightButtonComponent";
import BaseComponent from "src/component/BaseComponent";
import T from "src/style/T";
import Swiper from "./Swiper";

export default class ShowSwiperPage extends BaseComponent {

    static propTypes = {};

    static defaultProps = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
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

        console.log('ShowSwiperPage',this.props);

        const { state } = this.props.navigation;
        const index_selected = state.params.index_selected;
        const img_list = state.params.img_list;

        return (
            <View style={T.CS.container}>
                <YHeaderNormalWithRightButtonComponent
                    textCenter={'Image'}
                    onBackPress={() => {
                        this.onBackPress();
                    }}
                />

                <Swiper
                    _viewerPressHandle={() => {
                        this.onBackPress();
                    }}
                    _imgList={img_list}
                    _showIndex={index_selected}
                />
            </View>
        );
    }
}




