/**
 * Created by nick on 2018/7/22.
 */

/**
 * immutable key
 * jsonObj
 * reducer
 */

const key_immutable = {
    // immutable key
    "KEY_is_logged_in" : "is_logged_in",
    "KEY_count" : "count",
    "KEY_code" : "code",
    "KEY_msg" : "msg",
    "KEY_data" : "data",
    "KEY_access_token" : "access_token",
};


/**
 * 页面对应的KEY
 * reducer
 * saga
 * selector
 *
 * KEY
 */
export default {
    ...key_immutable,
    "KEY" : "KEY",
    "KEY_NAV" : "KEY_NAV",
    "KEY_AUTH" : "KEY_AUTH",
    "KEY_COUNTER" : "KEY_COUNTER",
    "KEY_WEB_VIEW" : "KEY_WEB_VIEW",


};