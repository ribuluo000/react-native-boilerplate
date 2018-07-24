import React, { PureComponent } from "react";
import App from "./App";
import y_init_util from "src/util/y_init_util";
// import MyLoading from "src/component/MyLoading";
import { InteractionManager, View } from "react-native";
import T from "src/style/T";
import BaseComponent from "src/component/BaseComponent";
// import AppStateNetInfoCommon from "src/common/AppStateNetInfoCommon";

export default class setup extends BaseComponent {
    constructor(props) {
        super(props);
        // this.appStateNetInfoCommon = new AppStateNetInfoCommon({});

        this.state = {
            initDataSuccess : true,

            // setInitDataSuccess : () => {
            //     this.baseCommon.mounted && this.setState({
            //         initDataSuccess : true,
            //     });
            // },
        };
    }

    componentWillMount() {

        y_init_util.init();
    }

    componentDidMount() {
        // this.appStateNetInfoCommon.componentDidMount();

    }

    componentWillUnmount() {
        // this.appStateNetInfoCommon.componentWillUnmount();

    }

    render() {
        return (
            <View
                style={[ T.CS.container ]}
            >
                {this.state.initDataSuccess && <App/>}
                {/*{*/}
                    {/*<MyLoading*/}
                        {/*ref={(ref) => {*/}
                            {/*global.TmpDataUtil.mLoadingComponentRef = ref;*/}
                            {/*if (!this.state.initDataSuccess) {*/}
                                {/*ViewUtil.showToastLoading(30 * 60 * 1000);*/}
                                {/*InteractionManager.runAfterInteractions(() => {*/}

                                    {/*GlobalDataUtil.initData((success) => {*/}
                                        {/*console.log("initDataSuccess:", success);*/}
                                        {/*if (success) {*/}
                                            {/*this.state.setInitDataSuccess();*/}
                                            {/*ViewUtil.dismissToastLoading();*/}
                                        {/*}*/}
                                    {/*});*/}
                                {/*});*/}
                            {/*}*/}
                        {/*}}*/}
                    {/*/>*/}
                {/*}*/}
            </View>
        );
    }

}
