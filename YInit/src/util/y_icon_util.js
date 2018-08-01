/**
 * Icon显示工具类
 * y_icon_util.getIcon()
 */
import React from "react";
import MyImageComponent from "src/component/MyImageComponent";
import MySvgComponent from "src/lib/svg_uri/MySvgComponent";
import y_string_util from "src/util/y_string_util";
import zz_svg from "src/assets/svg/zz_svg";
import TYPE_ICON from "src/constant/TYPE_ICON";
import { View } from "react-native";

let y_icon_util = {
    TYPE_ICON:TYPE_ICON,

    // IMG_LOCAL_NAME:{
    //     test:'test',
    // },
    // SVG_LOCAL_NAME:{
    //     left:'left',
    // },

    /**
     * 获取图标
     *
     * @param name  名称或地址或 require  或 应用中已经设定好的图标name     TODO
     * @param style     样式
     * @param type  图标类型：IMG_NET、SVG_NET、IMG_LOCAL、SVG_LOCAL，ICONFONT，默认 SVG_LOCAL
     * @param defaultComponent  默认显示的组件
     * @returns {*}
     */
    getIcon(name = undefined, style = { width : 30, height : 30 }, type = TYPE_ICON.SVG_LOCAL, defaultComponent) {
        let vIcon = null;

        let mDefaultComponent = defaultComponent || y_icon_util.getIconDefault(style);

        if (
            (
                type === TYPE_ICON.IMG_NET
                || type === TYPE_ICON.SVG_NET
            )
            &&
            !y_icon_util.isUrl( name )
        ) {

            return mDefaultComponent;

        }

        switch (type) {
            case TYPE_ICON.ICONFONT:
                // vIcon = y_icon_util.getIconFontMy(name, undefined, [ style ]);
                break;
            case  TYPE_ICON.IMG_NET:
                vIcon = y_icon_util.getIconFromNetwork(name, style,  mDefaultComponent);
                break;
            case  TYPE_ICON.SVG_NET:
                vIcon = y_icon_util.getIconSvgFromNetwork(name, style,  mDefaultComponent);
                break;
            case  TYPE_ICON.IMG_LOCAL:
                vIcon = y_icon_util.getIconFromLocal(name, style,mDefaultComponent);
                break;
            case  TYPE_ICON.SVG_LOCAL:
                vIcon = y_icon_util.getIconSvgFromLocal(name, style,  mDefaultComponent);
                // vIcon = y_icon_util.getSvg(name, style,  mDefaultComponent);
                break;
            default:
                return mDefaultComponent;
                break;
        }
        let v = (
            <View
                style={[ style ]}
            >
                {vIcon}
            </View>
        );
        return v;
    },

    getIconDefault(style = { width : 30, height : 30, }){
        return (

            <View
                style={[ style, { backgroundColor : 'gray' } ]}

            />
        );
        return (
            <MyImageComponent
                source={require('src/assets/image/test.jpg')}
                style={{
                    width : style.width,
                    height : style.height,
                }}
            >

            </MyImageComponent>
        );
    },

    //获取本地svg
    getSvg(name = '', style = { width : 30, height : 30, },  defaultComponent) {

        let mDefaultComponent = defaultComponent || y_icon_util.getIconDefault(style);

        //判断是否有该icon
        if (!zz_svg[ name ]) {
            return mDefaultComponent;        //默认图片
        }
        if (zz_svg[ name ][ 'url' ]) {
            if (y_icon_util.isUrl(zz_svg[ name ][ 'url' ])) {
                return y_icon_util.getIconSvgFromNetwork(zz_svg[ name ].url, style,  mDefaultComponent);

            } else {
                return mDefaultComponent;
            }

        } else if (zz_svg[ name ][ 'local' ]) {
            return y_icon_util.getIconSvgFromSvgXmlData(zz_svg[ name ].local, style,  mDefaultComponent);

        } else {
            return mDefaultComponent;
        }
    },

    getIconFromLocal(source ='', style = {width : 30, height : 30,},defaultComponent) {
        let mDefaultComponent = defaultComponent || y_icon_util.getIconDefault(style);
        return (
            <MyImageComponent
                key={y_string_util.hashcode(source)}
                style={[ style ]}
                source={source}
                defaultComponent={ mDefaultComponent }
            />
        );
        // switch (type) {
        //     case y_icon_util.IMG_LOCAL_NAME.test:
        //         return (
        //             <MyImageComponent
        //                 key={y_string_util.hashcode(type)}
        //                 style={[ style ]}
        //                 source={require('src/assets/image/test.jpg')}
        //                 defaultComponent={ mDefaultComponent }
        //             />
        //         );
        //     default:
        //         return mDefaultComponent;
        //         break;
        // }
        // return null;
    },

    getIconFromNetwork(uri = '', style = {}, defaultComponent) {
        if (!uri.startsWith('https://')) {
            return y_icon_util.getIconDefault(style);
        }

        let mDefaultComponent = defaultComponent || y_icon_util.getIconDefault(style);

        return (
            <MyImageComponent
                key={y_string_util.hashcode(uri)}
                style={[ { width : 30, height : 30, }, style ]}
                source={{ uri : uri }}
                defaultComponent={ mDefaultComponent }
            />
        );
    },

    /**
     *
     * 根据本地路径生成 svg 图片
     *
     * @param source    require('src/lib/svg_uri/svg/北京银行.svg')
     * @param style
     * @param defaultComponent  默认显示的组件
     * @returns {XML}
     */
    getIconSvgFromLocal(source, style = { width : 30, height : 30, }, defaultComponent) {

        let mDefaultComponent = defaultComponent || y_icon_util.getIconDefault(style);

        return (
            <MySvgComponent
                key={y_string_util.hashcode(source)}
                style={ style }
                source={source}
                defaultComponent={ mDefaultComponent }
            />
        );
    },

    /**
     *
     * 根据 uri 生成svg图片
     *
     * //todo Android模拟器有的时候显示不出来
     * //todo IOS模拟器、真机没有发现这个问题
     *
     * @param uri   'https://www.yoopard.com/download/bft/icons/shoukuan.svg'
     * @param style
     * @param defaultComponent  默认显示的组件
     * @returns {*}
     */
    getIconSvgFromNetwork(uri = 'https://www.yoopard.com/download/bft/icons/shoukuan.svg', style = { width : 30, height : 30, }, defaultComponent) {
        if (uri.startsWith('http://') && !uri.startsWith('http://qiniu-e.yoopard.com')) {//将svg放到服务器
            return y_icon_util.getIconDefault(style);
        }

        let mDefaultComponent = defaultComponent || y_icon_util.getIconDefault(style);

        return (
            <MySvgComponent
                key={y_string_util.hashcode(uri)}
                style={ style }
                defaultComponent={ mDefaultComponent }
                source={{ uri : uri }}
            />
        );
    },

    /**
     * 根据 svgXmlData 生成svg图片
     * @param svgXmlData            svgXmlData = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
     *     "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg' +
     ' t="1526622483492" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1729" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M595.925 179.413C738.603 215.51 844.331 343.68 852.78 490.581c10.069 175.403-120.064 334.379-294.443 357.974-193.195 26.197-373.504-120.278-386.901-314.838-11.179-163.072 99.285-314.88 257.834-354.602l-0.085 186.368c0 21.589-1.067 32 22.187 32 11.904 0.042 24.021-0.683 35.84 0 21.034 1.322 17.322 18.944 17.322 35.797v77.867c-7.082-14.72-34.133-8.363-46.976-8.363h-44.8c-9.216-1.195-13.44-6.016-14.378-15.147V265.515C303.232 309.12 240.853 407.168 240.853 511.7c0 132.95 101.248 250.155 233.344 268.032V637.74c0-6.614 2.688-13.312-4.821-13.312h-35.627c-11.178 0-32.341 4.181-35.114-11.35-1.878-8.618-0.214-18.73-0.214-27.392v-80.213c-0.341 6.613 2.56 11.648 9.088 13.355 17.152 3.968 38.614 0.469 56.192 0.426 11.35-0.085 37.547-5.546 40.534 10.923 2.346 9.899 0.298 22.443 0.298 32.597v53.718c0 6.101-0.682 5.333 3.414 7.21 2.816 1.28 8.789 0.342 11.946 0.47v-68.31c0-12.202-4.522-36.693 14.507-36.693 18.347-2.56 38.912 0 57.472 0 12.245 0 34.987 4.139 34.09-14.592 0.129 23.723 0 47.445 0 71.21 0.043 7.68-3.711 27.137 0.171 33.665 9.6 23.978-64.597 11.818-72.832 14.933-4.906 1.92-2.261-1.11-3.925 4.907-0.725 2.645 0 6.954 0 9.685v140.8c132.139-17.92 233.387-135.125 233.387-268.075 0-104.362-61.952-202.24-156.758-246.186v194.474c0 3.67-2.389 25.259 0.086 27.094 0 7.253-3.627 13.866-11.264 15.445-18.518 3.584-40.875 0.256-59.819 0.256-11.179 0-29.056-4.181-35.115 8.363v-68.523c0-11.179-6.058-39.253 8.875-44.075 14.208-4.48 63.488 8.96 66.347-11.776 4.522-32.298 0.298-68.266 0.426-100.864l0.384-106.496zM487.893 382.037a14.379 14.379 0 0 1-13.525-11.818c-2.39-23.424-0.17-48.128-0.17-71.68V196.693c0-3.413-1.025-24.32 1.194-24.32h73.77c2.177 0 1.195 43.307 1.195 48.768v128c0 4.736 1.792 14.123 0 18.432 0 2.603-1.194 6.4-2.688 8.534-3.626 7.338-15.829 5.93-22.186 5.93h-37.59z" fill="#148F79" p-id="1730"></path></svg>';
     * @param style
     * @param defaultComponent  默认显示的组件
     * @returns {*}
     */
    getIconSvgFromSvgXmlData(svgXmlData = undefined, style = { width : 30, height : 30, }, defaultComponent) {
        if (!svgXmlData) {
            return y_icon_util.getIconDefault(style);
        }

        let mDefaultComponent = defaultComponent || y_icon_util.getIconDefault(style);

        return (
            <MySvgComponent
                key={y_string_util.hashcode(svgXmlData)}
                style={ style }
                svgXmlData={svgXmlData}
                defaultComponent={ mDefaultComponent }
            />
        );
    },

    isUrl : (name = '') => {
        if (
            (
                !name.startsWith('http://')
            )
            &&
            (
                !name.startsWith('https://')
            )
        ) {

            return false;

        }
        return true;
    },
};

export default y_icon_util;