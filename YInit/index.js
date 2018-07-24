/** @format */

import {AppRegistry} from 'react-native';
import App from 'src/app/setup';
import {name as appName} from './app.json';
if(!global._babelPolyfill) { require('babel-polyfill'); }
AppRegistry.registerComponent(appName, () => App);
