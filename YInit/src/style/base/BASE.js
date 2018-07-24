import COLOR from "./COLOR";
import { PixelRatio } from "react-native";
const transparentColor = 'transparent';

const BASE = {
    ...COLOR,

    //字体大小
    fontSize : {
        XXL : 22,
        XL : 18,
        L : 16,
        M : 14,
        S : 12,
        XS : 10,
        XXS : 8,
    },

    //间距大小
    size : {

        XXL : 30,
        XL : 26,
        L : 20,
        M : 16,
        S : 10,
        XS : 8,
        XXS : 5,
        v3 : 3,
        v0 : 0,
    },

    //边框大小
    borderWidth : {
        XXL : 20,
        XL : 16,
        L : 8,
        M : 4,
        S : 2,
        XS : 1,
        XXS : 1 / PixelRatio.get(),
        v0 : 0,
    },

    //边框圆角
    borderRadius : {
        XXL : 20000,
        XL : 16,
        L : 8,
        M : 6,
        S : 4,
        XS : 3,
        XXS : 2,
        v0 : 0,
    },

    //边框色
    borderColor : {
        gray : COLOR.grey.color6,    //灰
        Green : COLOR.green.color6,    //绿
    },

    // 字体色
    textColor : {
        black : COLOR.grey.color10,    //黑
        gray : COLOR.grey.color7,      //灰
        white : COLOR.grey.color1,     //白
        orange : COLOR.orange.color6,     //橙
        blue : COLOR.blue.color7,     //蓝
        yellow : COLOR.yellow.color6,     //黄
    },

    // 背景色
    backgroundColor : {
        gray : COLOR.grey.color4, //灰
        white : COLOR.grey.color1, //白
        black : COLOR.grey.color9, //黑
        Green : COLOR.green.color6, //绿
        orange : COLOR.orange.color6, //橙
        blue : COLOR.blue.color5, //蓝
        red : COLOR.red.color5, //红
        yellow : COLOR.yellow.color1, //黄
        transparent : transparentColor,
        container : COLOR.grey.color4,
    },

    //间距大小
    iconSize : {

        XXL : {width:187,height:187,padding:4},
        XL : {width:124,height:124,padding:4},
        L : {width:93,height:93,padding:4},
        M : {width:48,height:48,padding:4},
        S : {width:32,height:32,padding:4},
        XS : {width:24,height:24,padding:4},
        XXS : {width:20,height:20,padding:4},
    },

    /***********天火*********/
    //按钮大小
    btnHeight : {
        XXL : 50,
        XL : 46,
        L : 40,
        M : 36,
        S : 30,
        XS : 26,
        XXS : 22,
    },

    /***********天火结束*********/

};

export default BASE;