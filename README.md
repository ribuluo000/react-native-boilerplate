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


```
### need link :
```
yarn add ribuluo000/react-native-orientation 
react-native link react-native-orientation 

yarn add react-native-i18n
react-native link react-native-i18n

yarn add react-native-fast-image
react-native link react-native-fast-image


```
### 以下依赖，如果有必要，请自行添加
```
yarn add react-native-splash-screen 
react-native link react-native-splash-screen 




```
### need config
```
yarn add react-native-fast-image
react-native link react-native-fast-image

yarn add react-native-image-progress react-native-progress




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
[https://github.com/ribuluo000/react-native-boilerplate/blob/master/YInit/src/app/store.js
](https://github.com/ribuluo000/react-native-boilerplate/blob/master/YInit/src/app/store.js
)

[https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
](https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
)


