/**
 * 全局唯一的Loading显示隐藏工具类。
 * use:

 导入：import y_loading_util from "./y_loading_util";

 显示：y_loading_util.showLoading(timeOut);
 隐藏：y_loading_util.dismissLoading();

 */


let y_loading_util = {
    show_loading(timeOut = 10000){
        global.y_tmp_data_util.m_ref_LoadingComponent && global.y_tmp_data_util.m_ref_LoadingComponent.showLoading();
        this.timerLoading = setTimeout(() => {
            this.dismissLoading();
        }, timeOut);

    },
    dismiss_loading(){
        global.y_tmp_data_util.m_ref_LoadingComponent && global.y_tmp_data_util.m_ref_LoadingComponent.dismissLoading();
        this.timerLoading && clearTimeout(this.timerLoading);

    },
};

export default y_loading_util;