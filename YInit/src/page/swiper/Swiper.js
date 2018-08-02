import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Modal, View } from "react-native";
import y_press_only_once_util from "src/util/y_press_only_once_util";
import ImageViewer from "react-native-image-zoom-viewer";
import BaseComponent from "src/component/BaseComponent";
export default class Swiper extends BaseComponent {

    static propTypes = {
        _showIndex : PropTypes.number, //显示第几张
        _imgList : PropTypes.array,       //
        _viewerPressHandle : PropTypes.func,       //
    };

    static defaultProps = {
        _showIndex : 0,
        _imgList : [],

    };

    constructor(props) {
        super(props);
        let imgList = this.getImgListByOldData(this.props._imgList);

        this.state = {
            imgList : imgList,
            showIndex : this.props._showIndex,
            showViewer : imgList.length > 0 ? true : false,

            setImgList : (_imgList, _showIndex) => {
                let imgList = this.getImgListByOldData(_imgList);
                this.baseCommon.mounted && this.setState({
                    imgList : imgList,
                    showIndex : _showIndex,
                    showViewer : imgList.length > 0 ? true : false,
                });
            },

        };
        this._viewerPressHandle = this._viewerPressHandle.bind(this);

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


    getImgListByOldData(_imgList) {
        let okArr = [];
        _imgList.map((item) => {
            okArr.push({
                url : item.image_url,
            });
        });
        return okArr;

    }

    componentWillReceiveProps(nextProps) {
        this.state.setImgList(nextProps._imgList, nextProps._showIndex);
    }

    _viewerPressHandle() {
        if (this.props._viewerPressHandle) {
            this.props._viewerPressHandle();

        }
    }

    render() {
        return (
            <Modal visible={this.state.showViewer} transparent={true}
                   onRequestClose={() => {
                       this._viewerPressHandle();
                   }}
            >
                <ImageViewer
                    failImageSource={require('src/assets/image/img_default.png')}
                    index={this.state.showIndex}
                    imageUrls={this.state.imgList}
                    onChange={(currentShowIndex) => {
                        console.log(currentShowIndex);
                    }}
                    saveToLocalByLongPress={false}
                    onLongPress={(_image) => {
                        console.log(_image);
                    }}
                    onClick={() => {
                        console.log('onClick');
                        y_press_only_once_util.onPress(() => {
                            this._viewerPressHandle();
                        });
                    }}
                    onDoubleClick={() => {
                        console.log('onDoubleClick');

                    }}
                    onCancel={() => {
                        console.log('onCancel');

                    }}
                    enableImageZoom={true}
                    renderHeader={(currentShowIndex) => {
                        console.log(currentShowIndex);

                    }}
                />
            </Modal>
        );
    }
}
