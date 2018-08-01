import y_string_util from "./y_string_util";

/**
 * 全局临时数据存放工具类
 * + 常用数据处理方法
 */
let y_tmp_data_util = {

    m_ref_LoadingComponent : undefined, //全局loading
    m_net_is_connected : false, //是否联网  true,false
    m_net_is_wifi : false,      //是否是WiFi连接   true,false
    m_app_state : false,    //应用状态  active,background,inactive
    memory_warnings : 0,
    is_request_location : false,
    cur_latitude : '',
    cur_longitude : '',
    cur_address : '',
    cur_GPS_time : '',    //最近一次获取到GPS的时间

    get_data_list : (arr) => {
        
        arr.map((item,i)=>{
            let key = '' + y_string_util.hashcode(item);
            item.key = key;
        });
        
        return arr;
    },


    /**
     * Picker antd 根据选中的值找到选中项的内容
     * @param selectedValue     选中的值
     * @param selectableData    所有可以被选中的值的集合
     */
    getSelectedObject(selectedValue, selectableData){
        let curSelected = null;

        for (let i = 0;
            i < selectableData[ 0 ].length;
            i++) {
            if (selectedValue[ 0 ] == selectableData[ 0 ][ i ].value) {
                curSelected = selectableData[ 0 ][ i ];
                break;
            }
        }

        return curSelected;
    },

    /**
     *
     * 根据selectedValue找到数组children中的被选中的项
     *
     * @param selectedValue     'value'
     * @param selectableData    [{label:'',value:''},]
     * @returns {*}
     */
    getSelectedObjectFromArray(selectedValue, selectableData){
        let curSelected = null;

        for (let i = 0;
            i < selectableData.length;
            i++) {
            if (selectedValue == selectableData[ i ].value) {
                curSelected = selectableData[ i ];
                break;
            }
        }

        return curSelected;
    },

    /**
     * 给dataList中的item添加key字段。
     * @param dataList
     */
    getFlatListDataList(dataList = [], uniqueFiledName = undefined){
        let newDataList = [];
        dataList.map((item) => {
            let newItem = {
                ...item,
                key : uniqueFiledName ? item[ uniqueFiledName ] : y_string_util.hashcode(item),
            };
            newDataList.push(newItem);
        });

        return newDataList;
    },



    get_qr_code_info_gn : (qr_code_url) => {
        let gn = '';
        if (
            !(qr_code_url.indexOf('http://') >= 0
            && qr_code_url.indexOf('gn=') >= 0)
        ) {

            return qr_code_url;
        }

        let arr1 = qr_code_url.split('?');
        let arr2 = arr1[ 1 ].split('&');
        arr2.map((item) => {
            if (item.indexOf('gn=') == 0) {
                gn = item.substring(3);
                return gn;
            }
        });

        return gn;
    },

};

export default y_tmp_data_util;