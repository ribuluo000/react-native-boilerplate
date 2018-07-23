# react-native-boilerplate
react-native-boilerplate 



yarn add redux react-redux redux-thunk remote-redux-devtools react-navigation-redux-helpers redux-logger redux-saga redux-immutable reselect immutable react-navigation

yarn add redux-devtools -D
yarn add babel-plugin-module-resolver -D
yarn add prop-types

yarn add invariant hoist-non-react-statics lodash whatwg-fetch



note:

remote-redux-devtools@^0.5.12 doesn't work with latest RN 0.56 release

解决方案：
https://github.com/zalmoxisus/remote-redux-devtools/issues/117

```
Temporarily you can

    Run yarn remove remote-redux-devtools;yarn add remote-redux-devtools-sp
    and

    Change:
    import devTools from 'remote-redux-devtools';
    to
    import devTools from 'remote-redux-devtools-sp';

```

