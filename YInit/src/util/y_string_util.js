/**
 * Created by nick on 2017/4/20.
 * 字符串操作工具类
 */
let y_string_util = {
    object_is_available(object){
        if ('undefind' == object || null == object) {
            return false;
        }
        return true;
    },

    string_is_available(object){
        if ('undefind' == object || null == object || '' == object || '-1' == object) {
            return false;
        }
        return true;
    },


    object_2_json(object){
        return JSON.stringify(object);
    },

    trim(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    validate_email(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    cut_last_one_char(str){
        let _str = str;
        if (str.length > 0) {
            _str = str.substring(0, str.length - 1);
        }
        return _str;
    },

    get_last_two_char(str){
        let _str = str;
        if (str.length > 0) {
            _str = str.substring(str.length - 2, str.length);
        }
        return _str;
    },

};

export default y_string_util;