import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BaseComponent from "./BaseComponent";
import y_i18n_util from "../util/y_i18n_util";
import * as Progress from "react-native-progress";

const ProgressCircle = Progress.Circle;

export default class MyLoading extends BaseComponent {
    constructor(props) {
        super(props);
        this.minShowingTime = 100;
        this.state = {
            isLoading : false,
            setIsLoading : (isLoading) => {
                if (isLoading != this.state.isLoading) {
                    let curTimeLong = new Date().getTime();
                    if (isLoading) {
                        this.startTime = curTimeLong;
                        this.baseCommon.mounted && this.setState({
                            isLoading
                        });
                    } else {
                        let hasShowingTimeLong = curTimeLong - this.startTime;
                        if (hasShowingTimeLong < this.minShowingTime) {
                            this.timer = setTimeout(() => {
                                this.baseCommon.mounted && this.setState({
                                    isLoading
                                });
                            }, this.minShowingTime - hasShowingTimeLong);

                        } else {
                            this.baseCommon.mounted && this.setState({
                                isLoading
                            });
                        }
                    }

                }
            },
        };
    }

    componentDidMount() {
        super.componentDidMount();

    }

    componentWillMount() {
        super.componentWillMount();
    }

    showLoading = () => {
        this.state.setIsLoading(true);
    };
    dismissLoading = () => {
        this.state.setIsLoading(false);

    };

    componentWillUnmount() {
        super.componentWillUnmount();

        this.timer && clearTimeout(this.timer);
    }

    render() {
        if (!this.state.isLoading) {
            return null;
        }
        return (
            <View style={{
                flex : 1,
                left : 0,
                top : 0,
                right : 0,
                bottom : 0,
                position : 'absolute',
                // backgroundColor:'red',
                backgroundColor : '#10101099',
                justifyContent : 'center',
                alignItems : 'center'
            }}>
                <View style={styles.loading}/>
                <ProgressCircle
                    size={30}
                    color={'gray'}
                    indeterminate={true}
                />
                <Text style={styles.loadingTitle}>{y_i18n_util.t('please_wait')}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading : {
        backgroundColor : '#10101099',
        height : 80,
        width : 100,
        borderRadius : 10,
        position : 'absolute',
    },

    loadingTitle : {
        marginTop : 10,
        fontSize : 14,
        color : 'white'
    }
});