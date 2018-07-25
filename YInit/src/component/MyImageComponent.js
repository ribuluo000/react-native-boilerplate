/**
 * Created by nick on 2017/4/20.
 */
import React, { PureComponent } from "react";
import { Image, InteractionManager, View } from "react-native";
import { createImageProgress } from "react-native-image-progress";
import FastImage from "react-native-fast-image";
import * as Progress from "react-native-progress";
import PropTypes from "prop-types";
const ImageProgress = createImageProgress(FastImage);
/**
 *
 *
 <MyImageComponent
 key={`productImages_${y_string_util.hashcode(uri)}`}
 style={{ height : 50, width : 50 }}
 source={sourceImg}/>
 */

export default class MyImageComponent extends PureComponent {

    static propTypes = {
        style : PropTypes.oneOfType([ PropTypes.number, PropTypes.array, PropTypes.object ]),
        onLoad : PropTypes.func,
        onError : PropTypes.func,
        source : PropTypes.oneOfType([ PropTypes.number, PropTypes.object ]),
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded : false,

            source : this.props.source,
        };
    }

    onLoad = () => {

        if (this.props.onLoad) {
            this.props.onLoad();
        }
    };

    onError = () => {
        if (this.props.onError) {
            this.props.onError();
        }
        this.setState({ loadFail : true });

    };

    // 获取加载中、加载失败视图的函数
    _renderLoad = () => {

        let { defaultComponent } = this.props;

        //默认图片，或者没有默认图片
        let view = null;
        //默认图片，或者没有默认图片
        view = defaultComponent || (
                <View
                    style={this.props.style}
                />
            );
        return view;
    };

    // 从网络请求图片的方法
    _fetchImg() {
        InteractionManager.runAfterInteractions(() => {
                const { source, style } = this.props;
                if (source.uri) {
                    // 如果是网络图片 在页面还未加载前，获取图片宽高
                    //
                    Image.getSize(source.uri, (w, h) => {
                            this.setState({ loaded : true });
                        }
                        ,
                        (err) => { // 获取图片宽高或者下载图片失败
                            this.setState({ loadFail : true });
                        }
                    )
                } else {
                    this.setState({ loaded : true });

                }
            }
        );
    }

    render() {
        const { source } = this.state;
        let view;

        if (
            source.hasOwnProperty("uri")
        ) {

            if (source.uri === '') {
                view = this._renderLoad();

            } else {
                // 3、判断是否可以加载图片了
                if (!this.state.loaded) {
                    // 请求图片
                    this._fetchImg()
                }

                if (this.state.loaded) {
                    // 如果真正的图片加载好
                    view = (

                        <ImageProgress
                            indicator={Progress.Circle}
                            indicatorProps={{
                                size : 20,
                                borderWidth : 0,
                                color : 'rgba(150, 150, 150, 1)',
                                unfilledColor : 'rgba(200, 200, 200, 0.2)'
                            }}

                            resizeMode={FastImage.resizeMode.contain}
                            {...this.props}
                            source={source}
                            onLoad={this.onLoad}
                            onError={this.onError}
                        />
                    );
                } else {
                    view = this._renderLoad();
                }

            }

        } else {
            view = (
                <FastImage
                    {...this.props}
                    source={source}
                    onLoad={this.onLoad}
                    onError={this.onError}
                    resizeMode={FastImage.resizeMode.contain}
                />
            );
        }

        return (view);
    }
}

