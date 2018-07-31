'use strict';
/**
 * AsyncStorage 存取数据工具类
 */

import React from "react";
import y_view_util from "./y_view_util";

export async function get_value_by_key(key,
    callback = () => {
    },
    callback_error = (key) => {
        console.log(key + ' not found!');
    }) {
    try {
        let ret = await storage.load({
            key : key,
        });
        if (callback) {
            callback(ret);

        }
        return ret;
    } catch (e) {
        callback_error(key);
    }
}

export async function set_key_value(key, value) {
    try {
        storage.save({ key : key, data : value });
    } catch (e) {
        console.log(e);
        y_view_util.show_toast(key + ':' + value + ' save error!');
    }
}
