/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
import "whatwg-fetch";
import TYPE_KEY from "src/constant/TYPE_KEY";
import y_i18n_util from "./y_i18n_util";

function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request_o(url, options) {
    if (!y_tmp_data_util.m_net_is_connected) {
        return { [TYPE_KEY.KEY_code] : 99999, [TYPE_KEY.KEY_msg] : y_i18n_util.t('please_check_network_state'), };
    }
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON);
}

export function request(url, options) {
    if (!y_tmp_data_util.m_net_is_connected) {
        return { [TYPE_KEY.KEY_code] : 99999, [TYPE_KEY.KEY_msg] : y_i18n_util.t('please_check_network_state'), };
    }
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        ;
}

export function options_common(data = {}) {
    return {
        method : 'POST',
        mode : "cors",
        headers : {
            'Accept' : 'application/json',
            //json形式
            'Content-Type' : 'application/json'
        },
        credentials : 'include',
        body : JSON.stringify(data),
    }
}

/**
 * 主要用于文件、图片上传
 *
 * eg:

 type:
 type_multipart_form_data : 'multipart/form-data',   //文件type
 type_application_octet_stream : 'application/octet-stream',   //文件type


 let file = { uri : image_url, type : 'multipart/form-data', name : fileName };   //这里的key(uri和type和name)不能改变,
 body.append('file', file);


 *
 *
 * @param data
 * @returns {{method: string, mode: string, headers: {Accept: string, Content-Type: string}, credentials: string, body: *}}
 */
export function options_common_form(data = {}) {

    let body = new FormData();
    for(let k in data){
        body.append(k,data[k]);
    }

    return {
        method : 'POST',
        mode : "cors",
        headers : {
            'Accept' : 'application/json',
            //json形式
            'Content-Type' : 'multipart/form-data'
        },
        credentials : 'include',
        body : body,
    }
}

export function on_catch_common(err = {}) {
    console.log('on_catch_common', err);
    // view_util.show_toast(err.toString());

}

export function on_custom_exception_common(jsonObj = IMap({})) {
    console.log('on_custom_exception_common', jsonObj);
    const code = jsonObj.get(TYPE_KEY.KEY_code);
    const msg = jsonObj.get(TYPE_KEY.KEY_msg);

    // view_util.show_toast(msg);
}

export function on_success_common(jsonObj = IMap({})) {
    console.log('on_success_common', jsonObj);
    const code = jsonObj.get(TYPE_KEY.KEY_code);
    const msg = jsonObj.get(TYPE_KEY.KEY_msg);

    // view_util.show_toast(msg);
}


export function get_common_bodyObj() {
    return {
        cur_time:new Date().getTime(),
        access_token,
        user_id,
        from,
        device_unique_id,
        device_brand,
        app_build_number,
        device_OS,
        device_system_version,
    };
}


