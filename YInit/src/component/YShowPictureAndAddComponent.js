import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View } from "react-native";
import y_image_picker_util from "src/util/y_image_picker_util";
import y_press_only_once_util from "src/util/y_press_only_once_util";
import y_string_util from "src/util/y_string_util";
import y_view_util from "src/util/y_view_util";
import T from "src/style/T";
import y_icon_util from "../util/y_icon_util";

export default class YShowPictureAndAddComponent extends Component {

    static propTypes = {
        editable : PropTypes.bool, //
        only_can_use_camera : PropTypes.bool, //
        img_list : PropTypes.array, //
        add_img : PropTypes.func, //
        onPress_remove_img : PropTypes.func, //
        show_img_swiper : PropTypes.func, //

    };

    static defaultProps = {
        editable : false,
        only_can_use_camera : false,
        img_list : [],
        add_img : () => {
        },
        onPress_remove_img : (img_list,index_selected) => {
        },
        show_img_swiper : (img_list,index_selected) => {
        },
    };

    constructor(props) {
        super(props);
        this.state = {
        };
        this.thumbPressHandle = this.thumbPressHandle.bind(this);
    }

    imagePickerCallback(response) {
        if (!response.uri) {
            return;
        }
        //todo 调用props.func 回传数据;
        this.props.add_img();



    }

    imagePickerCallbackBase64Data(response) {
        if (!response.data) {
            return;
        }
        //todo 调用props.func 回传数据；

    }

    thumbAddPressHandle() {
        y_view_util.dismiss_keyboard();

        y_image_picker_util.selectPhotoTapped((response) => {
            console.log('imagePickerCallback',response);

            if (this.props.only_can_use_camera) {
                this.imagePickerCallbackBase64Data(response);
            } else {
                this.imagePickerCallback(response);
            }

        }, this.props.only_can_use_camera);

    }

    thumbPressHandle(i) {
        //todo 跳转到图片浏览页面
        this.props.show_img_swiper(this.props.img_list,i);


        // let _img_list = null;
        // _img_list = this.props.img_list;
        // Actions.ShowPhotoSwiper({
        //     _img_list : _img_list,
        //     _showIndex : i
        // });
    }

    thumbLongPressHandle(i) {
        //todo 在可以编辑的状态下，提示是否删除该图片，如果用户确认删除，则删除；
        this.props.onPress_remove_img(this.props.img_list,i);

        // if (this.props.editable) {
        //
        //     let options = {
        //         title : ConstantUtil.strings.titleTiShi,
        //         message : ConstantUtil.strings.descriptionDeleteImg,
        //         cancelTitle : ConstantUtil.strings.cancel,
        //         confirmTitle : ConstantUtil.strings.ok,
        //     };
        //     let confirmedCallback = () => {
        //         this.props.onPress_remove_img(i);
        //     };
        //     let canceledCallback = () => {
        //     };
        //     MyDialog._showAlert(options, confirmedCallback, canceledCallback);
        //
        // }
    }

    //todo change due to android is not good.
    render() {
        const {img_list} = this.props;
        return (
            <View>

                <View style={[ T.CS.flexDirectionRow,T.CS.flexWrapWrap,{left:0,right:0} ]}>
                    {
                        img_list.map((item, i) =>
                            <TouchableOpacity
                                key={'img_list_' + y_string_util.hashcode(item)}
                                onPress={e => {
                                    y_press_only_once_util.onPress(() => {
                                        this.thumbPressHandle(i);

                                    });
                                }
                                }
                                onLongPress={e => {
                                    y_press_only_once_util.onPress(() => {
                                        this.thumbLongPressHandle(i);

                                    });
                                }
                                }
                            >
                                {y_icon_util.getIcon(item.image_url,T.CS.iconSizeXL,y_icon_util.TYPE_ICON.IMG_NET)}
                            </TouchableOpacity>)
                    }
                    {
                        this.props.editable
                            ? <TouchableOpacity key={'add'}
                                                onPress={e => {
                                                    y_press_only_once_util.onPress((e) => {
                                                        this.thumbAddPressHandle(e);
                                                    });
                                                }}>
                            <View
                                style={[
                                    T.CS.iconSizeXL,
                                ]}
                            >
                                {y_icon_util.getIcon(require('src/assets/svg/left.svg'),T.CS.iconSizeXL,y_icon_util.TYPE_ICON.SVG_LOCAL)}

                            </View>
                        </TouchableOpacity>
                            : null
                    }

                </View>

            </View>
        );
    }
}
