# react-native-boilerplate
### react-native-boilerplate 

https://github.com/ribuluo000/react-native-boilerplate
后续RN项目可以基于这个项目进行开发，这个项目目前还在开发阶段，会集成一些基础库，
目前已经集成：
详见package.json


### 项目简述

[大项目下的 module 管理 使用绝对路径 import module 避免相对路径 babel-plugin-module-resolver https://github.com/tleunen/babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

[redux https://redux.js.org/](https://redux.js.org/)

[redux-saga https://redux-saga.js.org/](https://redux-saga.js.org/)

[reselect https://github.com/reduxjs/reselect](https://github.com/reduxjs/reselect)

[immutable https://facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)

[redux-immutable https://github.com/gajus/redux-immutable](https://github.com/gajus/redux-immutable)

[moment https://github.com/moment/moment](https://github.com/moment/moment)

[react-native-i18n 国际化 https://github.com/AlexanderZaytsev/react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n)

[react-navigation https://github.com/react-navigation/react-navigation](https://github.com/react-navigation/react-navigation)

[react-navigation-redux-helpers https://github.com/react-navigation/react-navigation-redux-helpers](https://github.com/react-navigation/react-navigation-redux-helpers)

[remote-redux-devtools-sp https://www.npmjs.com/package/remote-redux-devtools-sp](https://www.npmjs.com/package/remote-redux-devtools-sp)

[]()
[]()
[]()
[]()
[]()
[]()




image

[react-native-fast-image https://github.com/DylanVann/react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)

[react-native-image-progress https://github.com/oblador/react-native-image-progress](https://github.com/oblador/react-native-image-progress)

[react-native-progress https://github.com/oblador/react-native-progress](https://github.com/oblador/react-native-progress)




---

### no need link
```



yarn add redux react-redux redux-thunk remote-redux-devtools react-navigation-redux-helpers redux-logger redux-saga redux-immutable reselect immutable react-navigation

yarn add redux-devtools -D
yarn add babel-plugin-module-resolver -D

yarn add invariant hoist-non-react-statics lodash whatwg-fetch

yarn add remote-redux-devtools-sp
yarn add babel-polyfill moment prop-types
yarn add react-native-qrcode


```
### need link :
```
yarn add react-native-orientation 
react-native link react-native-orientation 

yarn add react-native-i18n
react-native link react-native-i18n

yarn add react-native-fast-image
react-native link react-native-fast-image


yarn add react-native-svg
react-native link react-native-svg



yarn add react-native-device-info
react-native link react-native-device-info


```
### 以下依赖，如果有必要，请自行添加
```





```
### need config
```
yarn add react-native-fast-image
react-native link react-native-fast-image

yarn add react-native-image-progress react-native-progress


yarn add react-native-splash-screen 
react-native link react-native-splash-screen 

yarn add react-native-camera 
react-native link react-native-camera 
-
拍照可以；
Android扫码不好用；
IOS扫码没有测试；
-


```


## note:

### remote-redux-devtools@^0.5.12 doesn't work with latest RN 0.56 release

解决方案：

[https://github.com/zalmoxisus/remote-redux-devtools/issues/117](https://github.com/zalmoxisus/remote-redux-devtools/issues/117)


```
Temporarily you can

    Run yarn remove remote-redux-devtools;yarn add remote-redux-devtools-sp
    and

    Change:
    import devTools from 'remote-redux-devtools';
    to
    import devTools from 'remote-redux-devtools-sp';

```


### Can't find variable: Reflect

解决方案：

[https://github.com/feathersjs/socketio/issues/31](https://github.com/feathersjs/socketio/issues/31)


```
Try installing babel-polyfill and then in your main application file adding

if(!global._babelPolyfill) { require('babel-polyfill'); }

```


### Redux DevTools Integration


参考：
[react-native https://github.com/ribuluo000/react-native-boilerplate/blob/master/YInit/src/app/store.js
](https://github.com/ribuluo000/react-native-boilerplate/blob/master/YInit/src/app/store.js
)

[react https://github.com/ribuluo000/react_inventory/blob/master/inventory/app/configureStore.js](https://github.com/ribuluo000/react_inventory/blob/master/inventory/app/configureStore.js)

[https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
](https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
)


### Package not compatible with React Native 0.56 (Android) 

参考：
[https://github.com/react-native-community/react-native-svg/issues/730](https://github.com/react-native-community/react-native-svg/issues/730)



### [Android] configuration 'compile' is obsolete and has been replaced with 'implementation'.

change *compile* to  *implementation*



###全局统一

```
全局loading 
y_view_util.show_toast_loading()
y_view_util.dismiss_toast_loading()
；
全局toast 
y_view_util.show_toast('msg')
；

应用内显示的数据通过
y_i18n_util.t(‘key’)
获取；

判断设备是否联网、是否WiFi连接：
    m_net_is_connected : false, //是否联网  true,false
    m_net_is_wifi : false,      //是否是WiFi连接   true,false
；

存取本地数据：
y_storage_util.get_value_by_key(key,callback);
y_storage_util.set_key_value(key,value);
;

根据数据获取唯一字符串:
//item 是string 或者 object
y_string_util.hashcode(item)
;

清除字符串首尾的空格:
//item 是string
y_string_util.trim(item)
;

    /**
     * 对象转json
     * @param object 对象
     * @returns {string} 转换后的json字符串
     */
y_string_util.object_2_json(object)
;

    /**
     * 判断对象或字符串是否可用
     * @param object 对象
     * @returns {bool} 对象或字符串是否可用
     */
y_string_util.is_string_available(object)
;

根据数据获取唯一字符串:
    /**
     *
     * @param base_url  https://api.xxx.com
     * @param params    {"k1":"v1","k2":"v2",}
     * @returns {*} https://api.xxx.com?k1=v1&k2=v2
     */
y_string_util.get_url_by_base_url_and_params(base_url, params)
;



所有图片通过以下方式展示
                    {y_icon_util.getIcon(img_url,{width:30,height:30,backgroundColor:'red'},y_icon_util.TYPE_ICON.IMG_NET)}
                    {y_icon_util.getIcon(require('src/assets/image/test.jpg'),{width:30,height:30},y_icon_util.TYPE_ICON.IMG_LOCAL)}
                    {y_icon_util.getIcon(svg_url,{width:30,height:30,backgroundColor:'red'},y_icon_util.TYPE_ICON.SVG_NET)}
                    {y_icon_util.getIcon(require('src/assets/svg/left.svg'),{width:30,height:30},y_icon_util.TYPE_ICON.SVG_LOCAL)}



只在开发模式下console.log，生产模式没有console.log;

切换到其他应用：
导航、打电话等
y_turn_2_other_app_util
；


展示WebView 页面：
    onPress : () => dispatch({ type : TYPE_ACTION.ShowWebViewContainer,payload:{
        uri : 'https://www.baidu.com',
        header_title : 'https://www.baidu.com',
    } }),

通用header
YHeaderNormalWithRightButtonComponent
自带返回键默认处理，可以重写
；


```
