/**
 * Created by nick on 2018/7/1.
 */
import { fromJS,Map,List,Set, } from "immutable";
import Storage from "react-native-storage";
import { Alert, AsyncStorage, Platform } from "react-native";

import y_tmp_data_util from './y_tmp_data_util';
// import my_string_util from './my_string_util';
// import my_constant_util from './my_constant_util';
// import style_util from './style_util';
// import y_view_util from './y_view_util';
// import api_util from "../api/api_util";
// import { options_common, request } from "src/util/request";

export default {
  init:()=>{

    global.IfromJS = fromJS;
    global.IMap = Map;
    global.IList = List;
    global.ISet = Set;


    //todo storage

      let storage = new Storage({
          // 最大容量，默认值1000条数据循环存储
          size : 1000,

          // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
          // 如果不指定则数据只会保存在内存中，重启后即丢失
          storageBackend : AsyncStorage,

          // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
          defaultExpires : null,

          // 读写时在内存中缓存数据。默认启用。
          enableCache : true,

          // 如果storage中没有相应数据，或数据已过期，
          // 则会调用相应的sync方法，无缝返回最新数据。
          // sync方法的具体说明会在后文提到
          // 你可以在构造函数这里就写好sync的方法
          // 或是写到另一个文件里，这里require引入
          // 或是在任何时候，直接对storage.sync进行赋值修改
          sync : () => {
          }  // 这个sync文件是要你自己写的
      });

      // 最好在全局范围内创建一个（且只有一个）storage实例，方便直接调用

      // 对于web
      // window.storage = storage;

      // 对于react native
      global.storage = storage;

      global.y_tmp_data_util = y_tmp_data_util;


    //
    // global.my_string_util = my_string_util;
    // global.style_util = style_util;
    // global.y_view_util = y_view_util;
    // global.my_constant_util = my_constant_util;
    // global.REQ_URL = my_constant_util.REQ_URL;
    // global.CONFIG = my_constant_util.CONFIG;
    // global.PATH = my_constant_util.PATH;
    // global.PARAM = my_constant_util.PARAM;
    // global.PERMISSION = my_constant_util.PERMISSION;
    // global.TYPE = my_constant_util.TYPE;
    // global.CODE = my_constant_util.CODE;
    // global.MSG = my_constant_util.MSG;
    //
    // global.api_util = api_util;
    // global.request = request;
    // global.options_common = options_common;
    //
    // global.push = push;
    // global.goBack = goBack;
    //
    //
    //
    // global.access_token = '';
    // global.user_id = '';
  },

    init_data:(callback)=>{
      callback(true);
    },
};
