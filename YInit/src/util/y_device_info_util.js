/**
 * Created by nick on 2017/4/20.
 */
import DeviceInfo from "react-native-device-info";

/**
 * 设备信息工具类
 *
 *
 * 常用
 import y_device_info_util from "./util/y_device_info_util";
 y_device_info_util.getUniqueID();
 y_device_info_util.getApplicationName();
 y_device_info_util.getBuildNumber();
 y_device_info_util.getBundleId();
 *
 * @type {{getUniqueID: (()), getApplicationName: (()), getBrand: (()), getBuildNumber: (()), getBundleId: (()), getFreeDiskStorage: (()), getReadableVersion: (()), getVersion:
 *     (()), getSystemVersion: (()), getSystemName: (()), test: (())}}
 */
const y_device_info_util = {

    /**
     * 获取设备唯一ID
     * Gets the device unique ID.
     *
     *

     iOS: This is IDFV so it will change if all apps from the current apps vendor have been previously uninstalled.
     android: Prior to Oreo, this id (ANDROID_ID) will always be the same once you set up your phone.


     *
     // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
     // Android: "dd96dec43fb81c97"
     * @returns {string}
     */
    getUniqueID : () => {
        return DeviceInfo.getUniqueID();
    },

    /**
     *
     * 获取应用名称
     *
     // "Learnium Mobile"
     * @returns {string}
     */
    getApplicationName : () => {
        return DeviceInfo.getApplicationName();
    },

    /**
     *
     * 获取应用 BuildNumber
     *
     // iOS: 89
     // Android: 4
     * @returns {number}
     */
    getBuildNumber : () => {

        const buildNumber = DeviceInfo.getBuildNumber();
        return buildNumber;
    },

    /**
     *
     * 获取应用 BundleId
     *
     // "com.learnium.mobile"
     * @returns {string}
     */
    getBundleId : () => {

        return DeviceInfo.getBundleId();
    },

    /**
     *
     * 获取手机品牌
     *
     // iOS: "Apple"
     // Android: "Xiaomi"
     * @returns {string}
     */
    getBrand : () => {
        return DeviceInfo.getBrand();
    },

    /**
     * Gets available storage size, in bytes.
     *
     // Android: 17179869184
     // iOS: 17179869184
     * @returns {number}
     */
    getFreeDiskStorage : () => {

        return DeviceInfo.getFreeDiskStorage();
    },

    /**
     *
     * Gets the application human readable version.
     *
     // iOS: "1.0.1"
     // Android: "1.0.1"
     * @returns {string}
     */
    getReadableVersion : () => {

        const readableVersion = DeviceInfo.getReadableVersion();
        return '' + readableVersion;
    },

    /**
     *
     * Gets the application version.
     *
     // iOS: "1.0"
     // Android: "1.0"
     * @returns {string}
     */
    getVersion : () => {

        const version = DeviceInfo.getVersion();
        return '' + version;
    },

    /**
     *
     * Gets the device OS version.
     *
     // iOS: "11.0"
     // Android: "7.1.1"
     * @returns {string}
     */
    getSystemVersion : () => {

        const systemVersion = DeviceInfo.getSystemVersion();
        return '' + systemVersion;
    },

    /**
     *
     * Gets the device OS name.
     *
     // iOS: "iOS"
     // Android: "Android"
     * @returns {string}
     */
    getSystemName : () => {

        return DeviceInfo.getSystemName();
    },

    test : () => {

        let str = '';
        str += '\ngetUniqueID:' + y_device_info_util.getUniqueID();
        str += '\ngetApplicationName:' + y_device_info_util.getApplicationName();
        str += '\ngetBuildNumber:' + y_device_info_util.getBuildNumber();
        str += '\ngetBundleId:' + y_device_info_util.getBundleId();

        str += '\ngetBrand:' + y_device_info_util.getBrand();
        str += '\ngetFreeDiskStorage:' + y_device_info_util.getFreeDiskStorage();
        str += '\ngetReadableVersion:' + y_device_info_util.getReadableVersion();
        str += '\ngetVersion:' + y_device_info_util.getVersion();
        str += '\ngetSystemVersion:' + y_device_info_util.getSystemVersion();
        str += '\ngetSystemName:' + y_device_info_util.getSystemName();

        /**
         *
         *
         y_device_info_util
         getUniqueID:d0862af231851d37   //todo im
         getApplicationName:豹富Debug     //todo im
         getBrand:OPPO
         getBuildNumber:1   //todo im
         getBundleId:com.yoopard.rich.adebug    //todo im
         getFreeDiskStorage:621236224
         getReadableVersion:1.0-debug.1
         getVersion:1.0-debug
         getSystemVersion:5.1
         getSystemName:Android


         y_device_info_util
         getUniqueID:BDFEF5E6-8173-43DB-9CB6-062C28A36A81   //todo im
         getApplicationName:豹富  //todo im
         getBrand:Apple
         getBuildNumber:1   //todo im
         getBundleId:com.yoopard.productbind    //todo im
         getFreeDiskStorage:180291072000
         getReadableVersion:1.0.1
         getVersion:1.0
         getSystemVersion:11.2
         getSystemName:iOS

         */
        console.log('y_device_info_util', str);
        return str;

    },

};

export default y_device_info_util;