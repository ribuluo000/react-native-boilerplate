import React, { PureComponent } from "react";
import App from "./App";
import y_init_util from "src/util/y_init_util";
import MyLoadingComponent from "src/component/MyLoadingComponent";
import { InteractionManager, View } from "react-native";
import T from "src/style/T";
import BaseComponent from "src/component/BaseComponent";
import AppStateNetInfoCommon from "src/common/AppStateNetInfoCommon";
import y_view_util from "../util/y_view_util";
import y_global_util from "../util/y_global_util";

export default class setup extends BaseComponent {
    constructor(props) {
        super(props);
        this.appStateNetInfoCommon = new AppStateNetInfoCommon();

        this.state = {
            init_data_success : false,

            set_init_data_success : () => {
                this.baseCommon.mounted && this.setState({
                    init_data_success : true,
                });
            },
        };
    }

    componentWillMount() {
        super.componentWillMount();

        y_init_util.init();
    }

    componentDidMount() {
        super.componentDidMount();
        this.appStateNetInfoCommon.componentDidMount();

    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.appStateNetInfoCommon.componentWillUnmount();

    }

    render() {
        return (
            <View
                style={[ T.CS.container ]}
            >
                {this.state.init_data_success && <App/>}
                {
                    <MyLoadingComponent
                        ref={(ref) => {
                            global.y_tmp_data_util.m_ref_LoadingComponent = ref;
                            if (!this.state.init_data_success) {
                                y_view_util.show_toast_loading(30 * 60 * 1000);
                                InteractionManager.runAfterInteractions(() => {

                                    y_global_util.init_data((success) => {
                                        console.log("init_data:", success);
                                        if (success) {
                                            setTimeout(() => {
                                                this.state.set_init_data_success();
                                                y_view_util.dismiss_toast_loading();
                                            }, 2000);

                                        }
                                    });
                                });
                            }
                        }}
                    />
                }
            </View>
        );
    }

}
