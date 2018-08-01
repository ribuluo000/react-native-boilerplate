/**
 * 防止用户快速重复点击按钮工具类
 use:
 import y_press_only_once_util from "src/util/y_press_only_once_util";


 <XXX
 onPress={() => {
            y_press_only_once_util.onPress(() => {
                this.onBackPress();
            });
        }}
 >
 </XXX>

 * @type {{lastPressTime: number, onPress: ((callback))}}
 */

const y_press_only_once_util = {

    interval : 600,
    lastPressTime : 1,
    onPress : (callback) => {
        let curTime = new Date().getTime();
        console.log('onPress',curTime,y_press_only_once_util.lastPressTime,y_press_only_once_util.interval);

        if (curTime - y_press_only_once_util.lastPressTime > y_press_only_once_util.interval) {
            y_press_only_once_util.lastPressTime = curTime;
            callback && callback();
        }
    },

};

export default y_press_only_once_util;
