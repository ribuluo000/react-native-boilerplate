/**
 * Created by nick on 2017/4/20.
 * 字符串操作工具类
 */
import y_verification from './y_verification';
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

    /**
     *
     * @param base_url  https://api.xxx.com
     * @param params    {"k1":"v1","k2":"v2",}
     * @returns {*} https://api.xxx.com?k1=v1&k2=v2
     */
    get_url_by_base_url_and_params : (base_url, params) => {
        let result = base_url;
        if (result.substr(result.length - 1) != '?') {
            result = result + `?`;
        }

        for (let key in
            params) {
            let value = params[ key ];
            result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
        }

        result = result.substring(0, result.length - 1);
        return result;
    },
    uuid : (len = 8, radix = 16) => {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        let uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0;
                i < len;
                i++) {
                uuid[ i ] = chars[ 0 | Math.random() * radix ];
            }
        } else {
            // rfc4122, version 4 form
            let r;

            // rfc4122 requires these characters
            uuid[ 8 ] = uuid[ 13 ] = uuid[ 18 ] = uuid[ 23 ] = '-';
            uuid[ 14 ] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0;
                i < 36;
                i++) {
                if (!uuid[ i ]) {
                    r = 0 | Math.random() * 16;
                    uuid[ i ] = chars[ (i == 19) ? (r & 0x3) | 0x8 : r ];
                }
            }
        }

        return uuid.join('');
    },

    /**
     * 获取字符串或对象的hashcode
     * @param item
     * @returns {number}
     */
    hashcode : (item) => {
        let str = '';
        if (typeof(item) == 'string') {
            str = item;
        } else if (typeof(item) == 'object') {
            str = JSON.stringify(item);
        }
        let hash = 0, i, chr, len;
        if (str.length === 0) {
            return hash;
        }
        for (i = 0, len = str.length;
            i < len;
            i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    },

    /**
     * 返回符合要求的值
     * @param value     要被判断的数字
     * @param num   保留小数位数
     */
    validationNumber : (value, num) => {
        let regu = /^[0-9]+\.?[0-9]*$/;
        if (value != "") {
            if (!regu.test(value)) {
                // alert("请输入正确的数字");
                value = value.substring(0, value.length - 1);
            } else {
                if (num == 0) {
                    if (value.indexOf('.') > -1) {
                        value = value.substring(0, value.length - 1);
                    }
                }
                if (value.indexOf('.') > -1) {
                    if (value.split('.')[ 1 ].length > num) {
                        value = value.substring(0, value.length - 1);
                    }
                }

            }
            return value;
        }

    },

    y_verification,
};

export default y_string_util;