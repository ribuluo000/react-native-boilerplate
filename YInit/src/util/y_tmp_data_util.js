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