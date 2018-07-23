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

export default {

    interval : 600,
    lastPressTime : 1,
    onPress : (callback) => {
        let curTime = new Date().getTime();
        if (curTime - this.lastPressTime > this.interval) {
            this.lastPressTime = curTime;
            callback && callback();
        }
    },

};